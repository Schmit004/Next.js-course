import React from "react"
import { cva, VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

export const badgeVariants = cva(
  "inline-flex rounded-md bg-zinc-300 dark:bg-zinc-600 px-3 py-1 select-none text-xs text-center font-semibold gap-2 dark:text-white",
  {
    "variants": {
      "variant": {
        "success": "text-white bg-green-700 dark:bg-green-700",
        "warning": "text-white bg-amber-700 dark:bg-amber-700",
        "destructive": "text-white bg-red-700 dark:bg-red-700"
      }
    }
  }
)

/**
 * An element that displays a bit of information, optionally color-coded.
 * @example
 * <Badge variant="success">Shipped</Badge>
 */
export const Badge = React.forwardRef(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(badgeVariants({ className, variant }))}
        {...props}
      />
    )
  }
);
Badge.displayName = "Badge"
