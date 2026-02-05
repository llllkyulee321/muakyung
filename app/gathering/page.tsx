import Link from "next/link";
import Image from "next/image";

const nav = [
  { label: "living", href: "/living" },
  { label: "create", href: "/create" },
  { label: "gathering", href: "/gathering" },
  { label: "space", href: "/space" },
];

// ✅ UPCOMING: 여러 개 가능
const upcoming = [
  {
    slug: "writing-in-season-spring-2026",
    title: "간절기의 기록 · 봄",
    date: "2026. 3–5월",
    description: "나의 리듬으로 쓰기를 이어가는 시간",
    image: "/gathering-spring.jpg", // ← public 폴더에 이미지 넣고 이름 맞추기
    badge: "Soon",
  },
  // 필요하면 여기 아래에 계속 추가하면 됨
  // {
  //   slug: "another-upcoming",
  //   title: "제목",
  //   date: "2026. ??",
  //   description: "한줄 설명",
  //   image: "/gathering-another.jpg",
  //   badge: "Soon",
  // },
];

const archive = [
  {
    slug: "winter-story-2026",
    date: "2026.01.21",
    title_en: "《사랑해서 미워하고》 김선연 작가와의 만남",
    title_kr: "〈겨울이야기〉",
    note: "A Conversation with the Author · Writing in Nature",
    image: "/gathering-winter.jpg",
  },
  {
    slug: "autumn-resonance-2025",
    date: "2025.10.18",
    title_en: "Autumn Resonance, the Season of Sound",
    title_kr: "〈가을의 공명〉",
    note: "Sound Meditation",
    image: "/gathering-autumn.jpg",
  },
  {
    slug: "first-gathering-2025",
    date: "2025.07.11",
    title_en: "Muakyung First Gathering",
    title_kr: "〈나와 공간, 그 사이〉",
    note: "Book Talk & Jazz Live",
    image: "/gathering-first-v2.jpg",
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
                  t.label === "gathering" ? "text-neutral-900" : ""
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
        <div>
          <p className="text-xs tracking-widest text-neutral-500">UPCOMING</p>

          <div className="mt-10 space-y-16">
            {upcoming.map((u) => (
              <div key={u.slug} className="max-w-5xl space-y-5">
                {/* 제목 + 날짜 */}
                <div className="max-w-3xl space-y-3">
                  <p className="text-xl leading-relaxed text-neutral-900">
                    {u.title}
                  </p>

                  <p className="text-sm tracking-wide text-neutral-600">
                    {u.date}
                  </p>

                  <p className="text-sm leading-relaxed text-neutral-600 whitespace-pre-line">
                    {u.description}
                  </p>
                </div>

                {/* 16:6 image */}
                <div className="relative w-full overflow-hidden bg-neutral-200 aspect-[16/6]">
                  {u.image ? (
                    <Image
                      src={u.image}
                      alt={u.title}
                      fill
                      className="object-cover"
                      priority={u.slug === upcoming[0]?.slug}
                    />
                  ) : null}
                </div>

                {/* SOON badge (영문 대신 여기로 이동) */}
                <div>
                  <span className="inline-flex items-center rounded-full border border-neutral-300 px-3 py-1 text-[11px] tracking-widest text-neutral-500">
  {u.badge}
</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* divider */}
        <div className="my-16 h-px w-full bg-neutral-200" />

        {/* ARCHIVE */}
        <div>
          <p className="text-xs tracking-widest text-neutral-500">ARCHIVE</p>

          <div className="mt-10 space-y-16">
            {archive.map((a) => (
              <div key={a.slug} className="max-w-5xl space-y-5">
                <p className="text-sm tracking-wide text-neutral-600">
                  {a.date}
                </p>

                {/* 16:6 image */}
                <div className="relative w-full overflow-hidden bg-neutral-200 aspect-[16/6]">
                  {a.image ? (
                    <Image
                      src={a.image}
                      alt={a.title_en}
                      fill
                      className="object-cover"
                    />
                  ) : null}
                </div>

                <div className="max-w-3xl space-y-2">
                  <p className="text-base leading-relaxed text-neutral-900">
                    {a.title_en}
                  </p>

                  <p className="text-sm tracking-wide text-neutral-600">
                    {a.title_kr}
                  </p>

                  {a.note ? (
                    <p className="text-sm tracking-wide text-neutral-500">
                      {a.note}
                    </p>
                  ) : null}
                </div>
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
