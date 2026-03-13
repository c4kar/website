import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/cn';

export function ProjectsView() {
    return (
        <div className="h-full flex flex-col">
            <div className="flex-1 min-h-0 overflow-y-auto scrollbar-thin pr-1 space-y-4">
                {PROJECTS.map((project) => (
                    <Card key={project.id}>
                        <CardHeader>
                            <div className="flex items-start justify-between gap-2">
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <CardTitle>{project.title}</CardTitle>
                                        <span
                                            className={cn(
                                                'inline-block h-1.5 w-1.5 rounded-full flex-shrink-0',
                                                project.status === 'active' && 'bg-emerald-500',
                                                project.status === 'idle' && 'bg-zinc-500',
                                                project.status === 'archived' && 'bg-zinc-700',
                                            )}
                                            title={project.status}
                                        />
                                    </div>
                                    <CardDescription>{project.description}</CardDescription>
                                </div>
                                <div className="flex items-center gap-1 flex-shrink-0">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-1.5 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
                                            aria-label={`${project.title} source code`}
                                        >
                                            <Github className="h-3.5 w-3.5" />
                                        </a>
                                    )}
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-1.5 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
                                            aria-label={`${project.title} live demo`}
                                        >
                                            <ExternalLink className="h-3.5 w-3.5" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </CardHeader>
                        <div className="flex flex-wrap gap-1">
                            {project.tech.map((t) => (
                                <Badge key={t} variant="outline">
                                    {t}
                                </Badge>
                            ))}
                            <span className="text-[10px] text-muted-foreground/60 ml-auto self-center">
                                {project.year}
                            </span>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
