"use client"

import React from "react"
import { cx } from "class-variance-authority"
import { Provider, Root, Trigger, Portal, Content } from "@radix-ui/react-tooltip"

/**
 * Wraps your app to provide global functionality to your tooltips.
 * @see https://www.radix-ui.com/docs/primitives/components/tooltip#provider
 */
export const TooltipProvider = Provider

/**
 * A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
 * @todo Add animations and keyframes to tailwind.config.ts: https://webbie.app/tailwind-config.txt
 * @see https://www.radix-ui.com/docs/primitives/components/tooltip#api-reference
 * @example
 * const [open, setOpen] = React.useState(false)
 * return (
 *   <Tooltip open={open} onOpenChange={setOpen}>
 *     <TooltipTrigger asChild>
 *       <div className="p-2 cursor-help inline-block dark:text-white"><HelpCircleIcon size={16} /></div>
 *     </TooltipTrigger>
 *     <TooltipContent>All duties and taxes are paid for by us, so no surprises!</TooltipContent>
 *   </Tooltip>
 * )
 */
export const Tooltip = Root

/**
 * The button that toggles the tooltip. By default, the content will position itself against the trigger.
 * @see https://www.radix-ui.com/docs/primitives/components/tooltip#trigger
 */
export const TooltipTrigger = Trigger

/**
 * The component that pops out when the tooltip is open.
 * @see https://www.radix-ui.com/docs/primitives/components/tooltip#content
 */
export const TooltipContent = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <Portal >
        <Content
          ref={ref}
          className={cx("max-w-xs overflow-hidden rounded-md bg-white px-4 py-3 text-sm leading-relaxed shadow border z-50 dark:bg-zinc-600 dark:border-zinc-500 dark:text-white data-[side=bottom]:animate-slide-in-from-top data-[side=left]:animate-slide-in-from-right data-[side=right]:animate-slide-in-from-left data-[side=top]:animate-slide-in-from-bottom", className)}
          {...props}
        />
      </Portal>
    )
  }
);
TooltipContent.displayName = "TooltipContent"
