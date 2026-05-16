import Image from "next/image";
import SectionHeader from "@/shared/ui/SectionHeader";
import type { NewsPost } from "@/entities/news/model/types";

type Props = { posts: NewsPost[] };

export default function NewsScroll({ posts }: Props) {
  return (
    <section className="sol-container pb-[68px]">
      <SectionHeader
        title="Новинки и акции"
        href="/news"
        link={{ label: "Все новинки", href: "/news" }}
      />

      <div className="news-scroll flex snap-x snap-mandatory gap-[18px] overflow-x-auto pb-3">
        {posts.map((post) => {
          const card = (
            <>
              <div className="relative h-[172px] w-full overflow-hidden bg-black/[0.04]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="268px"
                />
              </div>
              <div className="px-4 pb-[18px] pt-3.5">
                <p className="mb-1.5 text-[10px] tracking-[0.12em] text-neutral-500">
                  {post.date}
                </p>
                <h3 className="mb-1.5 text-[16px] font-semibold leading-[1.3]">
                  {post.title}
                </h3>
                <p className="line-clamp-2 text-[12.5px] leading-[1.55] text-neutral-600">
                  {post.excerpt}
                </p>
              </div>
            </>
          );

          const cardClass =
            "flex-[0_0_240px] snap-start overflow-hidden rounded-[12px] border border-black/10 bg-white min-[481px]:flex-[0_0_268px]";

          return post.url ? (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cardClass}
            >
              {card}
            </a>
          ) : (
            <div key={post.id} className={cardClass}>
              {card}
            </div>
          );
        })}
      </div>
    </section>
  );
}
