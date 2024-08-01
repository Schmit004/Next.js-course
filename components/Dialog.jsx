"use client"

import React from "react"
import { cx } from "class-variance-authority"
import { Root, Trigger, Portal, Overlay, Content, Close, Title, Description } from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"

/**
 * A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.
 * @todo Add animations and keyframes to tailwind.config.ts: https://webbie.app/tailwind-config.txt
 * @see https://www.radix-ui.com/docs/primitives/components/dialog#api-reference
 * @example
 * <Dialog>
 *   <DialogTrigger asChild>
 *     <Button>Open</Button>
 *   </DialogTrigger>
 *   <DialogContent>
 *     <DialogTitle>Terms & Conditions</DialogTitle>
 *     <DialogDescription>
 *       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac risus sed sem lacinia finibus.
 *     </DialogDescription>
 *   </DialogContent>
 * </Dialog>
 */
export const Dialog = Root

/**
 * The button that opens the dialog.
 * @see https://www.radix-ui.com/docs/primitives/components/dialog#trigger
 */
export const DialogTrigger = Trigger

/**
 * Contains content to be rendered in the open dialog.
 * @see https://www.radix-ui.com/docs/primitives/components/dialog#content
 */
export const DialogContent = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <Portal >
        <Content
          ref={ref}
          className={cx("rounded-xl w-80 bg-white p-5 shadow-xl fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-50 dark:bg-zinc-700 sm:max-w-md sm:w-full data-[state=closed]:animate-dialog-out data-[state=open]:animate-dialog-in", className)}
          {...props}
        >
          {children}
          <Close
            className="rounded p-2 text-zinc-700 absolute right-2 top-2 hover:bg-teal-100 hover:text-teal-800 active:bg-teal-200 active:text-teal-800 dark:text-zinc-200 dark:hover:bg-teal-700 dark:hover:text-teal-100 dark:active:bg-teal-600 dark:active:text-teal-100"
          >
            <XIcon size={20} />
          </Close>
        </Content>
        <Overlay
          className="bg-zinc-300/30 backdrop-blur-sm fixed inset-0 z-40 dark:bg-zinc-800/30 data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in"
        />
      </Portal>
    )
  }
);
DialogContent.displayName = "DialogContent"

/**
 * An accessible title to be announced when the dialog is opened.
 * @see https://www.radix-ui.com/docs/primitives/components/dialog#title
 */
export const DialogTitle = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <Title
        ref={ref}
        className={cx("mr-6 font-medium dark:text-white", className)}
        {...props}
      />
    )
  }
);
DialogTitle.displayName = "DialogTitle"

/**
 * An accessible description to be announced when the dialog is opened.
 * @see https://www.radix-ui.com/docs/primitives/components/dialog#description
 */
export const DialogDescription = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <Description
        ref={ref}
        className={cx("mt-2 text-zinc-800 text-sm leading-normal dark:text-zinc-200", className)}
        {...props}
      />
    )
  }
);
DialogDescription.displayName = "DialogDescription"
