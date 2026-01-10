import Image from "next/image";
import Link from "next/link";

const nav = [
  { label: "living", href: "/living" },
  { label: "create", href: "/create" },
  { label: "gathering", href: "/gathering" },
  { label: "space", href: "/space" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-900">
      {/* SCENE 1: ENTRY (fullscreen hero) */}
      <section className="relative h-screen w-screen">
        <Image
          src="/hero.jpg"
          alt="MUAKYUNG"
          fill
          priority
          className="object-cover saturate-[0.7] brightness-[1.02] contrast-[0.95]"
        />

        {/* Softer overlay (less dark) */}
        <div className="absolute inset-0 bg-neutral-950/12" />

        {/* Top nav (text only) */}
        <nav className="absolute left-6 top-6 right-6 flex flex-wrap gap-x-6 gap-y-2 text-xs tracking-widest text-neutral-50">
          {nav.map((t) => (
            <Link
              key={t.label}
              href={t.href}
              className="opacity-80 hover:opacity-100 transition"
            >
              {t.label}
            </Link>
          ))}
        </nav>

        {/* Bottom title */}
        <div className="absolute bottom-6 left-6">
          <h1 className="text-sm tracking-[0.35em] text-neutral-50">
            MUAKYUNG
          </h1>
          <p className="mt-1 text-xs tracking-widest text-neutral-100/70">
            Hongcheon, Gangwon, Korea
          </p>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-6 right-6 text-xs tracking-widest text-neutral-50/70">
          scroll
        </div>
      </section>

      {/* SCENE 2: HOME TRACE (image + caption under it) */}
      <section className="mx-auto min-h-screen max-w-4xl px-6 py-16">
        <div className="w-full">
          {/* Image (square corners) */}
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-200">
            <Image
              src="/home.jpg"
              alt="A trace of living"
              fill
              className="object-cover saturate-[0.75] brightness-[1.03] contrast-[0.95]"
            />
          </div>

          {/* Caption (under image) */}
          <div className="mt-4 max-w-md">
            <p className="text-xs tracking-widest text-neutral-500">
              HOME, AND WORK
            </p>
            <p className="mt-2 text-base leading-relaxed text-neutral-800">
              Where living becomes the work.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
