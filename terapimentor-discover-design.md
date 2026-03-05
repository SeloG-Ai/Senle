# TerapiMentör - Keşfet Sayfası Tasarım Spesifikasyonu

## 🎨 Genel Yapı (Calm Analizi)

### Tipografi Hiyerarşisi

```
Sayfa Başlığı (Keşfet)
├─ Font: SF Pro Display / Inter Bold
├─ Size: 28-32px
├─ Weight: 700
├─ Color: #FFFFFF
└─ Letter-spacing: -0.5px

Arama Çubuğu Placeholder
├─ Font: SF Pro Text / Inter Regular
├─ Size: 16-17px
├─ Weight: 400
├─ Color: #FFFFFF opacity 70%
└─ Padding: 16px 20px

Section Başlıkları (Günün Önerileri, Hedefine Göre vb.)
├─ Font: SF Pro Display / Inter Semibold
├─ Size: 22-24px
├─ Weight: 600
├─ Color: #FFFFFF
└─ Margin-bottom: 16px

Kart Başlıkları
├─ Font: SF Pro Display / Inter Semibold
├─ Size: 16-18px
├─ Weight: 600
├─ Color: #FFFFFF
└─ Line-height: 1.3

Kart Alt Metinler
├─ Font: SF Pro Text / Inter Regular
├─ Size: 13-14px
├─ Weight: 400
├─ Color: #FFFFFF opacity 80%
└─ Line-height: 1.4

Pill/Chip Butonlar (3 dk, 5 dk vb.)
├─ Font: SF Pro Text / Inter Medium
├─ Size: 14-15px
├─ Weight: 500
└─ Color: #FFFFFF
```

---

## 📐 Spacing & Layout

```
Container Padding
├─ Horizontal: 20px
└─ Vertical sections: 24-32px arası

Search Bar
├─ Height: 52px
├─ Border-radius: 26px (tam yuvarlak)
├─ Margin: 16px 20px 24px
└─ Background: rgba(255,255,255,0.15)

Section Spacing
├─ Başlık ile kartlar arası: 16px
└─ Section'lar arası: 32-40px

Card Grid (Browse by Goal gibi)
├─ 2 kolon
├─ Gap: 16px horizontal, 16px vertical
├─ Card aspect-ratio: ~4:3
└─ Border-radius: 16px

Horizontal Scroll Cards (Dailies)
├─ Card width: ~280px
├─ Gap: 12px
├─ Padding-left (başlangıç): 20px
└─ Padding-right (son kart): 20px

Chip/Pill Grid
├─ Gap: 8px
├─ Height: 40-44px
├─ Padding: 12px 20px
└─ Border-radius: 20px
```

---

## 🎨 Color Palette (Calm-inspired)

```css
/* Background */
--bg-gradient-start: #1E3A5F;
--bg-gradient-end: #0F2744;

/* Cards */
--card-overlay: rgba(0, 0, 0, 0.2);
--card-border: rgba(255, 255, 255, 0.1);

/* Interactive */
--search-bg: rgba(255, 255, 255, 0.15);
--chip-bg: rgba(255, 255, 255, 0.12);
--chip-bg-hover: rgba(255, 255, 255, 0.2);

/* Text */
--text-primary: #FFFFFF;
--text-secondary: rgba(255, 255, 255, 0.8);
--text-tertiary: rgba(255, 255, 255, 0.6);

/* Accents */
--premium-lock: rgba(0, 0, 0, 0.4);
--overlay-gradient: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.5) 100%);
```

---

## 🧩 Component Breakdown

### 1. Header + Search
```
┌─────────────────────────────┐
│        Keşfet               │ (centered, 32px)
│                             │
│  🔍 Başlık, konu veya tema │ (search bar, 52px height)
└─────────────────────────────┘
Spacing: 20px padding, 16px gap
```

### 2. Today's Recommendations (Horizontal Scroll)
```
┌─────────────────────────────────────────┐
│ Günün Önerileri          Tümünü Gör >   │
│                                         │
│ ┌────────┐ ┌────────┐ ┌────────┐      │
│ │  IMG   │ │  IMG   │ │  IMG   │      │
│ │        │ │        │ │        │      │
│ │ Başlık │ │ Başlık │ │ Başlık │      │
│ └────────┘ └────────┘ └────────┘      │
└─────────────────────────────────────────┘
Card: 280px width, 16px border-radius
Gap: 12px between cards
```

### 3. Browse by Goal (2-Column Grid)
```
┌───────────────────────────────────┐
│ Hedefe Göre Göz At      Tümünü >  │
│                                   │
│ ┌─────────┐  ┌─────────┐        │
│ │  IMG    │  │  IMG    │        │
│ │ Uyumak  │  │ Rahatla │        │
│ └─────────┘  └─────────┘        │
│                                   │
│ ┌─────────┐  ┌─────────┐        │
│ │  IMG    │  │  IMG    │        │
│ │ Medit.  │  │ Alışkan.│        │
│ └─────────┘  └─────────┘        │
└───────────────────────────────────┘
Grid: 2 columns, 16px gap
Aspect ratio: ~4:3
```

### 4. Time Filter Chips (Horizontal Scroll)
```
┌────────────────────────────────────┐
│ Süreye Göre Meditasyonlar          │
│                                    │
│ [3 dk] [5 dk] [10 dk] [15 dk] ... │
└────────────────────────────────────┘
Chip: 40px height, 20px border-radius
Padding: 12px 20px
```

---

## 🎯 TerapiMentör'e Uyarlama Önerileri

### Renk Değişiklikleri
```css
/* TerapiMentör brandingine göre ayarla */
--tm-primary: #YourBrandColor;
--tm-gradient-start: #YourGradientStart;
--tm-gradient-end: #YourGradientEnd;
```

### İçerik Kategorileri
- **Günün Önerileri** (kişiselleştirilmiş)
- **Hedefe Göre** (Uyku, Anksiyete, Motivasyon, İlişkiler, vb.)
- **Süre Filtresi** (5dk, 10dk, 15dk, 20dk+)
- **Öne Çıkan Koleksiyonlar** (Başlangıç Serisi, Uzman Tavsiyeleri, vb.)

### Premium İşaretleme
- Kilit simgesi: Sol üst köşe, subtle shadow
- Background: rgba(0,0,0,0.4)
- Size: 24x24px

---

## 📱 Responsive Considerations

### Card Sizes
```
Small devices (<375px):
- Horizontal scroll cards: 260px
- Grid: tek kolon düşünülebilir

Medium+ (375px+):
- Horizontal scroll cards: 280px
- Grid: 2 kolon

Tablet (768px+):
- Grid: 3-4 kolon
- Horizontal scroll: 320px cards
```

---

## 🎬 Animations & Micro-interactions

```css
/* Card Hover/Press */
.card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.card:active {
  transform: scale(0.97);
}

/* Chip Selection */
.chip {
  transition: background 0.15s ease;
}
.chip-active {
  background: rgba(255, 255, 255, 0.25);
}

/* Search Focus */
.search-bar:focus {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
```

---

## ✅ Implementation Checklist

- [ ] Gradient background (2 renk, vertical)
- [ ] Centered page title, bold, 32px
- [ ] Full-width search bar, rounded, semi-transparent
- [ ] Section headers: 24px, semibold, "Tümünü Gör" sağda
- [ ] Horizontal scroll için snap-scroll ekle
- [ ] Grid kartlar: aspect-ratio maintain et
- [ ] Premium lock overlay
- [ ] Bottom navigation: 5 tabs, center selected
- [ ] Smooth scroll behavior
- [ ] Lazy loading images

---

## 📎 Export Specs for Figma/Design

**Frame:** 375 x 812 (iPhone X base)
**Safe area top:** 44px (status bar)
**Safe area bottom:** 34px (home indicator)
**Grid:** 8px baseline

**Assets needed:**
- Card images: 560x420px min (@2x)
- Icons: 24x24px, vector
- Lock icon: 24x24px

