import { cn } from '@/lib/cn';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'default' | 'secondary' | 'outline';
    className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
    return (
        <span
            className={cn(
                'inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium transition-colors',
                variant === 'default' && 'bg-secondary text-secondary-foreground',
                variant === 'secondary' && 'bg-muted text-muted-foreground',
                variant === 'outline' && 'border border-border text-muted-foreground',
                className,
            )}
        >
            {children}
        </span>
    );
}
