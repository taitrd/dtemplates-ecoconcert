'use client';

import { cn } from "@/lib/utils";

interface StageGradientBackgroundProps {
  children?: React.ReactNode;
  variant?: 'subtle' | 'intense' | 'medium';
  className?: string;
}

/**
 * Stage-inspired gradient background component
 * Creates a concert stage effect with gradient from bottom blue to top primary color
 * Colors are dynamically fetched from CSS variables for theme consistency
 */
export function StageGradientBackground({
  children,
  variant = 'medium',
  className,
}: StageGradientBackgroundProps) {
  // Opacity values for different variants
  const opacityVariants = {
    subtle: 0.7,
    medium: 0.85,
    intense: 1,
  };

  // Inline styles to create dynamic gradient using CSS variables
  const gradientStyle = {
    background: `linear-gradient(
      to top,
      hsl(var(--stage-gradient-bottom) / ${opacityVariants[variant]}),
      hsl(var(--stage-gradient-bottom) / ${opacityVariants[variant] * 0.6}),
      hsl(var(--stage-gradient-top) / ${opacityVariants[variant]})
    )`,
  };

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden',
        className
      )}
    >
      {/* Main gradient background using CSS variables */}
      <div
        className="absolute inset-0 -z-10"
        style={gradientStyle}
      />

      {/* Animated light rays effect */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10" />
      </div>

      {/* Subtle noise texture for depth */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.02]"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
