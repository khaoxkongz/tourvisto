import * as React from "react"

import { cn } from "@/lib/utils"

function BentoGrid({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("grid w-full auto-rows-[22rem] grid-cols-3 gap-4", className)} {...props}>
      {children}
    </div>
  )
}

function BentoCardBackground({ className, children, ...props }: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  )
}

function BentoCardHeader({ className, children, ...props }: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300 lg:group-hover:-translate-y-10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function BentoCardTitle({ className, children, ...props }: React.ComponentPropsWithoutRef<"h3">) {
  return (
    <h3 className={cn("text-xl font-semibold text-neutral-700 dark:text-neutral-300", className)} {...props}>
      {children}
    </h3>
  )
}

function BentoCardDescription({ className, children, ...props }: React.ComponentPropsWithoutRef<"p">) {
  return (
    <p className={cn("max-w-lg text-neutral-400", className)} {...props}>
      {children}
    </p>
  )
}

function BentoCardAction({ className, children, ...props }: React.ComponentPropsWithoutRef<"p">) {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  )
}

function BentoCardContent({ className, children, ...props }: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("p-4", className)} {...props}>
      {children}
    </div>
  )
}

function BentoOverlay({ className, ...props }: React.ComponentPropsWithoutRef<"p">) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10",
        className
      )}
      {...props}
    />
  )
}

function BentoCard2({ children, className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
        // light styles
        "bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export {
  BentoGrid,
  BentoCard2,
  BentoCardHeader,
  BentoCardTitle,
  BentoCardDescription,
  BentoCardAction,
  BentoOverlay,
  BentoCardBackground,
  BentoCardContent,
}
