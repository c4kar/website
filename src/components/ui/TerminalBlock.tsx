import { type ReactNode } from 'react';
import clsx from 'clsx';

interface TerminalBlockProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export const TerminalBlock = ({
  title,
  children,
  className,
}: TerminalBlockProps) => (
  <div className={clsx('panel', className)}>
    {title && <div className="panel-header">{title}</div>}
    <div>{children}</div>
  </div>
);
