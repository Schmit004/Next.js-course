"use client"

import React from "react"
import { cx } from "class-variance-authority"
import { Root, Track, Range, Thumb } from "@radix-ui/react-slider"

/**
 * An input where the user selects a value from within a given range.
 * @see https://www.radix-ui.com/docs/primitives/components/slider#api-reference
 * @example
 * const [value, setValue] = React.useState([10])
 * return <Slider value={value} onValueChange={setValue} max={50} />
 */
export const Slider = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <Root
        ref={ref}
        className={cx("flex w-full items-center relative select-none data-[disabled]:opacity-50", className)}
        {...props}
      >
        <Track
          className="h-2 w-full rounded-full bg-zinc-300 relative dark:bg-zinc-900"
        >
          <Range
            className="h-full rounded-full bg-teal-500 absolute"
          />
        </Track>
        <Thumb
          className="block h-6 w-6 bg-white border shadow-md rounded-full"
        />
      </Root>
    )
  }
);
Slider.displayName = "Slider"
