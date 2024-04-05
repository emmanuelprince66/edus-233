"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";

const Input = React.forwardRef(
  ({ className, type, placeholder, icon, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
    if (type === "textarea") {
      return (
        <div className="w-full">
          <textarea
            className="w-full max-h-[100px] rounded border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:opacity-50 p-2"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder={placeholder}
          ></textarea>
        </div>
      );
    } else {
      return (
        <div className="relative w-full">
          <input
            placeholder={placeholder}
            type={showPassword ? "text" : type}
            className={cn(
              "flex h-10 w-full rounded border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:opacity-50",
              className
            )}
            ref={ref}
            {...props}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-2">
            {icon}
          </div>
          {type === "password" && (
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-2"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <VisibilityOffRoundedIcon sx={{ color: "grey" }} />
              ) : (
                <VisibilityRoundedIcon sx={{ color: "grey" }} />
              )}
            </button>
          )}
        </div>
      );
    }
  }
);

Input.displayName = "Input";

export { Input };
