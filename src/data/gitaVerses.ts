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
    meaning: 'Focus on sincere effort rather than obsessing over results.',
    tags: ['duty', 'detachment', 'effort', 'stress'],
    categories: ['Exam Stress', 'Career Confusion', 'Motivation']
  },
  {
    id: 'gita-2-48',
    chapter: 2,
    verse: 48,
    translation: 'Be steadfast in yoga, perform your duty, and remain equipoised in success and failure.',
    meaning: 'Keep balance in success and failure; steady action reduces anxiety.',
    tags: ['equanimity', 'balance', 'stress'],
    categories: ['Exam Stress', 'Motivation']
  },
  {
    id: 'gita-2-50',
    chapter: 2,
    verse: 50,
    translation: 'Skill in action comes from detachment to results; remain focused in the present task.',
    meaning: 'Work skillfully without being consumed by outcomes.',
    tags: ['skill', 'action', 'focus'],
    categories: ['Career Confusion', 'Motivation']
  },
  {
    id: 'gita-2-56',
    chapter: 2,
    verse: 56,
    translation: 'One who is not disturbed by adversity and is free from attraction and repulsion is steady of mind.',
    meaning: 'A steady mind sees clearly and acts wisely.',
    tags: ['steady', 'mind', 'detachment'],
    categories: ['Anger Control', 'Stress']
  },
  {
    id: 'gita-2-62',
    chapter: 2,
    verse: 62,
    translation: 'From attachment comes desire, and from desire anger; anger clouds judgement.',
    meaning: 'Unchecked desire and attachment lead to anger and harm.',
    tags: ['desire', 'anger', 'attachment'],
    categories: ['Anger Control', 'Relationship Conflict']
  },
  {
    id: 'gita-2-63',
    chapter: 2,
    verse: 63,
    translation: 'Anger leads to delusion, loss of memory, and destruction of intelligence.',
    meaning: 'Anger impairs reasoning — pause before reacting.',
    tags: ['anger', 'impulse', 'control'],
    categories: ['Anger Control', 'Relationship Conflict']
  },
  {
    id: 'gita-3-19',
    chapter: 3,
    verse: 19,
    translation: 'Perform your duty without attachment, for by such selfless action one attains perfection.',
    meaning: 'Act responsibly without clinging to rewards; this reduces pressure.',
    tags: ['duty', 'selfless', 'action'],
    categories: ['Exam Stress', 'Career Confusion']
  },
  {
    id: 'gita-4-39',
    chapter: 4,
    verse: 39,
    translation: 'A person of faith and knowledge sees the truth and is liberated from doubt.',
    meaning: 'Seek clarity through learning and calm reflection.',
    tags: ['faith', 'knowledge', 'clarity'],
    categories: ['Career Confusion', 'Motivation']
  },
  {
    id: 'gita-6-5',
    chapter: 6,
    verse: 5,
    translation: 'Elevate yourself through the mind; do not degrade yourself.',
    meaning: 'You are your greatest ally — cultivate self-care and self-respect.',
    tags: ['self-care', 'mind', 'encourage'],
    categories: ['Motivation', 'Loneliness']
  },
  {
    id: 'gita-6-6',
    chapter: 6,
    verse: 6,
    translation: 'The mind is the friend of the conditioned soul, and also its enemy.',
    meaning: 'Train the mind gently to be a friend, not an adversary.',
    tags: ['mind', 'friend', 'self-control'],
    categories: ['Anger Control', 'Motivation']
  },
  {
    id: 'gita-6-26',
    chapter: 6,
    verse: 26,
    translation: 'Keep bringing the mind under control and withdraw it from wandering thoughts.',
    meaning: 'Repeatedly refocus; progress comes with practice.',
    tags: ['focus', 'practice', 'mind'],
    categories: ['Exam Stress', 'Motivation']
  },
  {
    id: 'gita-12-13',
    chapter: 12,
    verse: 13,
    translation: 'One who is free from malice toward all beings, friendly and compassionate.',
    meaning: 'Compassion and balance lead to healthier relationships.',
    tags: ['compassion', 'balance', 'relationship'],
    categories: ['Relationship Conflict', 'Loneliness']
  },
  {
    id: 'gita-12-14',
    chapter: 12,
    verse: 14,
    translation: 'One who neither rejoices nor hates, who is full of kindness.',
    meaning: 'Respond calmly and kindly even when provoked.',
    tags: ['calm', 'kindness', 'equanimity'],
    categories: ['Anger Control', 'Relationship Conflict']
  },
  {
    id: 'gita-18-66',
    chapter: 18,
    verse: 66,
    translation: 'Abandon all varieties of dharma and surrender to the Supreme; you will be liberated.',
    meaning: 'Let go of burdens that paralyze action; ask for support and simplify choices.',
    tags: ['surrender', 'relief', 'support'],
    categories: ['Stress', 'Career Confusion']
  },
  {
    id: 'gita-5-10',
    chapter: 5,
    verse: 10,
    translation: 'One who performs actions as a matter of duty without attachment attains perfection.',
    meaning: 'Doing what you can, with detachment, reduces anxiety about outcomes.',
    tags: ['duty', 'detachment', 'action'],
    categories: ['Exam Stress', 'Career Confusion']
  },
  {
    id: 'gita-9-22',
    chapter: 9,
    verse: 22,
    translation: 'I am the provider for those who are devoted; their needs are met.',
    meaning: 'Trust that steady effort and values create reliable support.',
    tags: ['trust', 'support'],
    categories: ['Loneliness', 'Motivation']
  },
  {
    id: 'gita-2-70',
    chapter: 2,
    verse: 70,
    translation: 'A person of steady wisdom is never shaken by desires and remains calm like a mountain.',
    meaning: 'Cultivate inner steadiness to withstand emotional storms.',
    tags: ['steadiness', 'calm'],
    categories: ['Anger Control', 'Fear']
  },
  {
    id: 'gita-16-1',
    chapter: 16,
    verse: 1,
    translation: 'Fearlessness, purity of heart, steadfastness, self-control — these are divine qualities.',
    meaning: 'Develop inner habits that support resilience and wise choice.',
    tags: ['self-control', 'virtue', 'resilience'],
    categories: ['Motivation', 'Self-control']
  },
  {
    id: 'gita-18-21',
    chapter: 18,
    verse: 21,
    translation: 'Action performed out of duty with detachment is considered sattvic and leads to happiness.',
    meaning: 'Prefer actions aligned with values over short-term impulses.',
    tags: ['duty', 'sattva', 'values'],
    categories: ['Career Confusion', 'Exam Stress']
  },
  {
    id: 'gita-4-13',
    chapter: 4,
    verse: 13,
    translation: 'The fourfold division is created according to qualities and work.',
    meaning: 'Recognize your strengths and choose work that fits them.',
    tags: ['strengths', 'role', 'work'],
    categories: ['Career Confusion', 'Motivation']
  },
  {
    id: 'gita-6-16',
    chapter: 6,
    verse: 16,
    translation: 'Yoga is not for one who eats too much or too little; balance is key.',
    meaning: 'Build balanced routines — sleep, food, and practice matter for the mind.',
    tags: ['balance', 'routine', 'self-care'],
    categories: ['Stress', 'Loneliness']
  },
  {
    id: 'gita-3-30',
    chapter: 3,
    verse: 30,
    translation: 'Renouncing attachment, surrender your actions and act with steady mind.',
    meaning: 'Act without clutching to results; this quiets anxiety.',
    tags: ['surrender', 'action'],
    categories: ['Exam Stress', 'Career Confusion']
  },
  {
    id: 'gita-10-8',
    chapter: 10,
    verse: 8,
    translation: 'I am the source of all spiritual and material worlds.',
    meaning: 'Seek perspective beyond immediate difficulties to reduce panic and fear.',
    tags: ['perspective', 'goal'],
    categories: ['Fear', 'Loneliness']
  },
  {
    id: 'gita-7-3',
    chapter: 7,
    verse: 3,
    translation: 'Earth, water, fire, air, ether, mind, intellect and ego — these are parts of the world.',
    meaning: 'Understanding the self helps separate feelings from identity.',
    tags: ['self-understanding', 'mind'],
    categories: ['Confusion', 'Self-control']
  },
  {
    id: 'gita-2-14',
    chapter: 2,
    verse: 14,
    translation: 'The conditioned soul is bewildered by heat and cold, pleasure and pain; endure them.',
    meaning: 'Feelings change; you can tolerate difficult emotions knowing they pass.',
    tags: ['impermanence', 'emotions'],
    categories: ['Stress', 'Fear']
  },
  {
    id: 'gita-17-16',
    chapter: 17,
    verse: 16,
    translation: 'Peacefulness, gentleness, silence, self-control, and purity — these are austerity of the mind.',
    meaning: 'Adopt calm practices to reduce reactivity and cultivate clarity.',
    tags: ['peace', 'self-control'],
    categories: ['Anger Control', 'Self-control']
  },
  {
    id: 'gita-8-6',
    chapter: 8,
    verse: 6,
    translation: 'Whatever you habitually think determines your next state; train attention.',
    meaning: 'Small habitual practices shape outcomes; choose helpful habits.',
    tags: ['habit', 'attention'],
    categories: ['Motivation', 'Self-control']
  },
  {
    id: 'gita-18-66-2',
    chapter: 18,
    verse: 66,
    translation: 'Take refuge in surrender; give up confusion and seek guidance.',
    meaning: 'If overwhelmed, ask for help and simplify decisions to move forward.',
    tags: ['surrender', 'help'],
    categories: ['Crisis', 'Stress']
  }
];
