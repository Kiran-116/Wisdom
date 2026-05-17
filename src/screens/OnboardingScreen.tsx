import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

export default function OnboardingScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AatmaMirror</Text>
      <Text style={styles.subtitle}>Reflect before you react</Text>
      <Text style={styles.description}>
        AI-guided mental wellness inspired by Bhagavad Gita wisdom.
      </Text>
      <Button title="Start Reflection" onPress={() => navigation.navigate('Category')} />
      <Text style={styles.disclaimer}>Not a replacement for professional therapy.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 32, fontWeight: '700', marginBottom: 8 },
  subtitle: { fontSize: 18, color: '#666', marginBottom: 12 },
  description: { textAlign: 'center', marginBottom: 20 },
  disclaimer: { marginTop: 24, fontSize: 12, color: '#999' },
});
