import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { theme } from '../constants/theme';
import GlassCard from './GlassCard';

export default function LoadingReflection({ label = 'Reflecting…' }: { label?: string }) {
  return (
    <GlassCard>
      <View style={styles.row}>
        <ActivityIndicator size="small" color={theme.accent} />
        <Text style={styles.text}>{label}</Text>
      </View>
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  text: { color: theme.textMuted, fontWeight: '800', fontSize: 12 },
});

