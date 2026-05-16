import { useEffect, useState } from "react";
import type { User } from "@/types";
import { IconClose, IconArrow } from "./icons";

type Props = {
  open: boolean;
  onClose: () => void;
  user: User | null;
  onLogin: (email: string) => void;
  onLogout: () => void;
};

export function AuthModal({ open, onClose, user, onLogin, onLogout }: Props) {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    if (open) {
      setErr("");
      setEmail("");
      setPwd("");
      setMode("login");
    }
  }, [open]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@") || email.length < 4) {
      setErr("Введите email");
      return;
    }
    if (pwd.length < 6) {
      setErr("Пароль — минимум 6 символов");
      return;
    }
    onLogin(email);
  };

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-[120] grid place-items-end p-0 backdrop-blur-[3px] transition-opacity duration-200 md:place-items-center md:p-6 ${
        open
          ? "bg-[rgba(20,17,13,0.45)] opacity-100"
          : "pointer-events-none bg-[rgba(20,17,13,0.45)] opacity-0"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative max-h-[92vh] w-full max-w-[420px] overflow-y-auto rounded-t-2xl border border-line bg-bg px-[22px] pt-7 pb-6 shadow-[var(--shadow-modal)] transition-transform duration-200 ease-[cubic-bezier(.4,0,.2,1)] md:max-h-[calc(100vh-48px)] md:rounded-xl md:px-7 md:pt-8 ${
          open ? "translate-y-0 scale-100" : "translate-y-2 scale-[0.98]"
        }`}
      >
        <button
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
          className="absolute top-3.5 right-3.5 z-[2] grid size-8 place-items-center rounded-full border border-line bg-cream hover:bg-white"
        >
          <IconClose className="size-3.5" />
        </button>

        {user ? (
          <>
            <div className="mb-2.5 font-mono text-[11px] tracking-[0.1em] text-red uppercase">
              / профиль
            </div>
            <h3 className="mb-2 font-display text-[28px] leading-[1.1] font-extrabold tracking-[-0.02em]">
              Привет, {user.email.split("@")[0]}
            </h3>
            <p className="mb-6 text-sm text-ink-soft">{user.email}</p>
            <div className="mt-4 flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="flex flex-1 items-center justify-center rounded-[8px] border border-line bg-cream px-[18px] py-3 text-sm font-medium transition-colors hover:border-ink-soft hover:bg-white"
              >
                Закрыть
              </button>
              <button
                type="button"
                onClick={onLogout}
                className="flex flex-1 items-center justify-center rounded-[8px] bg-ink px-[18px] py-3 text-sm font-semibold text-cream transition-colors hover:bg-black"
              >
                Выйти
              </button>
            </div>
          </>
        ) : (
          <form onSubmit={submit}>
            <div className="mb-2.5 font-mono text-[11px] tracking-[0.1em] text-red uppercase">
              / {mode === "login" ? "вход" : "регистрация"}
            </div>
            <h3 className="mb-2 font-display text-[28px] leading-[1.1] font-extrabold tracking-[-0.02em]">
              {mode === "login" ? "С возвращением" : "Создать аккаунт"}
            </h3>
            <p className="mb-6 text-sm leading-normal text-ink-soft">
              Сохраняем избранное, адреса и историю заказов.
            </p>

            <Field
              label="Email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={setEmail}
              placeholder="you@gastronom1.ar"
            />
            <Field
              label="Пароль"
              type="password"
              autoComplete={mode === "login" ? "current-password" : "new-password"}
              value={pwd}
              onChange={setPwd}
              placeholder="••••••••"
            />

            {err && (
              <div className="mb-3 rounded-md bg-[rgba(225,36,28,0.08)] px-3 py-2 text-xs text-red">
                {err}
              </div>
            )}

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-[8px] bg-ink px-[18px] py-3 text-sm font-semibold text-cream transition-colors hover:bg-black"
            >
              {mode === "login" ? "Войти" : "Зарегистрироваться"}
              <IconArrow className="size-3.5" />
            </button>

            <div className="mt-[18px] border-t border-dashed border-line pt-[18px] text-center text-[13px] text-ink-soft">
              {mode === "login" ? (
                <>
                  Новый покупатель?{" "}
                  <button
                    type="button"
                    onClick={() => setMode("signup")}
                    className="border-b border-ink font-semibold text-ink"
                  >
                    Создать аккаунт
                  </button>
                </>
              ) : (
                <>
                  Уже есть аккаунт?{" "}
                  <button
                    type="button"
                    onClick={() => setMode("login")}
                    className="border-b border-ink font-semibold text-ink"
                  >
                    Войти
                  </button>
                </>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  type,
  autoComplete,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  type: string;
  autoComplete: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}) {
  return (
    <label className="mb-3.5 block">
      <span className="mb-1.5 block font-mono text-[11px] tracking-[0.08em] text-ink-mute uppercase">
        {label}
      </span>
      <input
        type={type}
        autoComplete={autoComplete}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-[8px] border border-line bg-cream px-3.5 py-3 text-sm text-ink outline-none transition-colors focus:border-ink focus:bg-white"
      />
    </label>
  );
}
