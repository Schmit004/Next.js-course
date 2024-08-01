"use client"

import React from "react"
import { cx } from "class-variance-authority"
import { Root, Viewport, Scrollbar, Thumb } from "@radix-ui/react-scroll-area"

/**
 * Augments native scroll functionality for custom, cross-browser styling.
 * @see https://www.radix-ui.com/docs/primitives/components/scroll-area#api-reference
 * @example
 * <ScrollArea><span className="dark:text-white">This will be scrollable when it overflows.</span></ScrollArea>
 */
export const ScrollArea = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <Root
        ref={ref}
        className={cx("h-full w-full overflow-hidden", className)}
        {...props}
      >
        <Viewport
          className="h-full w-full overflow-hidden"
        >
          {children}
        </Viewport>
        <Scrollbar
          className="flex h-full w-2 p-0.5 select-none touch-none"
        >
          <Thumb
            className="flex-1 rounded-full bg-zinc-400 relative z-10 dark:bg-zinc-500"
          />
        </Scrollbar>
      </Root>
    )
  }
);
ScrollArea.displayName = "ScrollArea"
