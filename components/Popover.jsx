"use client"

import React from "react"
import { cx } from "class-variance-authority"
import { Root, Trigger, Portal, Content, Close } from "@radix-ui/react-popover"
import { XIcon } from "lucide-react"

/**
 * Displays rich content in a portal, triggered by a button.
 * @todo Add animations and keyframes to tailwind.config.ts: https://webbie.app/tailwind-config.txt
 * @see https://www.radix-ui.com/docs/primitives/components/popover#api-reference
 * @example
 * <Popover>
 *   <PopoverTrigger asChild>
 *     <Button>Open</Button>
 *   </PopoverTrigger>
 *   <PopoverContent>
 *     Incididunt velit excepteur qui mollit id irure.
 *   </PopoverContent>
 * </Popover>
 */
export const Popover = Root

/**
 * The button that toggles the popover.
 * @see https://www.radix-ui.com/docs/primitives/components/popover#trigger
 */
export const PopoverTrigger = Trigger

/**
 * The component that pops out when the popover is open.
 * @see https://www.radix-ui.com/docs/primitives/components/popover#content
 */
export const PopoverContent = React.forwardRef(
  ({ children, className, sideOffset = 6, ...props }, ref) => {
    return (
      <Portal >
        <Content
          ref={ref}
          sideOffset={sideOffset}
          className={cx("max-w-xs rounded-lg bg-white py-4 pr-10 pl-4 text-sm leading-relaxed shadow border z-50 dark:bg-zinc-600 dark:border-zinc-700 dark:text-white data-[side=bottom]:animate-slide-in-from-top data-[side=left]:animate-slide-in-from-right data-[side=right]:animate-slide-in-from-left data-[side=top]:animate-slide-in-from-bottom", className)}
          {...props}
        >
          {children}
          <Close
            className="rounded p-2 text-zinc-700 absolute right-2 top-2 hover:bg-teal-100 hover:text-teal-800 active:bg-teal-200 active:text-teal-800 dark:text-zinc-200 dark:hover:bg-teal-700 dark:hover:text-teal-100 dark:active:bg-teal-600 dark:active:text-teal-100"
          >
            <XIcon size={16} />
          </Close>
        </Content>
      </Portal>
    )
  }
);
PopoverContent.displayName = "PopoverContent"
