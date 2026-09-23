"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Check,
  Clock3,
  Flame,
  Star,
  X,
} from "lucide-react";

import type {
  PlanWorkout,
  Workout,
} from "@/types/workout";

interface PlanCardProps {
  workout: Workout | PlanWorkout;
  type: "plan" | "saved";
  onRemove: () => void;
  onDone?: () => void;
}

export default function PlanCard({
  workout,
  type,
  onRemove,
  onDone,
}: PlanCardProps) {
  const done =
    "done" in workout && workout.done;

  return (
    <div
      className={`flex flex-col gap-4 rounded-lg border border-fit-border bg-fit-card p-4 md:flex-row md:items-center ${
        done ? "opacity-60" : ""
      }`}
    >
      {/* Image */}
      <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-md md:h-32 md:w-44">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-xl font-black uppercase text-white">
          {workout.name}
        </h3>

        <p className="mt-1 text-sm text-fit-muted">
          {workout.equipment}
        </p>

        {/* Stats */}
        <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <Clock3
              size={14}
              className="text-fit-lime"
            />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1">
            <Flame
              size={14}
              className="text-fit-lime"
            />
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <Star
              size={14}
              className="text-fit-lime"
            />
            {workout.rating}
          </span>
        </div>

        {/* Buttons */}
        <div className="mt-5 flex flex-wrap gap-2">
          <Link
            href={`/workout/${workout.id}`}
            className="rounded-md border border-fit-border px-4 py-2 text-xs font-bold text-white hover:border-fit-lime"
          >
            View Details
          </Link>

          {type === "plan" &&
            onDone &&
            !done && (
              <button
                type="button"
                onClick={onDone}
                className="flex items-center gap-2 rounded-md bg-fit-lime px-4 py-2 text-xs font-bold text-black hover:bg-white"
              >
                <Check size={15} />
                Mark as Done
              </button>
            )}

          {done && (
            <span className="flex items-center gap-1 px-3 py-2 text-xs font-bold text-fit-lime">
              <Check size={15} />
              Done
            </span>
          )}

          <button
            type="button"
            onClick={onRemove}
            aria-label="Remove workout"
            className="flex items-center justify-center rounded-md border border-red-500/40 px-3 py-2 text-red-400 hover:bg-red-500/10"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}