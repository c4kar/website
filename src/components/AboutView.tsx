import { SITE_CONFIG } from '@/lib/data';
import { Badge } from '@/components/ui/Badge';

export function AboutView() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-base font-semibold text-foreground mb-3">About</h2>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                    I'm a software engineer focused on building minimalist, efficient systems.
                    My interests span cybersecurity, developer tooling, and Linux infrastructure.
                    I believe in tools that stay out of your way — clean interfaces, fast feedback,
                    and systems that just work.
                </p>
            </div>

            <div>
                <h2 className="text-base font-semibold text-foreground mb-3">Skills</h2>
                <div className="flex flex-wrap gap-1.5">
                    {SITE_CONFIG.skills.map((skill) => (
                        <Badge key={skill.name} variant="secondary">
                            {skill.name}
                        </Badge>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-base font-semibold text-foreground mb-3">Experience</h2>
                <div className="space-y-3">
                    {SITE_CONFIG.experience.map((exp, i) => (
                        <div key={i} className="group">
                            <div className="flex items-baseline justify-between gap-2">
                                <p className="text-[15px] font-medium text-foreground">{exp.role}</p>
                                <span className="text-xs text-muted-foreground whitespace-nowrap">
                                    {exp.period}
                                </span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-0.5">{exp.company}</p>
                            <p className="text-xs text-muted-foreground/80 mt-1 leading-relaxed">
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
