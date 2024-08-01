"use client"

import React from "react"
import { cva, VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

export const buttonVariants = cva(
  "inline-flex h-8 shadow items-center justify-center rounded-md bg-teal-700 px-3.5 text-white text-sm font-medium leading-none gap-2 select-none whitespace-nowrap disabled:opacity-50 disabled:pointer-events-none hover:bg-teal-800 active:bg-teal-900",
  {
    "variants": {
      "destructive": {
        "true": "bg-red-700 hover:bg-red-800 active:bg-red-900"
      },
      "variant": {
        "outline": "border-teal-800 bg-transparent text-teal-800 border hover:bg-teal-100 active:bg-teal-200 dark:bg-transparent dark:border-teal-300 dark:text-teal-300 dark:hover:bg-teal-900 dark:active:bg-teal-800 shadow-none",
        "minimal": "border-transparent bg-transparent text-zinc-800 border hover:bg-zinc-100 active:bg-zinc-200 dark:bg-transparent dark:text-zinc-300 dark:hover:bg-zinc-800 dark:active:bg-zinc-900 shadow-none"
      }
    },
    "compoundVariants": [
      {
        "destructive": true,
        "variant": "minimal",
        "className": "text-red-800 hover:bg-red-100 active:bg-red-200 dark:text-red-300 dark:hover:bg-red-900 dark:active:bg-red-800"
      },
      {
        "destructive": true,
        "variant": "outline",
        "className": "border-red-800 text-red-800 hover:bg-red-100 active:bg-red-200 dark:border-red-300 dark:text-red-300 dark:hover:bg-red-900 dark:active:bg-red-800"
      }
    ]
  }
)

/**
 * A clickable element to let users perform an action. Works with text, an icon, or both.
 * @example
 * <Button variant="minimal" destructive>Delete note</Button>
 */
export const Button = React.forwardRef(
  ({ className, destructive, variant, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={twMerge(buttonVariants({ className, destructive, variant }))}
        {...props}
      />
    )
  }
);
Button.displayName = "Button"
