export function Footer() {
  return (
    <footer
      className="relative w-full"
      style={{
        background: "linear-gradient(90deg, #0d9488 0%, #0891b2 50%, #6366f1 100%)",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-12 md:py-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex flex-col gap-1.5">
            <span className="text-[14px] font-bold tracking-[-0.01em] text-white">
              EKAM{" "}
              <span className="font-normal text-white/75">
                Institute of Advanced Medical Studies
              </span>
            </span>
            <span className="text-[12px] text-white/60 leading-relaxed">
              Bengaluru, Karnataka, India
            </span>
          </div>

          <nav className="flex items-center gap-6 md:gap-8">
            {["Programs", "Faculty", "Research", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[13px] text-white/70 hover:text-white transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="flex flex-col items-start md:items-end gap-1">
            <span className="text-[12px] text-white/70">
              &copy; {new Date().getFullYear()} EKAM Institute.
            </span>
            <span className="text-[10px] tracking-[0.16em] uppercase text-white/50">
              Excellence in Medical Education
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
