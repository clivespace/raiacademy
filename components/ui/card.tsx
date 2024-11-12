import React from 'react'; // Ensure React is imported
import { cn } from "@/lib/utils"

interface CardProps {
  className?: string;
  children?: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, children }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
  >
    {children}
  </div>
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, CardProps>(({ className, children }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
  >
    {children}
  </div>
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, CardProps>(({ className, children }, ref) => (
  <h3
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
  >
    {children}
  </h3>
));
CardTitle.displayName = "CardTitle";

const CardContent = React.forwardRef<HTMLDivElement, CardProps>(({ className, children }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)}>
    {children}
  </div>
));
CardContent.displayName = "CardContent";

const CardDescription = React.forwardRef<HTMLParagraphElement, CardProps>(({ className, children }, ref) => (
  <p ref={ref} className={cn("text-sm text-muted-foreground", className)}>
    {children}
  </p>
));
CardDescription.displayName = "CardDescription";

export { Card, CardHeader, CardTitle, CardContent, CardDescription };
