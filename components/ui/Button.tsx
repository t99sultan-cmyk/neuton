import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "light" | "ghost";
type Size = "md" | "lg" | "xl";

const VARIANT: Record<Variant, string> = {
  primary: "btn-primary",
  light: "btn-light",
  ghost: "btn-ghost",
};

const SIZE: Record<Size, string> = {
  md: "btn-md",
  lg: "btn-lg",
  xl: "btn-xl",
};

const BASE = "btn-base";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

export type ButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(BASE, VARIANT[variant], SIZE[size], className)}
      {...rest}
    >
      {children}
    </button>
  );
}

export type LinkButtonProps = CommonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function LinkButton({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: LinkButtonProps) {
  return (
    <a className={cn(BASE, VARIANT[variant], SIZE[size], className)} {...rest}>
      {children}
    </a>
  );
}
