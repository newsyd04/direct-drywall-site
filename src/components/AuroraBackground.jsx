import { cn } from "../lib/utils"; // Ensure this utility is working as expected
import React from "react";

export const AuroraBackground = ({
  children,
  className,
  showRadialGradient = true,
  ...props
}) => {
  return (
    <main
      className={cn(
        // Use a valid background color or image here.
        "relative flex flex-col h-screen items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 transition-colors",
        className,
        // Either remove this line or update it to a valid image URL:
        // "bg-[url('https://your-valid-image-url.com/path/to/image.jpg')] !bg-cover !bg-center"
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            // Use explicit color codes instead of undefined CSS variables:
            "[--white-gradient:repeating-linear-gradient(100deg,#ffffff_0%,#ffffff_7%,transparent_10%,transparent_12%,#ffffff_16%)]",
            "[--dark-gradient:repeating-linear-gradient(100deg,#000000_0%,#000000_7%,transparent_10%,transparent_12%,#000000_16%)]",
            "[--aurora:repeating-linear-gradient(100deg,#3b82f6_10%,#a5b4fc_15%,#93c5fd_20%,#ddd6fe_25%,#60a5fa_30%)]",
            "[background-image:var(--white-gradient),var(--aurora)]",
            "dark:[background-image:var(--dark-gradient),var(--aurora)]",
            "[background-size:300%,200%]",
            "[background-position:50%_50%,50%_50%]",
            "filter blur-[10px] invert dark:invert-0",
            "after:content-[''] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)]",
            "after:dark:[background-image:var(--dark-gradient),var(--aurora)]",
            "after:[background-size:200%,100%]",
            "after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference",
            "pointer-events-none",
            "absolute -inset-[10px] opacity-50 will-change-transform",
            // Optionally apply a mask if showRadialGradient is true:
            showRadialGradient &&
              "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]"
          )}
        ></div>
      </div>
      {children}
    </main>
  );
};
