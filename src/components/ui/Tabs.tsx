import { useState } from 'react';
import { cn } from '@/lib/cn';

interface Tab {
    id: string;
    label: string;
}

interface TabsProps {
    tabs: Tab[];
    defaultTab?: string;
    children: (activeTab: string) => React.ReactNode;
    className?: string;
}

export function Tabs({ tabs, defaultTab, children, className }: TabsProps) {
    const [activeTab, setActiveTab] = useState(defaultTab ?? tabs[0]?.id ?? '');

    return (
        <div className={cn('flex flex-col', className)}>
            <div className="flex gap-1 border-b border-border mb-4">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={cn(
                            'relative px-4 py-2.5 text-[15px] font-medium transition-colors rounded-t-lg',
                            activeTab === tab.id
                                ? 'text-foreground'
                                : 'text-muted-foreground hover:text-foreground',
                        )}
                    >
                        {tab.label}
                        {activeTab === tab.id && (
                            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground rounded-full" />
                        )}
                    </button>
                ))}
            </div>
            <div className="flex-1 min-h-0">{children(activeTab)}</div>
        </div>
    );
}
