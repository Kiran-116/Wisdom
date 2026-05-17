import { gitaVerses, GitaVerse } from '../data/gitaVerses';

export type RetrieveOptions = {
  message: string;
  category?: string | null;
  emotion?: string | null;
  topK?: number;
};

function tokenize(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);
}

export function retrieveRelevantVerses(opts: RetrieveOptions): GitaVerse[] {
  const { message, category, emotion, topK = 3 } = opts;
  const msgTokens = tokenize(message);

  const scored = gitaVerses.map((v) => {
    let score = 0;
    // Category match is strongest
    if (category && v.categories.map((c) => c.toLowerCase()).includes(category.toLowerCase())) score += 3;
    // Tag matches in message
    for (const tag of v.tags) {
      if (msgTokens.includes(tag.toLowerCase())) score += 2;
    }
    // Emotion match
    if (emotion && v.tags.map((t) => t.toLowerCase()).includes(emotion.toLowerCase())) score += 1;
    // Keyword match in translation/meaning
    const combined = (v.translation + ' ' + v.meaning).toLowerCase();
    for (const t of msgTokens) {
      if (t.length > 3 && combined.includes(t)) score += 1;
    }
    return { verse: v, score };
  });

  scored.sort((a, b) => b.score - a.score);
  const filtered = scored.filter((s) => s.score > 0).map((s) => s.verse);
  // If no matches, return a few default helpful verses
  if (filtered.length === 0) {
    return gitaVerses.slice(0, Math.min(topK, gitaVerses.length));
  }
  return filtered.slice(0, topK);
}
