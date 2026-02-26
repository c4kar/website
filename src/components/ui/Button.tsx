import type { ReactNode } from 'react';
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  as?: 'button' | 'a';
  href?: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'font-mono text-terminal-green border border-terminal-dim-green/40 bg-neutral-bg2 hover:border-terminal-green/60 hover:bg-neutral-bg3',
  ghost:
    'font-mono text-text-muted hover:text-text-primary hover:bg-white/[0.03]',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'text-xs px-2 py-1',
  md: 'text-sm px-3 py-1.5',
  lg: 'text-sm px-4 py-2',
};

export function Button({
  variant = 'primary',
  size = 'md',
  as = 'button',
  href,
  className,
  children,
  onClick,
  disabled,
  type = 'button',
}: ButtonProps) {
  const base = clsx(
    'inline-flex items-center justify-center transition-colors duration-150',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (as === 'a' && href) {
    return (
      <a href={href} className={base}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={base} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
