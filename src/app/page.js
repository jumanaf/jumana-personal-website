import Image from 'next/image';
import headshot from '/public/headshot.png';
import { profile, reading } from '@/data/content';

function BookRow({ book }) {
  return (
    <li className="flex items-center gap-3 border-b border-border py-2.5 last:border-b-0">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
      <span className="text-[15px] text-fg">{book.title}</span>
      {book.note && (
        <span className="rounded-full bg-accent-soft px-2 py-0.5 text-xs font-medium text-accent">
          {book.note}
        </span>
      )}
    </li>
  );
}

export default function About() {
  return (
    <div className="space-y-12">
      <section className="flex flex-col-reverse items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-3 text-[15px] leading-relaxed text-fg sm:text-base">
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

      <section className="rounded-2xl border border-border bg-surface p-5">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
          </span>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-muted">
            Now
          </h2>
        </div>
        <p className="mt-3 text-[15px] leading-relaxed text-fg">{profile.now}</p>
      </section>

      <section>
        <h2 className="font-display text-lg font-bold text-fg">Reading</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          A running list of what I’ve had my nose in.
        </p>

        <h3 className="mt-6 font-display text-sm font-semibold uppercase tracking-wide text-muted">
          Currently reading
        </h3>
        <ul className="mt-2">
          {reading.current.map((book) => (
            <BookRow key={book.title} book={book} />
          ))}
        </ul>

        <h3 className="mt-6 font-display text-sm font-semibold uppercase tracking-wide text-muted">
          Finished this year
        </h3>
        <ul className="mt-2">
          {reading.finished.map((book) => (
            <BookRow key={book.title} book={book} />
          ))}
        </ul>

        {reading.toRead.length > 0 && (
          <>
            <h3 className="mt-6 font-display text-sm font-semibold uppercase tracking-wide text-muted">
              To read
            </h3>
            <ul className="mt-2">
              {reading.toRead.map((book) => (
                <BookRow key={book.title} book={book} />
              ))}
            </ul>
          </>
        )}
      </section>
    </div>
  );
}
