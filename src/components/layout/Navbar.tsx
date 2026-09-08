"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "@/components/shared/Logo";
import { navLinks, siteConfig } from "@/lib/data";
import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const pathname = usePathname();

  // Close the mobile menu on route change. Adjusting state during render
  // (rather than in an effect) avoids an extra commit-then-correct render.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
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

  const dark = theme === "dark";

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          scrolled ? (dark ? "bg-bg-dark/70 backdrop-blur-lg" : "bg-white/70 backdrop-blur-lg") : "bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 md:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            <Logo size={38} onDark={dark} />
            <span
              className={cn(
                "font-heading text-base font-bold tracking-wide",
                dark ? "text-white" : "text-text-dark"
              )}
            >
              VERSA DIGITAL
              <span
                className={cn(
                  "hidden font-medium normal-case tracking-normal xl:inline",
                  dark ? "text-white/50" : "text-text-muted"
                )}
              >
                {" "}
                & IT Solutions
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown((cur) => (cur === link.label ? null : cur))}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors",
                      dark ? "text-white/80 hover:text-white" : "text-text-dark/80 hover:text-violet"
                    )}
                  >
                    {link.label}
                    <ChevronDown className={cn("size-3.5 transition-transform", openDropdown === link.label && "rotate-180")} />
                  </button>

                  <AnimatePresence>
                    {openDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3"
                      >
                        <div className="overflow-hidden rounded-2xl border border-text-dark/10 bg-white p-2 shadow-xl">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block rounded-xl px-4 py-2.5 transition-colors hover:bg-violet-pale"
                            >
                              <span className="block text-sm font-semibold text-text-dark">{child.label}</span>
                              {child.description && (
                                <span className="mt-0.5 block text-xs text-text-muted">{child.description}</span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                    dark ? "text-white/80 hover:text-white" : "text-text-dark/80 hover:text-violet"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href={`tel:${siteConfig.phoneHref}`}
              className={cn(
                "text-sm font-semibold transition-colors",
                dark ? "text-white/90 hover:text-white" : "text-text-dark hover:text-violet"
              )}
            >
              {siteConfig.phone}
            </a>
            <a
              href={whatsappUrl("Hi Versa Digital, I'd like a free audit.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-violet px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-violet-light"
            >
              Get Free Audit
            </a>
          </div>

          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className={cn(
              "flex size-10 items-center justify-center rounded-full border lg:hidden",
              dark ? "border-white/25 text-white" : "border-text-dark/15 text-text-dark"
            )}
          >
            <Menu className="size-5" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-white"
          >
            <div className="flex items-center justify-between px-5 py-3.5">
              <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
                <Logo size={36} />
                <span className="font-heading text-base font-bold text-text-dark">VERSA DIGITAL</span>
              </Link>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="flex size-10 items-center justify-center rounded-full border border-text-dark/15 text-text-dark"
              >
                <X className="size-5" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col items-start justify-center gap-1 px-8 py-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.35 }}
                  className="w-full"
                >
                  {link.children ? (
                    <div className="w-full">
                      <button
                        onClick={() => setOpenMobileGroup((cur) => (cur === link.label ? null : link.label))}
                        className="flex w-full items-center justify-between py-2.5 font-heading text-2xl font-bold text-text-dark"
                      >
                        {link.label}
                        <ChevronDown
                          className={cn("size-5 text-violet transition-transform", openMobileGroup === link.label && "rotate-180")}
                        />
                      </button>
                      <AnimatePresence>
                        {openMobileGroup === link.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-0.5 pb-3 pl-4">
                              {link.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={() => setOpen(false)}
                                  className="py-2 text-base font-medium text-text-dark/70 hover:text-violet"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block py-2.5 font-heading text-2xl font-bold text-text-dark transition-colors hover:text-violet"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>

            <div className="flex flex-col gap-4 border-t border-text-dark/10 px-8 py-8">
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="flex items-center gap-2 font-semibold text-text-dark"
              >
                <Phone className="size-4 text-violet" /> {siteConfig.phone}
              </a>
              <a
                href={whatsappUrl("Hi Versa Digital, I'd like a free audit.")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-violet py-3.5 text-center text-sm font-semibold text-white"
              >
                Get Free Audit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
