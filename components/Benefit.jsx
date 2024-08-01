import React from "react"
import { cx } from "class-variance-authority"
import { CheckIcon } from "lucide-react"

/**
 * Text with a check mark icon. Combine multiple benefits to highlight a set of features.
 * @example
 * <Benefit>Free shipping</Benefit>
 * <Benefit>24/7 support</Benefit>
 * <Benefit>30-day return policy</Benefit>
 */
export const Benefit = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cx("flex text-sm text-zinc-950 gap-3 dark:text-zinc-50", className)}
        {...props}
      >
        <div
          className="inline-flex flex-none h-6 w-6 -mt-0.5 items-center justify-center rounded-full bg-teal-200 text-teal-950 dark:bg-teal-800 dark:text-teal-50"
        >
          <CheckIcon size={16} />
        </div>
        {children}
      </div>
    )
  }
);
Benefit.displayName = "Benefit"
