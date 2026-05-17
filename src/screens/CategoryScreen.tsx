import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

const CATEGORIES = [
  'Exam Stress',
  'Career Confusion',
  'Relationship Conflict',
  'Anger Control',
  'Loneliness',
  'Motivation',
  'Fear of Failure',
];

type Props = NativeStackScreenProps<RootStackParamList, 'Category'>;

export default function CategoryScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Choose a category</Text>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Chat', { category: item })}>
            <Text style={styles.cardTitle}>{item}</Text>
            <Text style={styles.cardSubtitle}>Tap to start reflection</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 20, fontWeight: '600', marginBottom: 12 },
  card: { padding: 16, borderRadius: 8, backgroundColor: '#f3f3f3', marginBottom: 10 },
  cardTitle: { fontSize: 16, fontWeight: '600' },
  cardSubtitle: { fontSize: 12, color: '#666' },
});
