import Link from "next/link";

export function FooterLight() {
  return (
    <footer
      className="relative w-full"
      style={{
        background: "linear-gradient(90deg, #0d9488 0%, #0891b2 50%, #6366f1 100%)",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12 md:py-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex flex-col gap-1.5">
            <span className="text-[16px] font-bold tracking-[-0.01em] text-white">
              EKAM{" "}
              <span className="font-bold text-white/75">
                Institute of Advanced Medical Studies
              </span>
            </span>
            <span className="text-[14px] font-bold text-white/60 leading-relaxed">
              Bengaluru, Karnataka, India
            </span>
          </div>

          <nav className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Programs", href: "/programs" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[15px] font-bold text-white/70 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-start md:items-end gap-1">
            <span className="text-[14px] font-bold text-white/70">
              &copy; {new Date().getFullYear()} EKAM Institute.
            </span>
            <span className="text-[11.5px] font-bold tracking-[0.16em] uppercase text-white/50">
              Excellence in Medical Education
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
