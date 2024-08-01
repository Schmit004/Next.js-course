import React from "react"
import { cx } from "class-variance-authority"

/**
 * A text input field.
 * @example
 * <label htmlFor="email" className="dark:text-white">Email</label>
 * <Input id="email" type="email" placeholder="john.doe@example.com" className="mt-2" />
 */
export const Input = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cx("w-full rounded-md bg-white px-3.5 py-2 text-sm border hover:border-zinc-400 focus:border-zinc-400 disabled:opacity-50 dark:bg-transparent dark:border-zinc-500 dark:hover:border-zinc-400 dark:focus:border-zinc-300 dark:text-white focus-visible:outline-2 focus-visible:outline-teal-500 focus-visible:outline-offset-2", className)}
        {...props}
      />
    )
  }
);
Input.displayName = "Input"
