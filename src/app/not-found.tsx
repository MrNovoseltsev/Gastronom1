import Link from "next/link";
import PageLayout from "@/widgets/page-layout/ui/PageLayout";

export default function NotFound() {
  return (
    <PageLayout>
      <section className="flex min-h-[60vh] flex-col items-center justify-center gap-6 p-2.5">
        <h1 className="text-4xl font-semibold">404</h1>
        <p className="text-center text-lg">Страница не найдена</p>
        <Link
          href="/"
          className="rounded-full bg-neutral-900 px-6 py-2.5 text-white"
        >
          На главную
        </Link>
      </section>
    </PageLayout>
  );
}
