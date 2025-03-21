import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "outline";
  size?: "small" | "medium" | "large";
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "medium",
  className = "",
  leftIcon,
  rightIcon,
}) => {
  const baseStyles =
    "font-monument font-normal uppercase tracking-widest flex items-center justify-center gap-2 w-fit";

  const variants = {
    primary: "bg-custom-brown text-custom-white",
    outline: "bg-transparent text-custom-white border border-custom-white",
  };

  const sizes = {
    small: "px-4 py-2 text-xs",
    medium: "px-6 py-3.5 text-sm",
    large: "px-8 py-4 text-base",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} group hover:bg-custom-white  hover:text-custom-black`}
    >
      {leftIcon && <span className="inline-flex">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="inline-flex">{rightIcon}</span>}
    </button>
  );
};

export default Button;
