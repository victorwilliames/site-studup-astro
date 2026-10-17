# StudUP — Landing Page Oficial (Astro + Tailwind CSS)

Landing page moderna, ultra-performática, 100% responsiva e **Pixel-Perfect** da **StudUP** (Educação para o Mercado & Soluções Corporativas), migrada do WordPress/Elementor para **Astro v5**.

---

## 🚀 Como Rodar o Projeto

Com o terminal aberto nesta pasta:

### 1. Iniciar o servidor de desenvolvimento
```bash
bun run dev
# ou
npm run dev
```
O site abrirá imediatamente em: `http://localhost:4321`

### 2. Gerar a versão final para publicação (Deploy)
```bash
bun run build
# ou
npm run build
```
Os arquivos prontos e otimizados para qualquer hospedagem (Cloudflare Pages, Vercel, Netlify ou VPS/Nginx) serão gerados na pasta **`dist/`**.

### 3. Testar a versão final compilada
```bash
bun run preview
```

---

## 📁 Estrutura de Componentes por Seções (Padrão S0, S1, S2...)

O projeto adota uma arquitetura modular escalável para múltiplas páginas:

```text
src/
├── components/
│   ├── common/                        # Componentes globais (usados em múltiplas páginas)
│   │   ├── S0NavBar.astro             # Topbar + Header transparente com degradê
│   │   ├── Footer.astro               # Rodapé completo + direitos autorais
│   │   └── LeadModal.astro            # Modal popup de contato integrado ao WhatsApp
│   │
│   ├── home/                          # Seções exclusivas da Home (ordenadas por S1, S2...)
│   │   ├── S1HeroSlider.astro         # Carrossel Hero com 3 slides Swiper
│   │   ├── S2QuickNav.astro           # 4 atalhos com ícones de categorias
│   │   ├── S3PresencialSection.astro  # Educação Presencial + Embed oficial de cursos
│   │   ├── S4OnlineSection.astro      # StudUPlay EAD + Mockup de notebook com YouTube
│   │   ├── S5CoursesOnlineSection.astro # Vitrine de cursos online EAD + Ver todos
│   │   ├── S6CorporateSection.astro   # Soluções Corporativas + Treinamentos in Company
│   │   ├── S7PartnersSection.astro    # Faixa "Confiam em nós" com animação contínua
│   │   ├── S8TeamSection.astro        # Carrossel de Especialistas + Grid de Números
│   │   └── S9FaqSection.astro         # FAQ duplo com acordeão nativo
│   │
│   └── sobre/                         # Pronta para futuras páginas (ex: S1HeroSobre, etc.)
│
├── layouts/
│   └── Layout.astro                   # Head, SEO, fontes locais e scripts de inicialização
│
└── pages/
    └── index.astro                    # Página inicial montando o "lego" dos componentes
```

---

## 🎯 Destaques do Projeto

1. **Pixel Perfect:** Tipografia, degradês, bordas animadas e espaçamentos 1:1 ao site original.
2. **Performance Imbatível:** Construído com Astro estático, sem PHP/WordPress e sem banco de dados no frontend.
3. **Componentização Clara:** Padrão numerado (`S0NavBar`, `S1`, `S2`...) que facilita manutenção imediata.
4. **Multi-Páginas:** Estrutura pronta para criar novas rotas em `src/pages/` reaproveitando os componentes de `src/components/common/`.
