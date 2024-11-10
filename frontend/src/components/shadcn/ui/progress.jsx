import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "../lib/utils"

const Progress = React.forwardRef(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
  ref={ref}
  className={cn("relative h-2 w-full  rounded-full bg-[#1655F24D] bg-opacity-30 rounded-[10px]", className)}
  {...props}
>
  <ProgressPrimitive.Indicator
    className="h-full transition-all flex items-center relative rounded-[10px]"
    style={{
      width: `${value}%`, // Adjusts width based on progress
      background: "linear-gradient(90deg, #1655F2 94.5%, rgba(22, 85, 242, 0.00) 99.32%)",
    }}
  >
    <span className="w-5 h-5  rounded-full bg-[#1655F2] absolute right-[10px] translate-x-1/2 " style={{ filter: "blur(7px)" }}></span>
  </ProgressPrimitive.Indicator>
</ProgressPrimitive.Root>

))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
