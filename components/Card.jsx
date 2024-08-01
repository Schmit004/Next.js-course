import React from "react"
import { cx } from "class-variance-authority"

/**
 * A container to bundle related information.
 * @example
 * <Card>
 *   <CardImage src="https://images.unsplash.com/photo-1487124504955-e42a39e11aaf?w=512&h=512&dpr=2&q=80" />
 *   <CardContent>
 *     <CardTitle>Carrot Cake Cupcake</CardTitle>
 *     <CardDescription>
 *       $5.00 (members get 10% off)
 *     </CardDescription>
 *   </CardContent>
 * </Card>
 */
export const Card = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cx("flex max-w-xs flex-col rounded-md p-1 shadow border gap-0.5 dark:bg-zinc-600 dark:border-zinc-500", className)}
        {...props}
      />
    )
  }
);
Card.displayName = "Card"

/**
 * An optional image of the card.
 */
export const CardImage = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <img
        ref={ref}
        className={cx("h-40 rounded min-w-0 object-cover object-center", className)}
        {...props}
      />
    )
  }
);
CardImage.displayName = "CardImage"

/**
 * The content of the card.
 */
export const CardContent = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cx("flex-1 px-3 py-2", className)}
        {...props}
      />
    )
  }
);
CardContent.displayName = "CardContent"

/**
 * The title of the card.
 */
export const CardTitle = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <h2
        ref={ref}
        className={cx("mt-1 text-undefined text-lg font-medium leading-snug dark:text-white", className)}
        {...props}
      />
    )
  }
);
CardTitle.displayName = "CardTitle"

/**
 * The description of the card.
 */
export const CardDescription = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cx("mt-1 text-sm text-zinc-700 leading-normal dark:text-zinc-200", className)}
        {...props}
      />
    )
  }
);
CardDescription.displayName = "CardDescription"
