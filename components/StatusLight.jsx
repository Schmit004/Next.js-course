import React from "react"
import { cva, VariantProps, cx } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

export const statusLightVariants = cva(
  "h-2 w-2 rounded-full border-2 border-indigo-200 bg-indigo-500 dark:border-indigo-800",
  {
    "variants": {
      "variant": {
        "success": "border-green-200 bg-green-500 dark:border-green-800",
        "warning": "border-amber-200 bg-amber-500 dark:border-amber-800",
        "destructive": "border-red-200 bg-red-500 dark:border-red-800"
      }
    }
  }
)

/**
 * Renders a color-coded status light.
 * @example
 * <StatusLight variant="success">Shipped</StatusLight>
 */
export const StatusLight = React.forwardRef(
  ({ children, className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cx("inline-flex items-center text-xs font-medium gap-2 dark:text-white", className)}
        {...props}
      >
        <div
          className={twMerge(statusLightVariants({ className, variant }))}
        />
        {children}
      </div>
    )
  }
);
StatusLight.displayName = "StatusLight"
