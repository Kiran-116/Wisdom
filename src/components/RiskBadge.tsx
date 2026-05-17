import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { RiskLevel } from '../services/safetyService';
import { theme } from '../constants/theme';
// Icons are optional; keep UI robust even if icon libs are unavailable.


function colorForRisk(risk: RiskLevel) {
  switch (risk) {
    case 'LOW':
      return '#22C55E';
    case 'MEDIUM':
      return theme.warning;
    case 'HIGH':
      return '#FB7185';
    case 'CRISIS':
      return theme.danger;
  }
}

function emojiForRisk(risk: RiskLevel) {
  switch (risk) {
    case 'LOW':
      return '✅';
    case 'MEDIUM':
      return '⚠️';
    case 'HIGH':
      return '❤️';
    case 'CRISIS':
      return '🚨';
  }
}


export default function RiskBadge({ risk }: { risk: RiskLevel }) {
  const color = colorForRisk(risk);

  return (
    <View style={[styles.row, { borderColor: color }]}>
      <Text style={{ color, fontSize: 14 }}>{emojiForRisk(risk)}</Text>
      <Text style={styles.text}>{risk}</Text>
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
    backgroundColor: 'rgba(255,255,255,0.06)',
  },
  text: { color: theme.text, fontWeight: '700', fontSize: 12 },
});

