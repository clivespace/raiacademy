"use client"

import React from 'react'; // Ensure React is imported
import { Label as RadixLabel } from '@radix-ui/react-label'; // Ensure @radix-ui/react-label is imported
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const LabelComponent = React.forwardRef<
  React.ElementRef<typeof RadixLabel>,
  React.ComponentProps<typeof RadixLabel> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <RadixLabel
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
LabelComponent.displayName = "LabelComponent"

export { LabelComponent as Label } // Export Label