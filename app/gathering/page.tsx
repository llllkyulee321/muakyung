import Link from "next/link";
import Image from "next/image";

const nav = [
  { label: "living", href: "/living" },
  { label: "create", href: "/create" },
  { label: "gathering", href: "/gathering" },
  { label: "space", href: "/space" },
];

const archive = [
  {
    slug: "winter-story-2026",
    date: "2026.01.21",
    title_main: "《사랑해서 미워하고》 김선연 작가와의 만남",
    title_sub: "〈겨울이야기〉",
    subtitle_en: "A Conversation with the Author · Writing in Nature",
    image: "/gathering-winter.jpg",
    type: "winter",
  },
  {
    slug: "autumn-resonance-2025",
    date: "2025.10.18",
    title_en: "Autumn Resonance, the Season of Sound",
    title_kr: "〈가을의 공명〉",
    note: "Sound Meditation",
    image: "/gathering-autumn.jpg",
    type: "default",
  },
  {
    slug: "first-gathering-2025",
    date: "2025.07.11",
    title_en: "Muakyung First Gathering",
    title_kr: "〈나와 공간, 그 사이〉",
    note: "Book Talk & Jazz Live",
    image: "/gathering-first-v2.jpg",
    type: "default",
  },
];

export default function GatheringPage() {
  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-900">
      {/* HEADER */}
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
                  t.label === "gathering" ? "text-neutral-900" : ""
                }`}
              >
                {t.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* CONTENT */}
      <section className="mx-auto w-full max-w-5xl px-6 pt-14 pb-24">
        <p className="text-xs tracking-widest text-neutral-500">ARCHIVE</p>

        <div className="mt-10 space-y-20">
          {archive.map((a) => (
            <div key={a.slug} className="space-y-5">
              {/* Date */}
              <p className="text-sm tracking-wide text-neutral-600">
                {a.date}
              </p>

              {/* Image */}
              <div className="relative w-full overflow-hidden bg-neutral-200 aspect-[16/6]">
                {a.image && (
                  <Image
                    src={a.image}
                    alt="gathering image"
                    fill
                    className="object-cover"
                  />
                )}
              </div>

              {/* Text */}
              <div className="max-w-3xl space-y-2">
                {a.type === "winter" ? (
                  <>
                    {/* Main title */}
                    <p className="text-base leading-relaxed text-neutral-900">
                      {a.title_main}
                    </p>

                    {/* Sub title */}
                    <p className="text-sm tracking-wide text-neutral-600">
                      {a.title_sub}
                    </p>

                    {/* English subtitle */}
                    <p className="text-sm tracking-wide text-neutral-500">
                      {a.subtitle_en}
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-base leading-relaxed text-neutral-900">
                      {a.title_en}
                    </p>

                    <p className="text-sm tracking-wide text-neutral-600">
                      {a.title_kr}
                    </p>

                    {a.note && (
                      <p className="text-sm tracking-wide text-neutral-500">
                        {a.note}
                      </p>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* FOOTNOTE */}
        <div className="mt-20">
          <p className="text-xs tracking-wide text-neutral-500">
            Gatherings are held irregularly.
          </p>
        </div>
      </section>
    </main>
  );
}
