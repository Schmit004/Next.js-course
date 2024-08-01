"use client"

import React from "react"
import { cx } from "class-variance-authority"
import { Root, Thumb } from "@radix-ui/react-switch"

/**
 * A control that allows the user to toggle between checked and not checked.
 * @see https://www.radix-ui.com/docs/primitives/components/switch#api-reference
 * @example
 * const [checked, setChecked] = React.useState(false)
 * return (
 *   <div className="group/switch flex items-center gap-3">
 *     <Switch id="notify" checked={checked} onCheckedChange={setChecked} />
 *     <label htmlFor="notify" className="dark:text-white">Send me delivery updates</label>
 *   </div>
 * )
 */
export const Switch = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <Root
        ref={ref}
        className={cx("h-6 w-10 flex-none rounded-full p-0.5 select-none transition-colors data-[state=unchecked]:bg-zinc-400 group-hover/switch:data-[state=unchecked]:bg-zinc-500 dark:data-[state=unchecked]:bg-zinc-900 group-hover/switch:dark:data-[state=unchecked]:bg-zinc-800 data-[disabled]:opacity-50 data-[state=checked]:bg-teal-500 group-hover/switch:data-[state=checked]:bg-teal-600 dark:data-[state=checked]:bg-teal-500 group-hover/switch:dark:data-[state=checked]:bg-teal-400", className)}
        {...props}
      >
        <Thumb
          className="block h-5 w-5 rounded-full bg-white pointer-events-none shadow-md transition-all data-[state=checked]:ml-4"
        />
      </Root>
    )
  }
);
Switch.displayName = "Switch"
