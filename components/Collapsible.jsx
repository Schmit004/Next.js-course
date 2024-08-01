"use client"

import React from "react"
import { cx } from "class-variance-authority"
import { Root, Trigger, Content } from "@radix-ui/react-collapsible"
import { ChevronDownIcon } from "lucide-react"

/**
 * An interactive component which expands/collapses a panel.
 * @todo Add animations and keyframes to tailwind.config.ts: https://webbie.app/tailwind-config.txt
 * @see https://www.radix-ui.com/docs/primitives/components/collapsible#api-reference
 * @example
 * <Collapsible>
 *   <CollapsibleTrigger>Accepted payment options</CollapsibleTrigger>
 *   <CollapsibleContent>We accept Mastercard, Visa and American Express.</CollapsibleContent>
 * </Collapsible>
 */
export const Collapsible = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <Root
        ref={ref}
        className={cx("rounded-md dark:bg-zinc-600 data-[disabled]:opacity-50", className)}
        {...props}
      />
    )
  }
);
Collapsible.displayName = "Collapsible"

/**
 * The button that toggles the collapsible.
 * @see https://www.radix-ui.com/docs/primitives/components/collapsible#trigger
 */
export const CollapsibleTrigger = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <Trigger
        ref={ref}
        className={cx("flex w-full text-left gap-3 items-center justify-between rounded-md px-4 py-2.5 text-sm font-medium [&[data-state=open]>svg]:rotate-180 hover:bg-zinc-100 active:bg-zinc-200 dark:text-white dark:hover:bg-zinc-500 dark:active:bg-zinc-400", className)}
        {...props}
      >
        {children}
        <ChevronDownIcon
          className="h-5 w-5 flex-none text-teal-700 transition-transform dark:text-teal-300"
        />
      </Trigger>
    )
  }
);
CollapsibleTrigger.displayName = "CollapsibleTrigger"

/**
 * The component that contains the collapsible content.
 * @see https://www.radix-ui.com/docs/primitives/components/collapsible#content
 */
export const CollapsibleContent = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <Content
        ref={ref}
        className={cx("overflow-hidden px-4 pt-0.5 pb-2.5 text-zinc-700 dark:text-zinc-200 text-sm leading-relaxed data-[state=closed]:animate-collapsible-collapse data-[state=open]:animate-collapsible-expand", className)}
        {...props}
      />
    )
  }
);
CollapsibleContent.displayName = "CollapsibleContent"
