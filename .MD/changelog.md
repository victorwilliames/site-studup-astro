# Changelog do Projeto StudUP (Astro)

## [2026-10-17] - Conclusão da Clonagem Pixel-Perfect & Decisões Arquiteturais

### Concluído
- **Migração do Elementor para Astro v5**:
  - Landing page completa da StudUP reconstruída 100% pixel-perfect com base no `post-740.css`, `post-16.css` e `post-635.css`.
  - Download e integração local de 100% dos assets e fontes (`Inter`, `Inter Tight`, `Space Grotesk`, `Phosphor-Light`, `WPPageBuilder`).
  - Carrosséis Swiper v8 (Hero e Time de Especialistas) e acordeões FAQ nativos.
  - Modal inteligente de captação de leads com redirecionamento formatado para WhatsApp.
- **Padronização e Arquitetura de Componentes**:
  - Organização em pastas modulares:
    - `src/components/common/`: Componentes compartilhados (`S0NavBar.astro`, `Footer.astro`, `LeadModal.astro`).
    - `src/components/home/`: Seções exclusivas da Home ordenadas cronologicamente (`S1` a `S9`).
    - Preparada para futuras rotas como `src/components/sobre/`.
- **Versionamento e Publicação**:
  - Repositório Git inicializado e commitado na branch `main`.
  - Código sincronizado no GitHub: `https://github.com/victorwilliames/site-studup-astro`.

---

## 🧠 Decisão Arquitetural Fixada para o Futuro (CMS / CRM)

Quando for necessário implementar painel administrativo (CMS) e gestão de leads (CRM):
1. **Frontend**: Manter o site estático no **Astro hospedado na Vercel** (ou Cloudflare Pages).
2. **Backend CMS / CRM**: Utilizar **Strapi**.
   - Hospedagem gratuita no **Render.com** (ou Koyeb).
   - Banco de dados gratuito no **Supabase** (PostgreSQL).
   - Manter o serviço acordado via **UptimeRobot** (ping a cada 5–10 min).
   - O Astro consumirá os dados via API REST / GraphQL do Strapi e enviará os leads do formulário diretamente para a API.
