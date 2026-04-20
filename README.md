# Hamza Ahmed — Portfolio

A production-ready personal portfolio built with **Next.js 14**, **TypeScript**, and **TailwindCSS**.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
hamza-portfolio/
├── app/
│   ├── globals.css          # Global styles + Tailwind base
│   ├── layout.tsx           # Root layout (fonts, metadata)
│   └── page.tsx             # Main page — composes all sections
│
├── components/
│   ├── ui/                  # Reusable primitive components
│   │   ├── AnimateIn.tsx    # Scroll-reveal wrapper
│   │   ├── Badge.tsx        # Colored badge pill
│   │   ├── Button.tsx       # Primary / secondary buttons
│   │   ├── SectionLabel.tsx # UPPERCASE mono section titles
│   │   ├── StatusBadge.tsx  # Animated green "available" badge
│   │   ├── Tag.tsx          # Skill/tech tag pill
│   │   └── index.ts         # Barrel export
│   │
│   └── sections/            # Page section components
│       ├── Navbar.tsx       # Fixed nav with mobile menu + scroll tracking
│       ├── Hero.tsx         # Name, title, stats, CTA buttons
│       ├── Skills.tsx       # Color-coded skill tags
│       ├── Experience.tsx   # Timeline with 7 jobs
│       ├── Projects.tsx     # 3-card project grid
│       ├── Certifications.tsx # AWS cert card
│       ├── Contact.tsx      # 4 contact cards
│       ├── Footer.tsx       # Copyright footer
│       └── index.ts         # Barrel export
│
├── lib/
│   ├── data.ts              # All portfolio data (typed)
│   └── utils.ts             # cn() helper (clsx + tailwind-merge)
│
├── tailwind.config.ts       # Custom colors, fonts, animations
├── tsconfig.json
├── next.config.mjs
└── postcss.config.mjs
```

## 🎨 Customization

### Update your content
All portfolio data lives in **`lib/data.ts`**. Edit:
- `skills` — your tech stack
- `experiences` — work history
- `projects` — showcase projects
- `stats` — hero stat numbers
- `contactItems` — your contact details

### Change colors
Edit `tailwind.config.ts` under `theme.extend.colors`. The accent color is `#3b82f6` (blue).

### Add new sections
1. Create `components/sections/NewSection.tsx`
2. Export from `components/sections/index.ts`
3. Import and add to `app/page.tsx`

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 (App Router) | Framework |
| TypeScript | Type safety |
| TailwindCSS | Styling |
| Framer Motion (ready) | Animations |
| clsx + tailwind-merge | Conditional classes |

## 🌍 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments.
