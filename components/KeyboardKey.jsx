import React from "react"
import { cx } from "class-variance-authority"

/**
 * An element that represents a keyboard key, useful to display shortcuts.
 * @example
 * <div className="flex gap-1">
 *   <KeyboardKey>⌘</KeyboardKey>
 *   <KeyboardKey>S</KeyboardKey>
 * </div>
 */
export const KeyboardKey = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cx("inline-flex h-7 w-7 items-center justify-center rounded text-xs text-zinc-700 font-semibold shadow border dark:bg-zinc-600 dark:border-zinc-500 dark:text-zinc-100", className)}
        {...props}
      />
    )
  }
);
KeyboardKey.displayName = "KeyboardKey"
