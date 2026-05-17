import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import type { StackScreenProps } from '@react-navigation/stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import ScreenGradient from '../components/ScreenGradient';
import { theme } from '../constants/theme';

type Props = StackScreenProps<RootStackParamList, 'Onboarding'>;

export default function OnboardingScreen({ navigation }: Props) {
  return (
    <ScreenGradient>
      <View style={styles.container}>
        <Text style={styles.title}>AatmaMirror</Text>
        <Text style={styles.subtitle}>Pause. Reflect. Choose wiser tomorrows.</Text>

        <View style={styles.card}>
          <Text style={styles.descTitle}>Reflective guidance</Text>
          <Text style={styles.desc}>
            AI-guided mental wellness inspired by Bhagavad Gita teachings.
          </Text>
          <Text style={styles.desc}>
            This experience helps you pause before reacting—so your next step is calmer and wiser.
          </Text>
        </View>

        <Pressable style={styles.cta} onPress={() => navigation.navigate('Category')}>
          <Text style={styles.ctaText}>Start Reflection</Text>
        </Pressable>

        <Text style={styles.disclaimer}>Not a replacement for professional therapy.</Text>
      </View>
    </ScreenGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 34, fontWeight: '900', color: theme.text, marginBottom: 10 },
  subtitle: { fontSize: 16, color: theme.textMuted, fontWeight: '800', marginBottom: 20 },
  card: {
    padding: 16,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.14)',
    marginBottom: 24,
  },
  descTitle: { color: theme.text, fontWeight: '900', fontSize: 16, marginBottom: 8 },
  desc: { color: theme.textMuted, fontSize: 12, lineHeight: 18, marginBottom: 8 },
  cta: {
    backgroundColor: theme.accent,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: theme.shadow,
    shadowOpacity: 1,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 8,
  },
  ctaText: { color: '#fff', fontWeight: '900', fontSize: 16 },
  disclaimer: { marginTop: 16, color: 'rgba(234,240,255,0.55)', fontSize: 11, textAlign: 'center' },
});

