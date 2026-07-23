import Image from 'next/image';
import headshot from '/public/headshot.png';
import { profile, experienceSummary, getInTouch } from '@/data/content';

export default function About() {
  return (
    <div className="space-y-12">
      <section className="flex flex-col-reverse items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-3 text-base leading-relaxed text-fg sm:text-[17px]">
          {profile.intro.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <Image
          src={headshot}
          alt="Jumana Fathima"
          width={120}
          height={120}
          priority
          className="h-28 w-28 shrink-0 rounded-full border border-border object-cover shadow-sm sm:h-32 sm:w-32"
        />
      </section>

      <section>
        <h2 className="font-display text-lg font-bold text-fg">Experience</h2>
        <p className="mt-3 text-[17px] leading-relaxed text-fg">{experienceSummary}</p>
      </section>

      <section>
        <h2 className="font-display text-lg font-bold text-fg">Get in touch about</h2>
        <ul className="mt-4 space-y-4">
          {getInTouch.map((item, i) => (
            <li key={i} className="flex gap-3 text-[17px] leading-relaxed text-fg">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
