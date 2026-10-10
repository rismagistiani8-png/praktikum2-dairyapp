import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function DiaryCard({ title, date, preview, moodImage, moodType }) {
  const getBorderStyle = () => {
    switch (moodType) {
      case 'tired':
        return { borderColor: '#07d3c2', borderWidth: 2 };
      case 'calm':
        return { borderColor: '#0e6570', borderWidth: 2 };
      case 'relaxed':
        return { borderColor: '#ae9ed4', borderWidth: 2 }; 
      case 'setres':
        return { borderColor: '#a83c5b', borderWidth: 2 };
      case 'happy':
        return { borderColor: '#fc0982', borderWidth: 2 }; 
      default:
        return { borderColor: '#4a3504', borderWidth: 1 };
    }
  };

  return (
    <View style={[styles.card, getBorderStyle()]}>
      <Image
        source={typeof moodImage === 'string' ? { uri: moodImage } : moodImage}
        style={styles.mood}
      />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.preview} numberOfLines={3} ellipsizeMode="tail">
          {preview}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    marginBottom: 12,
  },
  mood: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  date: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 6,
  },
  preview: {
    fontSize: 14,
  },
});