import Image from "next/image";
import Link from "next/link";

const nav = [
  { label: "living", href: "/living" },
  { label: "create", href: "/create" },
  { label: "gathering", href: "/gathering" },
  { label: "space", href: "/space" },
];

// Create archive items (2024+ only)
const works = [
  {
    id: "gardening",
    title: "Gardening",
    meta: "Ongoing.",
    year: "2024",
    src: "/create-gardening.jpg",
  },
  {
    id: "cat-tower",
    title: "Cat Tower",
    meta: "Handmade.",
    year: "2024",
    src: "/create-cat-tower-v222.jpg",
  },
  {
    id: "not-a-cat-tower",
    title: "It’s not a cat tower.",
    meta: "", // intentionally blank
    year: "2024",
    src: "/create-not-a-cat-tower.jpg",
  },
  {
    id: "essay-2024",
    title: "Essay",
    meta: "2024.",
    year: "2024",
    src: "/create-essay-2024.jpg",
  },
  {
    id: "notes",
    title: "Notes",
    meta: "Soon.",
    year: "2026",
    src: "/create-notes.jpg",
  },
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
                  t.label === "create" ? "text-neutral-900" : ""
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
        <p className="text-sm tracking-wide text-neutral-500">Things made here.</p>
      </section>

      {/* archive grid */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {works.map((w) => (
            <div key={w.id} className="space-y-3">
              {/* image */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-200">
                <Image
                  src={w.src}
                  alt={w.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* title + meta */}
              <div className="space-y-1">
                <p className="text-sm text-neutral-800">{w.title}</p>
                {w.meta ? (
                  <p className="text-xs tracking-wide text-neutral-500">
                    {w.meta}
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
