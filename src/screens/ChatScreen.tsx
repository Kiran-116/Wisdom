import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';
import type { StackScreenProps } from '@react-navigation/stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import useAppStore from '../store/useAppStore';

type Props = StackScreenProps<RootStackParamList, 'Chat'>;

export default function ChatScreen({ route }: Props) {
  const category = route.params?.category ?? 'General';
  const [text, setText] = useState('');
  const [messages, setMessages] = useState<Array<{ id: string; role: string; text: string }>>([]);
  const freeQueriesLeft = useAppStore((s) => s.freeQueriesLeft);

  function send() {
    if (!text.trim()) return;
    const userMsg = { id: String(Date.now()), role: 'user', text };
    setMessages((m) => [userMsg, ...m]);
    setText('');
    // Placeholder: real flow will call safety, rag, ai services
    const assistant = { id: String(Date.now() + 1), role: 'assistant', text: `Reflective answer for: ${text}` };
    setMessages((m) => [assistant, ...m]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chat — {category}</Text>
      <Text style={styles.sub}>Free queries left: {freeQueriesLeft}</Text>
      <FlatList data={messages} keyExtractor={(item) => item.id} renderItem={({ item }) => (
        <View style={item.role === 'user' ? styles.userBubble : styles.assistBubble}>
          <Text>{item.text}</Text>
        </View>
      )} inverted />

      <View style={styles.inputRow}>
        <TextInput style={styles.input} value={text} onChangeText={setText} placeholder="Write your reflection..." />
        <Button title="Send" onPress={send} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 18, fontWeight: '700' },
  sub: { color: '#666', marginBottom: 8 },
  inputRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  input: { flex: 1, borderWidth: 1, borderColor: '#ddd', padding: 8, borderRadius: 8, marginRight: 8 },
  userBubble: { alignSelf: 'flex-end', backgroundColor: '#DCF8C6', padding: 10, marginVertical: 6, borderRadius: 8 },
  assistBubble: { alignSelf: 'flex-start', backgroundColor: '#F1F0F0', padding: 10, marginVertical: 6, borderRadius: 8 },
});
