import { useMemo } from 'react';
import { Github, Linkedin } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/data';
import { ButtonLink } from '@/components/ui/Button';

const logoModules = import.meta.glob('../../tmp/*.{png,jpg,jpeg,webp,gif}', {
    eager: true,
    import: 'default',
}) as Record<string, string>;

const LOGO_VARIANTS = Object.values(logoModules);

export function HeroSection() {
    const randomLogo = useMemo(() => {
        if (LOGO_VARIANTS.length === 0) return null;

        const randomIndex = Math.floor(Math.random() * LOGO_VARIANTS.length);
        return LOGO_VARIANTS[randomIndex];
    }, []);

    return (
        <div className="flex flex-col justify-center py-8 lg:py-10 lg:pr-10 lg:h-full">
            <div className="mb-10">
                <div className="relative w-fit pt-32">
                    {randomLogo && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full border-2 border-border bg-card p-1 shadow-sm overflow-hidden">
                            <img
                                src={randomLogo}
                                alt="Yusuf Çakar logo varyasyonu"
                                className="h-full w-full rounded-full object-cover"
                                loading="eager"
                                decoding="async"
                            />
                        </div>
                    )}
                    <h1 className="text-4xl font-bold tracking-tight text-foreground mb-0.5">
                        {SITE_CONFIG.name}
                    </h1>
                    <p className="text-sm text-muted-foreground/50 font-mono mb-2">@c4kar</p>
                </div>
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
