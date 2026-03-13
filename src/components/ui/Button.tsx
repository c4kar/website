import { cn } from '@/lib/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline' | 'ghost';
    size?: 'default' | 'sm' | 'icon';
    asChild?: boolean;
}

export function Button({
    children,
    variant = 'default',
    size = 'default',
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(
                'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                'disabled:pointer-events-none disabled:opacity-50',
                variant === 'default' && 'bg-primary text-primary-foreground hover:bg-primary/90',
                variant === 'outline' && 'border border-border bg-transparent hover:bg-accent hover:text-accent-foreground',
                variant === 'ghost' && 'hover:bg-accent hover:text-accent-foreground',
                size === 'default' && 'h-9 px-4 text-sm',
                size === 'sm' && 'h-8 px-3 text-xs',
                size === 'icon' && 'h-9 w-9',
                className,
            )}
            {...props}
        >
            {children}
        </button>
    );
}

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: 'default' | 'outline' | 'ghost';
    size?: 'default' | 'sm' | 'icon';
}

export function ButtonLink({
    children,
    variant = 'outline',
    size = 'default',
    className,
    ...props
}: ButtonLinkProps) {
    return (
        <a
            className={cn(
                'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                variant === 'default' && 'bg-primary text-primary-foreground hover:bg-primary/90',
                variant === 'outline' && 'border border-border bg-transparent hover:bg-accent hover:text-accent-foreground',
                variant === 'ghost' && 'hover:bg-accent hover:text-accent-foreground',
                size === 'default' && 'h-9 px-4 text-sm',
                size === 'sm' && 'h-8 px-3 text-xs',
                size === 'icon' && 'h-9 w-9',
                className,
            )}
            {...props}
        >
            {children}
        </a>
    );
}
