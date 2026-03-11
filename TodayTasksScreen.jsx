import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

// Design System Constants
const colors = {
  background: '#F5F1E8',
  card: '#FFFFFF',
  cardGradient: '#FFFDF9',
  text: {
    primary: '#2D2D2D',
    secondary: '#6B6B6B',
  },
  accent: {
    yellow: '#FFE99F',
    green: '#6DD5A3',
    sage: '#A8C5B5',
  },
  timeline: {
    line: 'rgba(0,0,0,0.1)',
    dotActive: '#FFE99F',
    dotInactive: '#E0E0E0',
  },
};

const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

const typography = {
  h2: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
    letterSpacing: -0.3,
  },
  body: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 22,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
  },
  cardSubtitle: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
  },
};

// Mock Data
const todayTasks = [
  {
    id: 1,
    type: 'video',
    title: 'Video izle, 30 saniye',
    subtitle: 'Ansiyetemi yendim 3. gün',
    completed: true,
    thumbnail: null, // Add actual thumbnail URL
  },
  {
    id: 2,
    type: 'video',
    title: 'Video izle, 30 saniye',
    subtitle: 'Ansiyetemi yendim 3. gün',
    completed: false,
    thumbnail: null,
  },
  {
    id: 3,
    type: 'video',
    title: 'Video izle, 30 saniye',
    subtitle: 'Ansiyetemi yendim 3. gün',
    completed: false,
    thumbnail: null,
  },
];

// Components
const ProfileHeader = ({ name, message, avatarUrl }) => (
  <View style={styles.profileContainer}>
    <View style={styles.avatarContainer}>
      <Image
        source={{ uri: avatarUrl || 'https://via.placeholder.com/80' }}
        style={styles.avatar}
      />
      <View style={styles.onlineDot} />
    </View>
    <View style={styles.profileTextContainer}>
      <Text style={styles.greeting}>Merhaba, {name}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  </View>
);

const TimelineDot = ({ active, completed }) => (
  <View style={styles.dotContainer}>
    <View
      style={[
        styles.dot,
        completed && styles.dotCompleted,
        active && !completed && styles.dotActive,
      ]}
    />
  </View>
);

const TaskCard = ({ task, onPress }) => (
  <TouchableOpacity
    style={styles.taskCard}
    onPress={onPress}
    activeOpacity={0.8}
  >
    {/* Accent bar */}
    {task.completed && <View style={styles.accentBar} />}
    
    {/* Icon/Thumbnail */}
    <View style={styles.taskIcon}>
      {task.thumbnail ? (
        <Image source={{ uri: task.thumbnail }} style={styles.thumbnail} />
      ) : (
        <View style={styles.placeholderIcon}>
          <Text style={styles.placeholderEmoji}>📹</Text>
        </View>
      )}
    </View>

    {/* Text Content */}
    <View style={styles.taskContent}>
      <Text style={styles.taskTitle}>{task.title}</Text>
      <Text style={styles.taskSubtitle}>{task.subtitle}</Text>
    </View>
  </TouchableOpacity>
);

const TimelineItem = ({ task, isLast, onPress }) => (
  <View style={styles.timelineItem}>
    {/* Timeline line & dot */}
    <View style={styles.timelineTrack}>
      <TimelineDot active={!task.completed} completed={task.completed} />
      {!isLast && <View style={styles.timelineLine} />}
    </View>

    {/* Task card */}
    <View style={styles.timelineContent}>
      <TaskCard task={task} onPress={onPress} />
    </View>
  </View>
);

// Main Screen
const TodayTasksScreen = () => {
  const handleTaskPress = (taskId) => {
    console.log('Task pressed:', taskId);
    // Navigate to video player
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Background decorative elements */}
      <View style={styles.bgLeafTopLeft} />
      <View style={styles.bgLeafTopRight} />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Header */}
        <ProfileHeader
          name="Selahattin"
          message="Hadi ilk rotanı 30 saniyede birlikte belirleyelim"
          avatarUrl={null} // Add actual avatar URL
        />

        {/* Section Title */}
        <Text style={styles.sectionTitle}>Bugünki Görevlerin</Text>
        <Text style={styles.sectionSubtitle}>
          Ankette verdiğin yanıtlarla oluşturuldu
        </Text>

        {/* Timeline */}
        <View style={styles.timeline}>
          {todayTasks.map((task, index) => (
            <TimelineItem
              key={task.id}
              task={task}
              isLast={index === todayTasks.length - 1}
              onPress={() => handleTaskPress(task.id)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xxl,
    paddingBottom: spacing.xxxl * 2,
  },

  // Background Elements
  bgLeafTopLeft: {
    position: 'absolute',
    top: -40,
    left: -20,
    width: 160,
    height: 160,
    backgroundColor: colors.accent.sage,
    opacity: 0.08,
    borderRadius: 80,
    transform: [{ rotate: '-15deg' }],
  },
  bgLeafTopRight: {
    position: 'absolute',
    top: 100,
    right: -30,
    width: 140,
    height: 140,
    backgroundColor: colors.accent.sage,
    opacity: 0.08,
    borderRadius: 70,
    transform: [{ rotate: '25deg' }],
  },

  // Profile Header
  profileContainer: {
    flexDirection: 'row',
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: spacing.xl,
    marginBottom: spacing.xxxl,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: colors.accent.green,
  },
  onlineDot: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.accent.green,
    borderWidth: 3,
    borderColor: colors.card,
  },
  profileTextContainer: {
    flex: 1,
    marginLeft: spacing.md,
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 15,
    fontWeight: '400',
    color: colors.text.secondary,
    marginBottom: spacing.xs,
  },
  message: {
    fontSize: 15,
    fontWeight: '400',
    color: colors.text.primary,
    lineHeight: 22,
  },

  // Section Title
  sectionTitle: {
    ...typography.h2,
    color: colors.text.primary,
    marginBottom: spacing.sm,
  },
  sectionSubtitle: {
    ...typography.body,
    color: colors.text.secondary,
    marginBottom: spacing.xxl,
  },

  // Timeline
  timeline: {
    marginLeft: spacing.xl,
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: spacing.lg,
  },
  timelineTrack: {
    alignItems: 'center',
    width: 24,
    marginRight: spacing.lg,
  },
  dotContainer: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: colors.timeline.dotInactive,
  },
  dotCompleted: {
    backgroundColor: colors.accent.yellow,
    borderColor: colors.accent.yellow,
  },
  dotActive: {
    borderColor: colors.text.secondary,
  },
  timelineLine: {
    flex: 1,
    width: 2,
    backgroundColor: colors.timeline.line,
    marginTop: spacing.sm,
  },
  timelineContent: {
    flex: 1,
  },

  // Task Card
  taskCard: {
    flexDirection: 'row',
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: spacing.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
    position: 'relative',
    overflow: 'hidden',
  },
  accentBar: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 4,
    backgroundColor: colors.accent.yellow,
  },
  taskIcon: {
    width: 48,
    height: 48,
    marginRight: spacing.md,
    borderRadius: 12,
    overflow: 'hidden',
  },
  thumbnail: {
    width: '100%',
    height: '100%',
  },
  placeholderIcon: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.accent.yellow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderEmoji: {
    fontSize: 24,
  },
  taskContent: {
    flex: 1,
    justifyContent: 'center',
  },
  taskTitle: {
    ...typography.cardTitle,
    color: colors.text.primary,
    marginBottom: spacing.xs,
  },
  taskSubtitle: {
    ...typography.cardSubtitle,
    color: colors.text.secondary,
  },
});

export default TodayTasksScreen;
