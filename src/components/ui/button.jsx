import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 touch-manipulation",
  {
    variants: {
      variant: {
        // Trust-building primary (mint-aqua psychology)
        default: "bg-gradient-to-r from-[#94e2d5] to-[#3498db] text-white hover:from-[#3498db] hover:to-[#2980b9] shadow-lg active:scale-95 font-semibold",
        // Innovation secondary (coral accent psychology)
        secondary: "bg-gradient-to-r from-[#ff9f8a] to-[#f4d03f] text-[#2c3e50] hover:from-[#f4d03f] hover:to-[#ff9f8a] shadow-lg active:scale-95 font-semibold",
        // Clean outline (trustworthy minimal)
        outline: "border border-white/50 bg-transparent text-white hover:bg-white/10 hover:border-[#94e2d5] active:scale-95",
        // Success/achievement (gold psychology)
        success: "bg-gradient-to-r from-[#f4d03f] to-[#f39c12] text-[#2c3e50] hover:shadow-lg active:scale-95 font-semibold",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-xs sm:text-sm",
        lg: "h-11 rounded-md px-6 sm:px-8 text-sm sm:text-base",
        xl: "h-12 rounded-lg px-8 sm:px-10 text-base sm:text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }
