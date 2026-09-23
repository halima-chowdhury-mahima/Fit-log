"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useWorkout } from "@/context/WorkoutContext";

export default function Navbar() {
  const pathname = usePathname();

  const {
    todayPlan,
    savedWorkouts,
  } = useWorkout();

  const workoutActive =
    pathname === "/" ||
    pathname.startsWith("/workout");

  const planActive =
    pathname === "/my-plan";

  return (
    <header className="border-b border-fit-border bg-fit-bg">
      <div className="mx-auto flex min-h-18 max-w-295 items-center justify-between gap-4 px-4 md:px-6">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <Image
            src="/images/logo.png"
            alt="FitLog logo"
            width={27}
            height={27}
            className="object-contain"
          />

          <span className="text-xl font-extrabold tracking-wide text-white">
            FITLOG
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 sm:flex">
          <Link
            href="/"
            className={`rounded-full px-5 py-2 text-sm font-medium ${
              workoutActive
                ? "bg-fit-lime/10 text-fit-lime"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-5 py-2 text-sm font-medium ${
              planActive
                ? "bg-fit-lime/10 text-fit-lime"
                : "text-gray-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </nav>

        {/* Counters */}
        <div className="flex items-center gap-4">
          <Link
            href="/my-plan"
            className="flex items-center gap-2"
          >
            <span className="hidden text-sm text-gray-300 sm:inline">
              Plan
            </span>

            <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-fit-lime px-1 text-xs font-bold text-black">
              {todayPlan.length}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-2"
          >
            <span className="hidden text-sm text-gray-400 sm:inline">
              Saved
            </span>

            <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-fit-border px-1 text-xs font-bold text-gray-300">
              {savedWorkouts.length}
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="mx-auto flex max-w-295 gap-2 px-4 pb-3 sm:hidden">
        <Link
          href="/"
          className={`flex-1 rounded-md py-2 text-center text-xs font-semibold ${
            workoutActive
              ? "bg-fit-lime text-black"
              : "bg-fit-card text-gray-400"
          }`}
        >
          Workouts
        </Link>

        <Link
          href="/my-plan"
          className={`flex-1 rounded-md py-2 text-center text-xs font-semibold ${
            planActive
              ? "bg-fit-lime text-black"
              : "bg-fit-card text-gray-400"
          }`}
        >
          My Plan
        </Link>
      </div>
    </header>
  );
}