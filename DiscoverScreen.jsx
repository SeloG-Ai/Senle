// TerapiMentör - Keşfet Ekranı (React Native)
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // veya react-native-linear-gradient
import { Search, Lock } from 'lucide-react-native'; // veya kendi icon kütüphaneniz

const { width } = Dimensions.get('window');
const CARD_WIDTH = 280;
const CARD_SPACING = 12;

// Mock data
const dailyRecommendations = [
  {
    id: '1',
    title: 'Sabah Meditasyonu',
    subtitle: 'Mindfulness • 10 dakika',
    isPremium: true,
    gradient: ['#667eea', '#764ba2'],
  },
  {
    id: '2',
    title: 'Stres Yönetimi',
    subtitle: 'Rahatlama • 15 dakika',
    isPremium: false,
    gradient: ['#f093fb', '#f5576c'],
  },
  {
    id: '3',
    title: 'Uyku Hazırlığı',
    subtitle: 'Uyku • 20 dakika',
    isPremium: true,
    gradient: ['#4facfe', '#00f2fe'],
  },
];

const goals = [
  { id: '1', title: 'Uyumak', isPremium: true, gradient: ['#667eea', '#764ba2'] },
  { id: '2', title: 'Stres Azalt', isPremium: false, gradient: ['#f093fb', '#f5576c'] },
  { id: '3', title: 'Meditasyon', isPremium: false, gradient: ['#4facfe', '#00f2fe'] },
  { id: '4', title: 'Alışkanlık', isPremium: true, gradient: ['#43e97b', '#38f9d7'] },
];

const timeFilters = ['3 dk', '5 dk', '10 dk', '15 dk', '20 dk', '30 dk+'];

const DiscoverScreen = () => {
  const [selectedTime, setSelectedTime] = useState('3 dk');
  const [searchQuery, setSearchQuery] = useState('');

  const renderDailyCard = ({ item }) => (
    <TouchableOpacity style={styles.dailyCard} activeOpacity={0.9}>
      <LinearGradient
        colors={item.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.dailyCardGradient}
      >
        {item.isPremium && (
          <View style={styles.premiumLock}>
            <Lock size={14} color="#FFF" />
          </View>
        )}
        <View style={styles.dailyCardOverlay}>
          <Text style={styles.dailyCardTitle}>{item.title}</Text>
          <Text style={styles.dailyCardMeta}>{item.subtitle}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );

  const renderGoalCard = (item, index) => {
    const isLeft = index % 2 === 0;
    return (
      <TouchableOpacity
        key={item.id}
        style={[styles.goalCard, isLeft ? styles.goalCardLeft : styles.goalCardRight]}
        activeOpacity={0.9}
      >
        <LinearGradient
          colors={item.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.goalCardGradient}
        >
          {item.isPremium && (
            <View style={styles.premiumLock}>
              <Lock size={14} color="#FFF" />
            </View>
          )}
          <View style={styles.goalCardOverlay}>
            <Text style={styles.goalCardTitle}>{item.title}</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  return (
    <LinearGradient colors={['#1E3A5F', '#0F2744']} style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Keşfet</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <Search size={20} color="rgba(255,255,255,0.7)" />
          <TextInput
            style={styles.searchInput}
            placeholder="Başlık, konu veya tema"
            placeholderTextColor="rgba(255,255,255,0.7)"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Today's Recommendations */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Günün Önerileri</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllButton}>Tümünü Gör</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={dailyRecommendations}
            renderItem={renderDailyCard}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalList}
            snapToInterval={CARD_WIDTH + CARD_SPACING}
            decelerationRate="fast"
            snapToAlignment="start"
          />
        </View>

        {/* Browse by Goal */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Hedefe Göre</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllButton}>Tümünü Gör</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.goalGrid}>
            {goals.map((item, index) => renderGoalCard(item, index))}
          </View>
        </View>

        {/* Time Filters */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Süreye Göre</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.chipContainer}
          >
            {timeFilters.map((time) => (
              <TouchableOpacity
                key={time}
                style={[
                  styles.chip,
                  selectedTime === time && styles.chipActive,
                ]}
                onPress={() => setSelectedTime(time)}
              >
                <Text style={styles.chipText}>{time}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Featured Collections */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Öne Çıkan Koleksiyonlar</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllButton}>Tümünü Gör</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.goalGrid}>
            {[
              { id: '1', title: 'Başlangıç Serisi', gradient: ['#fa709a', '#fee140'] },
              { id: '2', title: 'Uzman Tavsiyeleri', isPremium: true, gradient: ['#30cfd0', '#330867'] },
            ].map((item, index) => renderGoalCard(item, index))}
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 16,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: -0.5,
  },
  searchBar: {
    marginHorizontal: 20,
    marginTop: 16,
    marginBottom: 32,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 26,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 17,
    color: '#FFFFFF',
  },
  section: {
    marginBottom: 40,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  seeAllButton: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.8)',
  },
  horizontalList: {
    paddingLeft: 20,
    paddingRight: 20,
    gap: CARD_SPACING,
  },
  dailyCard: {
    width: CARD_WIDTH,
    height: 240,
    borderRadius: 16,
    overflow: 'hidden',
  },
  dailyCardGradient: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  dailyCardOverlay: {
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  dailyCardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  dailyCardMeta: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
  },
  premiumLock: {
    position: 'absolute',
    top: 12,
    left: 12,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  goalGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    gap: 16,
  },
  goalCard: {
    width: (width - 56) / 2, // (full width - padding - gap) / 2
    aspectRatio: 4 / 3,
    borderRadius: 16,
    overflow: 'hidden',
  },
  goalCardLeft: {
    marginRight: 8,
  },
  goalCardRight: {
    marginLeft: 8,
  },
  goalCardGradient: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  goalCardOverlay: {
    padding: 12,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  goalCardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  chipContainer: {
    paddingHorizontal: 20,
    gap: 8,
  },
  chip: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: 20,
  },
  chipActive: {
    backgroundColor: 'rgba(255,255,255,0.25)',
  },
  chipText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#FFFFFF',
  },
});

export default DiscoverScreen;
