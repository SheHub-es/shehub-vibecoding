import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
          "placeholder:text-muted-foreground",
          "border-border text-foreground",
          "hover:border-primary/80",
          "focus:outline-none",
          "focus-visible:outline-none",
          "focus-visible:ring-2 focus-visible:ring-shehub-purple",
          "focus-visible:ring-offset-0 focus-visible:ring-offset-background",
          "data-[state=open]:ring-2 data-[state=open]:ring-shehub-purple",
          "data-[state=open]:ring-offset-2 data-[state=open]:ring-offset-background",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
