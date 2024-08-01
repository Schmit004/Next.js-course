"use client"

import React from "react"
import { cx } from "class-variance-authority"
import { Root, List, Trigger, Content } from "@radix-ui/react-tabs"

/**
 * A set of layered sections of content—known as tab panels—that are displayed one at a time.
 * @see https://www.radix-ui.com/docs/primitives/components/tabs#api-reference
 * @example
 * const [activeTab, setActiveTab] = useState("home")
 * return (
 *   <Tabs value={activeTab} onValueChange={setActiveTab}>
 *     <TabsList>
 *       <TabsTrigger value="profile">Profile</TabsTrigger>
 *       <TabsTrigger value="settings">Settings</TabsTrigger>
 *     </TabsList>
 *     <TabsContent value="profile">Profile content</TabsContent>
 *     <TabsContent value="settings">Settings content</TabsContent>
 *   </Tabs>
 * )
 */
export const Tabs = Root

/**
 * Contains the triggers that are aligned along the edge of the active content.
 * @see https://www.radix-ui.com/docs/primitives/components/tabs#list
 */
export const TabsList = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <List
        ref={ref}
        className={cx("inline-flex p-1 gap-1 h-10 w-full rounded-lg bg-zinc-200 dark:bg-zinc-900", className)}
        {...props}
      />
    )
  }
);
TabsList.displayName = "TabsList"

/**
 * The button that activates its associated content.
 * @see https://www.radix-ui.com/docs/primitives/components/tabs#trigger
 */
export const TabsTrigger = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <Trigger
        ref={ref}
        className={cx("flex-1 rounded-md px-5 text-sm font-medium border data-[state=inactive]:hover:bg-zinc-300 dark:data-[state=inactive]:hover:bg-zinc-800 dark:data-[state=active]:bg-zinc-900 dark:data-[state=active]:border-transparent dark:data-[state=active]:text-white dark:data-[state=inactive]:text-zinc-300 data-[disabled]:opacity-50 data-[state=active]:bg-white data-[state=active]:shadow data-[state=active]:text-black data-[state=inactive]:border-transparent data-[state=inactive]:text-zinc-700 data-[disabled]:data-[state=active]:shadow-none", className)}
        {...props}
      />
    )
  }
);
TabsTrigger.displayName = "TabsTrigger"

/**
 * Contains the content associated with each trigger.
 * @see https://www.radix-ui.com/docs/primitives/components/tabs#content
 */
export const TabsContent = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <Content
        ref={ref}
        className={cx("mt-5 text-zinc-950 text-sm leading-relaxed dark:text-zinc-50", className)}
        {...props}
      />
    )
  }
);
TabsContent.displayName = "TabsContent"
