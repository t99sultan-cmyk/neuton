type IconProps = React.SVGProps<SVGSVGElement> & { className?: string };

export function InstagramIcon({ className, ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TikTokIcon({ className, ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      <path d="M16.5 3h-2.7v12.05a2.55 2.55 0 1 1-2.55-2.55c.27 0 .53.04.78.12V9.85a5.4 5.4 0 1 0 4.47 5.32V8.6a6.5 6.5 0 0 0 4.05 1.4V7.27a3.9 3.9 0 0 1-2.62-1.06A3.83 3.83 0 0 1 16.5 3z" />
    </svg>
  );
}
