"use client"

import React from "react";
import { cx } from "class-variance-authority";
import { Root, Item, Header, Trigger, Content } from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";

/**
 * A vertically stacked set of interactive headings that each reveal an associated section of content.
 * @todo Add animations and keyframes to tailwind.config.ts: https://webbie.app/tailwind-config.txt
 * @see https://www.radix-ui.com/docs/primitives/components/accordion#api-reference
 * @example
 * <Accordion collapsible type="single">
 *   <AccordionItem value="unique-id">
 *     <AccordionTrigger>What payment options do you accept?</AccordionTrigger>
 *     <AccordionContent>We accept Mastercard, Visa and American Express.</AccordionContent>
 *   </AccordionItem>
 * </Accordion>
 */
export const Accordion = React.forwardRef(
  ({ className, ...props }, ref) => {
  return (
    <Root
      ref={ref}
      className={cx("border-t dark:border-zinc-600", className)}
      {...props}
    />
  );
});
Accordion.displayName = "Accordion";

/**
 * Contains all the parts of the collapsible section.
 * @see https://www.radix-ui.com/docs/primitives/components/accordion#item
 */
export const AccordionItem = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <Item
      ref={ref}
      className={cx("border-b dark:border-zinc-600", className)}
      {...props}
    />
  );
});
AccordionItem.displayName = "AccordionItem";

/**
 * Toggles the collapsed state of its associated item.
 * @see https://www.radix-ui.com/docs/primitives/components/accordion#trigger
 */
export const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, ref) => {
  return (
    <Header className="flex">
      <Trigger
        ref={ref}
        className={cx("py-3 pr-3 sm:py-4 rounded flex flex-1 items-center text-left gap-3 justify-between font-medium select-none [&[data-state=open]>svg]:rotate-180 dark:text-white data-[disabled]:opacity-50", className)}
        {...props}
      >
        {children}
        <ChevronDownIcon
          className="h-5 w-5 flex-none text-teal-600 transition-transform dark:text-teal-300"
        />
      </Trigger>
    </Header>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

/**
 * Contains the collapsible content for an item.
 * @see https://www.radix-ui.com/docs/primitives/components/accordion#content
 */
export const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, ref) => {
  return (
    <Content
      ref={ref}
      className={cx("overflow-hidden text-zinc-700 text-sm leading-relaxed transition-all dark:text-zinc-200 data-[state=closed]:animate-accordion-collapse data-[state=open]:animate-accordion-expand", className)}
      {...props}
    >
      <div className="pb-3 sm:pb-4">
        {children}
      </div>
    </Content>
  );
});
AccordionContent.displayName = "AccordionContent";
