import fs from 'node:fs';
import path from 'node:path';

const assets = [
  // Logos
  { url: 'https://studup.com.br/wp-content/uploads/2025/06/logo-studppp.png', dest: 'public/assets/logos/logo-studup.png' },
  { url: 'https://studup.com.br/wp-content/uploads/2025/09/logo-studup-vertical.png', dest: 'public/assets/logos/logo-studup-vertical.png' },
  { url: 'https://studup.com.br/wp-content/uploads/2026/02/idelogo.webp', dest: 'public/assets/logos/idelogo.webp' },

  // Icons
  { url: 'https://studup.com.br/wp-content/uploads/2026/02/icon3.png', dest: 'public/assets/icons/icon-presencial.png' },
  { url: 'https://studup.com.br/wp-content/uploads/2026/03/icon-ead.png', dest: 'public/assets/icons/icon-ead.png' },
  { url: 'https://studup.com.br/wp-content/uploads/2026/02/icon1.png', dest: 'public/assets/icons/icon-corporativas.png' },
  { url: 'https://studup.com.br/wp-content/uploads/2026/03/icon-sala.png', dest: 'public/assets/icons/icon-sala.png' },

  // Images & Mockups
  { url: 'https://studup.com.br/wp-content/uploads/2026/03/000app-1.png', dest: 'public/assets/images/app-mockup.png' },
  { url: 'https://studup.com.br/wp-content/uploads/2026/03/device-mockup-16-9.png', dest: 'public/assets/images/device-mockup.png' },
  { url: 'https://studup.com.br/wp-content/uploads/2026/03/EDZOLA-1.png', dest: 'public/assets/images/corporate-edzola.png' },
  { url: 'https://studup.com.br/wp-content/uploads/2026/03/studuplay-2025.webp', dest: 'public/assets/images/studuplay-faq.webp' },
  { url: 'https://studup.com.br/wp-content/uploads/2026/04/011a-1.png', dest: 'public/assets/images/studup-faq.png' },

  // Gallery
  { url: 'https://studup.com.br/wp-content/uploads/2026/03/%E2%9C%85.jpg', dest: 'public/assets/images/gallery/presencial-1.jpg' },
  { url: 'https://studup.com.br/wp-content/uploads/2026/03/%E2%9C%85-4.jpg', dest: 'public/assets/images/gallery/presencial-2.jpg' },
  { url: 'https://studup.com.br/wp-content/uploads/2026/03/%E2%9C%85-3.jpg', dest: 'public/assets/images/gallery/presencial-3.jpg' },
  { url: 'https://studup.com.br/wp-content/uploads/2026/03/%E2%9C%85-2.jpg', dest: 'public/assets/images/gallery/presencial-4.jpg' },
  { url: 'https://studup.com.br/wp-content/uploads/2026/03/%E2%9C%85-6.jpg', dest: 'public/assets/images/gallery/presencial-5.jpg' },
  { url: 'https://studup.com.br/wp-content/uploads/2026/03/%E2%9C%85-5.jpg', dest: 'public/assets/images/gallery/presencial-6.jpg' },
  { url: 'https://studup.com.br/wp-content/uploads/2026/03/%E2%9C%85-7.jpg', dest: 'public/assets/images/gallery/presencial-7.jpg' },
  { url: 'https://studup.com.br/wp-content/uploads/2026/03/%E2%9C%85-8.jpg', dest: 'public/assets/images/gallery/presencial-8.jpg' },
  { url: 'https://studup.com.br/wp-content/uploads/2026/03/%E2%9C%85-9.jpg', dest: 'public/assets/images/gallery/presencial-9.jpg' },
  { url: 'https://studup.com.br/wp-content/uploads/2026/03/%E2%9C%85-10.jpg', dest: 'public/assets/images/gallery/presencial-10.jpg' },

  // Depoimentos
  { url: 'https://studup.com.br/wp-content/uploads/2026/02/asd1-2.jpg', dest: 'public/assets/images/testimonials/depoimento-1.jpg' },
  { url: 'https://studup.com.br/wp-content/uploads/2026/02/asd1-1.jpg', dest: 'public/assets/images/testimonials/depoimento-2.jpg' },
  { url: 'https://studup.com.br/wp-content/uploads/2026/02/asd1-3.jpg', dest: 'public/assets/images/testimonials/depoimento-3.jpg' },

  // Cursos Online
  { url: 'https://studup.com.br/wp-content/uploads/2026/03/CURSO-005-Google-Forms-Essencial.webp', dest: 'public/assets/images/courses/curso-google-forms.webp' },
  { url: 'https://studup.com.br/wp-content/uploads/2026/03/CURSO-13-Canva-Start.webp', dest: 'public/assets/images/courses/curso-canva.webp' },
  { url: 'https://studup.com.br/wp-content/uploads/2026/03/TURBO-14-Edicao-de-Imagens-com-I.A.webp', dest: 'public/assets/images/courses/curso-ia.webp' },
  { url: 'https://studup.com.br/wp-content/uploads/2026/03/TURBO-19-Panfletos-em-poucos-minutos.webp', dest: 'public/assets/images/courses/curso-panfletos.webp' },
  { url: 'https://studup.com.br/wp-content/uploads/2026/03/Profissional-4.0.webp', dest: 'public/assets/images/courses/curso-profissional-4.webp' },
  { url: 'https://studup.com.br/wp-content/uploads/2026/03/CURSO-028-Seja-Lider-de-si-mesmo.png', dest: 'public/assets/images/courses/curso-lider.png' },
  { url: 'https://studup.com.br/wp-content/uploads/2026/03/CURSO-09-Curriculo-e-Entrevista.png', dest: 'public/assets/images/courses/curso-curriculo.png' },

  // Especialistas
  { url: 'https://studup.com.br/wp-content/uploads/2025/06/edss.webp', dest: 'public/assets/images/team/edss.webp' },
  { url: 'https://studup.com.br/wp-content/uploads/2025/06/Prof-AnnaPadinhaa.webp', dest: 'public/assets/images/team/prof-anna.webp' },
  { url: 'https://studup.com.br/wp-content/uploads/2026/02/Prof-Anna-Padinha-2.jpg', dest: 'public/assets/images/team/prof-anna-2.jpg' },
  { url: 'https://studup.com.br/wp-content/uploads/2026/02/Prof-Saulo-Pedroso-2.jpg', dest: 'public/assets/images/team/prof-saulo-2.jpg' },
  { url: 'https://studup.com.br/wp-content/uploads/2025/06/HESRON_CARVALHO-1.webp', dest: 'public/assets/images/team/hesron.webp' },
  { url: 'https://studup.com.br/wp-content/uploads/2025/06/VICTOR_WILLIAMES-1.webp', dest: 'public/assets/images/team/victor.webp' },
  { url: 'https://studup.com.br/wp-content/uploads/2026/02/Prof-Saulo-Pedroso-4.jpg', dest: 'public/assets/images/team/prof-saulo-4.jpg' },
  { url: 'https://studup.com.br/wp-content/uploads/2026/02/10.jpg', dest: 'public/assets/images/team/10.jpg' },
  { url: 'https://studup.com.br/wp-content/uploads/2026/05/jrr.webp', dest: 'public/assets/images/team/jrr.webp' },
];

async function downloadAll() {
  console.log(`Starting download of ${assets.length} assets...`);
  for (const item of assets) {
    const fullDest = path.resolve(process.cwd(), item.dest);
    fs.mkdirSync(path.dirname(fullDest), { recursive: true });
    
    try {
      const res = await fetch(item.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      if (!res.ok) {
        console.warn(`[WARN] Failed to fetch ${item.url}: ${res.statusText}`);
        continue;
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(fullDest, buffer);
      console.log(`[OK] Downloaded -> ${item.dest}`);
    } catch (err) {
      console.error(`[ERROR] ${item.url} -> ${err.message}`);
    }
  }
  console.log('Finished downloading all assets!');
}

downloadAll();
