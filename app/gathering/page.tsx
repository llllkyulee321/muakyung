import Link from "next/link";

const nav = [
  { label: "living", href: "/living" },
  { label: "create", href: "/create" },
  { label: "gathering", href: "/gathering" },
  { label: "space", href: "/space" },
];

const upcoming = {
  slug: "winter-story-2026",
  date: "2026.01.21",
  title_en: "Winter Story",
  title_kr: "겨울이야기: 《사랑해서 미워하고》 작가와의 만남",
  location: "MUAKYUNG, Hongcheon",
  status: "Open",
  apply_href: "https://forms.gle/RLBBCLCttRzfioWa9",
};

const archive = [
  {
    slug: "autumn-resonance-2025",
    date: "2025.10.18",
    title_en: "Autumn Resonance, the Season of Sound",
    title_kr: "〈가을의 공명〉",
    note: "",
  },
  {
    slug: "first-gathering-2025",
    date: "2025.07.11",
    title_en: "Muakyung First Gathering",
    title_kr: "〈나와 공간, 그 사이〉",
    note: "Book Talk & Jazz live",
  },
];

export default function GatheringPage() {
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

      <section className="mx-auto w-full max-w-5xl px-6 pt-14 pb-24">
        {/* UPCOMING */}
        <div className="max-w-2xl">
          <p className="text-xs tracking-widest text-neutral-500">UPCOMING</p>

          <div className="mt-6 space-y-2">
            <p className="text-sm tracking-wide text-neutral-600">
              {upcoming.date}
            </p>

            <h1 className="text-xl leading-relaxed text-neutral-900">
              <Link
                href={`/gathering/${upcoming.slug}`}
                className="hover:underline underline-offset-4 decoration-neutral-300"
              >
                {upcoming.title_kr}
              </Link>
            </h1>

            <p className="text-sm tracking-wide text-neutral-600">
              {upcoming.title_en}
            </p>

            <p className="pt-2 text-sm text-neutral-600">
              {upcoming.location}
            </p>

            <div className="pt-6 flex items-center gap-3">
  <a
    href={upcoming.apply_href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-sm text-neutral-900 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-700 transition"
  >
    Apply
  </a>

  <span className="text-xs tracking-widest text-neutral-400">
    {upcoming.status}
  </span>
</div>
          </div>
        </div>

        {/* divider */}
        <div className="my-16 h-px w-full bg-neutral-200" />

        {/* ARCHIVE */}
        <div>
          <p className="text-xs tracking-widest text-neutral-500">ARCHIVE</p>

          <div className="mt-8 space-y-10">
            {archive.map((a) => (
              <div key={a.slug} className="max-w-3xl space-y-2">
                <p className="text-sm tracking-wide text-neutral-600">
                  {a.date}
                </p>
                <p className="text-base leading-relaxed text-neutral-900">
                  <Link
                    href={`/gathering/${a.slug}`}
                    className="hover:underline underline-offset-4 decoration-neutral-300"
                  >
                    {a.title_en}
                  </Link>
                </p>
                <p className="text-sm tracking-wide text-neutral-600">
                  {a.title_kr}
                </p>
                {a.note && (
                  <p className="text-sm tracking-wide text-neutral-500">
                    {a.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* footnote */}
        <div className="mt-20">
          <p className="text-xs tracking-wide text-neutral-500">
            Gatherings are held irregularly.
          </p>
        </div>
      </section>
    </main>
  );
}
