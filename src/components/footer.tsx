export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-rule pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* Massive outline wordmark */}
        <div className="select-none pb-12 sm:pb-16">
          <p className="font-serif text-[clamp(4rem,18vw,16rem)] leading-[0.85] tracking-[-0.04em] outline-display">
            Orel <em className="italic">Sisso</em>
          </p>
        </div>

        {/* Bottom meta strip */}
        <div className="grid gap-6 border-t border-rule pt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:grid-cols-2">
          <p>© {year} · Studio of One</p>
          <p className="sm:text-right">
            <a
              href="#contact"
              className="swipe-link text-foreground hover:text-primary"
            >
              Begin a project →
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
