import { type ReactNode } from 'react';
import clsx from 'clsx';

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export const Badge = ({ children, className }: BadgeProps) => (
  <span
    className={clsx(
      'font-mono text-xs text-terminal-cyan bg-terminal-cyan/8 border border-terminal-cyan/20 px-1.5 py-0.5',
      className
    )}
  >
    [{children}]
  </span>
);
