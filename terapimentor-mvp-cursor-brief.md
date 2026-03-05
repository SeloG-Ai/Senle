# TerapiMentör MVP — Comprehensive Development Brief

## 📋 Project Overview

**Product Name:** TerapiMentör  
**Type:** Mobile-first AI-powered self-help & personal growth application  
**Target Platforms:** iOS & Android (cross-platform)  
**Tech Stack:** Flutter + Firebase + OpenAI API  
**Development Tool:** Cursor IDE with ReactBits MCP for design system components  
**Timeline:** 12-14 weeks (MVP)

---

## 🎯 Core Concept

TerapiMentör helps users through two pathways:

1. **Problem-solving routes:** Address specific issues (anxiety, anger, teeth grinding, sleep quality)
2. **Life quality routes:** Achieve goals (career growth, ideal weight, relationship quality, 2026 preparation)

**Key Differentiator:** Structured routes (roadmaps) combined with daily AI coaching chat. Routes provide structure; chat provides emotional support and helps users overcome resistance.

**User Flow:**
- User selects 1-2 active routes (max 2 simultaneously)
- Progresses through weekly/daily steps with Socratic questioning
- Uses chat interface anytime to discuss struggles, ask questions, get coaching
- AI coach knows user's active routes and progress context

---

## 🎨 Design Language & UI/UX Guidelines

### **Design System Requirements:**

**Use ReactBits MCP for:**
- Component library generation
- Consistent design tokens
- Reusable UI patterns
- Accessibility compliance

**Brand Identity:**
- **Tone:** Warm, empathetic, supportive (not clinical)
- **Colors:** 
  - Primary: Calming blues/greens (trust, growth)
  - Secondary: Warm accents (encouragement)
  - Neutrals: Clean backgrounds
  - **Request from user:** "What brand colors feel right for TerapiMentör? Show me 2-3 palette options."
  
**Typography:**
- Highly legible (this is a wellness app)
- Comfortable reading for longer texts
- Clear hierarchy (H1, H2, body, captions)
- **Request from user:** "Preferred font direction: Modern/friendly or Classic/trustworthy?"

**Component Style:**
- Rounded corners (friendly, approachable)
- Generous white space
- Cards for content separation
- Progress indicators (bars, percentages)
- Micro-interactions for feedback

**Iconography:**
- Simple, line-based or filled
- Consistent stroke width
- **Request from user:** "Icon style preference: Outlined or Filled?"

**Before starting design:**
1. Present 2-3 mood board options to user
2. Show color palette variations
3. Confirm typography direction
4. Create master component library with ReactBits MCP
5. Build 2-3 key screens for approval before full implementation

---

## ✅ MVP Feature List (Development Checklist)

### **Phase 1: Core Features**

#### **1. Onboarding & Personalization**
```
[ ] User registration (email/Google Sign-In via Firebase Auth)
[ ] Welcome screen with value proposition
[ ] Initial questionnaire:
    - "Why are you here?" 
    - Options: Problem-solving vs Life quality
    - Select initial pain point/goal
[ ] First route recommendation based on questionnaire
[ ] Basic profile setup (name, age range, timezone)
[ ] Privacy policy & terms acceptance
```

#### **2. Route Library**
```
[ ] Route catalog screen
[ ] Minimum 6-8 starter routes:
    Problem-solving:
    - Anxiety Management (12 weeks)
    - Anger Control (8 weeks)
    - Stop Teeth Grinding (6 weeks)
    - Sleep Quality (8 weeks)
    
    Life Quality:
    - 2026 Preparation (12 weeks)
    - Ideal Weight Journey (16 weeks)
    - Career Star (12 weeks)
    - Relationship Quality (10 weeks)

[ ] Route detail page:
    - Description (what it promises)
    - Duration (weeks)
    - Step count
    - Difficulty level (optional: Easy/Medium/Hard)
    - "Start Route" CTA
    
[ ] Route selection with max 2 active routes validation
[ ] Active routes displayed on dashboard
```

#### **3. Route Progress Mechanism**
```
[ ] Weekly/daily step interface
[ ] Each step includes:
    - Explanation/context
    - Socratic Q&A block (2-3 turn dialogue)
    - User text input area
    - AI reflective follow-up questions
    - "Complete Step" button
    
[ ] Progress tracking:
    - Visual progress bar per route
    - "Week 3/12" indicator
    - Overall completion percentage
    
[ ] Daily check-in (optional but recommended):
    - "How are you today?" quick mood selector
    - Brief journaling prompt
    
[ ] Step history view (completed steps review)
```

#### **4. Chat/Coach Interface**
```
[ ] Main chat screen (persistent, always accessible)
[ ] Chat features:
    - Real-time messaging UI
    - User can write anytime about:
      * Struggles with route steps
      * Daily life challenges
      * Questions about process
      * Anxiety/concerns about changes
    
[ ] AI Coach capabilities:
    - Empathetic tone
    - Context-aware (knows active routes + progress)
    - Resistance-reducing responses
    - Can reference past conversations
    - Can reference route progress: "Last week in anxiety route you mentioned..."
    
[ ] Chat history (scrollable, searchable)
[ ] Typing indicators
[ ] Message timestamps
[ ] (Optional) Quick reply suggestions
```

#### **5. Progress Dashboard & Feedback**
```
[ ] Home dashboard showing:
    - Active routes (max 2)
    - Current week/step for each
    - Progress bars
    - Quick access to next step
    - Recent chat summary
    
[ ] Weekly summary notification:
    - "This week you completed X steps"
    - Encouraging message
    
[ ] Route completion celebration:
    - Congratulations screen
    - Certificate/badge (optional)
    - Prompt to start new route or continue with remaining one
    
[ ] Simple achievement system:
    - Badges for milestones (first week, first route, 30 days, etc.)
    - Display in profile
```

#### **6. Notifications (Retention Critical)**
```
[ ] Push notification setup:
    - Permission request on first launch
    - Firebase Cloud Messaging integration
    
[ ] Notification types:
    - Daily reminder: "Today's step is waiting"
    - Engagement: "Haven't seen you in chat lately, how are you?"
    - Progress nudge: "No progress this week on Anxiety route, let's continue?"
    - Celebration: "Week 4 complete! You're 33% there!"
    
[ ] Notification scheduling (user-customizable time)
[ ] Notification preferences in settings
```

#### **7. Settings & Account**
```
[ ] Profile editing:
    - Name, photo
    - Preferences
    
[ ] Notification settings:
    - Enable/disable
    - Time preferences
    - Frequency
    
[ ] Subscription/payment:
    - RevenueCat integration
    - In-app purchase (App Store/Play Store)
    - Pricing tiers (to be defined)
    - Trial period (7 days free)
    
[ ] Route management:
    - Pause route
    - Stop route (with confirmation)
    - Switch route (only if <2 active)
    
[ ] Privacy settings
[ ] Delete account option
[ ] Logout
```

---

## 🛠️ Technical Implementation Guide

### **Tech Stack Details:**

**Frontend:**
- **Flutter 3.x** (latest stable)
- Why Flutter: Single codebase, native performance, rich UI toolkit
- State management: Provider or Riverpod
- Navigation: GoRouter or Navigator 2.0

**Backend:**
- **Firebase Suite:**
  - Firebase Auth (email/Google)
  - Cloud Firestore (user data, routes, progress)
  - Firebase Cloud Messaging (push notifications)
  - Firebase Storage (user avatars, optional media)
  - Firebase Analytics (user behavior tracking)

**AI/ML:**
- **OpenAI API (GPT-4o mini)**
  - Socratic questioning in route steps
  - Chat coach responses
  - Context-aware prompts (user history + route context)
- Prompt engineering strategies:
  - System prompts for empathetic tone
  - Context injection (current route, user's recent messages)
  - Temperature tuning for consistency vs creativity

**Payment:**
- **RevenueCat SDK**
  - Handles iOS/Android IAP complexity
  - Subscription management
  - Cross-platform receipt validation

**Design System:**
- **ReactBits MCP** for component generation
- Flutter theming (ThemeData)
- Custom widgets library
- Design tokens (colors, spacing, typography)

---

## 📱 Mobile Deployment Requirements

### **iOS Deployment:**
```
[ ] Apple Developer Account setup
[ ] App Bundle Identifier
[ ] Provisioning profiles & certificates
[ ] App Store Connect configuration
[ ] TestFlight beta testing
[ ] App Review preparation:
    - Screenshots (6.7", 6.5", 5.5")
    - App description
    - Keywords
    - Privacy policy URL
    - Support URL
[ ] iOS deployment target: iOS 14.0+
```

### **Android Deployment:**
```
[ ] Google Play Developer Account
[ ] App signing key generation
[ ] Google Play Console setup
[ ] Internal testing track
[ ] Open testing/closed testing
[ ] Play Store listing:
    - Screenshots (phone + tablet)
    - Feature graphic
    - App description
    - Privacy policy
[ ] Android minimum SDK: API 21 (Android 5.0)
```

### **Build Configuration:**
```
[ ] Environment variables (dev/staging/prod)
[ ] API keys management (secure storage)
[ ] Code signing setup
[ ] CI/CD pipeline (optional but recommended):
    - GitHub Actions or Codemagic
    - Automated builds
    - Automated testing
```

---

## 🔄 Development Workflow (Step-by-Step for Cursor)

### **Phase 1: Setup & Foundation (Week 1-2)**

**Step 1.1: Project Initialization**
```
Action: Create new Flutter project
Commands:
  flutter create terapimentor
  cd terapimentor
  
Dependencies to add (pubspec.yaml):
  - firebase_core
  - firebase_auth
  - cloud_firestore
  - firebase_messaging
  - provider (or riverpod)
  - go_router
  - http (for OpenAI API)
  - shared_preferences
  - flutter_local_notifications
  - purchases_flutter (RevenueCat)
  
Run: flutter pub get
```

**Step 1.2: Firebase Setup**
```
Action: Configure Firebase for iOS & Android
- Create Firebase project in console
- Download google-services.json (Android)
- Download GoogleService-Info.plist (iOS)
- Follow FlutterFire CLI setup
- Initialize Firebase in main.dart
```

**Step 1.3: Design System with ReactBits MCP**
```
Action: Generate base component library
Prompt to user: 
  "Before we start, I need design direction:
   1. Show me 2-3 color palette options for TerapiMentör (calming, trustworthy, growth-oriented)
   2. Font preference: Modern sans-serif or Classic serif?
   3. Icon style: Outlined or Filled?
   4. Show me 1-2 mood board references for the app feel"

After user input:
- Use ReactBits MCP to generate:
  * Color tokens
  * Typography scale
  * Spacing system
  * Button components
  * Card components
  * Input components
  * Navigation components
  
- Create theme.dart with all design tokens
- Build reusable widget library in /lib/components/
```

**Step 1.4: Project Structure**
```
Create folder structure:
/lib
  /components      (reusable UI widgets)
  /screens         (page-level screens)
  /models          (data models)
  /services        (Firebase, OpenAI, etc.)
  /providers       (state management)
  /utils           (helpers, constants)
  /routes          (navigation)
  main.dart
  theme.dart
```

---

### **Phase 2: Core Screens (Week 3-4)**

**Step 2.1: Onboarding Flow**
```
Screens to build:
1. Splash screen
2. Welcome screen (value proposition)
3. Sign-up/Login screen
4. Initial questionnaire (3-4 questions)
5. Route recommendation screen

Prompt to user after building:
"Review the onboarding flow. Does the questionnaire capture the right intent? Should we add/remove questions?"
```

**Step 2.2: Route Library**
```
Build:
1. Route catalog screen (grid or list view)
2. Route detail screen
3. Route selection logic (max 2 validation)

Data structure (Firestore):
routes/
  {routeId}/
    - name
    - description
    - duration (weeks)
    - steps (array or subcollection)
    - category (problem-solving / life-quality)
    - difficulty

Prompt to user:
"Route library UI ready. Should routes be displayed as cards or list items? Any specific route to prioritize for content?"
```

**Step 2.3: Dashboard**
```
Build home dashboard:
- Active routes display
- Progress indicators
- Next step CTA
- Quick chat access

State management:
- User profile provider
- Active routes provider
- Progress provider
```

---

### **Phase 3: Route Progress & AI Integration (Week 5-7)**

**Step 3.1: Route Step Interface**
```
Build:
1. Step detail screen
2. Socratic Q&A component (user input + AI response loop)
3. Step completion logic
4. Progress persistence (Firestore)

OpenAI integration:
- Create service: /lib/services/openai_service.dart
- Implement Socratic questioning prompts
- Context building (user history + current step)

Prompt to user:
"Step interface ready. Let's test Socratic questioning. Try completing a step and tell me if AI responses feel empathetic and helpful."
```

**Step 3.2: Chat/Coach Interface**
```
Build:
1. Chat screen (message list + input)
2. Message bubbles (user vs AI)
3. Typing indicator
4. Chat history persistence
5. Context-aware AI coach

AI Coach implementation:
- System prompt: Empathetic, supportive, resistance-reducing
- Context injection:
  * Active routes
  * Recent progress
  * Previous chat history (last 10-20 messages)
- Response streaming (optional for better UX)

Prompt to user:
"Chat interface complete. Test it with various scenarios:
 - Ask about route struggles
 - Express resistance to tasks
 - Ask unrelated wellness questions
 Does the coach feel supportive?"
```

---

### **Phase 4: Engagement & Retention (Week 8-9)**

**Step 4.1: Notifications**
```
Implement:
1. FCM setup (Firebase Cloud Messaging)
2. Notification permission request
3. Scheduled notifications:
   - Daily reminder (user-selected time)
   - Engagement nudge (if inactive 3+ days)
   - Progress celebration
4. Notification settings screen

Testing:
- Test on both iOS & Android
- Verify notification delivery
- Check deep linking (notification → specific screen)

Prompt to user:
"Notification system ready. What time should default daily reminder be? Should we test different notification copy?"
```

**Step 4.2: Progress Feedback**
```
Build:
1. Weekly summary screen/modal
2. Route completion celebration
3. Simple badge system
4. Profile achievements display

Gamification (light):
- First step badge
- First week badge
- First route completion
- 30-day streak (optional)
```

---

### **Phase 5: Payments & Settings (Week 10)**

**Step 5.1: Subscription with RevenueCat**
```
Implement:
1. RevenueCat SDK integration
2. Paywall screen (after trial or at feature gate)
3. Subscription tiers:
   - Free tier: 1 route, limited chat
   - Premium: All routes, unlimited chat, priority support
   - (Pricing to be defined)
4. Trial period (7 days)
5. Restore purchases functionality

App Store / Play Store:
- Create in-app products
- Configure RevenueCat dashboard
- Test purchases in sandbox

Prompt to user:
"Subscription ready. Pricing suggestion: ₺99/month or ₺599/year. Should we add a middle tier?"
```

**Step 5.2: Settings & Account**
```
Build:
1. Settings screen (organized sections)
2. Profile editing
3. Notification preferences
4. Subscription management
5. Privacy & terms links
6. Delete account flow
7. Logout
```

---

### **Phase 6: Content & Polish (Week 11-12)**

**Step 6.1: Route Content Creation**
```
Action: Populate initial 6-8 routes with actual content

Per route:
- Write weekly step descriptions
- Create Socratic questions for each step
- Define success criteria
- Test complete route flow

Prompt to user:
"Route content template ready. For each route, I'll need:
 1. Step-by-step breakdown (weekly tasks)
 2. Key questions to ask users
 3. Completion criteria
 
 Should we start with Anxiety Management route as pilot?"
```

**Step 6.2: UI/UX Polish**
```
Refinements:
- Animations (page transitions, micro-interactions)
- Loading states
- Error states (network errors, empty states)
- Accessibility (screen reader, contrast, touch targets)
- Dark mode (optional)
- Responsive design (tablets)

Testing:
- Different screen sizes
- iOS vs Android differences
- Edge cases (slow network, offline mode)
```

---

### **Phase 7: Testing & Deployment (Week 13-14)**

**Step 7.1: Beta Testing**
```
Actions:
1. TestFlight setup (iOS)
2. Play Console internal testing (Android)
3. Recruit 10-20 beta testers
4. Gather feedback:
   - Usability issues
   - Bugs
   - Feature requests
   - AI coach tone/quality
5. Iterate based on feedback
```

**Step 7.2: App Store Submission**
```
Prepare:
1. App Store screenshots (all required sizes)
2. App Store description (compelling copy)
3. Keywords for ASO (App Store Optimization)
4. Privacy policy page (hosted)
5. Support email/URL
6. App icon (1024x1024)

Submit:
- iOS: App Store Connect → Submit for Review
- Android: Play Console → Production release

Monitor:
- Review status
- Respond to reviewer questions
- Fix any rejection issues
```

---

## 🎯 Success Metrics & Analytics

**Implement Firebase Analytics events:**

```
User Lifecycle:
- app_open
- sign_up
- complete_onboarding
- select_route
- complete_first_step
- send_first_chat_message

Engagement:
- route_step_completed
- chat_message_sent
- daily_check_in
- route_completed

Monetization:
- paywall_viewed
- trial_started
- subscription_purchased
- subscription_cancelled

Retention:
- day_1_retention
- day_7_retention
- day_30_retention
```

**KPIs to track:**
1. **Activation Rate:** % of sign-ups who start first route
2. **Engagement:** Average chat messages per week
3. **D7 Retention:** % users active after 7 days (target: >40%)
4. **Route Completion:** % users who finish first route (target: >20%)
5. **Conversion:** Free to Premium conversion (target: >5%)

---

## 🚀 Best Practices & Guidelines

### **Code Quality:**
- Follow Flutter style guide
- Use meaningful variable names
- Comment complex logic
- Keep widgets small and reusable
- Separate business logic from UI

### **Performance:**
- Lazy load route content
- Optimize images
- Cache API responses when appropriate
- Minimize rebuilds (use const constructors)
- Profile app with Flutter DevTools

### **Security:**
- Never hardcode API keys (use environment variables)
- Validate all user inputs
- Implement proper Firebase security rules
- Secure sensitive data (use flutter_secure_storage)
- HTTPS only for all API calls

### **User Experience:**
- Loading indicators for all async operations
- Graceful error handling (user-friendly messages)
- Offline support where possible (cache data)
- Smooth animations (60 FPS)
- Haptic feedback for important actions

### **AI Prompt Engineering:**
- Clear system prompts defining coach personality
- Include relevant context (but manage token usage)
- Temperature: 0.7-0.8 for balance
- Max tokens: Limit to control costs
- Fallback responses for API failures

### **Testing Strategy:**
- Unit tests for business logic
- Widget tests for critical UI components
- Integration tests for key user flows
- Manual testing on real devices (iOS & Android)
- Beta testing before public release

---

## 📝 Content Strategy (Pre-Development)

**Before coding, prepare:**

1. **Route Templates:** 
   - Define structure for all 6-8 routes
   - Write first 2-3 weeks of content for each
   - Create question banks for Socratic dialogue

2. **AI Coach Personality:**
   - Write personality guide (tone, language, boundaries)
   - Create sample conversations
   - Define response templates for common scenarios

3. **Copy & Messaging:**
   - Onboarding copy
   - Push notification templates
   - Email templates (weekly summary)
   - Error messages
   - Empty states

---

## ✅ Pre-Development Checklist (Start Here)

**Before writing a single line of code, ensure:**

```
[ ] Design direction confirmed (colors, fonts, mood)
[ ] Firebase project created
[ ] OpenAI API key obtained
[ ] RevenueCat account setup
[ ] Apple Developer account ($99/year)
[ ] Google Play Developer account ($25 one-time)
[ ] Privacy policy drafted (use generator + lawyer review)
[ ] Terms of service drafted
[ ] Support email setup
[ ] Domain for website/support (optional but professional)
[ ] Route content outlined (at least 2 routes fully written)
[ ] AI coach personality guide written
```

---

## 🤝 Collaboration with Cursor

**How to use this brief in Cursor:**

1. **Start with design:** Ask Cursor to generate ReactBits MCP components after you provide design direction

2. **Incremental development:** Don't ask Cursor to "build the entire app." Go phase by phase:
   - "Let's start with Phase 1: Setup & Foundation"
   - Review output
   - "Now let's move to Step 2.1: Onboarding Flow"

3. **Request reviews:** After each major feature:
   - "I've completed the route library. Can you review the code for best practices?"
   - "Does this chat interface implementation follow Flutter conventions?"

4. **Iterate based on testing:** 
   - "Users find the Socratic questioning too aggressive. How can we soften the tone?"
   - "The chat feels slow. How can we optimize API calls?"

5. **Ask for explanations:**
   - "Explain how this state management pattern works"
   - "Why did you choose Provider over Riverpod here?"

6. **Design feedback loops:**
   - After building screens, ask: "Show me 2 alternative layouts for the dashboard"
   - "This button feels off. Suggest 3 visual variations"

---

## 🎯 Definition of Done (MVP)

**MVP is complete when:**

1. ✅ User can sign up, complete onboarding, select route
2. ✅ User can progress through at least 1 complete route (all steps work)
3. ✅ Chat interface functions with context-aware AI coach
4. ✅ Notifications send at appropriate times
5. ✅ Subscription flow works (trial → paid)
6. ✅ App deployed to TestFlight (iOS) and Play Console Internal Testing (Android)
7. ✅ Beta tested with 10+ users
8. ✅ Critical bugs fixed
9. ✅ Analytics tracking verified
10. ✅ Privacy policy + terms in place

**Not required for MVP:**
- Perfect content for all 8 routes (2-3 fully fleshed out is enough)
- Advanced gamification
- Social features
- Offline mode
- Web version
- Admin dashboard (can manage via Firebase Console)

---

## 📞 Communication Prompts for Cursor

**At each phase, Cursor should ask:**

**Design Phase:**
- "Show me your brand color preferences"
- "Which of these 3 typography options feels right?"
- "Should icons be playful or professional?"

**Development Phase:**
- "I've built the onboarding flow. Want to review before moving on?"
- "The AI responses need tuning. Can you try a few conversations and tell me what feels off?"
- "Which route should I populate with content first?"

**Testing Phase:**
- "Try creating an account and completing one route step. Any friction points?"
- "Notifications sent. Did they feel natural or spammy?"
- "Is the paywall placement too aggressive or too late?"

**Pre-Launch:**
- "Final review: Is there any feature we absolutely need before launch?"
- "App Store screenshots ready. Do they tell the story effectively?"

---

## 🔗 Resources & References

**Flutter:**
- https://flutter.dev/docs
- https://pub.dev (package repository)

**Firebase:**
- https://firebase.google.com/docs/flutter/setup
- https://firebase.google.com/docs/firestore

**OpenAI:**
- https://platform.openai.com/docs/api-reference

**RevenueCat:**
- https://docs.revenuecat.com/docs/flutter

**Design:**
- Material Design: https://m3.material.io
- Flutter UI examples: https://gallery.flutter.dev

**Deployment:**
- iOS: https://developer.apple.com/app-store/review/guidelines/
- Android: https://developer.android.com/distribute/best-practices/launch

---

## 🚨 Common Pitfalls to Avoid

1. **Scope creep:** Stick to MVP features. V2 can wait.
2. **Over-engineering:** Don't build for 1M users. Build for 100 first.
3. **Ignoring content:** Code without content = empty shell. Prepare content early.
4. **Skipping testing:** Beta test with real users. They'll find issues you missed.
5. **API costs:** Monitor OpenAI usage. Implement rate limiting and caching.
6. **Poor error handling:** Network fails, APIs timeout. Handle gracefully.
7. **Neglecting analytics:** You can't improve what you don't measure.
8. **Weak onboarding:** First impression matters. Polish onboarding heavily.

---

## 🎉 Launch Checklist

**Final steps before going live:**

```
[ ] All TestFlight/Beta feedback addressed
[ ] Privacy policy live on website
[ ] Terms of service live
[ ] Support email monitored
[ ] App Store screenshots finalized (all sizes)
[ ] App Store description compelling & keyword-optimized
[ ] Play Store listing complete
[ ] Pricing confirmed in all markets
[ ] Promotional materials ready (website, social posts)
[ ] Press kit (optional for PR)
[ ] Monitor dashboard setup (Firebase Console, RevenueCat)
[ ] Team trained on customer support (if applicable)
[ ] Crash reporting configured (Firebase Crashlytics)
[ ] Backup plan if servers crash (scaling, fallbacks)
```

---

**You're ready to build! Start with Phase 1 and iterate from there. Good luck! 🚀**
