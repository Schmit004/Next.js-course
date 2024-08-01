"use client"

import React from "react"
import { VariantProps, cx } from "class-variance-authority"
import { twMerge } from "tailwind-merge"
import { Root, Item } from "@radix-ui/react-toggle-group"
import { toggleVariants } from "./Toggle"

/**
 * A set of two-state buttons that can be toggled on or off.
 * @see https://www.radix-ui.com/docs/primitives/components/toggle-group#api-reference
 * @example
 * const [format, setFormat] = React.useState(["bold"])
 * return (
 *   <ToggleGroup type="multiple" value={format} onValueChange={setFormat}>
 *     <ToggleGroupItem value="bold"><BoldIcon size={16} /></ToggleGroupItem>
 *     <ToggleGroupItem value="italic"><ItalicIcon size={16} /></ToggleGroupItem>
 *     <ToggleGroupItem value="underline"><UnderlineIcon size={16} /></ToggleGroupItem>
 *   </ToggleGroup>
 * )
 */
export const ToggleGroup = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <Root
        ref={ref}
        className={cx("inline-flex gap-0.5", className)}
        {...props}
      />
    )
  }
);
ToggleGroup.displayName = "ToggleGroup"

/**
 * An item in the group.
 * @see https://www.radix-ui.com/docs/primitives/components/toggle-group#item
 */
export const ToggleGroupItem = React.forwardRef(
  ({ className, variant, ...props }, ref) => {
    return (
      <Item
        ref={ref}
        className={twMerge(toggleVariants({ className, variant }))}
        {...props}
      />
    )
  }
);
ToggleGroupItem.displayName = "ToggleGroupItem"
