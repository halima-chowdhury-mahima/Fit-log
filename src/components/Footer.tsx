import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-fit-border bg-fit-bg">
      <div className="mx-auto flex max-w-295 flex-col gap-4 px-4 py-7 sm:flex-row sm:items-center sm:justify-between md:px-6">
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="FitLog logo"
            width={22}
            height={22}
            className="object-contain"
          />

          <span className="text-sm font-extrabold tracking-wide text-white">
            FITLOG
          </span>
        </div>

        <p className="text-xs text-fit-muted">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}
