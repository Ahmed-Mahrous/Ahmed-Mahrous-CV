"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn, withBasePath } from "@/lib/utils";

const links = [
  { href: "/", label: "Portfolio" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/cv", label: "Print CV" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const onCv = pathname === "/cv";

  return (
    <header className="no-print sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          Ahmed Mahrous
          <span className="ml-2 hidden text-muted-foreground sm:inline">
            Flutter Developer
          </span>
        </Link>
        <nav className="flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "hidden rounded-md px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground md:inline",
                (link.href === "/cv" && onCv) ||
                  (link.href === "/" && pathname === "/" && link.label === "Portfolio")
                  ? "text-foreground"
                  : undefined
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button
            size="sm"
            className="ml-1"
            nativeButton={false}
            render={
              <a href={withBasePath("/Ahmed-Mahrous-Flutter-Developer.pdf")} download />
            }
          >
            <Download data-icon="inline-start" />
            PDF
          </Button>
        </nav>
      </div>
    </header>
  );
}
