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



        {/* Instagram icon */}
<div className="absolute bottom-6 right-6 z-10">
  <a
    href="https://www.instagram.com/mua.kyung"
    target="_blank"
    rel="noopener noreferrer"
    className="text-neutral-50/40 hover:text-neutral-50/70 transition"
    aria-label="Instagram"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4"
    >
      <path d="M7.75 2h8.5C19.44 2 22 4.56 22 7.75v8.5C22 19.44 19.44 22 16.25 22h-8.5C4.56 22 2 19.44 2 16.25v-8.5C2 4.56 4.56 2 7.75 2zm0 1.5C5.4 3.5 3.5 5.4 3.5 7.75v8.5c0 2.35 1.9 4.25 4.25 4.25h8.5c2.35 0 4.25-1.9 4.25-4.25v-8.5c0-2.35-1.9-4.25-4.25-4.25h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-.75a1 1 0 110 2 1 1 0 010-2z" />
    </svg>
  </a>
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
            <p className="text-xs tracking-wide text-neutral-500">
              HOME, and WORK : Where living becomes the work.
            </p>
          </div>
        </div>
      </section>
      <footer className="mx-auto w-full max-w-5xl px-6 py-24">
  <div className="text-xs leading-relaxed text-neutral-600">
    <p className="tracking-[0.35em] text-neutral-900">MUAKYUNG</p>

    <p className="mt-4">
      Hongcheon, Gangwon-do, Republic of Korea
    </p>

    <p className="mt-6">
      Contact.
      <br />
      <a
        href="mailto:muakyung3892@naver.com"
        className="opacity-80 hover:opacity-100 transition"
      >
        muakyung3892@naver.com
      </a>
      <br />
      <a
        href="tel:01000000000"
        className="hover:text-neutral-900 transition"
      >
        이상훈 010-2827-7338
      </a>
    </p>
  </div>
</footer>
    </main>
  );
}
