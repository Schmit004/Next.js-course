"use client"

import React from "react"
import { cva, VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"
import { Root } from "@radix-ui/react-toggle"

export const toggleVariants = cva(
  "inline-flex h-8 items-center justify-center rounded-md border-transparent px-2 text-sm font-medium border gap-2 select-none hover:bg-zinc-100 active:bg-zinc-200 dark:text-white data-[state=on]:shadow dark:hover:bg-zinc-600 dark:active:bg-zinc-500 hover:data-[state=on]:bg-teal-700 active:data-[state=on]:bg-teal-700 dark:data-[state=on]:bg-teal-700 dark:data-[state=on]:text-white dark:hover:data-[state=on]:bg-teal-700 dark:active:data-[state=on]:bg-teal-700 data-[disabled]:opacity-50 data-[state=on]:bg-teal-700 data-[state=on]:text-white",
  {
    "variants": {
      "variant": {
        "outline": "border-zinc-300 dark:border-zinc-500 dark:data-[state=on]:border-teal-500 data-[state=on]:border-teal-300"
      }
    }
  }
)

/**
 * A two-state button that can be either on or off.
 * @see https://www.radix-ui.com/docs/primitives/components/toggle#api-reference
 * @example
 * const [isBold, setIsBold] = useState(false)
 * return (
 *   <Toggle aria-label="Toggle bold" pressed={isBold} onPressedChange={setIsBold}>
 *     <BoldIcon size={16} />
 *   </Toggle>
 * )
 */
export const Toggle = React.forwardRef(
  ({ className, variant, ...props }, ref) => {
    return (
      <Root
        ref={ref}
        className={twMerge(toggleVariants({ className, variant }))}
        {...props}
      />
    )
  }
);
Toggle.displayName = "Toggle"
