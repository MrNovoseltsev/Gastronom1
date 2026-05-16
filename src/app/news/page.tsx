import Image from "next/image";
import PageLayout from "@/widgets/page-layout/ui/PageLayout";
import Breadcrumbs from "@/shared/ui/Breadcrumbs";
import SectionHeader from "@/shared/ui/SectionHeader";
import { getAllNews } from "@/entities/news/api";

export const dynamic = "force-static";

export default async function NewsPage() {
  const posts = await getAllNews();

  return (
    <PageLayout>
      <section className="sol-container py-11">
        <Breadcrumbs
          items={[
            { label: "Главная", href: "/" },
            { label: "Новинки и акции" },
          ]}
        />
        <SectionHeader title="Новинки и акции" />

        <div className="grid grid-cols-1 gap-6 [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))]">
          {posts.map((post) => {
            const card = (
              <>
                <div className="relative h-[200px] w-full overflow-hidden bg-black/[0.04]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 320px"
                  />
                </div>
                <div className="px-[18px] pb-5 pt-4">
                  <p className="mb-1.5 text-[10px] tracking-[0.12em] text-neutral-500">
                    {post.date}
                  </p>
                  <h3 className="mb-2 text-[18px] font-semibold leading-[1.3]">
                    {post.title}
                  </h3>
                  <p className="line-clamp-3 text-[12.5px] leading-[1.55] text-neutral-600">
                    {post.excerpt}
                  </p>
                </div>
              </>
            );

            const cardClass =
              "block overflow-hidden rounded-[12px] border border-black/10 bg-white";

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
    </PageLayout>
  );
}
