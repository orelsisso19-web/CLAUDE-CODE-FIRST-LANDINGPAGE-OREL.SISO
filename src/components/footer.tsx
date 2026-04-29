export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {year} Orel Sisso. Built with Next.js.
        </p>
        <a
          href="#contact"
          className="font-medium text-foreground transition-colors hover:text-primary"
        >
          Start a project →
        </a>
      </div>
    </footer>
  );
}
