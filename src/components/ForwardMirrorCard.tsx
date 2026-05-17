import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../constants/theme';
import GlassCard from './GlassCard';

export default function ForwardMirrorCard({
  impulsivePath,
  reflectivePath,
  suggestedAction,
}: {
  impulsivePath: string;
  reflectivePath: string;
  suggestedAction: string;
}) {
  return (
    <GlassCard>
      <Text style={styles.title}>ForwardMirror</Text>
      <View style={styles.section}>
        <Text style={styles.label}>If you react impulsively</Text>
        <Text style={styles.body}>{impulsivePath}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>If you pause and choose wisely</Text>
        <Text style={styles.body}>{reflectivePath}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Suggested step</Text>
        <Text style={[styles.body, { color: theme.text }]}>{suggestedAction}</Text>
      </View>
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  title: { color: theme.text, fontWeight: '900', fontSize: 16, marginBottom: 10 },
  section: { marginBottom: 12 },
  label: { color: theme.textMuted, fontSize: 12, fontWeight: '800', marginBottom: 6 },
  body: { color: 'rgba(234,240,255,0.95)', fontSize: 13, lineHeight: 18 },
});

