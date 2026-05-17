import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import type { StackScreenProps } from '@react-navigation/stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import useAppStore from '../store/useAppStore';
import ScreenGradient from '../components/ScreenGradient';
import EmotionBadge from '../components/EmotionBadge';
import RiskBadge from '../components/RiskBadge';
import PausePulseCard from '../components/PausePulseCard';
import VerseCard from '../components/VerseCard';
import ForwardMirrorCard from '../components/ForwardMirrorCard';
import CrisisAlert from '../components/CrisisAlert';
import LoadingReflection from '../components/LoadingReflection';
import { gitaVerses } from '../data/gitaVerses';
import type { EmotionType, RiskLevel } from '../services/safetyService';

type Props = StackScreenProps<RootStackParamList, 'Chat'>;

type LocalAssistantPayload = {
  emotion: EmotionType;
  riskLevel: RiskLevel;
  pausePrompt: string;
  answer: string;
  versesUsed: typeof gitaVerses;
  forwardMirror: {
    impulsivePath: string;
    reflectivePath: string;
    suggestedAction: string;
  };
};

type ChatMessage =
  | { id: string; role: 'user'; text: string }
  | { id: string; role: 'assistant'; text: string; payload?: LocalAssistantPayload; isCrisis?: boolean };

export default function ChatScreen({ route }: Props) {
  const category = route.params?.category ?? 'General';
  const [text, setText] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const freeQueriesLeft = useAppStore((s) => s.freeQueriesLeft);

  const topVerses = useMemo(() => gitaVerses.slice(0, 2), []);

  const pausePrompt = 'Take 5 seconds. What outcome do you truly want from this situation?';

  function send() {
    if (!text.trim()) return;

    const userText = text;
    const userMsg: ChatMessage = { id: String(Date.now()), role: 'user', text: userText };
    setMessages((m) => [userMsg, ...m]);
    setText('');

    // Placeholder UX: render full Phase-2 cards; logic will be wired in later phases.
    const isCrisis = userText.toLowerCase().includes('suicide') || userText.toLowerCase().includes('end my life');

    if (isCrisis) {
      const assistant: ChatMessage = {
        id: String(Date.now() + 1),
        role: 'assistant',
        text: 'Crisis response',
        isCrisis: true,
      };
      setMessages((m) => [assistant, ...m]);
      return;
    }

    const assistant: ChatMessage = {
      id: String(Date.now() + 1),
      role: 'assistant',
      text: 'Reflective guidance',
      payload: {
        emotion: 'stress',
        riskLevel: 'LOW',
        pausePrompt,
        answer: 'Breathe first. Write what you feel, then choose a response you can stand by later.',
        versesUsed: topVerses,
        forwardMirror: {
          impulsivePath: 'Reacting in panic may increase conflict and regret.',
          reflectivePath: 'Pausing helps you choose words that protect your relationships.',
          suggestedAction: 'Write your feelings in a note. Wait 10 minutes before sending any message.',
        },
      },
    };
    setMessages((m) => [assistant, ...m]);
  }

  return (
    <ScreenGradient>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={styles.headerRow}>
          <Text style={styles.header}>Chat</Text>
          <Text style={styles.category}>{category}</Text>
        </View>

        <View style={styles.metaRow}>
          <Text style={styles.meta}>Free queries left:</Text>
          <Text style={styles.metaValue}>{freeQueriesLeft}</Text>
        </View>

        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            if (item.role === 'user') {
              return (
                <View style={styles.userBubble}>
                  <Text style={styles.userText}>{item.text}</Text>
                </View>
              );
            }

            if (item.isCrisis) {
              return (
                <View style={{ marginTop: 10 }}>
                  <CrisisAlert message={'This sounds urgent. Please do not face it alone.'} />
                </View>
              );
            }

            const payload = item.payload;
            return (
              <View style={{ marginTop: 10 }}>
                {payload ? (
                  <View>
                    <View style={styles.badgesRow}>
                      <EmotionBadge emotion={payload.emotion} />
                      <RiskBadge risk={payload.riskLevel} />
                    </View>

                    <PausePulseCard prompt={payload.pausePrompt} seconds={3} />

                    <View style={styles.answerCard}>
                      <Text style={styles.answerTitle}>Guidance</Text>
                      <Text style={styles.answerText}>{payload.answer}</Text>
                    </View>

                    {payload.versesUsed?.[0] ? (
                      <View>
                        {payload.versesUsed.map((v) => (
                          <VerseCard key={v.id} verse={v} />
                        ))}
                      </View>
                    ) : null}

                    <ForwardMirrorCard
                      impulsivePath={payload.forwardMirror.impulsivePath}
                      reflectivePath={payload.forwardMirror.reflectivePath}
                      suggestedAction={payload.forwardMirror.suggestedAction}
                    />
                  </View>
                ) : (
                  <LoadingReflection label="Reflecting…" />
                )}
              </View>
            );
          }}
          inverted
        />

        <View style={styles.inputWrap}>
          <TextInput
            style={styles.input}
            value={text}
            onChangeText={setText}
            placeholder="Write your reflection…"
            placeholderTextColor={'rgba(234,240,255,0.45)'}
          />
          <Pressable style={[styles.sendBtn, !text.trim() ? { opacity: 0.6 } : null]} onPress={send}>
            <Text style={styles.sendText}>Send</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </ScreenGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  headerRow: { marginTop: 10, marginBottom: 8 },
  header: { color: 'rgba(255,255,255,0.95)', fontWeight: '900', fontSize: 22 },
  category: { color: 'rgba(234,240,255,0.75)', fontWeight: '900', fontSize: 13, marginTop: 2 },
  metaRow: { flexDirection: 'row', alignItems: 'baseline', gap: 8, marginBottom: 10 },
  meta: { color: 'rgba(234,240,255,0.7)', fontWeight: '800', fontSize: 12 },
  metaValue: { color: 'rgba(255,255,255,0.95)', fontWeight: '900', fontSize: 16 },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(34,197,94,0.18)',
    borderColor: 'rgba(34,197,94,0.35)',
    borderWidth: 1,
    padding: 12,
    marginVertical: 8,
    borderRadius: 16,
    maxWidth: '85%',
  },
  userText: { color: 'rgba(255,255,255,0.95)', fontWeight: '800', fontSize: 13, lineHeight: 18 },
  badgesRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 10 },
  answerCard: {
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderColor: 'rgba(255,255,255,0.14)',
    borderWidth: 1,
    borderRadius: 16,
    padding: 14,
    marginTop: 10,
  },
  answerTitle: { color: 'rgba(255,255,255,0.96)', fontWeight: '900', fontSize: 14, marginBottom: 8 },
  answerText: { color: 'rgba(234,240,255,0.78)', fontWeight: '800', fontSize: 12, lineHeight: 18 },
  inputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
    paddingBottom: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.14)',
    backgroundColor: 'rgba(255,255,255,0.06)',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 16,
    color: 'rgba(255,255,255,0.95)',
    fontWeight: '800',
  },
  sendBtn: {
    backgroundColor: '#7C3AED',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendText: { color: '#fff', fontWeight: '900' },
});

