import Image from "next/image";
import Link from "next/link";

const DATA: Record<string, any> = {
  "winter-story-2026": {
    date: "2026.01.21",
    title: "겨울이야기: 《사랑해서 미워하고》 작가와의 만남",
    subtitle: "Winter Story",
    location: "MUAKYUNG, Hongcheon",
    description:
      "겨울의 한가운데, 책과 사람, 그리고 조용한 대화를 나눕니다.",
    images: ["/gathering-01.jpg", "/gathering-02.jpg"],
  },
  "autumn-resonance-2025": {
    date: "2025.10.18",
    title: "〈가을의 공명〉",
    subtitle: "Autumn Resonance, the Season of Sound",
    location: "MUAKYUNG, Hongcheon",
    description:
      "소리와 계절이 만나는 하루. 음악과 공간의 진동을 함께 느낀 자리.",
    images: ["/gathering-autumn.jpg"],
  },
  "first-gathering-2025": {
    date: "2025.07.11",
    title: "〈나와 공간, 그 사이〉",
    subtitle: "Muakyung First Gathering",
    location: "MUAKYUNG, Hongcheon",
    description:
      "무아경에서 처음으로 열린 자리. 공간과 삶, 음악이 만난 하루.",
    images: [],
  },
};

export default function GatheringDetail({
  params,
}: {
  params: { slug: string };
}) {
  const event = DATA[params.slug];
  if (!event) return null;

  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-900">
      <header className="px-6 pt-6 pb-4">
        <Link
          href="/gathering"
          className="text-xs tracking-widest text-neutral-600 hover:underline"
        >
          ← Gathering
        </Link>
      </header>

      <section className="mx-auto max-w-3xl px-6 pb-24">
        <p className="text-sm tracking-wide text-neutral-600">
          {event.date}
        </p>

        <h1 className="mt-3 text-2xl leading-relaxed">
          {event.title}
        </h1>

        <p className="mt-2 text-sm tracking-wide text-neutral-600">
          {event.subtitle}
        </p>

        <p className="mt-6 text-sm text-neutral-600">
          {event.location}
        </p>

        <p className="mt-8 text-base leading-relaxed text-neutral-800">
          {event.description}
        </p>

        {event.images.length > 0 && (
          <div className="mt-12 space-y-8">
            {event.images.map((src: string) => (
              <div
                key={src}
                className="relative aspect-[4/5] w-full bg-neutral-200"
              >
                <Image
                  src={src}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
