import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-125 flex-col items-center justify-center px-4 text-center">
      <p className="text-7xl font-black text-fit-lime md:text-8xl">
        404
      </p>

      <h1 className="mt-4 text-3xl font-black uppercase text-white">
        Page Not Found
      </h1>

      <p className="mt-3 max-w-md text-sm leading-6 text-fit-muted">
        The page or workout you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-md bg-fit-lime px-5 py-3 text-xs font-extrabold text-black hover:bg-white"
      >
        Back to Workouts
      </Link>
    </section>
  );
}