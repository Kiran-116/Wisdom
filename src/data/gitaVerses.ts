export type GitaVerse = {
  id: string;
  chapter: number;
  verse: number;
  translation: string;
  meaning: string;
  tags: string[];
  categories: string[];
};

export const gitaVerses: GitaVerse[] = [
  {
    id: 'gita-2-47',
    chapter: 2,
    verse: 47,
    translation: 'You have a right to perform your duty, but not to the fruits of action.',
    meaning: 'Focus on sincere effort instead of being consumed by results.',
    tags: ['stress', 'exam', 'career', 'detachment', 'duty'],
    categories: ['Exam Stress', 'Career Confusion', 'Motivation']
  },
  {
    id: 'gita-2-63',
    chapter: 2,
    verse: 63,
    translation: 'From anger comes delusion; from delusion, loss of memory; from loss of memory, destruction of intelligence.',
    meaning: 'Anger clouds judgment and leads to harmful decisions.',
    tags: ['anger', 'conflict', 'impulse', 'relationship'],
    categories: ['Anger Control', 'Relationship Conflict']
  }
];
