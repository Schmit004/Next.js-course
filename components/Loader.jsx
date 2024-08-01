import React from "react"
import { cva, VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"
import { Loader2Icon } from "lucide-react"

export const loaderVariants = cva(
  "h-9 w-9 text-teal-500 animate-spin",
  {
    "variants": {
      "size": {
        "sm": "h-6 w-6",
        "lg": "h-12 w-12"
      }
    }
  }
)

/**
 * An indicator to display while content is loading.
 */
export const Loader = React.forwardRef(
  ({ className, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(loaderVariants({ className, size }))}
        {...props}
      >
        <Loader2Icon
          className="h-full w-full"
        />
      </div>
    )
  }
);
Loader.displayName = "Loader"
