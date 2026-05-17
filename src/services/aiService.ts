import { GitaVerse } from '../data/gitaVerses';
import { getCrisisResponse, RiskLevel } from './safetyService';

export type ReflectiveAIResponse = {
  emotion: string;
  riskLevel: RiskLevel;
  pausePrompt: string;
  answer: string;
  verses: GitaVerse[];
  forwardMirror: {
    impulsivePath: string;
    reflectivePath: string;
    suggestedAction: string;
  };
};

export type GenerateOptions = {
  message: string;
  category?: string | null;
  emotion?: string | null;
  riskLevel?: RiskLevel | null;
  verses?: GitaVerse[];
  apiKey?: string | null; // optional OpenAI-style API key
};

const DEFAULT_PAUSE_PROMPT = 'Take 5 seconds. What outcome do you truly want from this situation?';

function templateFallback(opts: GenerateOptions): ReflectiveAIResponse {
  const verses = opts.verses ?? [];
  const verseLines = verses.slice(0, 3).map((v) => `${v.chapter}:${v.verse} — ${v.translation}`);

  const answerLines = [] as string[];
  answerLines.push("Start by taking a slow breath.");
  if (opts.emotion) answerLines.push(`I hear ${opts.emotion}. That's valid — let's find a steady next step.`);
  answerLines.push('Try this: name one small action you could take that feels manageable right now.');
  answerLines.push('If you must reply to someone, wait 10 minutes and re-read what you wrote.');
  answerLines.push('\nVerses to reflect on:');
  if (verseLines.length) answerLines.push(...verseLines);

  const forwardMirror = {
    impulsivePath: 'Reacting immediately may escalate the situation and increase regret.',
    reflectivePath: 'Pausing gives you space to choose words that protect your relationships and goals.',
    suggestedAction: 'Write your feelings privately, wait 10 minutes, then choose one small constructive step.'
  };

  return {
    emotion: opts.emotion ?? 'neutral',
    riskLevel: opts.riskLevel ?? 'LOW',
    pausePrompt: DEFAULT_PAUSE_PROMPT,
    answer: answerLines.join('\n'),
    verses,
    forwardMirror,
  };
}

export async function generateReflectiveResponse(opts: GenerateOptions): Promise<ReflectiveAIResponse> {
  // Crisis short-circuit
  if (opts.riskLevel === 'CRISIS') {
    const crisis = getCrisisResponse();
    return {
      emotion: opts.emotion ?? 'neutral',
      riskLevel: 'CRISIS',
      pausePrompt: DEFAULT_PAUSE_PROMPT,
      answer: crisis.message,
      verses: opts.verses ?? [],
      forwardMirror: {
        impulsivePath: '',
        reflectivePath: '',
        suggestedAction: 'Contact local emergency services or someone you trust right now.'
      }
    };
  }

  // In browser / RN environments `process` may not be defined. Prefer passing `apiKey` via
  // `opts.apiKey`. For development you can also expose a global value like
  // `globalThis.OPENAI_API_KEY` or use Expo Constants (app.json -> extra) and pass it in.
  const apiKey = opts.apiKey ?? ((globalThis as any).OPENAI_API_KEY ?? null);
  if (!apiKey) {
    return templateFallback(opts);
  }

  // Build a safe prompt using the constitution rules and provided verses
  const system = `You are AatmaMirror, a calm reflective assistant that follows these rules:\n` +
    `- Encourage reflection and pause before action.\n` +
    `- Do not blindly validate impulses.\n` +
    `- Do not provide medical, legal, or financial certainty.\n` +
    `- Do not claim to be a deity or a therapist.\n` +
    `- Use only the provided Bhagavad Gita context in responses.\n` +
    `- Keep responses short, practical, and include a reflection question.`;

  const versesText = (opts.verses ?? []).slice(0, 6).map(v => `${v.chapter}:${v.verse} — ${v.translation}`).join('\n');

  const userContent = `User message: ${opts.message}\nCategory: ${opts.category ?? 'General'}\nEmotion: ${opts.emotion ?? 'unknown'}\nRelevant verses:\n${versesText}`;

  const prompt = [
    { role: 'system', content: system },
    { role: 'user', content: userContent },
    { role: 'user', content: `Produce a JSON object exactly in this shape: {"pausePrompt":"...","answer":"...","forwardMirror":{"impulsivePath":"...","reflectivePath":"...","suggestedAction":"..."}}. Keep all fields short. Use calm language.` }
  ];

  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ model: 'gpt-4o-mini', messages: prompt, temperature: 0.3, max_tokens: 500 }),
    });

    if (!res.ok) {
      // fallback
      return templateFallback(opts);
    }

    const json = await res.json();
    const content = ((json.choices && json.choices[0] && json.choices[0].message && json.choices[0].message.content) || '') as string;

    // Try to extract JSON from response
    const firstJson = (() => {
      const m = content.match(/\{[\s\S]*\}/);
      if (!m) return null;
      try {
        return JSON.parse(m[0]);
      } catch (e) {
        return null;
      }
    })();

    if (!firstJson) return templateFallback(opts);

    const forward = firstJson.forwardMirror || firstJson.forward || firstJson.forward_mirror || {};
    const response: ReflectiveAIResponse = {
      emotion: opts.emotion ?? 'neutral',
      riskLevel: opts.riskLevel ?? 'LOW',
      pausePrompt: firstJson.pausePrompt ?? DEFAULT_PAUSE_PROMPT,
      answer: firstJson.answer ?? String(firstJson.text ?? '').slice(0, 1000),
      verses: opts.verses ?? [],
      forwardMirror: {
        impulsivePath: forward.impulsivePath ?? forward.impulsive ?? '',
        reflectivePath: forward.reflectivePath ?? forward.reflective ?? '',
        suggestedAction: forward.suggestedAction ?? forward.suggest ?? ''
      }
    };

    return response;
  } catch (err) {
    return templateFallback(opts);
  }
}
