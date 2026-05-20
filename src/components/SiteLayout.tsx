import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Compass } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/causes", label: "The Causes" },
  { to: "/exchange", label: "The Exchange" },
  { to: "/impact", label: "Global Impact" },
  { to: "/references", label: "References" },
];

export function SiteLayout() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (r) => r.location.pathname });

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Compass className="w-6 h-6 text-primary group-hover:rotate-45 transition-transform duration-500" />
            <span className="font-serif text-xl font-semibold tracking-tight">The Columbian Exchange</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {nav.map((n) => {
              const active = path === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    active ? "text-primary bg-muted" : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {open && (
          <nav className="md:hidden border-t border-border bg-background">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="block px-6 py-3 text-sm font-medium border-b border-border/50 hover:bg-muted"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t border-border mt-20 py-8 bg-muted/40">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>A historical study of The Columbian Exchange · 1492 and beyond</p>
        </div>
      </footer>
    </div>
  );
}

export function PageHero({ eyebrow, title, image }: { eyebrow: string; title: string; image: string }) {
  return (
    <section className="relative h-[45vh] min-h-[320px] overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      <div className="relative max-w-6xl mx-auto px-6 h-full flex flex-col justify-end pb-12">
        <p className="text-xs uppercase tracking-[0.25em] text-secondary font-semibold mb-3">{eyebrow}</p>
        <h1 className="font-serif text-5xl md:text-6xl font-semibold text-foreground max-w-3xl">{title}</h1>
      </div>
    </section>
  );
}
