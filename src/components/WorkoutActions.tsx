"use client";

import {
  Bookmark,
  Plus,
} from "lucide-react";

import type { Workout } from "@/types/workout";

import { useWorkout } from "@/context/WorkoutContext";

interface WorkoutActionsProps {
  workout: Workout;
}

export default function WorkoutActions({
  workout,
}: WorkoutActionsProps) {
  const {
    todayPlan,
    savedWorkouts,
    addToPlan,
    saveWorkout,
  } = useWorkout();

  const alreadyInPlan = todayPlan.some(
    (item) => item.id === workout.id
  );

  const alreadySaved =
    savedWorkouts.some(
      (item) => item.id === workout.id
    );

  const planFull =
    todayPlan.length >= 5;

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <button
        type="button"
        onClick={() =>
          addToPlan(workout)
        }
        disabled={
          alreadyInPlan || planFull
        }
        className="flex items-center justify-center gap-2 rounded-md bg-fit-lime px-5 py-3 text-sm font-extrabold text-black hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
      >
        <Plus size={18} />

        {alreadyInPlan
          ? "Added to today's plan"
          : planFull
            ? "Today's plan is full"
            : "Add to today's plan"}
      </button>

      <button
        type="button"
        onClick={() =>
          saveWorkout(workout)
        }
        disabled={alreadySaved}
        className="flex items-center justify-center gap-2 rounded-md border border-fit-border bg-fit-card px-5 py-3 text-sm font-extrabold text-white hover:border-fit-lime disabled:cursor-not-allowed disabled:opacity-40"
      >
        <Bookmark size={18} />

        {alreadySaved
          ? "Saved"
          : "Save for later"}
      </button>
    </div>
  );
}