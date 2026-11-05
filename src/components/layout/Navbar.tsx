"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import Logo from "@/components/shared/Logo";
import { siteConfig } from "@/lib/data";
import { mainNav } from "@/lib/navigation";
import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const pathname = usePathname();

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
    setOpenDropdown(null);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-navbar-theme]"));
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const next = visible.target.getAttribute("data-navbar-theme") as "light" | "dark" | null;
          if (next) setTheme(next);
        }
      },
      { rootMargin: "-72px 0px -85% 0px", threshold: [0, 0.1, 0.5, 1] }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  const dark = theme === "dark" && !openDropdown;

  return (
    <>
      <header
        onMouseLeave={() => setOpenDropdown(null)}
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200",
          openDropdown
            ? "border-text-dark/10 bg-bg-light"
            : scrolled
              ? dark
                ? "border-white/10 bg-bg-dark/85 backdrop-blur-lg"
                : "border-text-dark/10 bg-bg-light/90 backdrop-blur-lg"
              : "border-transparent bg-transparent"
        )}
      >
        <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3.5 md:px-8">
          <Link href="/" className="flex shrink-0 items-center gap-2.5">
            <Logo size={36} onDark={dark} />
            <span className={cn("font-heading text-[15px] font-semibold tracking-wide", dark ? "text-white" : "text-text-dark")}>
              VERSA DIGITAL
              <span className={cn("hidden font-normal tracking-normal 2xl:inline", dark ? "text-white/50" : "text-text-muted")}>
                {" "}& IT Solutions
              </span>
            </span>
          </Link>

          <nav className="hidden items-center xl:flex" aria-label="Main">
            {mainNav.map((link) => {
              const hasMenu = Boolean(link.children || link.columns);
              const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <div
                  key={link.href}
                  className={link.columns ? "" : "relative"}
                  onMouseEnter={() => setOpenDropdown(hasMenu ? link.label : null)}
                >
                  {hasMenu ? (
                    <button
                      type="button"
                      aria-expanded={openDropdown === link.label}
                      onClick={() => setOpenDropdown((cur) => (cur === link.label ? null : link.label))}
                      className={cn(
                        "flex items-center gap-1 px-3 py-2 text-[13.5px] font-medium transition-colors",
                        dark ? "text-white/75 hover:text-white" : "text-text-dark/75 hover:text-text-dark",
                        active && (dark ? "text-white" : "text-text-dark")
                      )}
                    >
                      {link.label}
                      <ChevronDown className={cn("size-3.5 transition-transform", openDropdown === link.label && "rotate-180")} />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        "block px-3 py-2 text-[13.5px] font-medium transition-colors",
                        dark ? "text-white/75 hover:text-white" : "text-text-dark/75 hover:text-text-dark",
                        active && (dark ? "text-white" : "text-text-dark")
                      )}
                    >
                      {link.label}
                    </Link>
                  )}

                  {openDropdown === link.label && link.children && (
                    <div className="absolute left-1/2 top-full w-[22rem] -translate-x-1/2 pt-3">
                      <div data-lenis-prevent className="max-h-[70vh] overflow-y-auto rounded-xl border border-text-dark/10 bg-white p-2 shadow-[0_24px_60px_-20px_rgba(18,17,24,0.25)]">
                        {link.children.map((child) => (
                          <Link key={child.href} href={child.href} className="block rounded-lg px-4 py-2.5 transition-colors hover:bg-bg-light">
                            <span className="block text-sm font-semibold text-text-dark">{child.label}</span>
                            {child.description && <span className="mt-0.5 block text-xs text-text-muted">{child.description}</span>}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {openDropdown === link.label && link.columns && (
                    <div className="absolute inset-x-5 top-full pt-3 md:inset-x-8">
                      <div className="rounded-xl border border-text-dark/10 bg-white p-7 shadow-[0_24px_60px_-20px_rgba(18,17,24,0.25)]">
                        <div className="grid grid-cols-5 gap-6">
                          {link.columns.map((col) => (
                            <div key={col.title}>
                              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">{col.title}</p>
                              <ul className="mt-3 space-y-1.5">
                                {col.links.map((l) => (
                                  <li key={l.href}>
                                    <Link href={l.href} className="block py-0.5 text-[13px] leading-snug text-text-dark/80 transition-colors hover:text-violet">
                                      {l.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 flex items-center justify-between border-t border-text-dark/10 pt-4">
                          <p className="text-xs text-text-muted">Software, AI, cloud, security and business systems — one engineering partner.</p>
                          <Link href="/it-solutions" className="flex items-center gap-1 text-xs font-semibold text-violet hover:text-violet-light">
                            View all IT solutions <ArrowUpRight className="size-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="hidden shrink-0 items-center md:flex">
            <Link
              href="/contact"
              className={cn(
                "rounded-full px-5 py-2.5 text-[13px] font-semibold transition-colors",
                dark ? "bg-white text-text-dark hover:bg-white/90" : "bg-text-dark text-white hover:bg-violet"
              )}
            >
              Book a strategy call
            </Link>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className={cn(
              "flex size-10 items-center justify-center rounded-full border xl:hidden",
              dark ? "border-white/25 text-white" : "border-text-dark/15 text-text-dark"
            )}
          >
            <Menu className="size-5" />
          </button>
        </div>
      </header>

      {open && (
        <div data-lenis-prevent className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-bg-light">
          <div className="flex items-center justify-between px-5 py-3.5">
            <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
              <Logo size={34} />
              <span className="font-heading text-[15px] font-semibold text-text-dark">VERSA DIGITAL</span>
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="flex size-10 items-center justify-center rounded-full border border-text-dark/15 text-text-dark"
            >
              <X className="size-5" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col px-6 py-6" aria-label="Mobile">
            {mainNav.map((link) => {
              const groups = link.columns ?? (link.children ? [{ title: "", links: link.children }] : null);
              return groups ? (
                <div key={link.href} className="border-b border-text-dark/10">
                  <button
                    type="button"
                    onClick={() => setOpenMobileGroup((cur) => (cur === link.label ? null : link.label))}
                    className="flex w-full items-center justify-between py-4 font-heading text-xl font-semibold text-text-dark"
                  >
                    {link.label}
                    <ChevronDown className={cn("size-5 text-text-muted transition-transform", openMobileGroup === link.label && "rotate-180")} />
                  </button>
                  {openMobileGroup === link.label && (
                    <div className="space-y-4 pb-5">
                      {groups.map((g) => (
                        <div key={g.title || link.label}>
                          {g.title && <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">{g.title}</p>}
                          <div className="mt-1 flex flex-col">
                            {g.links.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setOpen(false)}
                                className="py-1.5 text-[15px] text-text-dark/75 hover:text-violet"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                      <Link href={link.href} onClick={() => setOpen(false)} className="inline-block text-sm font-semibold text-violet">
                        View all {link.label} →
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-text-dark/10 py-4 font-heading text-xl font-semibold text-text-dark"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-col gap-3 px-6 pb-10">
            <Link href="/contact" onClick={() => setOpen(false)} className="rounded-full bg-text-dark py-3.5 text-center text-sm font-semibold text-white">
              Book a strategy call
            </Link>
            <a
              href={whatsappUrl("Hi Versa Digital, I'd like to discuss a project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-text-dark/15 py-3.5 text-center text-sm font-semibold text-text-dark"
            >
              WhatsApp {siteConfig.phone}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
