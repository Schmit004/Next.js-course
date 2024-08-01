import React from "react"
import { cx } from "class-variance-authority"

/**
 * A multi-line text input field
 * @example
 * <Textarea placeholder="Enter your message..." />
 */
export const Textarea = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cx("w-full rounded-md bg-white px-3.5 py-2.5 text-sm border hover:border-zinc-400 focus:border-zinc-400 disabled:opacity-50 dark:bg-transparent dark:border-zinc-500 dark:hover:border-zinc-400 dark:focus:border-zinc-300 resize-none disabled:opacity-50 dark:bg-transparent dark:border dark:border-zinc-500 dark:text-white", className)}
        {...props}
      />
    )
  }
);
Textarea.displayName = "Textarea"
