"use client"

import React from "react"
import { cx } from "class-variance-authority"
import { Root, Item, Indicator } from "@radix-ui/react-radio-group"

/**
 * A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.
 * @see https://www.radix-ui.com/docs/primitives/components/radio-group#api-reference
 * @example
 * <RadioGroup defaultValue="normal">
 *   <RadioGroupItem id="delivery-normal" value="normal">Standard delivery</RadioGroupItem>
 *   <RadioGroupItem id="delivery-fast" value="fast">Same-day delivery (+$5.00)</RadioGroupItem>
 *   <RadioGroupItem id="delivery-store" value="store">Store pick-up</RadioGroupItem>
 * </RadioGroup>
 */
export const RadioGroup = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <Root
        ref={ref}
        className={cx("flex flex-col gap-3 select-none", className)}
        {...props}
      />
    )
  }
);
RadioGroup.displayName = "RadioGroup"

/**
 * An item in the group that can be checked.
 * @see https://www.radix-ui.com/docs/primitives/components/radio-group#item
 */
export const RadioGroupItem = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        className={cx("flex", className)}
      >
        <Item
          ref={ref}
          className="peer flex h-5 w-5 flex-none items-center justify-center cursor-default rounded-full border-zinc-400 hover:border-zinc-500 dark:hover:border-zinc-300 dark:border-zinc-400 border transition-colors data-[disabled]:opacity-50"
          {...props}
        >
          <Indicator
            className="block h-3 w-3 rounded-full bg-teal-500"
          />
        </Item>
        <label
          htmlFor={props.id}
          className="peer-data-[state=unchecked]:opacity-70 transition-opacity pl-2.5 text-sm dark:text-white"
        >
          {children}
        </label>
      </div>
    )
  }
);
RadioGroupItem.displayName = "RadioGroupItem"
