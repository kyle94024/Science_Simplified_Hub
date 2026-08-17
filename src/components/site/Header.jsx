"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import Logo from "./Logo";
import Button from "@/components/ui/Button";
import { nav } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/85 backdrop-blur-md">
      <div className="shell flex h-[var(--header-height)] items-center justify-between gap-6">
        <Link href="/" aria-label="Science Simplified home" className="shrink-0">
          <Logo />
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`relative py-1 font-display text-[0.95rem] font-semibold transition-colors ${
                isActive(item.href)
                  ? "text-navy-800"
                  : "text-body hover:text-navy-800"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-[2px] w-full rounded-full bg-navy-800 transition-transform duration-200 ${
                  isActive(item.href) ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </Link>
          ))}
          <Button href="/partner" size="sm">
            Partner With Us
          </Button>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-navy-800 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-line bg-white md:hidden"
        >
          <nav className="shell flex flex-col gap-1 py-4" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-3 font-display font-semibold ${
                  isActive(item.href)
                    ? "bg-navy-50 text-navy-800"
                    : "text-body hover:bg-canvas"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button
              href="/partner"
              className="mt-2 w-full"
              size="lg"
              onClick={() => setOpen(false)}
            >
              Partner With Us
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
