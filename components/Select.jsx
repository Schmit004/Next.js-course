"use client"

import React from "react"
import { cx } from "class-variance-authority"
import { Root, Trigger, Value, Icon, Portal, Content, ScrollUpButton, Viewport, Group, Label, Item, ItemIndicator, ItemText, ScrollDownButton } from "@radix-ui/react-select"
import { ChevronDownIcon, ChevronUpIcon, CheckIcon } from "lucide-react"

/**
 * Displays a list of options for the user to pick from—triggered by a button.
 * @see https://www.radix-ui.com/docs/primitives/components/select#api-reference
 * @example
 * <Select defaultValue="normal">
 *   <SelectTrigger>
 *     <SelectValue placeholder="Select..." />
 *   </SelectTrigger>
 *   <SelectContent>
 *     <SelectGroup>
 *       <SelectLabel>Delivery method</SelectLabel>
 *       <SelectItem value="normal">Standard delivery</SelectItem>
 *       <SelectItem value="fast">Same-day delivery (+$5.00)</SelectItem>
 *       <SelectItem value="store">Store pick-up</SelectItem>
 *     </SelectGroup>
 *   </SelectContent>
 * </Select>
 */
export const Select = Root

/**
 * The button that toggles the select. The content will position itself by aligning over the trigger.
 * @see https://www.radix-ui.com/docs/primitives/components/select#trigger
 */
export const SelectTrigger = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <Trigger
        ref={ref}
        className={cx("inline-flex cursor-default h-8 items-center justify-between rounded-md px-3 text-sm border gap-1.5 dark:border-zinc-500 hover:border-zinc-400 dark:hover:border-zinc-400 transition-colors dark:text-white data-[disabled]:opacity-50", className)}
        {...props}
      >
        <span
          className="truncate"
        >
          <Value  />
        </span>
        <Icon asChild>
          <ChevronDownIcon
            size={16}
            className="flex-none mt-px opacity-70"
          />
        </Icon>
      </Trigger>
    )
  }
);
SelectTrigger.displayName = "SelectTrigger"

/**
 * The component that pops out when the select is open.
 * @see https://www.radix-ui.com/docs/primitives/components/select#content
 */
export const SelectContent = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <Portal >
        <Content
          ref={ref}
          className={cx("overflow-hidden rounded-lg bg-white shadow border min-w-[10rem] select-none cursor-default relative z-50 dark:bg-zinc-600 dark:border-zinc-500 dark:text-white", className)}
          {...props}
        >
          <ScrollUpButton
            className="flex justify-center border-b py-1.5 dark:border-zinc-500"
          >
            <ChevronUpIcon size={16} />
          </ScrollUpButton>
          <Viewport
            className="p-1"
          >
            {children}
          </Viewport>
          <ScrollDownButton
            className="flex justify-center border-t py-1.5 dark:border-zinc-500"
          >
            <ChevronDownIcon size={16} />
          </ScrollDownButton>
        </Content>
      </Portal>
    )
  }
);
SelectContent.displayName = "SelectContent"

/**
 * Used to group multiple items. Use in conjunction with the label to ensure good accessibility via automatic labelling.
 * @see https://www.radix-ui.com/docs/primitives/components/select#group
 */
export const SelectGroup = Group

/**
 * Used to render the label of a group. It won't be focusable using arrow keys.
 * @see https://www.radix-ui.com/docs/primitives/components/select#label
 */
export const SelectLabel = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <Label
        ref={ref}
        className={cx("py-1.5 pr-4 pl-8 text-sm opacity-70", className)}
        {...props}
      />
    )
  }
);
SelectLabel.displayName = "SelectLabel"

/**
 * The component that contains the select items.
 * @see https://www.radix-ui.com/docs/primitives/components/select#item
 */
export const SelectItem = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <Item
        ref={ref}
        className={cx("flex items-center rounded-md py-1.5 pr-4 text-sm gap-2 data-[disabled]:opacity-50 data-[highlighted]:bg-teal-700 data-[highlighted]:outline-none data-[highlighted]:text-white data-[state=checked]:pl-2 data-[state=unchecked]:pl-8", className)}
        {...props}
      >
        <ItemIndicator
          className="flex-none"
        >
          <CheckIcon size={16} />
        </ItemIndicator>
        <ItemText
          className="truncate"
        >
          {children}
        </ItemText>
      </Item>
    )
  }
);
SelectItem.displayName = "SelectItem"
