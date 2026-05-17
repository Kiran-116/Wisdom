import type { LucideProps } from 'lucide-react-native';

export type CategoryMeta = {
  key: string;
  title: string;
  subtitle: string;
  emoji: string;
};

export const categories: CategoryMeta[] = [
  { key: 'Exam Stress', title: 'Exam Stress', subtitle: 'Pressure, focus, and fear of results.', emoji: '📚' },
  { key: 'Career Confusion', title: 'Career Confusion', subtitle: 'Uncertainty about what to do next.', emoji: '🧭' },
  { key: 'Relationship Conflict', title: 'Relationship Conflict', subtitle: 'Tension, hurt, and difficult conversations.', emoji: '💬' },
  { key: 'Anger Control', title: 'Anger Control', subtitle: 'Impulse vs calm communication.', emoji: '🔥' },
  { key: 'Loneliness', title: 'Loneliness', subtitle: 'Feeling alone—even around people.', emoji: '💗' },
  { key: 'Motivation', title: 'Motivation', subtitle: 'Discipline to keep going steadily.', emoji: '🚀' },
  { key: 'Fear of Failure', title: 'Fear of Failure', subtitle: 'Nervousness before trying.', emoji: '🧱' },
];

