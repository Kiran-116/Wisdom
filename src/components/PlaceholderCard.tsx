import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PlaceholderCard({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.sub}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 12, borderRadius: 8, backgroundColor: '#fff', marginBottom: 10 },
  title: { fontWeight: '600' },
  sub: { color: '#666', marginTop: 4 }
});
