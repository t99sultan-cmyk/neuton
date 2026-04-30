"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useRipple } from "@/components/effects/Ripple";

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
  /** Skip ripple — for static/decorative buttons */
  silent?: boolean;
};

export type ButtonProps = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> & {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  };

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  silent,
  onClick,
  ...rest
}: ButtonProps) {
  const ripple = useRipple();
  return (
    <button
      className={cn(BASE, VARIANT[variant], SIZE[size], className)}
      onClick={(e) => {
        if (!silent) ripple.trigger(e);
        onClick?.(e);
      }}
      {...rest}
    >
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      {!silent && ripple.node}
    </button>
  );
}

export type LinkButtonProps = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "onClick"> & {
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  };

export function LinkButton({
  variant = "primary",
  size = "md",
  className,
  children,
  silent,
  onClick,
  ...rest
}: LinkButtonProps) {
  const ripple = useRipple();
  return (
    <a
      className={cn(BASE, VARIANT[variant], SIZE[size], className)}
      onClick={(e) => {
        if (!silent) ripple.trigger(e);
        onClick?.(e);
      }}
      {...rest}
    >
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      {!silent && ripple.node}
    </a>
  );
}
