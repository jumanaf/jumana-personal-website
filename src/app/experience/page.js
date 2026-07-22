import { experience, education } from '@/data/content';

export const metadata = {
  title: 'Experience — Jumana Fathima',
};

function SectionTitle({ children }) {
  return (
    <h2 className="font-display text-xl font-bold text-fg">{children}</h2>
  );
}

export default function Experience() {
  return (
    <div className="space-y-14">
      {/* Work */}
      <section>
        <SectionTitle>Experience</SectionTitle>
        <div className="mt-6 space-y-8 border-l border-border pl-6">
          {experience.map((role, i) => (
            <div key={i} className="relative">
              <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-bg bg-accent" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <h3 className="font-display text-base font-semibold text-fg">{role.title}</h3>
                <span className="text-xs text-muted">
                  {role.start}–{role.end}
                </span>
              </div>
              <p className="text-sm font-medium text-accent">
                {role.orgUrl ? (
                  <a href={role.orgUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {role.org}
                  </a>
                ) : (
                  role.org
                )}
              </p>
              <p className="mt-3 flex gap-3 text-[15px] leading-relaxed text-fg">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-border" />
                <span>{role.summary}</span>
              </p>
              {role.note && (
                <p className="mt-3 rounded-xl bg-surface p-3 text-sm leading-relaxed text-muted">
                  {role.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <SectionTitle>Education</SectionTitle>
        <div className="mt-6 space-y-6">
          {education.map((e, i) => (
            <div key={i}>
              <h3 className="font-display text-base font-semibold text-fg">{e.school}</h3>
              <p className="text-sm font-medium text-accent">{e.degree}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                <span className="font-semibold text-fg">Relevant coursework: </span>
                {e.coursework}
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-fg">{e.note}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
