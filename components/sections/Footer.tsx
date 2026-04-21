export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-6">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-text-dim">
          © {year} Hamza Ahmed. All rights reserved.
        </p>
        <p className="font-mono text-xs text-subtle">
          Built with Love · Next.js · TailwindCSS
        </p>
      </div>
    </footer>
  );
}
