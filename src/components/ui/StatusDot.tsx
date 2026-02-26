import clsx from 'clsx';

interface StatusDotProps {
  status: 'RUNNING' | 'IDLE' | 'ARCHIVED';
}

const dotClass: Record<StatusDotProps['status'], string> = {
  RUNNING: 'dot dot-run',
  IDLE: 'dot dot-idle',
  ARCHIVED: 'dot dot-off',
};

export const StatusDot = ({ status }: StatusDotProps) => (
  <span className={clsx(dotClass[status])} title={status} />
);
