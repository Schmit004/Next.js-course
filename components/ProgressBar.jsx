"use client"

import React from "react"
import { cva, VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"
import { Root, Indicator } from "@radix-ui/react-progress"

export const progressBarVariants = cva(
  "h-5 w-full overflow-hidden rounded-md bg-zinc-300 dark:bg-zinc-900",
  {
    "variants": {
      "size": {
        "sm": "h-3",
        "lg": "h-7"
      }
    }
  }
)

/**
 * Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
 * @see https://www.radix-ui.com/docs/primitives/components/progress#api-reference
 * @example
 * const [value, setValue] = React.useState(25)
 * return <ProgressBar value={value} max={100} />
 */
export const ProgressBar = React.forwardRef(
  ({ className, max, size, value, ...props }, ref) => {
    return (
      <Root
        ref={ref}
        className={twMerge(progressBarVariants({ className, size }))}
        {...props}
      >
        <Indicator
          style={{ width: `${((value || 0) / (max || 100)) * 100}%` }}
          className="h-full bg-teal-500 transition-all"
        />
      </Root>
    )
  }
);
ProgressBar.displayName = "ProgressBar"
