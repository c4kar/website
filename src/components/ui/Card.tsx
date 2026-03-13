import { cn } from '@/lib/cn';

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export function Card({ children, className }: CardProps) {
    return (
        <div
            className={cn(
                'rounded-xl border border-border bg-card p-5 transition-colors hover:bg-accent/50',
                className,
            )}
        >
            {children}
        </div>
    );
}

export function CardHeader({ children, className }: CardProps) {
    return <div className={cn('mb-2', className)}>{children}</div>;
}

export function CardTitle({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <h3 className={cn('text-[15px] font-semibold text-foreground', className)}>
            {children}
        </h3>
    );
}

export function CardDescription({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <p className={cn('text-xs text-muted-foreground leading-relaxed', className)}>
            {children}
        </p>
    );
}
