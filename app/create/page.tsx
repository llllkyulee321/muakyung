import Link from "next/link";

const nav = [
  { label: "living", href: "/living" },
  { label: "create", href: "/create" },
  { label: "gathering", href: "/gathering" },
  { label: "space", href: "/space" },
];

// 임시 아카이브 아이템 (이미지 없음)
const works = [
  { id: 1, year: "2024" },
  { id: 2, year: "2024" },
  { id: 3, year: "2025" },
  { id: 4, year: "2025" },
];

export default function CreatePage() {
  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-900">
      {/* header */}
      <header className="sticky top-0 z-10 bg-neutral-100/85 backdrop-blur px-6 pt-6 pb-4">
  <div className="flex flex-col gap-3">
    {/* Home link (top line) */}
    <Link
      href="/"
      className="text-xs tracking-[0.35em] text-neutral-900 hover:opacity-70 transition"
    >
      MUAKYUNG
    </Link>

    {/* Menu (second line) */}
    <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs tracking-widest text-neutral-600">
      {nav.map((t) => (
        <Link
          key={t.label}
          href={t.href}
          className={`hover:text-neutral-900 transition ${
            t.label === "living" ? "text-neutral-900" : ""
          }`}
        >
          {t.label}
        </Link>
      ))}
    </nav>
  </div>
</header>

      {/* intro */}
      <section className="mx-auto max-w-5xl px-6 pt-14 pb-8">
        <p className="text-sm tracking-wide text-neutral-500">
          Things made here.
        </p>
      </section>

      {/* archive grid */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {works.map((w) => (
            <div key={w.id} className="space-y-3">
              {/* placeholder */}
              <div className="aspect-[3/4] w-full bg-neutral-200" />

              {/* meta */}
              <p className="text-xs tracking-wide text-neutral-500">
                {w.year}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
