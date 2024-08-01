"use client"

import React from "react"
import { cva, VariantProps, cx } from "class-variance-authority"
import { twMerge } from "tailwind-merge"
import { Root, Trigger, Portal, Content, Group, Label, Item, CheckboxItem, ItemIndicator, Separator, RadioGroup, RadioItem, Sub, SubTrigger, SubContent } from "@radix-ui/react-dropdown-menu"
import { CheckIcon, ChevronRightIcon } from "lucide-react"

/**
 * Displays a menu to the user, such as a set of actions or functions, triggered by a button.
 * @todo Add animations and keyframes to tailwind.config.ts: https://webbie.app/tailwind-config.txt
 * @see https://www.radix-ui.com/docs/primitives/components/dropdown-menu#api-reference
 * @example
 * <DropdownMenu>
 *   <DropdownMenuTrigger asChild>
 *     <Button>Open</Button>
 *   </DropdownMenuTrigger>
 *   <DropdownMenuContent align="start">
 *     <DropdownMenuItem inset>Open</DropdownMenuItem>
 *     <DropdownMenuCheckboxItem>Star</DropdownMenuCheckboxItem>
 *     <DropdownMenuSeparator />
 *     <DropdownMenuItem inset>Rename</DropdownMenuItem>
 *     <DropdownMenuItem inset destructive>Delete</DropdownMenuItem>
 *   </DropdownMenuContent>
 * </DropdownMenu>
 */
export const DropdownMenu = Root

/**
 * The button that toggles the dropdown menu.
 * @see https://www.radix-ui.com/docs/primitives/components/dropdown-menu#trigger
 */
export const DropdownMenuTrigger = Trigger

/**
 * The component that pops out when the dropdown menu is open.
 * @see https://www.radix-ui.com/docs/primitives/components/dropdown-menu#content
 */
export const DropdownMenuContent = React.forwardRef(
  ({ className, sideOffset = 6, ...props }, ref) => {
    return (
      <Portal >
        <Content
          ref={ref}
          sideOffset={sideOffset}
          className={cx("max-w-xs rounded-lg bg-white p-1 shadow border z-50 dark:bg-zinc-600 dark:border-zinc-500 data-[side=bottom]:animate-slide-in-from-top data-[side=left]:animate-slide-in-from-right data-[side=right]:animate-slide-in-from-left data-[side=top]:animate-slide-in-from-bottom", className)}
          {...props}
        />
      </Portal>
    )
  }
);
DropdownMenuContent.displayName = "DropdownMenuContent"

/**
 * Used to group multiple menu items.
 * @see https://www.radix-ui.com/docs/primitives/components/dropdown-menu#group
 */
export const DropdownMenuGroup = Group

export const dropdownMenuLabelVariants = cva(
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
 * @see https://www.radix-ui.com/docs/primitives/components/dropdown-menu#label
 */
export const DropdownMenuLabel = React.forwardRef(
  ({ className, inset, ...props }, ref) => {
    return (
      <Label
        ref={ref}
        className={twMerge(dropdownMenuLabelVariants({ className, inset }))}
        {...props}
      />
    )
  }
);
DropdownMenuLabel.displayName = "DropdownMenuLabel"

export const dropdownMenuItemVariants = cva(
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
 * The component that contains the dropdown menu items.
 * @see https://www.radix-ui.com/docs/primitives/components/dropdown-menu#item
 */
export const DropdownMenuItem = React.forwardRef(
  ({ className, destructive, inset, ...props }, ref) => {
    return (
      <Item
        ref={ref}
        className={twMerge(dropdownMenuItemVariants({ className, destructive, inset }))}
        {...props}
      />
    )
  }
);
DropdownMenuItem.displayName = "DropdownMenuItem"

/**
 * An item that can be controlled and rendered like a checkbox.
 * @see https://www.radix-ui.com/docs/primitives/components/dropdown-menu#checkbox-item
 */
export const DropdownMenuCheckboxItem = React.forwardRef(
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
DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem"

/**
 * Used to add a shortcut to a dropdown menu item.
 */
export const DropdownMenuShortcut = React.forwardRef(
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
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

/**
 * Used to visually separate items in the dropdown menu.
 * @see https://www.radix-ui.com/docs/primitives/components/dropdown-menu#separator
 */
export const DropdownMenuSeparator = React.forwardRef(
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
DropdownMenuSeparator.displayName = "DropdownMenuSeparator"

/**
 * Used to group multiple radio items.
 * @see https://www.radix-ui.com/docs/primitives/components/dropdown-menu#radio-group
 */
export const DropdownMenuRadioGroup = RadioGroup

/**
 * An item that can be controlled and rendered like a radio.
 * @see https://www.radix-ui.com/docs/primitives/components/dropdown-menu#radio-item
 */
export const DropdownMenuRadioItem = React.forwardRef(
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
DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem"

/**
 * Contains all the parts of a submenu.
 * @see https://www.radix-ui.com/docs/primitives/components/dropdown-menu#sub
 */
export const DropdownMenuSub = Sub

/**
 * An item that opens a submenu.
 * @see https://www.radix-ui.com/docs/primitives/components/dropdown-menu#sub-trigger
 */
export const DropdownMenuSubTrigger = React.forwardRef(
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
DropdownMenuSubTrigger.displayName = "DropdownMenuSubTrigger"

/**
 * The component that pops out when a submenu is open.
 * @see https://www.radix-ui.com/docs/primitives/components/dropdown-menu#sub-content
 */
export const DropdownMenuSubContent = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <SubContent
        ref={ref}
        className={cx("max-w-xs rounded-lg bg-white p-1 shadow border z-50 dark:bg-zinc-600 dark:border-zinc-500 data-[side=bottom]:animate-slide-in-from-top data-[side=left]:animate-slide-in-from-right data-[side=right]:animate-slide-in-from-left data-[side=top]:animate-slide-in-from-bottom", className)}
        {...props}
      />
    )
  }
);
DropdownMenuSubContent.displayName = "DropdownMenuSubContent"
