import { type ReactNode } from 'react';
import clsx from 'clsx';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card = ({ children, className, onClick }: CardProps) => (
  <div className={clsx('panel', className)} onClick={onClick}>
    {children}
  </div>
);
