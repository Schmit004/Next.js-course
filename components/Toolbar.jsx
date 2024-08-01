"use client"

import React from "react"
import { VariantProps, cx } from "class-variance-authority"
import { twMerge } from "tailwind-merge"
import { Root, ToggleGroup, ToggleItem, Separator, Link, Button } from "@radix-ui/react-toolbar"
import { buttonVariants } from "./Button"
import { toggleVariants } from "./Toggle"

/**
 * A container for grouping a set of controls, such as buttons, toggle groups or dropdown menus.
 * @see https://www.radix-ui.com/docs/primitives/components/toolbar#api-reference
 * @example
 * const [format, setFormat] = React.useState(["bold"])
 * return (
 *   <Toolbar>
 *     <ToolbarToggleGroup type="multiple" value={format} onValueChange={setFormat}>
 *       <ToolbarToggleItem value="bold"><BoldIcon size={16} /></ToolbarToggleItem>
 *       <ToolbarToggleItem value="italic"><ItalicIcon size={16} /></ToolbarToggleItem>
 *       <ToolbarToggleItem value="underline"><UnderlineIcon size={16} /></ToolbarToggleItem>
 *     </ToolbarToggleGroup>
 *     <ToolbarSeparator />
 *     <ToolbarButton>Save</ToolbarButton>
 *   </Toolbar>
 * )
 */
export const Toolbar = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <Root
        ref={ref}
        className={cx("flex items-center rounded-lg p-1 border gap-0.5 dark:border-zinc-500 dark:shadow-none", className)}
        {...props}
      />
    )
  }
);
Toolbar.displayName = "Toolbar"

/**
 * A set of two-state buttons that can be toggled on or off.
 * @see https://www.radix-ui.com/docs/primitives/components/toolbar#toggle-group
 */
export const ToolbarToggleGroup = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <ToggleGroup
        ref={ref}
        className={cx("inline-flex gap-px", className)}
        {...props}
      />
    )
  }
);
ToolbarToggleGroup.displayName = "ToolbarToggleGroup"

/**
 * An item in the group.
 * @see https://www.radix-ui.com/docs/primitives/components/toolbar#toggle-item
 */
export const ToolbarToggleItem = React.forwardRef(
  ({ className, variant, ...props }, ref) => {
    return (
      <ToggleItem
        ref={ref}
        className={twMerge(toggleVariants({ className, variant }))}
        {...props}
      />
    )
  }
);
ToolbarToggleItem.displayName = "ToolbarToggleItem"

/**
 * Used to visually separate items in the toolbar.
 * @see https://www.radix-ui.com/docs/primitives/components/toolbar#separator
 */
export const ToolbarSeparator = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <Separator
        ref={ref}
        className={cx("mx-2 h-7 w-px bg-zinc-400 dark:bg-zinc-500", className)}
        {...props}
      />
    )
  }
);
ToolbarSeparator.displayName = "ToolbarSeparator"

/**
 * A link item.
 * @see https://www.radix-ui.com/docs/primitives/components/toolbar#link
 */
export const ToolbarLink = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        className={cx("mr-auto ml-2.5 text-zinc-900 text-sm hover:text-teal-700 dark:text-zinc-100 dark:hover:text-teal-300", className)}
        {...props}
      />
    )
  }
);
ToolbarLink.displayName = "ToolbarLink"

/**
 * A button item.
 * @see https://www.radix-ui.com/docs/primitives/components/toolbar#button
 */
export const ToolbarButton = React.forwardRef(
  ({ className, variant, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={twMerge(buttonVariants({ className, variant }))}
        {...props}
      />
    )
  }
);
ToolbarButton.displayName = "ToolbarButton"
