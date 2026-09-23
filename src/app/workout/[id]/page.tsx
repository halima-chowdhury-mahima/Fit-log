import Image from "next/image";
import { notFound } from "next/navigation";

import {
  Clock3,
  Flame,
  Star,
} from "lucide-react";

import { getWorkoutById } from "@/lib/workouts";
import WorkoutActions from "@/components/WorkoutActions";

interface WorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function WorkoutDetailsPage({
  params,
}: WorkoutDetailsPageProps) {
  const { id } = await params;

  const workout =
    await getWorkoutById(id);

  if (!workout) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-295 px-4 py-10 md:px-6 md:py-14">
      <div className="grid gap-8 lg:grid-cols-2">

        {/* Left Image */}
        <div className="relative min-h-105 overflow-hidden rounded-xl border border-fit-border bg-fit-card md:min-h-145">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          {/* Tags */}
          <div className="mb-4 flex flex-wrap gap-2">
            {workout.muscleGroups.map(
              (group) => (
                <span
                  key={group}
                  className="rounded-full bg-fit-lime px-3 py-1 text-xs font-extrabold uppercase text-black"
                >
                  {group}
                </span>
              )
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl font-black uppercase leading-tight text-white md:text-5xl">
            {workout.name}
          </h1>

          {/* Description */}
          <p className="mt-4 leading-7 text-fit-muted">
            {workout.description}
          </p>

          {/* Stats */}
          <div className="mt-6 flex flex-wrap gap-5 text-sm text-gray-300">
            <span className="flex items-center gap-2">
              <Clock3
                size={17}
                className="text-fit-lime"
              />

              {workout.duration} min
            </span>

            <span className="flex items-center gap-2">
              <Flame
                size={17}
                className="text-fit-lime"
              />

              {workout.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-2">
              <Star
                size={17}
                className="text-fit-lime"
              />

              {workout.rating}
            </span>
          </div>

          {/* Key Specs */}
          <div className="mt-8 overflow-hidden rounded-lg border border-fit-border bg-fit-card">
            <div className="border-b border-fit-border px-5 py-4">
              <h2 className="text-lg font-black uppercase">
                Key Specs
              </h2>
            </div>

            <SpecRow
              label="EQUIPMENT"
              value={workout.equipment}
            />

            <SpecRow
              label="DIFFICULTY"
              value={workout.difficulty}
            />

            <SpecRow
              label="SETS"
              value={String(workout.sets)}
            />

            <SpecRow
              label="REPS"
              value={workout.reps}
            />

            <SpecRow
              label="DURATION"
              value={`${workout.duration} min`}
            />

            <SpecRow
              label="CALORIES"
              value={`${workout.caloriesBurned} kcal`}
            />

            <SpecRow
              label="RATING"
              value={String(workout.rating)}
              last
            />
          </div>

          {/* Instructions */}
          <div className="mt-8">
            <h2 className="text-xl font-black uppercase text-white">
              Instructions
            </h2>

            <ol className="mt-5 space-y-4">
              {workout.instructions.map(
                (instruction, index) => (
                  <li
                    key={instruction}
                    className="flex gap-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-fit-lime text-sm font-black text-black">
                      {index + 1}
                    </span>

                    <p className="pt-1 text-sm leading-6 text-gray-300">
                      {instruction}
                    </p>
                  </li>
                )
              )}
            </ol>
          </div>

          {/* Working Buttons */}
          <WorkoutActions
            workout={workout}
          />
        </div>
      </div>
    </section>
  );
}

function SpecRow({
  label,
  value,
  last = false,
}: {
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between gap-5 px-5 py-4 ${
        last
          ? ""
          : "border-b border-fit-border"
      }`}
    >
      <span className="text-xs font-bold tracking-wider text-fit-muted">
        {label}
      </span>

      <span className="text-right text-sm font-semibold text-white">
        {value}
      </span>
    </div>
  );
}