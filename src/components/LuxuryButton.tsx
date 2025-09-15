import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface LuxuryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const LuxuryButton = forwardRef<HTMLButtonElement, LuxuryButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-sans font-medium tracking-wide transition-all duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-primary text-primary-foreground hover:bg-opacity-90 luxury-hover",
      secondary: "bg-secondary text-secondary-foreground hover:bg-opacity-80 luxury-hover",
      outline: "border border-primary text-primary hover:bg-primary hover:text-primary-foreground luxury-hover"
    };
    
    const sizes = {
      sm: "h-10 px-6 text-sm",
      md: "h-12 px-8 text-base",
      lg: "h-14 px-10 text-lg"
    };

    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

LuxuryButton.displayName = "LuxuryButton";

export { LuxuryButton };