"use client"

import React from "react"
import { cx } from "class-variance-authority"
import { Root, Trigger, Portal, Content } from "@radix-ui/react-hover-card"

/**
 * For sighted users to preview content available behind a link.
 * @todo Add animations and keyframes to tailwind.config.ts: https://webbie.app/tailwind-config.txt
 * @see https://www.radix-ui.com/docs/primitives/components/hover-card#api-reference
 * @example
 * <HoverCard>
 *   <HoverCardTrigger className="dark:text-white">Hover me</HoverCardTrigger>
 *   <HoverCardContent>
 *     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac risus sed sem lacinia finibus.
 *   </HoverCardContent>
 * </HoverCard>
 */
export const HoverCard = Root

/**
 * The link that opens the hover card when hovered.
 * @see https://www.radix-ui.com/docs/primitives/components/hover-card#trigger
 */
export const HoverCardTrigger = Trigger

/**
 * The component that pops out when the hover card is open.
 * @see https://www.radix-ui.com/docs/primitives/components/hover-card#content
 */
export const HoverCardContent = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <Portal >
        <Content
          ref={ref}
          className={cx("max-w-xs rounded-lg bg-white p-4 text-sm leading-relaxed shadow border z-50 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white data-[side=bottom]:animate-slide-in-from-top data-[side=left]:animate-slide-in-from-right data-[side=right]:animate-slide-in-from-left data-[side=top]:animate-slide-in-from-bottom", className)}
          {...props}
        />
      </Portal>
    )
  }
);
HoverCardContent.displayName = "HoverCardContent"
