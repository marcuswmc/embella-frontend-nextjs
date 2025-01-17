# emBella App

A Next.js application for generating image-based email for newsletters.
Built with React,Next.js 15, TypeScript, and Tailwind CSS.

## Features

- Visual email template builder
- Desktop and mobile preview modes
- Dynamic section management
  - Add/remove sections
  - Reorder sections with drag and drop
  - Configure image URLs, alt text, and redirect links
- Responsive design
- Modern UI components using shadcn/ui

## Tech Stack

- **Framework:** Next.js 15.1.4
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** 
  - shadcn/ui components
  - Radix UI primitives
  - Lucide React icons

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/marcuswmc/embella-frontend-nextjs
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/
│   ├── create-email/     # Email creator page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── emailCreator/     # Email builder components
│   └── ui/              # Reusable UI components
├── lib/
│   └── utils.ts         # Utility functions
└── types/
    └── createEmailTypes.tsx  # TypeScript interfaces
```

## Features in Detail

### Email Creator

- **Title and Preheader**: Configure email metadata
- **Section Management**:
  - Add multiple sections with images
  - Configure redirect URLs
  - Add alt text for accessibility
  - Reorder sections easily
- **Preview Modes**:
  - Desktop view
  - Mobile responsive view
- **Real-time Preview**: See changes as you make them

### UI Components

The project uses shadcn/ui components for a consistent and modern look:
- Cards
- Buttons
- Inputs
- Labels
- Scroll Areas
- Tabs
- Collapsible sections
- Skeletons for loading states

## Development

### Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Run production server

### Styling

The project uses Tailwind CSS with a custom configuration:
- Custom color scheme
- Responsive breakpoints
- Custom container sizes
- Font family configuration (Poppins)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT
