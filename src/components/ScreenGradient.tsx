import React from 'react';
import { View, StyleSheet } from 'react-native';
// Keep gradient dependency optional; if expo-linear-gradient isn't installed in the demo environment,
// fallback to a simple View background.
let ExpoLinearGradient: any = null;
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  ExpoLinearGradient = require('expo-linear-gradient').LinearGradient;
} catch {
  ExpoLinearGradient = null;
}

export default function ScreenGradient({ children }: { children: React.ReactNode }) {
  if (!ExpoLinearGradient) {
    return <View style={styles.fallback}>{children}</View>;
  }

  return (
    <ExpoLinearGradient
      colors={['#0B1020', '#1A1B3A', '#2B145E']}
      style={styles.flex}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.inner}>{children}</View>
    </ExpoLinearGradient>
  );
}


const styles = StyleSheet.create({
  flex: { flex: 1 },
  inner: { flex: 1 },
  fallback: {
    flex: 1,
    backgroundColor: '#0B1020',
  },
});


