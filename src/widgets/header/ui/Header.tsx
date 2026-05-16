import Link from "next/link";
import CartButton from "@/features/cart/ui/CartButton";
import HeaderNav from "./HeaderNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-[200] border-b border-black/10 bg-white">
      <div className="sol-container relative flex h-[68px] items-center gap-7">
        <Link
          href="/"
          className="shrink-0 text-[clamp(20px,3vw,28px)] font-semibold tracking-tight"
        >
          Gastronom1
        </Link>

        <HeaderNav />

        <div className="ml-auto flex shrink-0 items-center gap-2.5">
          <CartButton />
        </div>
      </div>
    </header>
  );
}
