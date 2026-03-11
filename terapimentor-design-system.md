# TerapiMentör Design System

> Profesyonel, tutarlı ve ölçeklenebilir bir tasarım sistemi

---

## 🎨 Brand Colors

### Primary Palette
```css
/* Ana Renkler */
--tm-primary-cream: #F5F1E8;      /* Arka plan - sıcak, rahatlatıcı */
--tm-primary-white: #FFFFFF;       /* Kartlar, inputs */
--tm-primary-dark: #2D2D2D;        /* Ana metin */
--tm-primary-gray: #6B6B6B;        /* İkincil metin */

/* Accent Colors */
--tm-accent-yellow: #FFE99F;       /* Vurgular, progress */
--tm-accent-green: #6DD5A3;        /* Success, online status */
--tm-accent-sage: #A8C5B5;         /* Doğal elementler */
--tm-accent-pink: #FFB8C6;         /* Video kartları (opsiyonel) */

/* Semantic Colors */
--tm-success: #6DD5A3;
--tm-warning: #FFD93D;
--tm-error: #FF6B6B;
--tm-info: #6B9BD5;
```

### Gradients
```css
--tm-gradient-warm: linear-gradient(135deg, #FFF8E8 0%, #F5F1E8 100%);
--tm-gradient-card: linear-gradient(180deg, #FFFFFF 0%, #FFFDF9 100%);
--tm-gradient-overlay: linear-gradient(0deg, rgba(0,0,0,0.05) 0%, transparent 100%);
```

---

## 📝 Typography

### Font Family
```css
/* Primary: Inter (Google Fonts) */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Type Scale (8px baseline)

```css
/* Headings */
--text-h1: 32px;      /* Weight: 700, Line-height: 40px, Letter-spacing: -0.5px */
--text-h2: 24px;      /* Weight: 600, Line-height: 32px, Letter-spacing: -0.3px */
--text-h3: 20px;      /* Weight: 600, Line-height: 28px */
--text-h4: 18px;      /* Weight: 600, Line-height: 24px */

/* Body */
--text-body-lg: 17px; /* Weight: 400, Line-height: 24px */
--text-body: 15px;    /* Weight: 400, Line-height: 22px */
--text-body-sm: 14px; /* Weight: 400, Line-height: 20px */

/* Captions & Labels */
--text-caption: 13px; /* Weight: 400/500, Line-height: 18px */
--text-label: 12px;   /* Weight: 500, Line-height: 16px, uppercase */
```

### Typography Classes

```css
.text-greeting {
  font-size: 15px;
  font-weight: 400;
  color: var(--tm-primary-gray);
  line-height: 22px;
}

.text-title-section {
  font-size: 24px;
  font-weight: 700;
  color: var(--tm-primary-dark);
  line-height: 32px;
  letter-spacing: -0.3px;
}

.text-card-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--tm-primary-dark);
  line-height: 22px;
}

.text-card-subtitle {
  font-size: 14px;
  font-weight: 400;
  color: var(--tm-primary-gray);
  line-height: 20px;
}

.text-micro {
  font-size: 13px;
  font-weight: 500;
  color: var(--tm-primary-gray);
  line-height: 18px;
}
```

---

## 📐 Spacing System

### Base Unit: 4px

```css
/* Spacing Scale */
--space-1: 4px;    /* xs */
--space-2: 8px;    /* sm */
--space-3: 12px;   /* md */
--space-4: 16px;   /* lg */
--space-5: 20px;   /* xl */
--space-6: 24px;   /* 2xl */
--space-8: 32px;   /* 3xl */
--space-10: 40px;  /* 4xl */
--space-12: 48px;  /* 5xl */
--space-16: 64px;  /* 6xl */
```

### Padding Pattern

```css
/* Screen/Container */
--container-padding-x: 20px;       /* Horizontal ekran padding */
--container-padding-y: 24px;       /* Vertical ekran padding */

/* Cards */
--card-padding: 16px;              /* İçerik kartları */
--card-padding-lg: 20px;           /* Büyük kartlar (video vb.) */

/* Sections */
--section-gap: 32px;               /* Section'lar arası */
--element-gap: 16px;               /* Başlık-içerik arası */
```

### Practical Spacing Examples

```
Profile Section
├─ Avatar size: 80px
├─ Avatar → Text: 12px
├─ Greeting → Name: 4px
├─ Bottom margin: 24px

Section Title
├─ Font: 24px/700
├─ Margin-bottom: 16px
└─ Margin-top (from prev section): 32px

Timeline Item
├─ Dot size: 12px
├─ Dot left margin: 20px (center of line)
├─ Card margin-left: 40px
├─ Card margin-bottom: 16px
└─ Card padding: 16px
```

---

## 🎴 Components

### 1. Profile Header

```
┌─────────────────────────────────┐
│  ◉ Merhaba, Selahattin          │ ← Greeting (15px, gray)
│     Hadi ilk rotanı 30 saniye-  │ ← Message (15px, dark)
│     de birlikte belirleyelim    │
└─────────────────────────────────┘

Specs:
- Avatar: 80px circle, 4px border (green), online dot 16px bottom-right
- Text container: 12px left of avatar
- Background: white card, 16px border-radius, subtle shadow
- Padding: 20px
```

### 2. Timeline Card (Video)

```
┌─────────────────────────────────┐
│  📹  Video izle, 30 saniye      │ ← Title (16px/600)
│      Ansiyetemi yendim 3. gün   │ ← Subtitle (14px/400, gray)
└─────────────────────────────────┘

Specs:
- Background: gradient card (white → cream)
- Border-radius: 16px
- Padding: 16px
- Icon: 40x40px illustration, left
- Text: 12px left margin from icon
- Shadow: 0 2px 8px rgba(0,0,0,0.04)
- Yellow accent on left edge (optional): 4px width, 100% height
```

### 3. Timeline Line & Dots

```
Visual:
│
●  (dot: filled/active)
│
●  (dot: outlined/inactive)
│
○  (dot: empty/future)
│

Specs:
- Line width: 2px
- Line color: rgba(0,0,0,0.1)
- Dot size: 12px
- Dot filled: --tm-accent-yellow
- Dot outlined: white bg, 2px border gray
- Dot empty: transparent bg, 2px border light-gray
```

### 4. Button Styles

```css
/* Primary Button */
.btn-primary {
  background: var(--tm-primary-dark);
  color: white;
  padding: 14px 24px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: all 0.2s ease;
}

.btn-primary:active {
  transform: scale(0.98);
  box-shadow: 0 1px 4px rgba(0,0,0,0.15);
}

/* Secondary Button */
.btn-secondary {
  background: white;
  color: var(--tm-primary-dark);
  border: 1.5px solid rgba(0,0,0,0.1);
  padding: 14px 24px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
}

/* Text Button */
.btn-text {
  background: transparent;
  color: var(--tm-primary-gray);
  padding: 8px 16px;
  font-size: 15px;
  font-weight: 500;
}
```

---

## 🌿 Decorative Elements

### Natural Background Elements

```css
/* Bitki silueti (arka plan) */
.bg-leaf {
  position: absolute;
  opacity: 0.08;
  filter: blur(0.5px);
  pointer-events: none;
}

/* Top-left köşe */
.bg-leaf-tl {
  top: -40px;
  left: -20px;
  width: 160px;
  transform: rotate(-15deg);
}

/* Top-right köşe */
.bg-leaf-tr {
  top: 100px;
  right: -30px;
  width: 140px;
  transform: rotate(25deg);
}
```

---

## 📱 Layout Grid

### Mobile (375px base)

```
Container: 375px
├─ Padding-x: 20px
├─ Content width: 335px
└─ Safe area top: 44px (status bar)
    Safe area bottom: 34px (home indicator)
```

### Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 767px) {
  --container-padding-x: 20px;
  --card-max-width: 100%;
}

/* Tablet */
@media (min-width: 768px) {
  --container-padding-x: 40px;
  --card-max-width: 600px;
}

/* Desktop (web preview) */
@media (min-width: 1024px) {
  --container-padding-x: 60px;
  --card-max-width: 720px;
}
```

---

## 🎯 Shadow System

```css
/* Elevation Levels */
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.04);
--shadow-md: 0 2px 8px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 4px 16px rgba(0, 0, 0, 0.08);
--shadow-xl: 0 8px 24px rgba(0, 0, 0, 0.1);

/* Kullanım */
.card { box-shadow: var(--shadow-md); }
.modal { box-shadow: var(--shadow-xl); }
.floating-button { box-shadow: var(--shadow-lg); }
```

---

## 🎬 Animations

```css
/* Transition Durations */
--duration-fast: 150ms;
--duration-normal: 200ms;
--duration-slow: 300ms;

/* Easing */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0.0, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);

/* Micro-interactions */
.card-interactive {
  transition: transform var(--duration-normal) var(--ease-in-out),
              box-shadow var(--duration-normal) var(--ease-in-out);
}

.card-interactive:active {
  transform: scale(0.98);
  box-shadow: var(--shadow-sm);
}

/* Page transitions */
.page-enter {
  animation: slideUp var(--duration-slow) var(--ease-out);
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## 🧩 React Native Component Mapping

### Typography
```jsx
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  h1: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 40,
    letterSpacing: -0.5,
    color: '#2D2D2D',
  },
  h2: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 32,
    letterSpacing: -0.3,
    color: '#2D2D2D',
  },
  body: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 22,
    color: '#2D2D2D',
  },
  caption: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    color: '#6B6B6B',
  },
});
```

### Spacing
```jsx
const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

// Kullanım
<View style={{ paddingHorizontal: spacing.xl, paddingVertical: spacing.xxl }}>
```

### Colors
```jsx
const colors = {
  background: '#F5F1E8',
  card: '#FFFFFF',
  text: {
    primary: '#2D2D2D',
    secondary: '#6B6B6B',
  },
  accent: {
    yellow: '#FFE99F',
    green: '#6DD5A3',
    sage: '#A8C5B5',
  },
};
```

---

## ✅ Implementation Checklist

### Phase 1: Foundation
- [ ] Font ailesini projeye ekle (Inter)
- [ ] Color palette'i theme dosyasına tanımla
- [ ] Spacing sistem sabitlerini tanımla
- [ ] Base component'leri oluştur (Text, Button, Card)

### Phase 2: Components
- [ ] Profile header component
- [ ] Timeline card component
- [ ] Timeline dot/line component
- [ ] Video player card

### Phase 3: Screens
- [ ] "Bugünki Görevlerin" ekranı
- [ ] Navigation integration
- [ ] Animations ekle

### Phase 4: Polish
- [ ] Dark mode variant (opsiyonel)
- [ ] Accessibility labels
- [ ] Performance optimization
- [ ] User testing

---

## 📎 Design Assets Needed

### Icons
- Profile avatar placeholder
- Video play icon (24x24, 32x32)
- Navigation icons (Home, Discover, Profile vb.)

### Illustrations
- Doğal elementler (yaprak, bitki siluetleri)
- Video thumbnail placeholder
- Empty states

### Export Specs
- @1x: Base resolution
- @2x: Retina (iOS/Android)
- @3x: iPhone Plus models
- Format: PNG (illustrations), SVG (icons)

---

## 🎯 Brand Voice Principles

1. **Sıcak ve Destekleyici** - "Merhaba" ile başla, adıyla hitap et
2. **Kısa ve Net** - 30 saniye, 3. gün gibi somut bilgiler
3. **İlerleme Odaklı** - "Yendim", "başardım" gibi pozitif dil
4. **Kişisel** - "Senin rotanı belirleyelim" değil "Rotanı belirle"

---

**Son güncelleme:** 11 Mart 2026
**Versiyon:** 1.0
