"use client"

import React from "react"
import { cva, VariantProps, cx } from "class-variance-authority"
import { twMerge } from "tailwind-merge"
import { Root, Trigger, Portal, Content, Group, Label, Item, CheckboxItem, ItemIndicator, Separator, RadioGroup, RadioItem, Sub, SubTrigger, SubContent } from "@radix-ui/react-context-menu"
import { CheckIcon, ChevronRightIcon } from "lucide-react"

/**
 * Displays a menu located at the pointer, triggered by a right-click or a long-press.
 * @todo Add animations and keyframes to tailwind.config.ts: https://webbie.app/tailwind-config.txt
 * @see https://www.radix-ui.com/docs/primitives/components/context-menu#api-reference
 * @example
 * <ContextMenu>
 *   <ContextMenuTrigger className="dark:text-white">Right-click me</ContextMenuTrigger>
 *   <ContextMenuContent>
 *     <ContextMenuItem inset>Open</ContextMenuItem>
 *     <ContextMenuCheckboxItem>Star</ContextMenuCheckboxItem>
 *     <ContextMenuSeparator />
 *     <ContextMenuItem inset>Rename</ContextMenuItem>
 *     <ContextMenuItem inset destructive>Delete</ContextMenuItem>
 *   </ContextMenuContent>
 * </ContextMenu>
 */
export const ContextMenu = Root

/**
 * The area that opens the context menu. Wrap it around the target you want the context menu to open from when right-clicking (or using the relevant keyboard shortcuts).
 * @see https://www.radix-ui.com/docs/primitives/components/context-menu#trigger
 */
export const ContextMenuTrigger = Trigger

/**
 * The component that pops out in an open context menu.
 * @see https://www.radix-ui.com/docs/primitives/components/context-menu#content
 */
export const ContextMenuContent = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <Portal >
        <Content
          ref={ref}
          className={cx("max-w-xs rounded-lg bg-white p-1 shadow border z-50 dark:bg-zinc-600 dark:border-zinc-500 origin-top-left data-[side=bottom]:animate-slide-in-from-top data-[side=left]:animate-slide-in-from-right data-[side=right]:animate-slide-in-from-left data-[side=top]:animate-slide-in-from-bottom", className)}
          {...props}
        />
      </Portal>
    )
  }
);
ContextMenuContent.displayName = "ContextMenuContent"

/**
 * Used to group multiple menu items.
 * @see https://www.radix-ui.com/docs/primitives/components/context-menu#group
 */
export const ContextMenuGroup = Group

export const contextMenuLabelVariants = cva(
  "select-none cursor-default flex items-center gap-1.5 py-1.5 pl-2.5 pr-12 text-sm dark:text-white opacity-70",
  {
    "variants": {
      "inset": {
        "true": "pl-8"
      }
    }
  }
)

/**
 * Used to render a label. It won't be focusable using arrow keys.
 * @see https://www.radix-ui.com/docs/primitives/components/context-menu#label
 */
export const ContextMenuLabel = React.forwardRef(
  ({ className, inset, ...props }, ref) => {
    return (
      <Label
        ref={ref}
        className={twMerge(contextMenuLabelVariants({ className, inset }))}
        {...props}
      />
    )
  }
);
ContextMenuLabel.displayName = "ContextMenuLabel"

export const contextMenuItemVariants = cva(
  "rounded-md py-1.5 pl-2.5 pr-12 text-sm dark:text-white flex items-center gap-1.5 select-none cursor-default data-[disabled]:opacity-50 data-[highlighted]:bg-teal-700 data-[highlighted]:outline-none data-[highlighted]:text-white",
  {
    "variants": {
      "destructive": {
        "true": "text-red-700 dark:text-red-300 data-[highlighted]:bg-red-700"
      },
      "inset": {
        "true": "pl-8"
      }
    }
  }
)

/**
 * The component that contains the context menu items.
 * @see https://www.radix-ui.com/docs/primitives/components/context-menu#item
 */
export const ContextMenuItem = React.forwardRef(
  ({ className, destructive, inset, ...props }, ref) => {
    return (
      <Item
        ref={ref}
        className={twMerge(contextMenuItemVariants({ className, destructive, inset }))}
        {...props}
      />
    )
  }
);
ContextMenuItem.displayName = "ContextMenuItem"

/**
 * An item that can be controlled and rendered like a checkbox.
 * @see https://www.radix-ui.com/docs/primitives/components/context-menu#checkbox-item
 */
export const ContextMenuCheckboxItem = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <CheckboxItem
        ref={ref}
        className={cx("flex items-center rounded-md py-1.5 pr-8 text-sm dark:text-white select-none cursor-default data-[disabled]:opacity-50 data-[highlighted]:bg-teal-700 data-[highlighted]:outline-none data-[highlighted]:text-white data-[state=unchecked]:pl-8", className)}
        {...props}
      >
        <ItemIndicator
          className="inline-flex w-8 flex-none items-center justify-center"
        >
          <CheckIcon size={16} />
        </ItemIndicator>
        {children}
      </CheckboxItem>
    )
  }
);
ContextMenuCheckboxItem.displayName = "ContextMenuCheckboxItem"

/**
 * Used to add a shortcut to a context menu item.
 */
export const ContextMenuShortcut = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cx("absolute right-4 mt-0.5 tracking-widest opacity-60", className)}
        {...props}
      />
    )
  }
);
ContextMenuShortcut.displayName = "ContextMenuShortcut"

/**
 * Used to visually separate items in the context menu.
 * @see https://www.radix-ui.com/docs/primitives/components/context-menu#separator
 */
export const ContextMenuSeparator = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <Separator
        ref={ref}
        className={cx("my-1 h-px bg-zinc-300 dark:bg-zinc-500", className)}
        {...props}
      />
    )
  }
);
ContextMenuSeparator.displayName = "ContextMenuSeparator"

/**
 * Used to group multiple radio items.
 * @see https://www.radix-ui.com/docs/primitives/components/context-menu#radio-group
 */
export const ContextMenuRadioGroup = RadioGroup

/**
 * An item that can be controlled and rendered like a radio.
 * @see https://www.radix-ui.com/docs/primitives/components/context-menu#radio-item
 */
export const ContextMenuRadioItem = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <RadioItem
        ref={ref}
        className={cx("flex items-center rounded-md py-1.5 pr-12 text-sm dark:text-white select-none cursor-default data-[disabled]:opacity-50 data-[highlighted]:bg-teal-700 data-[highlighted]:outline-none data-[highlighted]:text-white data-[state=unchecked]:pl-8", className)}
        {...props}
      >
        <ItemIndicator
          className="inline-flex w-8 flex-none items-center justify-center"
        >
          <CheckIcon size={16} />
        </ItemIndicator>
        {children}
      </RadioItem>
    )
  }
);
ContextMenuRadioItem.displayName = "ContextMenuRadioItem"

/**
 * Contains all the parts of a submenu.
 * @see https://www.radix-ui.com/docs/primitives/components/context-menu#sub
 */
export const ContextMenuSub = Sub

/**
 * An item that opens a submenu.
 * @see https://www.radix-ui.com/docs/primitives/components/context-menu#sub-trigger
 */
export const ContextMenuSubTrigger = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <SubTrigger
        ref={ref}
        className={cx("flex items-center gap-1.5 justify-between rounded-md py-1.5 pr-2 pl-8 text-sm dark:text-white select-none cursor-default data-[highlighted]:bg-teal-700 data-[highlighted]:outline-none data-[highlighted]:text-white", className)}
        {...props}
      >
        {children}
        <ChevronRightIcon
          size={16}
          className="opacity-70"
        />
      </SubTrigger>
    )
  }
);
ContextMenuSubTrigger.displayName = "ContextMenuSubTrigger"

/**
 * The component that pops out when a submenu is open.
 * @see https://www.radix-ui.com/docs/primitives/components/context-menu#sub-content
 */
export const ContextMenuSubContent = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <SubContent
        ref={ref}
        className={cx("max-w-xs rounded-lg bg-white p-1 shadow border z-50 dark:bg-zinc-600 dark:border-zinc-500 origin-top-left data-[side=bottom]:animate-slide-in-from-top data-[side=left]:animate-slide-in-from-right data-[side=right]:animate-slide-in-from-left data-[side=top]:animate-slide-in-from-bottom", className)}
        {...props}
      />
    )
  }
);
ContextMenuSubContent.displayName = "ContextMenuSubContent"
