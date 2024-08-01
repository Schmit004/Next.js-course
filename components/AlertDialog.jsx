"use client"

import React from "react"
import { VariantProps, cx } from "class-variance-authority"
import { twMerge } from "tailwind-merge"
import { Root, Trigger, Portal, Overlay, Content, Title, Description, Cancel, Action } from "@radix-ui/react-alert-dialog"
import { buttonVariants } from "./Button"

/**
 * A modal dialog that interrupts the user with important content and expects a response.
 * @todo Add animations and keyframes to tailwind.config.ts: https://webbie.app/tailwind-config.txt
 * @see https://www.radix-ui.com/docs/primitives/components/alert-dialog#api-reference
 * @example
 * <AlertDialog>
 *   <AlertDialogTrigger asChild>
 *     <Button destructive variant="minimal">Discard</Button>
 *   </AlertDialogTrigger>
 *   <AlertDialogContent>
 *     <AlertDialogTitle>Discard draft?</AlertDialogTitle>
 *     <AlertDialogDescription>
 *       Are you sure you want to discard your new note? All of your changes will be lost.
 *     </AlertDialogDescription>
 *     <AlertDialogFooter>
 *       <AlertDialogCancel>Cancel</AlertDialogCancel>
 *       <AlertDialogAction>Discard</AlertDialogAction>
 *     </AlertDialogFooter>
 *   </AlertDialogContent>
 * </AlertDialog>
 */
export const AlertDialog = Root

/**
 * The button that opens the dialog.
 * @see https://www.radix-ui.com/docs/primitives/components/alert-dialog#trigger
 */
export const AlertDialogTrigger = Trigger

/**
 * Contains content to be rendered when the dialog is open.
 * @see https://www.radix-ui.com/docs/primitives/components/alert-dialog#content
 */
export const AlertDialogContent = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <Portal >
        <Content
          ref={ref}
          className={cx("rounded-xl w-80 bg-white p-5 shadow-xl fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-50 dark:bg-zinc-700 sm:max-w-md sm:w-full data-[state=closed]:animate-dialog-out data-[state=open]:animate-dialog-in", className)}
          {...props}
        />
        <Overlay
          className="bg-zinc-300/30 backdrop-blur-sm fixed inset-0 z-40 dark:bg-zinc-800/30 data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in"
        />
      </Portal>
    )
  }
);
AlertDialogContent.displayName = "AlertDialogContent"

/**
 * An accessible title to be announced when the dialog is opened.
 * @see https://www.radix-ui.com/docs/primitives/components/alert-dialog#title
 */
export const AlertDialogTitle = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <Title
        ref={ref}
        className={cx("font-medium dark:text-white", className)}
        {...props}
      />
    )
  }
);
AlertDialogTitle.displayName = "AlertDialogTitle"

/**
 * An accessible description to be announced when the dialog is opened.
 * @see https://www.radix-ui.com/docs/primitives/components/alert-dialog#description
 */
export const AlertDialogDescription = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <Description
        ref={ref}
        className={cx("py-2 text-zinc-800 text-sm leading-normal dark:text-zinc-200", className)}
        {...props}
      />
    )
  }
);
AlertDialogDescription.displayName = "AlertDialogDescription"

/**
 * Contains all the buttons in the footer.
 */
export const AlertDialogFooter = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cx("mt-2 flex flex-col gap-2 sm:flex-row sm:justify-end", className)}
        {...props}
      />
    )
  }
);
AlertDialogFooter.displayName = "AlertDialogFooter"

/**
 * A button that closes the dialog. This button should be distinguished visually from the Action button.
 * @see https://www.radix-ui.com/docs/primitives/components/alert-dialog#cancel
 */
export const AlertDialogCancel = React.forwardRef(
  ({ className, variant = "minimal", ...props }, ref) => {
    return (
      <Cancel
        ref={ref}
        className={twMerge(buttonVariants({ className, variant }))}
        {...props}
      />
    )
  }
);
AlertDialogCancel.displayName = "AlertDialogCancel"

/**
 * A button that closes the dialog. This button should be distinguished visually from the Cancel button.
 * @see https://www.radix-ui.com/docs/primitives/components/alert-dialog#action
 */
export const AlertDialogAction = React.forwardRef(
  ({ className, destructive = true, variant, ...props }, ref) => {
    return (
      <Action
        ref={ref}
        className={twMerge(buttonVariants({ className, variant, destructive }))}
        {...props}
      />
    )
  }
);
AlertDialogAction.displayName = "AlertDialogAction"
