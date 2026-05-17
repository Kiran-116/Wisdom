import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import type { StackScreenProps } from '@react-navigation/stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import ScreenGradient from '../components/ScreenGradient';
import { DemoButton } from './DemoComponents';
import { theme } from '../constants/theme';

type Props = StackScreenProps<RootStackParamList, 'Demo'>;

export default function DemoScreen({ navigation }: Props) {
  return (
    <ScreenGradient>
      <View style={styles.container}>
        <Text style={styles.header}>Demo Scenarios</Text>

        <DemoButton
          title="Exam Stress Demo"
          subtitle="Stress → PausePulse → Gita verse"
          onPress={() => navigation.navigate('Chat', { category: 'Exam Stress' })}
        />

        <DemoButton
          title="Anger Demo"
          subtitle="Anger → reflection before responding"
          onPress={() => navigation.navigate('Chat', { category: 'Anger Control' })}
        />

        <DemoButton
          title="Crisis Demo"
          subtitle="Crisis escalator (no normal advice)"
          onPress={() => navigation.navigate('Chat', { category: 'Crisis' })}
        />

        <DemoButton
          title="Admin Content Demo"
          subtitle="Reel script + caption + hashtags"
          onPress={() => navigation.navigate('Admin')}
        />

        <View style={{ height: 12 }} />
        <Text style={styles.smallHint}>Tip: open chat and paste the demo text during the presentation.</Text>

        {/* Keep legacy buttons as a fallback for navigation typing during rapid hackathon iteration */}
        <View style={{ height: 10 }} />
        <Button title="Back to categories" onPress={() => navigation.navigate('Category')} />
      </View>
    </ScreenGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 22 },
  header: { fontSize: 20, fontWeight: '900', marginBottom: 12, color: theme.text },
  smallHint: { color: theme.textMuted, fontWeight: '800', fontSize: 12, marginTop: 8 },
});

