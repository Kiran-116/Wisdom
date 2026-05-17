import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import ScreenGradient from '../components/ScreenGradient';
import GlassCard from '../components/GlassCard';
import { theme } from '../constants/theme';

type ContentType = 'REEL' | 'BLOG' | 'CAPTION' | 'IMAGE_PROMPT';

function Pill({ label, active, onPress }: { label: string; active: boolean; onPress: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.pill,
        active ? { backgroundColor: 'rgba(124,58,237,0.25)', borderColor: 'rgba(124,58,237,0.55)' } : null,
      ]}
    >
      <Text style={[styles.pillText, active ? { color: theme.text } : null]}>{label}</Text>
    </Pressable>
  );
}

export default function AdminScreen() {
  const [topic, setTopic] = useState('');
  const [type, setType] = useState<ContentType>('REEL');
  const [output, setOutput] = useState<string | null>(null);

  function generate() {
    const trimmed = topic.trim();
    if (!trimmed) return;
    setOutput(`(Mock) ${type} content for: ${trimmed}`);
  }

  return (
    <ScreenGradient>
      <View style={styles.container}>
        <Text style={styles.header}>Admin Content Generator</Text>
        <Text style={styles.sub}>Create youth-friendly wellness awareness inspired by Bhagavad Gita.</Text>

        <TextInput
          style={styles.input}
          placeholder="Topic (e.g., Exam stress)"
          placeholderTextColor={'rgba(234,240,255,0.45)'}
          value={topic}
          onChangeText={setTopic}
        />

        <View style={styles.pillsRow}>
          <Pill label="Reel" active={type === 'REEL'} onPress={() => setType('REEL')} />
          <Pill label="Blog" active={type === 'BLOG'} onPress={() => setType('BLOG')} />
          <Pill label="Caption" active={type === 'CAPTION'} onPress={() => setType('CAPTION')} />
          <Pill label="Image" active={type === 'IMAGE_PROMPT'} onPress={() => setType('IMAGE_PROMPT')} />
        </View>

        <Pressable style={[styles.generateBtn, !topic.trim() ? { opacity: 0.6 } : null]} onPress={generate}>
          <Text style={styles.generateText}>Generate</Text>
        </Pressable>

        {output ? (
          <GlassCard style={styles.outputCard}>
            <Text style={styles.outputTitle}>Generated</Text>
            <Text style={styles.outputText}>{output}</Text>
          </GlassCard>
        ) : null}

        <Text style={styles.note}>
          Phase 2 UI is mock-based. Phase 8 will wire LLM generation + fallback template.
        </Text>
      </View>
    </ScreenGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 22 },
  header: { fontSize: 22, fontWeight: '900', color: theme.text, marginBottom: 8 },
  sub: { color: theme.textMuted, fontWeight: '800', fontSize: 12, marginBottom: 14, lineHeight: 18 },
  input: {
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.14)',
    backgroundColor: 'rgba(255,255,255,0.06)',
    color: theme.text,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 16,
    fontWeight: '800',
    marginBottom: 12,
  },
  pillsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 14 },
  pill: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.14)',
    backgroundColor: 'rgba(255,255,255,0.06)',
  },
  pillText: { color: theme.textMuted, fontWeight: '900', fontSize: 12 },
  generateBtn: {
    backgroundColor: theme.accent,
    paddingVertical: 13,
    borderRadius: 16,
    alignItems: 'center',
  },
  generateText: { color: '#fff', fontWeight: '900', fontSize: 16 },
  outputCard: { marginTop: 16 },
  outputTitle: { color: theme.text, fontWeight: '900', fontSize: 14, marginBottom: 8 },
  outputText: { color: theme.textMuted, fontWeight: '800', fontSize: 12, lineHeight: 18 },
  note: { marginTop: 12, color: 'rgba(234,240,255,0.45)', fontWeight: '800', fontSize: 11, textAlign: 'center' },
});

