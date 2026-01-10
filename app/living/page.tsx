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

{/* intro text */}
<section className="mx-auto w-full max-w-5xl px-6 py-40">
  <div className="max-w-md mx-auto text-center">
    <p className="text-sm leading-relaxed text-neutral-700">
      무아경은 집이자 작업실입니다.
    </p>
  </div>
</section>


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

      </section>
    </main>
  );
}
