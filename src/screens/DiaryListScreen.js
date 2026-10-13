import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import DiaryCard from '../components/DiaryCard';

import calmImage from '../../assets/moods/calmbroow.jpeg';
import happyImage from '../../assets/moods/happywawi.jpeg';
import relaxedImage from '../../assets/moods/relaxedwii.jpeg';
import AvatarWawi from '../../assets/moods/AvatarWawi.jpeg';
import tiredImage from '../../assets/moods/tiredwoyy.jpeg';
import setresImage from '../../assets/moods/setreswawi.jpeg';
const diaryEntries = [
  {
    id: 1,
    title: 'malam yang dingin',
    date: '2026-09-06',
    preview: 'Hari ini latihan volly beresnya tengah malam banget',
    moodImage: setresImage, 
    moodType: 'setres',
  },
  {
    id: 2,
    title: 'Pagi yang Menyegarkan',
    date: '2025-10-06',
    preview: 'Hari ini aku bangun lebih pagi, jogging 20 menit terus lanjut mandi dan siap-siap ngampus',
    moodImage: happyImage, 
    moodType: 'happy',
  },
  {
    id: 3,
    title: 'Sore di Taman',
    date: '2025-10-04',
    preview: 'Menikmati waktu sore sambil scroll tiktok di bawah langit jingga',
    moodImage: relaxedImage, 
    moodType: 'relaxed',
  },
  {
    id: 4,
    title: 'ngoding sebelum tidur',
    date: '2025-10-03',
    preview: 'karena tugas yang numpuk, aku terpaksa harus ngoding nyampe tengah malem',
    moodImage:tiredImage,
    moodType: 'tired',
  },
  {
    id: 5,
    title: 'Akhir Pekan Santai',
    date: '2025-10-02',
    preview: 'Akhirnya minggu ini bisa hangout di luar bareng circle gueh',
    moodImage: calmImage,
    moodType: 'calm',
  },
];

export default function DiaryListScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Section Header dengan Avatar */}
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.welcomeText}>Selamat Datang di,</Text>
          <Text style={styles.headerTitle}>Buku Harian wawii</Text>
        </View>
        <Image
          source={AvatarWawi} // 
          style={styles.mycanadianman}
        />
      </View>

      {/* Daftar Kartu Diary */}
      {diaryEntries.map((entry) => (
        <DiaryCard
          key={entry.id}
          title={entry.title}
          date={entry.date}
          preview={entry.preview}
          moodImage={entry.moodImage}
          moodType={entry.moodType}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  content: {
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 8,
  },
  welcomeText: {
    fontSize: 14,
    color: '#6b7280',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
  },
  mycanadianman: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#3b82f6',
  },
});