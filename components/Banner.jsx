import React from "react"
import { cva, VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"
import { InfoIcon, CheckCircle2Icon, AlertTriangleIcon, XIcon } from "lucide-react"

export const bannerVariants = cva(
  "flex rounded-md bg-zinc-200 px-3.5 pt-2.5 pb-2 text-undefined text-sm gap-3 dark:bg-zinc-800 dark:text-zinc-50",
  {
    "variants": {
      "variant": {
        "success": "bg-green-200 text-undefined dark:bg-green-800 dark:text-green-50",
        "warning": "bg-amber-200 text-undefined dark:bg-amber-800 dark:text-amber-50",
        "destructive": "bg-red-200 text-undefined dark:bg-red-800 dark:text-red-50"
      }
    }
  }
)

/**
 * Display an important message for the user to notice.
 * @example
 * <Banner variant="warning">
 *   Your account is not yet verified. Please check your email.
 * </Banner>
 */
export const Banner = React.forwardRef(
  ({ children, className, variant, ...props }, ref) => {
    // Display a different icon for each variant.
    const Icon = variant === "success" ? CheckCircle2Icon : variant === "warning" ? AlertTriangleIcon : variant === "destructive" ? XIcon : InfoIcon

    return (
      <div
        ref={ref}
        className={twMerge(bannerVariants({ className, variant }))}
        {...props}
      >
        <Icon
          className="-mt-0.5 flex-none"
        />
        {children}
      </div>
    )
  }
);
Banner.displayName = "Banner"
