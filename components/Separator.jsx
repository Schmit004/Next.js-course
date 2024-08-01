"use client"

import React from "react"
import { cx } from "class-variance-authority"
import { Root } from "@radix-ui/react-separator"

/**
 * Visually or semantically separates content.
 * @see https://www.radix-ui.com/docs/primitives/components/separator#api-reference
 * @example
 * <Separator orientation="horizontal" />
 */
export const Separator = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <Root
        ref={ref}
        className={cx("flex-none bg-zinc-400 dark:bg-zinc-500 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", className)}
        {...props}
      />
    )
  }
);
Separator.displayName = "Separator"
