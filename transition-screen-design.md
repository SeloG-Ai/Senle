# Geçiş Ekranı Tasarımı - TerapiMentör Onboarding

## Ekran Yapısı

```
┌─────────────────────────────┐
│                             │
│      ● ● ● ○ ○ ○ ○         │ ← Progress dots (3/7 dolu - yeşil)
│         3/7                 │ ← Sayaç (küçük, gri)
│                             │
│                             │
│         [Spacer]            │
│                             │
│           ✓                 │ ← Checkmark (yeşil, büyük, fade-in)
│                             │
│       Harika!               │ ← Ana mesaj (bold, koyu gri)
│                             │
│   İyi gidiyoruz ✨          │ ← Alt mesaj (küçük, hafif gri)
│                             │
│         [Spacer]            │
│                             │
│    [Loading indicator]      │ ← Subtle spinner/dots (opsiyonel)
│                             │
└─────────────────────────────┘
```

## Animasyon Akışı

**0.0s** - İlerle butonuna basıldı
- Mevcut ekran fade out (0.2s)

**0.2s** - Geçiş ekranı fade in
- Progress dot animasyonu (0.3s): Yeni nokta doluyor
- Checkmark scale in + hafif bounce (0.4s)
- "Harika!" text fade in (0.3s)
- "İyi gidiyoruz" text fade in (0.2s delay)

**1.0s** - Geçiş ekranı fade out
- Sonraki soru ekranı fade in

**Toplam süre:** ~1.2 saniye

## Renk Paleti

- **Progress dots (dolu):** #6B9E78 (yeşil - mevcut buton tonu)
- **Progress dots (boş):** #E5E5E5 (açık gri)
- **Checkmark:** #6B9E78 (yeşil)
- **Ana mesaj:** #2D3748 (koyu gri)
- **Alt mesaj:** #A0AEC0 (orta gri)
- **Arka plan:** #FFFFFF (beyaz)

## Mesaj Varyasyonları (Rastgele Göster)

1. "Harika! / İyi gidiyoruz ✨"
2. "Süper! / Devam ediyoruz 🌱"
3. "Mükemmel! / Neredeyse hazırsın 💫"
4. "Çok iyi! / İlerliyoruz 🌿"
5. "Tebrikler! / Bir adım daha 🌟"

İlk 2-3 soruda pozitif, son 2-3 soruda "Neredeyse tamamladın!" tarzı olabilir.

## Teknik Detaylar & Spacing

### Progress Bar Bölümü (Üst)
- **Progress dots:** 8px çap, aralarında 8px boşluk
- **Sayaç (3/7):** 14px font, medium weight
- **Top padding:** 24px (ekranın üstünden)
- **Bottom padding:** 32px (dots'tan checkmark'a)

### Checkmark & Mesajlar (Orta)
- **Checkmark icon:** 56px boyut
- **Checkmark renk:** #6B9E78
- **Checkmark animasyon:** scale(0) → scale(1.1) → scale(1), 0.4s cubic-bezier
- **Checkmark margin-bottom:** 16px

### Ana Mesaj ("Harika!")
- **Font size:** 24px
- **Font weight:** 600 (semibold)
- **Line height:** 32px
- **Color:** #2D3748
- **Margin-bottom:** 8px

### Alt Mesaj ("İyi gidiyoruz ✨")
- **Font size:** 16px
- **Font weight:** 400 (regular)
- **Line height:** 24px
- **Color:** #A0AEC0
- **Margin-bottom:** 40px

### Loading Indicator (Opsiyonel)
- **Boyut:** 20px spinner veya 3 dots
- **Color:** #6B9E78
- **Bottom padding:** 32px

### Ekran Genel
- **Background:** #FFFFFF
- **Safe area padding:** 16px yan kenarlar
- **Vertical centering:** flex center veya absolute center
- **Transition duration:** 
  - Fade out: 200ms ease-out
  - Fade in: 300ms ease-in
  - Checkmark bounce: 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55)
  
### Progress Dot Animasyonu
- **Boş dot:** border 2px solid #E5E5E5, background transparent
- **Dolu dot:** background #6B9E78, border none
- **Fill transition:** 300ms ease-in-out (width artışı)

## Alternatif: Daha Minimal

Eğer 1.2 saniye uzun gelirse:

```
┌─────────────────────────────┐
│                             │
│      ● ● ● ○ ○ ○ ○         │
│         3/7                 │
│                             │
│           ✓                 │
│       Harika!               │
│                             │
└─────────────────────────────┘
```

**Toplam süre:** 0.6 saniye
- Alt mesaj yok
- Sadece checkmark + tek kelime
- Daha hızlı geçiş
