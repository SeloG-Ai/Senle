# Bugünki Görevlerin Ekranı — Tek Akış Component Spec

> Yukarıdan aşağıya, her element arası spacing ile birlikte

---

## 📱 Ekran Container

```
Max Width: 430px
Padding Left/Right: 16px
Padding Top: 24px
Padding Bottom: 80px (bottom nav için)
Background: Gradient
  ├─ 180deg
  ├─ #FFFFFF (0%)
  ├─ #FFF9F3 (77%)
  └─ #FFF8F0 (100%) - opacity 60%
```

---

## 🎨 Yukarıdan Aşağıya Component Flow

### Dekoratif Yaprak (Arka Plan - Sol Üst)
```
Position: Absolute
Top: -40px
Left: -20px
Width: 160px
Height: 160px
Border Radius: 80px (circle)
Background: #A8C5B5
Opacity: 8%
Transform: rotate(-15deg)
Z-index: -1
```

### Dekoratif Yaprak (Arka Plan - Sağ Üst)
```
Position: Absolute
Top: 100px
Right: -30px
Width: 140px
Height: 140px
Border Radius: 70px (circle)
Background: #A8C5B5
Opacity: 8%
Transform: rotate(25deg)
Z-index: -1
```

---

### 1️⃣ AVATAR (Profil Fotoğrafı)
```
Width: 200px
Height: 200px
Border Radius: 9999px (circle)
Border: 4px solid #7CB342
Margin: 0 auto (center)
Object Fit: cover

  Online Dot (Alt sağ köşe)
  ├─ Width: 24px
  ├─ Height: 24px
  ├─ Background: #7CB342
  ├─ Border: 4px solid #FFFFFF
  ├─ Border Radius: 9999px
  ├─ Position: Absolute
  ├─ Bottom: 8px
  └─ Right: 8px
```

↓ **24px boşluk**

---

### 2️⃣ SPEECH BUBBLE (Konuşma Baloncuğu)
```
Width: 100%
Background: #FFFFFF
Border Radius: 12px
Padding: 20px (all sides)
Box Shadow: 0 2px 8px rgba(0,0,0,0.04)

  Greeting Text ("Merhaba, Selahattin")
  ├─ Font: Manrope
  ├─ Size: 16px
  ├─ Weight: 600
  ├─ Line Height: 24px
  ├─ Color: #19334C
  └─ Margin Bottom: 4px
  
  ↓ 4px boşluk
  
  Message Text ("Hadi ilk rotanı 30 saniyede...")
  ├─ Font: Manrope
  ├─ Size: 15px
  ├─ Weight: 400
  ├─ Line Height: 24px
  └─ Color: #19334C
```

↓ **32px boşluk**

---

### 3️⃣ SECTION TITLE
```
"Bugünki Görevlerin"
├─ Font: SF Pro Display, -apple-system
├─ Size: 22px
├─ Weight: 600
├─ Line Height: 24px
├─ Letter Spacing: -0.5%
└─ Color: #4A403A
```

↓ **8px boşluk**

### 3️⃣.5 SECTION SUBTITLE
```
"Ankette verdiğin yanıtlarla oluşturuldu"
├─ Font: Manrope
├─ Size: 14px
├─ Weight: 400
├─ Line Height: 24px
└─ Color: #9B8B7E
```

↓ **20px boşluk**

---

### 4️⃣ TIMELINE + TASK CARDS

**Timeline Container**
```
Margin Left: 20px (dot merkezleme için)
Position: Relative
```

**Timeline Vertical Line (Tüm kartların solunda)**
```
Position: Absolute
Left: 6px (12px dot'un ortası)
Top: 0
Bottom: 0
Width: 2px
Background: #E2E8F0
Z-index: 0
```

---

#### 📍 Timeline Item 1 (İlk Görev)

**Timeline Dot**
```
Width: 12px
Height: 12px
Border Radius: 9999px (circle)
Position: Absolute
Left: 0
Top: 0

State: COMPLETED
├─ Background: #F59E0B
├─ Border: none
└─ Z-index: 1
```

← **40px yatay offset** →

**Task Card**
```
Width: calc(100% - 40px)
Margin Left: 40px
Background: #FFFFFF
Border Radius: 12px
Padding: 16px
Box Shadow: 0 2px 8px rgba(0,0,0,0.04)
Display: Flex
Flex Direction: Row

  Accent Bar (Sol kenar - sadece completed'larda)
  ├─ Position: Absolute
  ├─ Left: 0
  ├─ Top: 0
  ├─ Bottom: 0
  ├─ Width: 4px
  ├─ Background: #F59E0B
  └─ Border Radius: 12px 0 0 12px
  
  Icon/Thumbnail
  ├─ Width: 80px
  ├─ Height: 80px
  ├─ Border Radius: 12px
  ├─ Margin Right: 16px
  ├─ Background: linear-gradient(135deg, #FFE99F 0%, #F59E0B 100%)
  └─ Object Fit: cover (eğer resim varsa)
  
  ← 16px boşluk →
  
  Text Container (Flex: 1)
  │
  ├─ Card Title ("Video izle, 30 saniye")
  │   ├─ Font: Manrope
  │   ├─ Size: 16px
  │   ├─ Weight: 600
  │   ├─ Line Height: 24px
  │   ├─ Color: #19334C
  │   └─ Margin Bottom: 4px
  │
  │   ↓ 4px boşluk
  │
  └─ Card Subtitle ("Ansiyetemi yendim 3. gün")
      ├─ Font: Manrope
      ├─ Size: 14px
      ├─ Weight: 400
      ├─ Line Height: 24px
      └─ Color: #9B8B7E
```

↓ **16px boşluk**

---

#### 📍 Timeline Item 2 (İkinci Görev)

**Timeline Dot**
```
Width: 12px
Height: 12px
Border Radius: 9999px
Position: Absolute
Left: 0
Top: 0

State: ACTIVE (Şu anki)
├─ Background: transparent
├─ Border: 2px solid #A0AEC0
└─ Z-index: 1
```

← **40px yatay offset** →

**Task Card**
```
(Yukarıdakiyle aynı ölçüler)
Width: calc(100% - 40px)
Margin Left: 40px
Background: #FFFFFF
Border Radius: 12px
Padding: 16px
Box Shadow: 0 2px 8px rgba(0,0,0,0.04)

NOT: Accent Bar YOK (sadece completed'larda var)

  Icon: 80px, margin-right: 16px
  ├─ 16px boşluk →
  └─ Text: Title (16px/600) + Subtitle (14px/400)
```

↓ **16px boşluk**

---

#### 📍 Timeline Item 3 (Üçüncü Görev)

**Timeline Dot**
```
Width: 12px
Height: 12px
Border Radius: 9999px
Position: Absolute
Left: 0
Top: 0

State: FUTURE (Henüz gelmedi)
├─ Background: transparent
├─ Border: 2px solid #E2E8F0
└─ Z-index: 1
```

← **40px yatay offset** →

**Task Card**
```
(Yukarıdakiyle aynı)
Width: calc(100% - 40px)
Margin Left: 40px
Background: #FFFFFF
Border Radius: 12px
Padding: 16px
Box Shadow: 0 2px 8px rgba(0,0,0,0.04)

  Icon: 80px, margin-right: 16px
  ├─ 16px boşluk →
  └─ Text: Title (16px/600) + Subtitle (14px/400)
```

↓ **16px boşluk** (eğer başka kart varsa)

---

## 📊 Tüm Renklerin Özeti

```css
/* Background */
--bg-white: #FFFFFF
--bg-cream-1: #FFF9F3
--bg-cream-2: #FFF8F0

/* Text */
--text-primary: #19334C     (Ana metin, koyu lacivert)
--text-muted: #9B8B7E       (Subtitle, açıklama)
--text-section: #4A403A     (Bölüm başlığı, kahve)

/* Brand Colors */
--green-success: #7CB342    (Online dot, başarı)
--orange-accent: #F59E0B    (XP, ödül, accent bar)
--teal-primary: #4A90A4     (Vurgu - burada kullanılmamış)

/* Neutral */
--border: #E0E0E0           (Genel border)
--timeline-line: #E2E8F0    (Timeline çizgisi)
--dot-active: #A0AEC0       (Aktif dot border)
--dot-future: #E2E8F0       (Future dot border)

/* Shadows */
--shadow-card: 0 2px 8px rgba(0,0,0,0.04)
```

---

## 📏 Tüm Spacing'lerin Özeti

```
Ekran padding (yatay): 16px
Ekran padding (üst): 24px
Ekran padding (alt): 80px

Avatar → Speech Bubble: 24px
Speech Bubble → Section Title: 32px
Section Title → Subtitle: 8px
Subtitle → Timeline: 20px

Timeline offset (sol): 20px
Timeline dot → Card: 40px (total)
Card padding (iç): 16px
Card icon → Text: 16px
Card title → Subtitle: 4px
Card → Card arası: 16px

Speech bubble padding: 20px (all)
Speech bubble greeting → message: 4px
```

---

## ✍️ Tüm Fontların Özeti

```
Font Families:
├─ Manrope (primary, UI elements)
├─ SF Pro Display (section titles)
└─ Poppins (hero balloon - bu ekranda kullanılmamış)

Kullanımlar:
├─ Avatar greeting: Manrope 16px/600
├─ Avatar message: Manrope 15px/400
├─ Section title: SF Pro 22px/600, letter-spacing -0.5%
├─ Section subtitle: Manrope 14px/400
├─ Card title: Manrope 16px/600
└─ Card subtitle: Manrope 14px/400

Tüm line-height'lar: 24px (hepsi align olsun diye)
```

---

## ✅ Tek Bakışta Ölçü Kartı

```
200px    Avatar (circle, 4px border)
 ↓ 24px
 
20px     Speech bubble padding
  ├─ 16px/600  Greeting
  ↓ 4px
  └─ 15px/400  Message
 ↓ 32px
 
22px/600  Section Title (SF Pro)
 ↓ 8px
14px/400  Subtitle (Manrope)
 ↓ 20px

Timeline
├─ 2px line (left: 6px)
├─ 12px dots (3 states)
└─ Cards (40px offset)
    ├─ 16px padding
    ├─ 80px icon
    ├─ 16px gap
    ├─ 16px/600 title
    ├─ 4px gap
    └─ 14px/400 subtitle
    
Card ↓ Card: 16px
```

---

**Versiyon:** 2.0 (Single Flow)  
**Tarih:** 11 Mart 2026  
**Format:** Top-to-bottom, her spacing belirtilmiş
