import Link from "next/link";
import Image from "next/image";


const nav = [
  { label: "living", href: "/living" },
  { label: "create", href: "/create" },
  { label: "gathering", href: "/gathering" },
  { label: "space", href: "/space" },
];

export default function SpacePage() {
  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-900">
      {/* HEADER */}
      <header className="sticky top-0 z-10 bg-neutral-100/85 backdrop-blur px-6 pt-6 pb-4">
        <div className="flex flex-col gap-3">
          {/* Home */}
          <Link
            href="/"
            className="text-xs tracking-[0.35em] text-neutral-900 hover:opacity-70 transition"
          >
            MUAKYUNG
          </Link>

          {/* Menu */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs tracking-widest text-neutral-600">
            {nav.map((t) => (
              <Link
                key={t.label}
                href={t.href}
                className={`hover:text-neutral-900 transition ${
                  t.label === "space" ? "text-neutral-900" : ""
                }`}
              >
                {t.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* CONTENT */}
      <section className="mx-auto max-w-3xl px-6 py-32 space-y-24">
        {/* INTRO */}
        <div className="space-y-3">
          <h1 className="text-sm tracking-widest text-neutral-800">Space</h1>
          <p className="text-sm text-neutral-500">
            A place open for collaboration.
          </p>
        </div>

        {/* RENTAL PLATFORM */}
        <div className="space-y-4">
          <h2 className="text-xs tracking-widest text-neutral-800">
            Rental platform
          </h2>

          <a
            href="https://hourplace.co.kr/place/54873"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-800 hover:opacity-70 transition"
          >
            MUAKYUNG on Hourplace →
          </a>

          <p className="text-xs text-neutral-500 leading-relaxed">
            공간 대관은 아워플레이스 플랫폼을 통해 안내하고 있습니다.
          </p>
        </div>

        {/* COLLABORATION */}
        <div className="space-y-4">
          <h2 className="text-xs tracking-widest text-neutral-800">
            Space collaboration
          </h2>

          <p className="text-sm text-neutral-500 leading-relaxed">
            공간 대관, 촬영, 협업 관련 사항은<br />
            아래 연락처로 문의 주세요.
          </p>

          <a
            href="mailto:muakyung@email.com"
            className="text-sm text-neutral-800 hover:opacity-70 transition"
          >
            010-2827-7338 / muakyung3892@naver.com
          </a>
        </div>
      </section>
      
      {/* space last image */}
<div className="mt-20">
  <div className="relative w-full aspect-[4/3] overflow-hidden">
    <Image
      src="/space-last.jpg"
      alt="MUAKYUNG space"
      fill
      className="object-cover"
      priority={false}
    />
  </div>
</div>
    </main>
  );
}
