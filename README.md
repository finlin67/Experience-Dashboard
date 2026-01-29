# Demand Gen Flow

A high-fidelity, futuristic performance dashboard tile designed for modern Next.js/React landing pages. This component features a cyberpunk aesthetic with glassmorphism effects, real-time animated metrics, and adaptive scaling.

## Features

- **Futuristic UI**: Dark mode interface with cyan (#20bfdf), purple, and neon green accents.
- **Animations**: 
  - Framer Motion integrated for smooth entrance animations.
  - "Living" UI elements like pulsing status indicators and scanning bars.
  - Hover effects on individual metric cards.
- **Responsive Design**: 
  - Scales intelligently using a `max-w-[600px]` / `max-h-[600px]` constraint.
  - Fluidly adapts to mobile screens while maintaining aspect ratios on desktop.
- **Tech Stack**: Built with React, Tailwind CSS, Lucide Icons, and Framer Motion.

## Prerequisites

Ensure your project has the following dependencies installed:

```bash
npm install framer-motion lucide-react clsx tailwind-merge
```

(Note: `clsx` and `tailwind-merge` are recommended for class handling but not strictly required if you aren't passing custom classes yet).

## Installation

1. **Copy the Component**:
   Place the `DemandGenFlow.tsx` file into your project's components directory (e.g., `src/components/DemandGenFlow.tsx`).

2. **Import and Use**:
   Import the component into your page or layout. It is designed to take up 100% of its parent container's width and height, centering itself within that space.

```tsx
import DemandGenFlow from '@/components/DemandGenFlow';

export default function Page() {
  return (
    <main className="w-full h-screen bg-black">
      {/* The tile handles its own internal centering and max-width constraints */}
      <DemandGenFlow />
    </main>
  );
}
```

## Component Structure

The component uses a "Hero Tile" specification:
- **Outer Wrapper**: `w-full h-full` flex container that centers content.
- **Inner Card**: `max-w-[600px] max-h-[600px]` container that holds the actual dashboard UI. 
- **'use client'**: The component is marked as a client component to support Framer Motion animations and React hooks.

## Customization

The visuals rely heavily on Tailwind utility classes. Key color variables used in the design:
- **Primary Cyan**: `#20bfdf`
- **Background**: `#111e21` / `#1a2629`
- **Success**: `#0bda54`
- **Secondary**: Purple-600

To modify the color scheme, find and replace these hex codes within the JSX.