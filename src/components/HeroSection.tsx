import { Github, Linkedin } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/data';
import { ButtonLink } from '@/components/ui/Button';

export function HeroSection() {
    return (
        <div className="flex flex-col justify-center h-full py-10 pr-10">
            <div className="mb-10">
                <h1 className="text-4xl font-bold tracking-tight text-foreground mb-0.5">
                    {SITE_CONFIG.name}
                </h1>
                <p className="text-sm text-muted-foreground/50 font-mono mb-2">@c4kar</p>
                <p className="text-lg text-muted-foreground">
                    {SITE_CONFIG.title}
                </p>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-sm">
                {SITE_CONFIG.bio}
            </p>

            <div className="flex gap-2">
                <ButtonLink
                    href={SITE_CONFIG.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="sm"
                >
                    <Github className="h-4 w-4" />
                    GitHub
                </ButtonLink>
                <ButtonLink
                    href={SITE_CONFIG.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="sm"
                >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                </ButtonLink>
            </div>
        </div>
    );
}
