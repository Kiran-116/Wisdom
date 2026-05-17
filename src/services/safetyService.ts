export type EmotionType =
  | 'stress'
  | 'sadness'
  | 'anger'
  | 'fear'
  | 'confusion'
  | 'loneliness'
  | 'motivation'
  | 'neutral';

export type RiskLevel = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRISIS';

const EMOTION_KEYWORDS: Record<string, string[]> = {
  stress: ['stress', 'pressure', 'exam', 'deadline', 'overwhelmed', 'tension'],
  anger: ['angry', 'rage', 'irritated', 'insult', 'fight'],
  sadness: ['sad', 'lonely', 'crying', 'depressed', 'broken'],
  fear: ['scared', 'afraid', 'anxious', 'panic', 'worried'],
};

const CRISIS_KEYWORDS = ['suicide', 'kill myself', "don't want to live", 'end my life', 'self harm', 'hurt myself'];

export function detectEmotion(message: string): EmotionType {
  const m = message.toLowerCase();
  for (const [emo, keys] of Object.entries(EMOTION_KEYWORDS)) {
    for (const k of keys) {
      if (m.includes(k)) return emo as EmotionType;
    }
  }
  return 'neutral';
}

export function isCrisisMessage(message: string): boolean {
  const m = message.toLowerCase();
  return CRISIS_KEYWORDS.some((k) => m.includes(k));
}

export function detectRiskLevel(message: string): RiskLevel {
  if (isCrisisMessage(message)) return 'CRISIS';
  const m = message.toLowerCase();
  if (m.includes('panic') || m.includes('cant') || m.includes("can't")) return 'HIGH';
  return 'LOW';
}

export function getCrisisResponse() {
  return {
    message:
      "I'm really sorry you're feeling this way. This sounds urgent — please contact someone you trust immediately or reach out to emergency services / helpline in your area.",
    escalate: true,
  };
}
