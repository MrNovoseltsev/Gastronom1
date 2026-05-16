"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Product, SortMode, User } from "@/types";
import { products } from "@/data/products";
import { scrollToId } from "@/lib/format";
import { TopBar } from "./TopBar";
import { Header } from "./Header";
import { SubNav } from "./SubNav";
import { Hero } from "./Hero";
import { PromoStrip } from "./PromoStrip";
import { CategoriesGrid } from "./CategoriesGrid";
import { Catalog } from "./Catalog";
import { About } from "./About";
import { Footer } from "./Footer";
import { CartDrawer } from "./CartDrawer";
import { AuthModal } from "./AuthModal";
import { ProductModal } from "./ProductModal";
import { Toast } from "./Toast";

export function App() {
  const [activeCat, setActiveCat] = useState("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortMode>("popular");
  const [favs, setFavs] = useState<Set<string>>(new Set());
  const [cart, setCart] = useState<Record<string, number>>({});
  const [cartOpen, setCartOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [productOpen, setProductOpen] = useState<Product | null>(null);
  const [toast, setToast] = useState("");
  const toastT = useRef<ReturnType<typeof setTimeout> | null>(null);

  const filtered = useMemo(() => {
    let list = products;
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) => p.n.toLowerCase().includes(q) || (p.tag && p.tag.includes(q)),
      );
    } else if (activeCat !== "all") {
      list = list.filter((p) => p.c === activeCat);
    }
    if (sort === "priceAsc") list = [...list].sort((a, b) => a.p - b.p);
    if (sort === "priceDesc") list = [...list].sort((a, b) => b.p - a.p);
    return list;
  }, [query, activeCat, sort]);

  const cartItems = useMemo(
    () =>
      Object.entries(cart)
        .map(([id, qty]) => {
          const p = products.find((x) => x.id === id);
          return p ? { ...p, qty } : null;
        })
        .filter((x): x is Product & { qty: number } => x !== null),
    [cart],
  );

  const cartCount = useMemo(
    () => Object.values(cart).reduce((a, b) => a + b, 0),
    [cart],
  );
  const cartTotal = useMemo(
    () => cartItems.reduce((a, x) => a + x.p * x.qty, 0),
    [cartItems],
  );

  const flashToast = (msg: string) => {
    setToast(msg);
    if (toastT.current) clearTimeout(toastT.current);
    toastT.current = setTimeout(() => setToast(""), 1800);
  };

  const addToCart = (p: Product) => {
    setCart((c) => ({ ...c, [p.id]: (c[p.id] || 0) + 1 }));
    flashToast(`«${p.n}» в корзине`);
  };

  const setQty = (id: string, q: number) => {
    setCart((c) => {
      const next = { ...c };
      if (q <= 0) delete next[id];
      else next[id] = q;
      return next;
    });
  };

  const toggleFav = (id: string) => {
    setFavs((s) => {
      const n = new Set(s);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });
  };

  const pickCategory = (id: string, scroll: boolean) => {
    setActiveCat(id);
    setQuery("");
    if (scroll) scrollToId("catalog");
  };

  // ESC закрывает все оверлеи
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setCartOpen(false);
        setAuthOpen(false);
        setProductOpen(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <TopBar />
      <Header
        cartCount={cartCount}
        cartTotal={cartTotal}
        query={query}
        onQuery={setQuery}
        onOpenCart={() => setCartOpen(true)}
        onOpenAuth={() => setAuthOpen(true)}
        user={user}
      />
      <SubNav active={activeCat} onPick={(id) => pickCategory(id, true)} />

      <main>
        <Hero onShop={() => scrollToId("catalog")} />
        <PromoStrip />
        <CategoriesGrid
          active={activeCat}
          onPick={(id) => pickCategory(id, true)}
        />
        <Catalog
          activeCat={activeCat}
          onPickCategory={(id) => pickCategory(id, false)}
          items={filtered}
          sort={sort}
          setSort={setSort}
          query={query}
          cart={cart}
          onAdd={addToCart}
          onQty={setQty}
          favs={favs}
          onFav={toggleFav}
          onOpenProduct={setProductOpen}
        />
        <About />
      </main>

      <Footer />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onQty={setQty}
        total={cartTotal}
      />

      <AuthModal
        open={authOpen}
        onClose={() => setAuthOpen(false)}
        user={user}
        onLogin={(email) => {
          setUser({ email });
          setAuthOpen(false);
          flashToast(`Добро пожаловать, ${email.split("@")[0]}`);
        }}
        onLogout={() => {
          setUser(null);
          flashToast("Вышли из аккаунта");
        }}
      />

      <ProductModal
        p={productOpen}
        onClose={() => setProductOpen(null)}
        qty={productOpen ? cart[productOpen.id] || 0 : 0}
        onAdd={() => productOpen && addToCart(productOpen)}
        onInc={() =>
          productOpen && setQty(productOpen.id, (cart[productOpen.id] || 0) + 1)
        }
        onDec={() =>
          productOpen && setQty(productOpen.id, (cart[productOpen.id] || 0) - 1)
        }
        fav={productOpen ? favs.has(productOpen.id) : false}
        onFav={() => productOpen && toggleFav(productOpen.id)}
      />

      <Toast text={toast} />
    </>
  );
}
