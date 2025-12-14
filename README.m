# Spiritual Knowledge Website

A modern, aesthetic website showcasing Hindu scriptures including Vedas, Puranas, Upanishads, and Tantra texts, along with a shop for devotional items.

## Features

- **Modern Design**: Built with Next.js 14+, TypeScript, and Tailwind CSS
- **Advanced Animations**: Framer Motion for smooth transitions and interactions
- **Responsive**: Fully responsive design for all devices
- **Sections**:
  - **Vedas**: The four sacred Vedas with descriptions and sources
  - **Puranas**: All 18 Puranas with expandable cards
  - **Upanishads**: Collection of major Upanishads
  - **Tantra**: Tantric scriptures and texts
  - **Shop**: Devotional items, books, idols, japa malas with Indian Rupee pricing

## Technology Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: Zustand (for shop cart - can be extended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Add background images to `public/images/backgrounds/`:
   - `surya-dev.jpg` - Surya Dev with seven chariot (for home page)
   - `brahma.jpg` - Brahma (for Vedas section)
   - `vishnu.jpg` - Vishnu (for Puranas section)
   - `shiva.jpg` - Shiva (for Upanishads section)
   - `tridevi.jpg` - Tridevi (for Tantra section)

3. Add product images to `public/images/shop/`:
   - All product images referenced in `lib/data/shop.ts`

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── vedas/             # Vedas page
│   ├── puranas/           # Puranas page
│   ├── upanishads/        # Upanishads page
│   ├── tantra/            # Tantra page
│   └── shop/              # Shop page
├── components/             # React components
│   ├── Navigation.tsx     # Navigation bar
│   ├── ScrollToTop.tsx    # Scroll to top button
│   ├── ProductCard.tsx    # Product card component
│   └── sections/          # Section components
├── lib/                   # Utilities and data
│   ├── data/              # Data files
│   └── utils.ts           # Utility functions
├── public/                # Static assets
│   └── images/            # Images
├── types/                 # TypeScript types
└── styles/                # Global styles
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette.

### Content

- **Vedas**: Edit `lib/data/vedas.ts`
- **Puranas**: Edit `lib/data/puranas.ts`
- **Upanishads**: Edit `lib/data/upanishads.ts`
- **Tantra**: Edit `lib/data/tantra.ts`
- **Shop Products**: Edit `lib/data/shop.ts`

### Images

Replace placeholder images in `public/images/` with your own images.

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This project can be deployed on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any platform supporting Next.js**

## License

This project is open source and available under the MIT License.
