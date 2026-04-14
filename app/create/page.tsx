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
    meta: "",
    year: "2024",
    src: "/create-not-a-cat-tower.jpg",
  },
  {
    id: "essay-2024",
    title: "Essay",
    meta: "『네가 원한다면 망설일 필요 없어』, 2024",
    year: "2024",
    src: "/create-essay-2024.jpg",
    href: "https://smartstore.naver.com/muakyung",
  },
  {
    id: "essay-2026",
    title: "Essay",
    meta: "『간절기의 기록』, 2026",
    year: "2026",
    src: "/create-essay-v2026.jpg",
    href: "https://smartstore.naver.com/muakyung",
  },
];

export default function CreatePage() {
  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-900">
      {/* header */}
      <header className="sticky top-0 z-10 bg-neutral-100/85 backdrop-blur px-6 pt-6 pb-4">
        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="text-xs tracking-[0.35em] text-neutral-900 hover:opacity-70 transition"
          >
            MUAKYUNG
          </Link>

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

      {/* archive grid */}
      <section className="mx-auto max-w-5xl px-6 pt-14 pb-24">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {works.map((w) => {
  const isLink = !!w.href;

  return (
    <div key={w.id} className="space-y-3">

      {isLink ? (
        <a
          href={w.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-200">
            <Image
              src={w.src}
              alt={w.title}
              fill
              className="object-cover transition duration-300 group-hover:opacity-80"
            />
          </div>
        </a>
      ) : (
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-200">
          <Image
            src={w.src}
            alt={w.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="space-y-1">
        <p className="text-sm text-neutral-800">{w.title}</p>
        {w.meta ? (
          <p className="text-xs tracking-wide text-neutral-500">
            {w.meta}
          </p>
        ) : null}
      </div>
    </div>
  );
})}
        </div>
      </section>

      {/* bottom info (스토어 안내) */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <p className="text-sm tracking-wide text-neutral-500">
          Things made here.
        </p>

        <p className="text-sm text-neutral-500 mt-2">
          무아경에서 만든 기록물은 온라인 스토어에서 살펴보실 수 있습니다.
        </p>

        <a
          href="https://smartstore.naver.com/muakyung"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline underline-offset-4 mt-1 inline-block text-neutral-900 hover:opacity-70 transition"
        >
          Visit Store
        </a>
      </section>
    </main>
  );
}