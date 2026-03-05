#!/usr/bin/env node
/**
 * Doganer Lojistik - Sitemap Otomatik Güncelleyici
 * Blog sayfasını crawl edip sitemap.xml'i günceller ve FTP'ye yükler
 */

const https = require('https');
const { exec } = require('child_process');
const { promisify } = require('util');
const execAsync = promisify(exec);

// Ayarlar
const BLOG_URL = 'https://www.doganerlojistik.com/blog';
const SITEMAP_PATH = '/data/.openclaw/workspace/doganer-site/sitemap.xml';
const FTP_HOST = 'doganerlojistik.com';
const FTP_USER = 'u2593402';
const FTP_PASS = '_jKc-9xjFy-pU=P51';
const FTP_PATH = 'httpdocs/sitemap.xml';

// Ana sayfalar (statik)
const STATIC_PAGES = [
  { loc: 'https://www.doganerlojistik.com/', priority: '1.0', changefreq: 'weekly' },
  { loc: 'https://www.doganerlojistik.com/hizmetler', priority: '0.9', changefreq: 'monthly' },
  { loc: 'https://www.doganerlojistik.com/hakkimizda', priority: '0.7', changefreq: 'monthly' },
  { loc: 'https://www.doganerlojistik.com/blog', priority: '0.8', changefreq: 'daily' },
  { loc: 'https://www.doganerlojistik.com/iletisim', priority: '0.6', changefreq: 'monthly' }
];

// Blog listesini playwright/puppeteer ile çekmek yerine basit regex ile parse
async function fetchBlogList() {
  console.log('📥 Blog sayfası crawl ediliyor...');
  
  const result = await execAsync(
    `curl -sL "${BLOG_URL}" | grep -oP '/blog/[a-z0-9-]+(?=")' | sort -u`
  );
  
  const slugs = result.stdout.trim().split('\n').filter(s => s && s !== '/blog');
  
  console.log(`✅ ${slugs.length} blog makalesi bulundu`);
  return slugs.map(slug => ({
    loc: `https://www.doganerlojistik.com${slug}`,
    priority: '0.7',
    changefreq: 'monthly'
  }));
}

// Sitemap XML oluştur
function generateSitemap(pages) {
  const today = new Date().toISOString().split('T')[0];
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
`;

  pages.forEach(page => {
    xml += `  <url>
    <loc>${page.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
  
`;
  });

  xml += `</urlset>`;
  return xml;
}

// Sitemap'i dosyaya yaz
async function writeSitemap(content) {
  const fs = require('fs').promises;
  await fs.writeFile(SITEMAP_PATH, content, 'utf8');
  console.log(`💾 Sitemap kaydedildi: ${SITEMAP_PATH}`);
}

// FTP'ye yükle
async function uploadToFTP() {
  console.log('📤 FTP\'ye yükleniyor...');
  
  const cmd = `curl -T "${SITEMAP_PATH}" "ftp://${FTP_HOST}/${FTP_PATH}" --user "${FTP_USER}:${FTP_PASS}"`;
  await execAsync(cmd);
  
  console.log('✅ FTP upload tamamlandı');
}

// Ana fonksiyon
async function main() {
  try {
    console.log('🚀 Sitemap güncelleyici başlatıldı\n');
    
    // Blog listesini çek
    const blogPages = await fetchBlogList();
    
    // Tüm sayfaları birleştir
    const allPages = [...STATIC_PAGES, ...blogPages];
    
    console.log(`📊 Toplam ${allPages.length} sayfa (${STATIC_PAGES.length} statik + ${blogPages.length} blog)`);
    
    // Sitemap oluştur
    const sitemap = generateSitemap(allPages);
    
    // Kaydet
    await writeSitemap(sitemap);
    
    // FTP'ye yükle
    await uploadToFTP();
    
    console.log('\n✨ Sitemap başarıyla güncellendi!');
    console.log(`🔗 https://www.doganerlojistik.com/sitemap.xml`);
    
  } catch (error) {
    console.error('❌ Hata:', error.message);
    process.exit(1);
  }
}

// Çalıştır
main();
