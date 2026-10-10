import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import DiaryCard from '../components/DiaryCard';

import iconicImage from '../../assets/moods/iconic.jpeg';
import keluargaImage from '../../assets/moods/keluargacemara.jpeg';
import oliviaImage from '../../assets/moods/oliviakeindonesia.jpeg';
import mycanadianman from '../../assets/moods/mycanadianman.jpeg';
import pusingImage from '../../assets/moods/pusingsemester5.jpeg';
import russellImage from '../../assets/moods/russellpodium.jpeg';
const diaryEntries = [
  {
    id: 1,
    title: 'malam yang hening',
    date: '2026-09-06',
    preview: 'Hari ini aku pulang ngampus tengah malam...',
    moodImage: iconicImage, 
    moodType: 'tired',
  },
  {
    id: 2,
    title: 'Pagi yang Tenang',
    date: '2025-10-06',
    preview: 'Hari ini aku bangun lebih pagi dan berjalan kaki 20 menit. Udara terasa sejuk...',
    moodImage: keluargaImage, 
    moodType: 'calm',
  },
  {
    id: 3,
    title: 'Senja di Taman',
    date: '2025-10-04',
    preview: 'Menikmati senja sambil membaca buku favorit. Warna langit sangat indah...',
    moodImage: oliviaImage, 
    moodType: 'relaxed',
  },
  {
    id: 4,
    title: 'Koding Sampai Malam',
    date: '2025-10-03',
    preview: 'Eksplorasi fitur baru React Native Expo. Walau lelah, aplikasinya berjalan lancar!',
    moodImage:pusingImage,
    moodType: 'setres',
  },
  {
    id: 5,
    title: 'Akhir Pekan Santai',
    date: '2025-10-02',
    preview: 'Menghabiskan waktu bersama keluarga di rumah sambil meminum teh hangat...',
    moodImage: russellImage,
    moodType: 'happy',
  },
];

export default function DiaryListScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Section Header dengan Avatar */}
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.welcomeText}>Selamat Datang di,</Text>
          <Text style={styles.headerTitle}>Buku Harian Malris</Text>
        </View>
        <Image
          source={mycanadianman} // 
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