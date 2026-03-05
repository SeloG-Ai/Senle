# Cursor AI Prompt: Doğaner Lojistik Statik HTML Sitesi

## 🎯 Görev
Doğaner Lojistik'in React SPA sitesini **SEO-friendly statik HTML**'e dönüştür.

---

## 📁 Mevcut Dosyalar

1. **Blog yedekleri (JSON):** `doganer-blog-full-backup.json`
   - 18 makale, full HTML content, FAQ, related posts
   
2. **Mevcut site tasarımı:** `doganer-website/` klasörü
   - `index.html`, `hizmetler.html`, `hakkimizda.html`, `blog.html`, `iletisim.html`
   - `style.css` (tasarım dosyası)

3. **Site bilgileri:**
   - Domain: https://www.doganerlojistik.com
   - Tel: 0535 641 03 04 / 0543 600 25 95 / 0533 502 30 81
   - Adres: Halkalı Merkez Mah. 1. Çiğdem Sok. No:12, Küçükçekmece / İstanbul

---

## 🔨 Yapılacaklar

### 1. Ana Sayfaları Temizle (Mevcut HTML dosyaları)
- `index.html`, `hizmetler.html`, `hakkimizda.html`, `blog.html`, `iletisim.html`
- **Değişiklik:** JavaScript bağımlılıklarını kaldır
- **Koru:** Mevcut tasarım (CSS), header, footer yapısı
- **Ekle:** Her sayfaya unique `<title>` ve `<meta description>`

### 2. Blog Detay Sayfaları Oluştur
**Kaynak:** `doganer-blog-full-backup.json`

**Her makale için:**
- Dosya adı: `/blog/{slug}.html` (örn: `/blog/kadikoy-cekici-hizmeti.html`)
- **Template yapısı:**
  ```html
  <!DOCTYPE html>
  <html lang="tr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} | Doğaner Lojistik</title>
    <meta name="description" content="{excerpt}">
    <link rel="stylesheet" href="../style.css">
  </head>
  <body>
    <!-- Header (mevcut site header'ını kopyala) -->
    <header>...</header>
    
    <!-- Breadcrumb -->
    <div class="breadcrumb">
      <a href="/">Ana Sayfa</a> › <a href="/blog.html">Blog</a> › {title}
    </div>
    
    <!-- Article -->
    <article class="blog-detail">
      <div class="blog-meta">
        <span class="blog-tag">{category}</span>
        <span>📅 {date}</span>
        <span>⏱ {readTime}</span>
      </div>
      
      <h1>{title}</h1>
      
      <!-- Content (JSON'daki content field'ı direkt buraya) -->
      {content}
      
      <!-- FAQ Section (varsa) -->
      <div class="faq-section">
        <h2>Sık Sorulan Sorular</h2>
        {faq.map(item => `
          <div class="faq-item">
            <h3>${item.q}</h3>
            <p>${item.a}</p>
          </div>
        `)}
      </div>
      
      <!-- Related Posts (varsa) -->
      <div class="related-posts">
        <h2>İlgili Yazılar</h2>
        <!-- related sluglarına göre linkler -->
      </div>
    </article>
    
    <!-- Footer -->
    <footer>...</footer>
  </body>
  </html>
  ```

### 3. Blog Listesi Sayfasını Güncelle
**Dosya:** `blog.html`

- JSON'dan tüm makaleleri oku
- Her makale için kart oluştur:
  ```html
  <article class="blog-card">
    <div class="blog-meta">
      <span class="blog-tag">{category}</span>
      <span>{date}</span>
      <span>⏱ {readTime}</span>
    </div>
    <h2><a href="/blog/{slug}.html">{title}</a></h2>
    <p>{excerpt}</p>
    <a href="/blog/{slug}.html" class="read-more">Devamını Oku →</a>
  </article>
  ```

### 4. SEO Meta Tags (Her Sayfa İçin)
**Ana Sayfa:**
```html
<title>İstanbul Çekici Hizmeti | 7/24 Araç Çekme | Doğaner Lojistik</title>
<meta name="description" content="İstanbul'da 7/24 çekici ve yol yardım hizmeti. Net fiyat, 45 dk'da ulaşım. Hemen arayın: 0535 641 03 04">
```

**Hizmetler:**
```html
<title>Çekici Hizmetleri İstanbul | Araç Çekme, Yol Yardım | Doğaner Lojistik</title>
<meta name="description" content="İstanbul'da araç çekme, ağır çekici, yol yardım ve kurumsal filo hizmetleri. Şeffaf fiyat, 7/24 destek.">
```

**Blog makaleleri:** JSON'daki `title` ve `excerpt` kullan

### 5. Schema Markup Ekle
**Ana sayfaya:**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Doğaner Lojistik & Otomotiv",
  "telephone": "+905356410304",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Halkalı Merkez Mah. 1. Çiğdem Sok. No:12",
    "addressLocality": "Küçükçekmece",
    "addressRegion": "İstanbul",
    "addressCountry": "TR"
  },
  "openingHours": "Mo-Su 00:00-24:00",
  "priceRange": "₺₺",
  "url": "https://www.doganerlojistik.com"
}
</script>
```

**Blog makalelerine:**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "{title}",
  "datePublished": "{date}",
  "author": {
    "@type": "Organization",
    "name": "Doğaner Lojistik"
  }
}
</script>
```

---

## 📋 Kontrol Listesi

- [ ] Ana sayfalar (5 adet) JS bağımlılığı kaldırıldı
- [ ] Her ana sayfa unique meta tags aldı
- [ ] Blog detay sayfaları (18 adet) oluşturuldu
- [ ] Blog listesi güncellendi
- [ ] Tüm telefonlar `<a href="tel:05356410304">` formatında
- [ ] Schema markup eklendi
- [ ] CSS dosyası korundu
- [ ] Breadcrumb navigation eklendi
- [ ] FAQ bölümleri render edildi
- [ ] Related posts linkleri çalışıyor

---

## 🚀 Build Scripti (Opsiyonel)

Eğer otomatikleştirmek istersen Node.js script:
```javascript
const fs = require('fs');
const path = require('path');

// JSON'u oku
const articles = JSON.parse(fs.readFileSync('doganer-blog-full-backup.json', 'utf8'));

// Template'i oku
const template = fs.readFileSync('templates/blog-detail.html', 'utf8');

// Her makale için HTML oluştur
articles.forEach(article => {
  let html = template
    .replace(/{title}/g, article.title)
    .replace(/{excerpt}/g, article.excerpt)
    .replace(/{content}/g, article.content)
    .replace(/{category}/g, article.category)
    .replace(/{date}/g, article.date)
    .replace(/{readTime}/g, article.readTime)
    .replace(/{slug}/g, article.slug);
  
  // FAQ render
  if (article.faq && article.faq.length) {
    const faqHtml = article.faq.map(item => `
      <div class="faq-item">
        <h3>${item.q}</h3>
        <p>${item.a}</p>
      </div>
    `).join('');
    html = html.replace('{faq}', faqHtml);
  }
  
  // Dosyayı kaydet
  fs.writeFileSync(`dist/blog/${article.slug}.html`, html);
});

console.log(`✅ ${articles.length} blog sayfası oluşturuldu!`);
```

---

## 🎨 Tasarım Notları

- **Mevcut CSS'i koru** → `style.css` iyi çalışıyor
- **Responsive tasarım** → Zaten mevcut
- **CTA butonları** → Makalelerde `article-cta-box` class'ı var, CSS'te tanımlı olmalı
- **Renkler:** Mevcut siteden al (mavi tonları)

---

## 📤 Deploy Sonrası

1. FTP ile yükle → `httpdocs/` klasörüne
2. Test et → Her sayfa çalışıyor mu?
3. Google'a bildir → Search Console'da sitemap yeniden fetch et

---

## ⚠️ Önemli Notlar

1. **URL yapısı:** `/blog/{slug}.html` formatı kullan (SEO için)
2. **Internal linking:** Tüm blog linklerini `.html` uzantılı yap
3. **Image optimization:** Varsa görselleri WebP'ye çevir
4. **Minify:** HTML/CSS minify et (opsiyonel ama önerilen)

---

## 🔗 Kaynaklar

- JSON backup: `doganer-blog-full-backup.json`
- Mevcut site: `doganer-website/` klasörü
- CSS: `style.css`

Başarılar! 🚀
