import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import type { StackScreenProps } from '@react-navigation/stack';
import type { RootStackParamList } from '../navigation/AppNavigator';

type Props = StackScreenProps<RootStackParamList, 'Demo'>;

export default function DemoScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Demo Scenarios</Text>
      <Button title="Exam Stress Demo" onPress={() => navigation.navigate('Chat', { category: 'Exam Stress' })} />
      <Button title="Anger Demo" onPress={() => navigation.navigate('Chat', { category: 'Anger Control' })} />
      <Button title="Crisis Demo" onPress={() => navigation.navigate('Chat', { category: 'Crisis' })} />
      <Button title="Admin Demo" onPress={() => navigation.navigate('Admin')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 18, fontWeight: '700', marginBottom: 12 }
});
