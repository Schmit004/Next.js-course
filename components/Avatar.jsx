"use client"

import React from "react"
import { cx } from "class-variance-authority"
import { Root, Image, Fallback } from "@radix-ui/react-avatar"

/**
 * An image element with a fallback for representing the user.
 * @see https://www.radix-ui.com/docs/primitives/components/avatar#api-reference
 * @example
 * <Avatar>
 *   <AvatarImage src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=128&h=128&dpr=2&q=80" alt="John Doe" />
 *   <AvatarFallback>JD</AvatarFallback>
 * </Avatar>
 */
export const Avatar = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <Root
        ref={ref}
        className={cx("block h-10 w-10 flex-none overflow-hidden rounded-full relative select-none", className)}
        {...props}
      />
    )
  }
);
Avatar.displayName = "Avatar"

/**
 * The image to render. By default it will only render when it has loaded.
 * @see https://www.radix-ui.com/docs/primitives/components/avatar#image
 */
export const AvatarImage = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <Image
        ref={ref}
        className={cx("h-full w-full object-cover object-center absolute", className)}
        {...props}
      />
    )
  }
);
AvatarImage.displayName = "AvatarImage"

/**
 * An element that renders when the image hasn't loaded.
 * @see https://www.radix-ui.com/docs/primitives/components/avatar#fallback
 */
export const AvatarFallback = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <Fallback
        ref={ref}
        className={cx("flex h-full w-full items-center justify-center bg-teal-900 text-white text-sm font-semibold absolute dark:bg-teal-200 dark:text-black", className)}
        {...props}
      />
    )
  }
);
AvatarFallback.displayName = "AvatarFallback"
