# Senle — Branding & Görsel Kimlik Rehberi

> Bu doküman, Senle uygulamasının görsel tasarım dilini tanımlar.  
> Marka için görsel içerik üretecek herkesin bu çerçeveyi referans alması beklenir.

---

## 🧭 Marka Kimliği

**Senle**, bireylerin duygusal iyilik hallerini geliştirmelerine öncülük eden bir **dijital terapi asistanı** uygulamasıdır. Kullanıcılar kişiselleştirilmiş "rotalar" aracılığıyla zihinsel sağlık egzersizleri yapar, günlük ruh hallerini takip eder ve bir AI koç eşliğinde ilerler.

### Marka Tonu
- **Sakin & Güvenilir** — Endişe değil, huzur yaratır
- **Sıcak & Teşvik Edici** — Yargılamaz, motive eder
- **Kişisel & Samimi** — "Sen" ile konuşur (ad kullanır, "Merhaba Ayşe!" gibi)
- **Minimalist & Odaklı** — Karmaşık değil, net ve sade

### Hedef Kitle
Duygusal yük taşıyan, terapi almaya hazır olmayabilecek ama bir adım atmak isteyen yetişkinler (18–45 yaş, Türkçe konuşan).

---

## 🎯 Proje Hedefleri

1. **Erişilebilir Zihinsel Destek** — Terapiste gidemeyenlere günlük, küçük adımlarla destek sunmak
2. **Süreklilik & Alışkanlık** — Seri (streak) sistemiyle her gün geri dönmeyi teşvik etmek
3. **Kişiselleştirme** — Onboarding cevaplarına göre kullanıcıya özel rotalar önermek
4. **Güvenli Alan** — Kullanıcının yargılanmadan duygularını ifade edebileceği bir ortam yaratmak
5. **XP & İlerleme** — Gamification (XP puanı, rozet, kutlama animasyonları) ile motivasyonu canlı tutmak

---

## 🎨 1. Renkler

Renk sistemi iki katmandan oluşur: **Tasarım token'ları** (CSS değişkenleri) ve **Component-level sabit renkler** (pratik kullanım).

### Birincil Palet (Primary) — Sakin Teal-Mavi
Güven, huzur ve profesyonelliği temsil eder. CTA butonlarda ve vurgu elementlerinde kullanılır.

| Token | Hex | Kullanım |
|---|---|---|
| `primary-50` | `#E8F4F8` | Açık arka planlar, hover state'ler |
| `primary-100` | `#D1E9F1` | Chat ikonu arka planı |
| `primary-400` | `#5CA8BC` | Focus ring'ler |
| **`primary-500`** | **`#4A90A4`** | **Ana renk (temel UI)** |
| `primary-600` | `#3B7383` | Hover state'leri |

### İkincil Palet (Secondary) — Büyüme Yeşili
Tamamlama, ilerleme ve sağlık temasını temsil eder. Başarı mesajlarında, rozet ve routa kartlarında kullanılır.

| Token | Hex | Kullanım |
|---|---|---|
| `secondary-50` | `#F1F8E9` | Açık yeşil arka planlar |
| **`secondary-500`** | **`#7CB342`** | **Başarı ikonları** |
| `secondary-600` | `#689F38` | CTA hover |

### Vurgu (Accent) — Teşvik Turuncusu
Enerji, motivasyon ve XP kazanımını temsil eder. Toast bildirimlerinde, XP animasyonlarında kullanılır.

| Token | Hex | Kullanım |
|---|---|---|
| **`accent-400`** | **`#F5A623`** | **XP ve streak ikon rengi** |
| **`accent-500`** | **`#F59E0B`** | **Vurgu (ödüller, kutlamalar)** |

### Nötr (Neutral) — Zemin Renkleri
Metin, arka plan ve sınırlar için kullanılır.

| Token | Hex | Kullanım |
|---|---|---|
| `neutral-50` | `#F7F9FC` | Sayfa zemini |
| `neutral-200` | `#E2E8F0` | Bölücü çizgiler |
| `neutral-400` | `#A0AEC0` | Placeholder metin |
| `neutral-700` | `#2D3748` | Varsayılan body metin |
| `neutral-900` | `#171923` | Başlık metinleri |

### Component-Level Sabit Renkler (Branding.ts)
Bunlar doğrudan component stil dosyasından gelen, Senle'ye özgü renklerdir:

| İsim | Hex | Kullanım |
|---|---|---|
| `text` | `#19334C` | Ana metin rengi (koyu lacivert) |
| `greenButton` | `#566745` | CTA buton rengi (orman yeşili) |
| `greenButtonSubtle` | `rgba(86,103,69,0.85)` | Buton hover/opacity varyantı |
| `bg` | `#FFF8F0` | Sayfa arka planı (sıcak krem) |
| `border` | `#E0E0E0` | Input ve card border'ları |
| `curvedBorder` | `#964B36` | Dekoratif çizgi aksanı (kiremit) |
| `darkBg` | `#1A1A1A` | Koyu arka planlar |

### Özel UI Renkleri (Sayfa Bazlı)
| Kullanım Yeri | Renk |
|---|---|
| Dashboard bölüm başlığı metni | `#4A403A` (sıcak kahve) |
| Kart subtitle/muted metin | `#9B8B7E` |
| Mood check-in kartı arka planı | `#1F3249` (koyu gece mavisi) |
| Kategori kartı arka planı | `#1A4071` (koyu okyanus mavisi) |
| Mood ikonu gradyanı | `#62B5EB → #6069E2` |
| Rota başlık metni | `#4A5D3F` (derin orman yeşili) |
| Muted yeşil metin | `#6B7C70` |

### Arka Plan Gradyanı
Sayfa arka planı sabit beyaz değil; sıcak kremaya doğru evrilen hafif bir gradyandır:
```
180deg: #FFFFFF (0%) → #FFF9F3 (77%) → #FFF8F0 (100%) — %60 opaklıkta
```

---

## ✍️ 2. Tipografi

Senle iki ana font ailesini birlikte kullanır.

### Font Ailesi 1 — **Manrope** *(Birincil)*
> Google Fonts — `https://fonts.google.com/specimen/Manrope`

Tüm UI elementlerinin (butonlar, kartlar, inputlar, etiketler) varsayılan fontu.

| Kullanım | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|
| Kart başlığı | 14px | 600 | 24px | 0% |
| Kart subtitle | 12px | 600 | 24px | 0% |
| Body / açıklama | 15px | 400 | 24px | 0% |
| Liste başlığı | 18px | 600 | 24px | 0% |
| Buton (primary) | 16px | 700 | 24px | — |
| Buton (link) | 16px | 700 | 24px | — |
| Input | 16px | 600 | — | — |
| Küçük etiket / link | 12px | 400 | 24px | -0.5% |
| Mood metin | 16px | 500 | 24px | -0.5% |
| Kategori etiketi | 18px | 700 | 24px | 0% |

### Font Ailesi 2 — **Poppins** *(İkincil — Hero alanı)*
> Google Fonts — `https://fonts.google.com/specimen/Poppins`

Yalnızca dashboard hero alanındaki konuşma baloncuğunda kullanılır.
- Size: 12px | Weight: 500 | Line Height: 16px | Color: `#2B3731`

### Font Ailesi 3 — **SF Pro Display / System** *(Bölüm Başlıkları)*
> Native system font (iOS optimizasyonu)

```css
font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', sans-serif;
font-size: 1.375rem; /* 22px */
font-weight: 600;
line-height: 24px;
letter-spacing: -0.5%;
color: #4A403A;
```
Dashboard'daki "Sana Özel Seçimler", "Mood Check-in" gibi bölüm başlıklarında kullanılır.

### Font Ailesi 4 — **Leckerli One** *(Dekoratif)*
> Google Fonts — Yalnızca özel vurgu/marka elementlerinde kullanılır (lüks hissi veren el yazısı stili).

### Font Ailesi 5 — **Inter** *(Sistem Fallback)*
> CSS değişkeni olarak tanımlı: `--font-sans`. Tailwind bazlı componentlerin varsayılan fallback'i.

---

## 📐 3. Spacing & Layout

### Temel Layout Kısıtı
Uygulama bir **mobil PWA**'dır. Tüm içerik `max-width: 430px` ile sınırlandırılmıştır (iPhone max genişliği referans).

### Padding Sistemi
| Kullanım | Değer |
|---|---|
| Sayfa yatay padding | `px-4` (16px) |
| Kart iç padding | `px-6 py-5` (24px / 20px) veya `px-5 py-4` |
| Input padding | `14px 20px` |
| Buton padding | `14px 0` (full width) |
| Kart içerik padding | `pl-4 (sol), pt-4, pb-8` |
| Horizontal scroll sol başlangıç | `paddingLeft: 20px` |

### Boşluk (Gap) Değerleri
| Kullanım | Değer |
|---|---|
| Kart listesi arası boşluk | `gap-4` (16px) |
| Bölümler arası | `mb-9` (36px) veya `mb-6` (24px) |
| Bölüm başlığı altı | `mb-5` (20px) |
| Buton sonrası | `mt-3` (12px) |

### Border Radius Sistemi
| Token | Değer | Kullanım |
|---|---|---|
| `radius-sm` | `0.375rem` (6px) | Küçük elementler |
| `radius-md` | `0.75rem` (12px) | **Kartlar, inputlar, butonlar** |
| `radius-lg` | `1rem` (16px) | Büyük paneller |
| `radius-xl` | `1.5rem` (24px) | Modal, bottom sheet |
| `radius-2xl` | `2rem` (32px) | Hero bölümleri |
| `radius-full` | `9999px` | **Pill butonlar, avatarlar, ikonlar** |

### Gölge (Shadow)
```css
/* Standart gölge */
box-shadow: 0 4px 16px rgba(0,0,0,0.08);

/* Kart gölgesi (hafif) */
box-shadow: 2px 8px 16px 0 rgba(0,0,0,0.05);

/* Kart gölgesi (beyaz üzeri beyaz) */
box-shadow: 0 0 0 1px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04);
```

### Navigasyon & Chrome
- **Bottom Nav yüksekliği:** `5rem` (80px)
- **İçerik alt padding:** `pb-20` (80px) — nav ile çakışmaması için
- **Safe area desteği:** `env(safe-area-inset-bottom)` dinamik ekleme (notch'lu cihazlar)

---

## ✨ Genel Tasarım İlkeleri

1. **Mobil-önce (Mobile-first):** Her element 430px genişlikteki viewport için tasarlanmıştır
2. **Sıcak zemin:** Arka plan saf beyaz değil, sıcak krem (`#FFF8F0`) tonlarındadır
3. **Hafif gölgeler:** Derinlik hissi için `shadow-sm` düzeyinde, baskın olmayan gölgeler
4. **Yuvarlak köşeler:** Minimum 12px — sert köşe kullanılmaz
5. **Mikro animasyonlar:** Framer Motion ile `opacity + y` fadeIn geçişleri (genellikle 300ms)
6. **Yazı yumuşatma:** `-webkit-font-smoothing: antialiased` — tüm metinler
7. **Dokunmatik optimizasyon:** `-webkit-tap-highlight-color: transparent`, `overscroll-behavior: none`

---

*Bu doküman `TM V2` projesinden çıkarılmıştır — Mart 2026*
