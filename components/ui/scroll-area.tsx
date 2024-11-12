"use client"

import React from 'react';
import {
  ScrollArea as RadixScrollArea,
  ScrollAreaViewport,
  ScrollAreaCorner,
  ScrollAreaScrollbar,
  ScrollAreaThumb
} from '@radix-ui/react-scroll-area';

import { cn } from "@/lib/utils"

const ScrollAreaComponent = React.forwardRef<HTMLDivElement, { className: string, children: React.ReactNode }>(
  ({ className, children }, ref) => (
    <RadixScrollArea
      ref={ref}
      className={cn("relative overflow-hidden", className)}
    >
      <ScrollAreaViewport className="h-full w-full rounded-[inherit]">
        {children}
      </ScrollAreaViewport>
      <ScrollBar />
      <ScrollAreaCorner />
    </RadixScrollArea>
  )
);
ScrollAreaComponent.displayName = "ScrollAreaComponent";

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaScrollbar>,
  React.ComponentProps<typeof ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" &&
        "h-2.5 border-t border-t-transparent p-[1px]",
      className
    )}
    {...props}
  >
    <ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaScrollbar>
));
ScrollBar.displayName = "ScrollBar";

export { ScrollAreaComponent as ScrollArea, ScrollBar };
