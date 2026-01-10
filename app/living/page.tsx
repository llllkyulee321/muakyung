import Image from "next/image";
import Link from "next/link";

const nav = [
  { label: "living", href: "/living" },
  { label: "create", href: "/create" },
  { label: "gathering", href: "/gathering" },
  { label: "space", href: "/space" },
];

const scenes = [
  { src: "/hero-01.jpg", caption: "Living" },
  { src: "/hero-02.jpg", caption: "Work" },
  { src: "/hero-03.jpg", caption: "In nature" },
];

export default function LivingPage() {
  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-900">
      {/* simple top nav on white */}
      <header className="sticky top-0 z-10 bg-neutral-100/85 backdrop-blur px-6 pt-6 pb-4">
  <nav className="flex items-center gap-6 text-xs tracking-widest text-neutral-600">
    {/* Home link */}
    <Link
      href="/"
      className="tracking-[0.35em] text-neutral-900 hover:opacity-70 transition"
    >
      MUAKYUNG
    </Link>

    {/* Divider (선택) */}
    <span className="text-neutral-300">/</span>

    {/* Section links */}
    {nav.map((t) => (
      <Link
        key={t.label}
        href={t.href}
        className="hover:text-neutral-900 transition"
      >
        {t.label}
      </Link>
    ))}
  </nav>
</header>

      {/* scenes */}
      <section className="mx-auto w-full max-w-5xl px-6 py-10 space-y-14">
        {scenes.map((s) => (
          <div key={s.src} className="space-y-3">
            {/* wide image */}
            <div className="relative w-full overflow-hidden bg-neutral-200 aspect-[16/9]">
              <Image
                src={s.src}
                alt={s.caption}
                fill
                className="object-cover"
                priority={s.src === "/hero-01.jpg"}
              />
            </div>

            {/* caption under image */}
            <p className="text-xs tracking-wide text-neutral-500">
              {s.caption}
            </p>
          </div>
        ))}

        {/* year (fixed bottom-right) */}
<div className="fixed bottom-6 right-6 z-10">
  <p className="text-xs tracking-[0.25em] text-neutral-500">2024</p>
</div>
      </section>
    </main>
  );
}
