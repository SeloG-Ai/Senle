# Bugünki Görevlerin Ekranı — Component Spesifikasyonu

> **Senle Brand Guide'a uygun detaylı ölçüler**  
> Her component için: boyut, renk, font, spacing, border-radius

---

## 📐 Ekran Genel Özellikleri

```
Canvas
├─ Max Width: 430px (mobil PWA limit)
├─ Padding Horizontal: 16px (px-4)
├─ Padding Vertical Top: 24px
├─ Padding Vertical Bottom: 80px (bottom nav için)
└─ Background: Gradient

Background Gradient:
├─ Direction: 180deg (top to bottom)
├─ Color 1: #FFFFFF (0%)
├─ Color 2: #FFF9F3 (77%)
├─ Color 3: #FFF8F0 (100%)
└─ Opacity: 60%
```

---

## 🌿 1. Dekoratif Arka Plan Elementleri

```
Yaprak Silueti (Sol Üst)
├─ Position: Absolute
├─ Top: -40px
├─ Left: -20px
├─ Width: 160px
├─ Height: 160px
├─ Color: #A8C5B5 (sage green - brand'den yok ama doğal element)
├─ Opacity: 8%
├─ Border Radius: 80px (circle)
├─ Transform: rotate(-15deg)
└─ Pointer Events: none

Yaprak Silueti (Sağ Üst)
├─ Position: Absolute
├─ Top: 100px
├─ Right: -30px
├─ Width: 140px
├─ Height: 140px
├─ Color: #A8C5B5
├─ Opacity: 8%
├─ Border Radius: 70px (circle)
├─ Transform: rotate(25deg)
└─ Pointer Events: none
```

---

## 👤 2. Avatar (Profil Fotoğrafı)

```
Container
├─ Position: Relative
├─ Width: 200px (circle çapı)
├─ Height: 200px
├─ Margin: 0 auto (ortala)
└─ Margin Bottom: 24px

Avatar Image
├─ Width: 200px
├─ Height: 200px
├─ Border Radius: 9999px (tam circle)
├─ Border Width: 4px
├─ Border Color: #7CB342 (secondary-500, yeşil - online/aktif)
└─ Object Fit: cover

Online Dot (Yeşil Nokta)
├─ Position: Absolute
├─ Bottom: 8px
├─ Right: 8px
├─ Width: 24px
├─ Height: 24px
├─ Background: #7CB342 (secondary-500)
├─ Border Radius: 9999px (circle)
├─ Border Width: 4px
└─ Border Color: #FFFFFF (arka plandan ayırır)
```

---

## 💬 3. Speech Bubble (Konuşma Baloncuğu)

```
Bubble Container
├─ Width: 100% (max: 398px, ekran padding'den sonra)
├─ Background: #FFFFFF
├─ Border Radius: 12px (radius-md)
├─ Padding: 20px (tüm yönler eşit)
├─ Margin Bottom: 32px
├─ Box Shadow: 0 2px 8px rgba(0,0,0,0.04)
└─ Position: Relative

Bubble Tail (Kuyruk - opsiyonel)
├─ Position: Absolute
├─ Top: -12px
├─ Left: 50% (transform: translateX(-50%))
├─ Width: 0
├─ Height: 0
├─ Border: 12px solid transparent
├─ Border Bottom Color: #FFFFFF
└─ Border Top: 0

Greeting Text (İlk Satır)
├─ Font Family: Manrope
├─ Font Size: 16px
├─ Font Weight: 600 (semibold)
├─ Line Height: 24px
├─ Color: #19334C (text color - brand)
├─ Margin Bottom: 4px
└─ Letter Spacing: 0%

Message Text (İkinci Satır)
├─ Font Family: Manrope
├─ Font Size: 15px
├─ Font Weight: 400 (regular)
├─ Line Height: 24px
├─ Color: #19334C
└─ Letter Spacing: 0%
```

**Alternatif (Poppins - Hero Variant):**
```
Eğer Poppins kullanılacaksa (brand'deki hero baloncuk):
├─ Font Family: Poppins
├─ Font Size: 12px
├─ Font Weight: 500
├─ Line Height: 16px
├─ Color: #2B3731
└─ Padding: 12px
```

---

## 📝 4. Section Title ("Bugünki Görevlerin")

```
Title Text
├─ Font Family: SF Pro Display, -apple-system, BlinkMacSystemFont
├─ Font Size: 22px (1.375rem)
├─ Font Weight: 600 (semibold)
├─ Line Height: 24px
├─ Letter Spacing: -0.5%
├─ Color: #4A403A (sıcak kahve - brand guide'dan)
├─ Margin Bottom: 8px
└─ Text Transform: none

Subtitle Text ("Ankette verdiğin yanıtlarla oluşturuldu")
├─ Font Family: Manrope
├─ Font Size: 14px
├─ Font Weight: 400 (regular)
├─ Line Height: 24px
├─ Color: #9B8B7E (muted text - brand)
├─ Margin Bottom: 20px
└─ Letter Spacing: 0%
```

---

## 📍 5. Timeline (Çizgi + Dotlar)

```
Timeline Container
├─ Margin Left: 20px (dot merkezleme için)
├─ Position: Relative
└─ Padding Bottom: 40px

Timeline Line (Dikey Çizgi)
├─ Position: Absolute
├─ Left: 6px (12px dot çapının ortası)
├─ Top: 0
├─ Bottom: 0
├─ Width: 2px
├─ Background: #E2E8F0 (neutral-200 - brand)
└─ Z-index: 0

Timeline Dot (Nokta)
├─ Width: 12px
├─ Height: 12px
├─ Border Radius: 9999px (circle)
├─ Position: Absolute
├─ Left: 0
├─ Background: transparent (inactive)
├─ Border Width: 2px
├─ Border Color: #E2E8F0 (inactive)
└─ Z-index: 1

Dot States:
│
├─ Active (Şu anki görev)
│   ├─ Background: transparent
│   ├─ Border Color: #A0AEC0 (neutral-400)
│   └─ Border Width: 2px
│
├─ Completed (Tamamlanmış)
│   ├─ Background: #F59E0B (accent-500, turuncu)
│   ├─ Border Color: #F59E0B
│   └─ Border Width: 0
│
└─ Future (Henüz gelmedi)
    ├─ Background: transparent
    ├─ Border Color: #E2E8F0
    └─ Border Width: 2px
```

---

## 🎴 6. Task Card (Video Görev Kartı)

```
Card Container
├─ Width: 100% (max: calc(100% - 40px), timeline offset için)
├─ Margin Left: 40px (timeline'dan sonra)
├─ Margin Bottom: 16px
├─ Background: #FFFFFF
├─ Border Radius: 12px (radius-md)
├─ Padding: 16px
├─ Box Shadow: 0 2px 8px rgba(0,0,0,0.04)
├─ Position: Relative
└─ Display: Flex, Flex Direction: Row

Accent Bar (Sol Kenar - Sadece Tamamlananlar)
├─ Position: Absolute
├─ Left: 0
├─ Top: 0
├─ Bottom: 0
├─ Width: 4px
├─ Background: #F59E0B (accent-500, turuncu)
├─ Border Radius: 12px 0 0 12px
└─ Visibility: visible (eğer completed = true)

Icon/Thumbnail Container
├─ Width: 80px
├─ Height: 80px
├─ Margin Right: 16px
├─ Border Radius: 12px
├─ Overflow: hidden
└─ Background: linear-gradient(135deg, #FFE99F 0%, #F59E0B 100%)

Icon/Thumbnail (Video İkon veya Resim)
├─ Width: 100%
├─ Height: 100%
├─ Object Fit: cover
└─ Eğer placeholder ikon: Font Size 40px, Emoji 📹

Text Container
├─ Flex: 1
├─ Display: Flex
├─ Flex Direction: Column
└─ Justify Content: Center

Card Title ("Video izle, 30 saniye")
├─ Font Family: Manrope
├─ Font Size: 16px
├─ Font Weight: 600 (semibold)
├─ Line Height: 24px
├─ Color: #19334C (text - brand)
├─ Margin Bottom: 4px
└─ Letter Spacing: 0%

Card Subtitle ("Ansiyetemi yendim 3. gün")
├─ Font Family: Manrope
├─ Font Size: 14px
├─ Font Weight: 400 (regular)
├─ Line Height: 24px
├─ Color: #9B8B7E (muted - brand)
└─ Letter Spacing: 0%
```

---

## 🎨 Renk Özeti (Brand Guide'dan)

```css
/* Ana Renkler */
--bg-gradient-1: #FFFFFF;
--bg-gradient-2: #FFF9F3;
--bg-gradient-3: #FFF8F0;

/* Metin */
--text-primary: #19334C;       /* Ana metin (koyu lacivert) */
--text-muted: #9B8B7E;          /* İkincil metin */
--text-section: #4A403A;        /* Bölüm başlıkları (kahve) */

/* Buton & Interaktif */
--green-button: #566745;        /* CTA buton (orman yeşili) */
--primary-500: #4A90A4;         /* Teal-mavi (vurgu) */
--secondary-500: #7CB342;       /* Yeşil (başarı, online) */
--accent-500: #F59E0B;          /* Turuncu (XP, ödül) */

/* Neutral */
--border: #E0E0E0;              /* Input/card border */
--neutral-200: #E2E8F0;         /* Bölücü çizgiler */
--neutral-400: #A0AEC0;         /* Placeholder */

/* Card */
--card-bg: #FFFFFF;
--card-shadow: 0 2px 8px rgba(0,0,0,0.04);
```

---

## 📏 Spacing Özeti

```
Ekran Padding:
├─ Horizontal: 16px
├─ Top: 24px
└─ Bottom: 80px (nav için)

Avatar:
├─ Size: 200px
└─ Margin Bottom: 24px

Speech Bubble:
├─ Padding: 20px
└─ Margin Bottom: 32px

Section Title:
├─ Margin Bottom: 8px (subtitle ile arası)

Section Subtitle:
├─ Margin Bottom: 20px (kartlar ile arası)

Timeline:
├─ Margin Left: 20px
├─ Dot → Card: 40px (total offset)

Card:
├─ Padding: 16px
├─ Margin Bottom: 16px (kartlar arası)

Card Icon:
├─ Size: 80px
├─ Margin Right: 16px (text ile arası)

Card Text:
├─ Title → Subtitle: 4px
```

---

## 🎯 Tipografi Özeti

```
Font Families:
├─ Manrope (primary, UI elements)
├─ Poppins (hero baloncuk - opsiyonel)
└─ SF Pro Display (bölüm başlıkları)

Sizes:
├─ Section Title: 22px, weight 600, line-height 24px
├─ Bubble Greeting: 16px, weight 600, line-height 24px
├─ Bubble Message: 15px, weight 400, line-height 24px
├─ Subtitle: 14px, weight 400, line-height 24px
├─ Card Title: 16px, weight 600, line-height 24px
└─ Card Subtitle: 14px, weight 400, line-height 24px
```

---

## ✅ Implementation Checklist

- [ ] Gradient background oluştur
- [ ] Avatar component (200px, border, online dot)
- [ ] Speech bubble (20px padding, shadow)
- [ ] Section title (SF Pro Display, 22px)
- [ ] Timeline line + dots (3 state: active/completed/future)
- [ ] Task card (80px icon, 16px padding, accent bar)
- [ ] Font'ları import et (Manrope, SF Pro fallback)
- [ ] Renk değişkenlerini tanımla
- [ ] Spacing sabitlerini uygula
- [ ] Shadow'ları ekle

---

**Versiyon:** 1.0  
**Tarih:** 11 Mart 2026  
**Referans:** Senle Brand Guide + Ekran screenshot
