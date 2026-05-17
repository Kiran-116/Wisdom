import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../constants/theme';
import GlassCard from './GlassCard';

export default function PausePulseCard({ prompt, seconds = 3 }: { prompt: string; seconds?: number }) {
  const [remaining, setRemaining] = useState(seconds);

  useEffect(() => {
    setRemaining(seconds);
    const t = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          clearInterval(t);
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [seconds]);

  return (
    <GlassCard>
      <View style={styles.row}>
        <View style={styles.dotWrap}>
          <View style={[styles.dot, { opacity: 0.35 }]} />
          <View style={[styles.dot, { opacity: 0.65, transform: [{ scale: 1.08 }] }]} />
          <View style={[styles.dot, { opacity: 1, transform: [{ scale: 1.15 }] }]} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>PausePulse</Text>
          <Text style={styles.prompt}>{prompt}</Text>
          <Text style={styles.timer}>{remaining > 0 ? `${remaining}s…` : 'Ready'}</Text>
        </View>
      </View>
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  dotWrap: { width: 34, height: 34, justifyContent: 'center', alignItems: 'center' },
  dot: {
    position: 'absolute',
    width: 12,
    height: 12,
    borderRadius: 999,
    backgroundColor: theme.accent,
  },
  title: { color: theme.text, fontWeight: '900', fontSize: 16, marginBottom: 4 },
  prompt: { color: theme.textMuted, fontSize: 12 },
  timer: { color: theme.accent2, fontWeight: '800', fontSize: 12, marginTop: 8 },
});

