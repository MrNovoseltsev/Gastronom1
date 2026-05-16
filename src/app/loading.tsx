import PageLayout from "@/widgets/page-layout/ui/PageLayout";
import { Skeleton } from "@/shared/ui/Skeleton";

export default function HomeLoading() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="sol-container flex flex-col items-center gap-4 pb-11 pt-[60px]">
        <Skeleton className="h-3 w-56" />
        <Skeleton className="h-[60px] w-[min(560px,92%)]" />
        <Skeleton className="h-4 w-80 max-w-[90%]" />
        <Skeleton className="h-11 w-44 rounded-full" />
      </section>

      {/* Категории */}
      <section className="sol-container pb-16">
        <div className="grid grid-cols-1 gap-[14px] min-[481px]:grid-cols-2 md:grid-cols-3">
          {Array.from({ length: 12 }).map((_, i) => (
            <Skeleton key={i} className="h-[76px] rounded-[12px]" />
          ))}
        </div>
      </section>

      {/* Новинки */}
      <section className="sol-container pb-[68px]">
        <Skeleton className="mb-5 h-9 w-56" />
        <div className="flex gap-[18px] overflow-hidden">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="flex-[0_0_240px] overflow-hidden rounded-[12px] border border-black/10 bg-white min-[481px]:flex-[0_0_268px]"
            >
              <Skeleton className="h-[172px] w-full rounded-none" />
              <div className="flex flex-col gap-2 px-4 pb-[18px] pt-3.5">
                <Skeleton className="h-2.5 w-24" />
                <Skeleton className="h-4 w-4/5" />
                <Skeleton className="h-3 w-full" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
