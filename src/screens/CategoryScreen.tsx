import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import type { StackScreenProps } from '@react-navigation/stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import ScreenGradient from '../components/ScreenGradient';
import CategoryCard from '../components/CategoryCard';
import { categories } from '../constants/categories';
import { theme } from '../constants/theme';

type Props = StackScreenProps<RootStackParamList, 'Category'>;

export default function CategoryScreen({ navigation }: Props) {
  return (
    <ScreenGradient>
      <View style={styles.container}>
        <Text style={styles.header}>Choose what you want to reflect on</Text>

        <FlatList
          data={categories}
          keyExtractor={(item) => item.key}
          contentContainerStyle={{ paddingBottom: 24 }}
          renderItem={({ item }) => (
            <CategoryCard
              title={item.title}
              subtitle={item.subtitle}
              icon={<Text style={styles.emoji}>{item.emoji}</Text>}
              onPress={() => navigation.navigate('Chat', { category: item.key })}
            />
          )}
        />

        <Pressable style={styles.bottomHint} onPress={() => navigation.navigate('Chat', { category: 'Exam Stress' })}>
          <Text style={styles.bottomHintText}>Try a demo in 1 tap →</Text>
        </Pressable>
      </View>
    </ScreenGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { color: theme.text, fontWeight: '900', fontSize: 18, marginBottom: 12, lineHeight: 24 },
  emoji: { fontSize: 18 },
  bottomHint: {
    marginTop: 8,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
  },
  bottomHintText: { color: theme.textMuted, fontWeight: '800', fontSize: 12 },
});

