import { useState, useEffect } from 'react';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/data';
import { getEmail, openMailto } from '@/lib/obfuscate';
import { ButtonLink } from '@/components/ui/Button';

export function ContactView() {
    const [email, setEmail] = useState<string | null>(null);

    useEffect(() => {
        // Decode only after JS hydration — bots that don't
        // execute JS will never see the real address.
        setEmail(getEmail());
    }, []);

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-base font-semibold text-foreground mb-3">Get in touch</h2>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                    Open to interesting projects and conversations. Feel free to reach out.
                </p>
            </div>

            <div className="space-y-3">
                <button
                    type="button"
                    onClick={openMailto}
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group cursor-pointer bg-transparent border-none p-0"
                    aria-label="Send email"
                >
                    <Mail className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    <span>{email ?? '••••••@••••••'}</span>
                </button>

                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{SITE_CONFIG.location}</span>
                </div>
            </div>

            <div className="flex gap-2 pt-2">
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

