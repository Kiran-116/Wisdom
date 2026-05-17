import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../constants/theme';
import type { EmotionType } from '../services/safetyService';
// Icons are optional; keep UI robust even if icon libs are unavailable.


function emojiForEmotion(emotion: EmotionType) {
  switch (emotion) {
    case 'stress':
      return '🔥';
    case 'anger':
      return '⚠️';
    case 'sadness':
      return '🌙';
    case 'fear':
      return '🛡️';
    case 'confusion':
      return '🧭';
    case 'loneliness':
      return '💗';
    case 'motivation':
      return '✨';
    default:
      return '🧘';
  }
}


function colorForEmotion(emotion: EmotionType) {
  switch (emotion) {
    case 'stress':
      return theme.warning;
    case 'anger':
      return theme.danger;
    case 'sadness':
      return '#60A5FA';
    case 'fear':
      return '#F472B6';
    case 'confusion':
      return '#A78BFA';
    case 'loneliness':
      return '#34D399';
    case 'motivation':
      return '#22C55E';
    default:
      return theme.textMuted;
  }
}

export default function EmotionBadge({ emotion }: { emotion: EmotionType }) {
  const color = colorForEmotion(emotion);

  return (
    <View style={[styles.row, { borderColor: color, backgroundColor: 'rgba(255,255,255,0.06)' }]}>
      <Text style={{ color, fontSize: 14 }}>{emojiForEmotion(emotion)}</Text>
      <Text style={styles.text}>{emotion.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 999,
    gap: 8,
  },
  text: { color: theme.text, fontWeight: '700', fontSize: 12 },
});

