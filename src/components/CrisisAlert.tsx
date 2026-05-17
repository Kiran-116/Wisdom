import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../constants/theme';
import GlassCard from './GlassCard';
// Icons are optional; keep UI robust even if icon libs are unavailable.


export default function CrisisAlert({ message }: { message: string }) {
  return (
    <GlassCard style={styles.card}>
      <View style={styles.row}>
        <Text style={{ color: theme.danger, fontSize: 18, fontWeight: '900' }}>!</Text>
        <Text style={styles.title}>Crisis Escalator</Text>
      </View>
      <Text style={styles.message}>{message}</Text>
      <View style={styles.row2}>
        <Text style={{ color: theme.warning, fontSize: 14, fontWeight: '900' }}>📞</Text>
        <Text style={styles.helper}>Please contact someone you trust immediately.</Text>
      </View>

    </GlassCard>
  );
}

const styles = StyleSheet.create({
  card: { borderColor: 'rgba(239,68,68,0.35)' },
  row: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 8 },
  title: { color: theme.text, fontWeight: '900', fontSize: 16 },
  message: { color: theme.textMuted, fontSize: 12, lineHeight: 18, marginTop: 6 },
  row2: { flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 12 },
  helper: { color: 'rgba(234,240,255,0.9)', fontSize: 12, fontWeight: '700' },
});

