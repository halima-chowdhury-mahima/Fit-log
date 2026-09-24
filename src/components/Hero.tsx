import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="mx-auto max-w-295 px-4 pt-8 md:px-6 md:pt-12">
      <div className="grid overflow-hidden rounded-xl border border-fit-border bg-fit-card lg:grid-cols-2">

        {/* Left Side */}
        <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
  <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.08em] text-fit-lime">
    WORKOUT LIBRARY
  </p>

  <h1 className="max-w-135 text-[48px] font-black uppercase leading-[0.92] tracking-tight text-white sm:text-[54px] md:text-[58px] lg:text-[62px]">
  TRAIN WITH INTENT. LOG
  <br />
  EVERY SET.
</h1>

<p className="mt-5 max-w-130 text-sm leading-6 text-fit-muted md:text-base">
  FitLog is a dark, no-nonsense gym companion: pick a lift,
  lock it into today&apos;s plan, and watch the week&apos;s work add up.
</p>

  <Link
    href="#library"
    className="mt-7 inline-flex w-fit items-center gap-2 rounded-md bg-fit-lime px-5 py-3 text-xs font-extrabold text-black transition hover:bg-white"
  >
    BROWSE WORKOUTS
    <ArrowDown size={16} />
  </Link>
</div>

        {/* Right Side Banner */}
        <div className="relative min-h-70 md:min-h-90 lg:min-h-100">
          <Image
            src="/images/banner.png"
            alt="FitLog workout banner"
            fill
            priority
            className="object-contain object-center p-5"
          />
        </div>
      </div>
    </section>
  );
}
