"use client"

import React from "react"
import { cx } from "class-variance-authority"
import { Root, Indicator } from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"

/**
 * A control that allows the user to toggle between checked and not checked.
 * @see https://www.radix-ui.com/docs/primitives/components/checkbox#api-reference
 * @example
 * const [isChecked, setIsChecked] = useState(false)
 * return (
 *   <div className="group/checkbox flex gap-3 items-start">
 *     <Checkbox id="unique-id" checked={isChecked} onCheckedChange={setIsChecked} />
 *     <label htmlFor="unique-id" className="dark:text-white">Accept terms & conditions</label>
 *   </div>
 * )
 */
export const Checkbox = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <Root
        ref={ref}
        className={cx("h-5 w-5 flex-none mt-0.5 flex items-center justify-center border duration-100 rounded-sm transition-colors border-zinc-400 group-hover/checkbox:border-zinc-500 dark:group-hover/checkbox:border-zinc-300 dark:border-zinc-400 dark:text-white data-[disabled]:opacity-50 data-[state=checked]:bg-teal-700 data-[state=checked]:border-teal-700 hover:data-[state=checked]:border-teal-900 dark:hover:data-[state=checked]:border-teal-900", className)}
        {...props}
      >
        <Indicator asChild>
          <CheckIcon
            size={16}
            className="text-white"
          />
        </Indicator>
      </Root>
    )
  }
);
Checkbox.displayName = "Checkbox"
