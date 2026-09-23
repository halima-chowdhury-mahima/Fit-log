"use client";

import Link from "next/link";
import { useState } from "react";

import {
  ChevronDown,
  Dumbbell,
  Flame,
  Timer,
} from "lucide-react";

import { useWorkout } from "@/context/WorkoutContext";
import PlanCard from "@/components/PlanCard";

type TabType = "plan" | "saved";

type SortType =
  | "duration"
  | "calories"
  | "rating";

export default function MyPlanPage() {
  const {
    todayPlan,
    savedWorkouts,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
    ready,
  } = useWorkout();

  const [activeTab, setActiveTab] =
    useState<TabType>("plan");

  const [sortBy, setSortBy] =
    useState<SortType>("duration");

  // Loading State
  if (!ready) {
    return (
      <section className="mx-auto min-h-125 max-w-295 px-4 py-16 md:px-6">
        <div className="flex min-h-80 items-center justify-center">
          <p className="animate-pulse text-fit-muted">
            Loading workouts…
          </p>
        </div>
      </section>
    );
  }

  // Metrics
  const exercises = todayPlan.length;

  const minutes = todayPlan.reduce(
    (total, workout) =>
      total + workout.duration,
    0
  );

  const calories = todayPlan.reduce(
    (total, workout) =>
      total + workout.caloriesBurned,
    0
  );

  // Current Tab List
  const currentList =
    activeTab === "plan"
      ? todayPlan
      : savedWorkouts;

  // Sort Current List
  const sortedList = [...currentList].sort(
    (a, b) => {
      if (sortBy === "duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "calories") {
        return (
          a.caloriesBurned -
          b.caloriesBurned
        );
      }

      if (sortBy === "rating") {
        return b.rating - a.rating;
      }

      return 0;
    }
  );

  return (
    <section className="mx-auto min-h-125 max-w-295 px-4 py-12 md:px-6 md:py-16">

      {/* Header */}
      <div>
        <p className="text-xs font-bold tracking-[0.25em] text-fit-lime">
          WORKOUT LOG
        </p>

        <h1 className="mt-3 text-4xl font-black uppercase text-white md:text-5xl">
          MY PLAN
        </h1>

        <p className="mt-3 text-sm text-fit-muted">
          Cap of five lifts for today.
          Finish them, then load more.
        </p>
      </div>

      {/* Metrics */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <MetricCard
          icon={<Dumbbell size={20} />}
          title="Exercises"
          value={exercises}
        />

        <MetricCard
          icon={<Timer size={20} />}
          title="Minutes"
          value={minutes}
        />

        <MetricCard
          icon={<Flame size={20} />}
          title="Calories"
          value={calories}
        />
      </div>

      {/* Tabs */}
      <div className="mt-10 flex border-b border-fit-border">
        <button
          type="button"
          onClick={() =>
            setActiveTab("plan")
          }
          className={`border-b-2 px-5 py-3 text-sm font-bold ${
            activeTab === "plan"
              ? "border-fit-lime text-fit-lime"
              : "border-transparent text-fit-muted"
          }`}
        >
          Today&apos;s Plan (
          {todayPlan.length})
        </button>

        <button
          type="button"
          onClick={() =>
            setActiveTab("saved")
          }
          className={`border-b-2 px-5 py-3 text-sm font-bold ${
            activeTab === "saved"
              ? "border-fit-lime text-fit-lime"
              : "border-transparent text-fit-muted"
          }`}
        >
          Saved ({savedWorkouts.length})
        </button>
      </div>

      {/* Sort By */}
      <div className="mt-6 flex items-center justify-end gap-3">
        <span className="text-sm font-medium text-fit-muted">
          Sort By
        </span>

        <div className="relative">
          <select
            value={sortBy}
            onChange={(event) =>
              setSortBy(
                event.target.value as SortType
              )
            }
            className="min-w-35 appearance-none rounded-md border border-fit-border bg-fit-card py-2 pl-4 pr-10 text-sm font-semibold text-white outline-none hover:border-fit-lime focus:border-fit-lime"
          >
            <option value="duration">
              Duration
            </option>

            <option value="calories">
              Calories
            </option>

            <option value="rating">
              Rating
            </option>
          </select>

          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-fit-muted"
          />
        </div>
      </div>

      {/* Workout List */}
      <div className="mt-6 space-y-4">
        {sortedList.length === 0 ? (
          <EmptyState />
        ) : (
          sortedList.map((workout) => (
            <PlanCard
              key={workout.id}
              workout={workout}
              type={activeTab}
              onRemove={() => {
                if (
                  activeTab === "plan"
                ) {
                  removeFromPlan(
                    workout.id
                  );
                } else {
                  removeFromSaved(
                    workout.id
                  );
                }
              }}
              onDone={
                activeTab === "plan"
                  ? () =>
                      markAsDone(
                        workout.id
                      )
                  : undefined
              }
            />
          ))
        )}
      </div>
    </section>
  );
}

function MetricCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: number;
}) {
  return (
    <div className="rounded-lg border border-fit-border bg-fit-card p-5">
      <div className="flex items-center justify-between">
        <p className="text-xs font-bold uppercase tracking-wider text-fit-muted">
          {title}
        </p>

        <span className="text-fit-lime">
          {icon}
        </span>
      </div>

      <p className="mt-3 text-4xl font-black text-white">
        {value}
      </p>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex min-h-80 flex-col items-center justify-center rounded-lg border border-dashed border-fit-border bg-fit-card p-6 text-center">
      <Dumbbell
        size={42}
        className="text-fit-lime"
      />

      <h2 className="mt-5 text-2xl font-black uppercase text-white">
        NOTHING HERE YET
      </h2>

      <p className="mt-2 max-w-md text-sm leading-6 text-fit-muted">
        Browse the library and add a lift
        to get today moving.
      </p>

      <Link
        href="/"
        className="mt-5 rounded-md bg-fit-lime px-5 py-3 text-xs font-extrabold text-black hover:bg-white"
      >
        Go to workouts
      </Link>
    </div>
  );
}