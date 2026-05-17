import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { GitaVerse } from '../data/gitaVerses';
import { theme } from '../constants/theme';
import GlassCard from './GlassCard';

export default function VerseCard({ verse }: { verse: GitaVerse }) {
  return (
    <GlassCard style={styles.card}>
      <Text style={styles.ref}>
        Bhagavad Gita {verse.chapter}:{verse.verse}
      </Text>
      <Text style={styles.translation}>{verse.translation}</Text>
      <Text style={styles.meaning}>{verse.meaning}</Text>
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  card: { marginTop: 10 },
  ref: { color: theme.text, fontWeight: '800', fontSize: 13, marginBottom: 6 },
  translation: { color: 'rgba(234,240,255,0.92)', fontSize: 14, fontWeight: '600' },
  meaning: { color: theme.textMuted, fontSize: 12, marginTop: 8 },
});

