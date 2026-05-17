import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default function AdminScreen() {
  const [topic, setTopic] = useState('');
  const [type, setType] = useState<'REEL' | 'BLOG' | 'CAPTION' | 'IMAGE_PROMPT'>('REEL');
  const [output, setOutput] = useState('');

  function generate() {
    setOutput(`Generated ${type} for: ${topic}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Admin Content Generator</Text>
      <TextInput style={styles.input} placeholder="Topic" value={topic} onChangeText={setTopic} />
      <View style={styles.row}>
        <Button title="REEL" onPress={() => setType('REEL')} />
        <Button title="BLOG" onPress={() => setType('BLOG')} />
        <Button title="CAPTION" onPress={() => setType('CAPTION')} />
        <Button title="IMAGE" onPress={() => setType('IMAGE_PROMPT')} />
      </View>
      <Button title="Generate" onPress={generate} />
      {output ? <Text style={styles.output}>{output}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 18, fontWeight: '700', marginBottom: 8 },
  input: { borderWidth: 1, borderColor: '#ddd', padding: 8, borderRadius: 8, marginBottom: 12 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  output: { marginTop: 16, padding: 12, backgroundColor: '#f9f9f9', borderRadius: 8 }
});
