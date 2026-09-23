import Image from "next/image";
import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";

import { Workout } from "@/types/workout";

interface WorkoutCardProps {
  workout: Workout;
}

export default function WorkoutCard({
  workout,
}: WorkoutCardProps) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group overflow-hidden rounded-lg border border-fit-border bg-fit-card"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Tags */}
        <div className="mb-3 flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full bg-fit-lime px-2 py-1 text-[10px] font-extrabold uppercase text-black"
            >
              {group}
            </span>
          ))}
        </div>

        {/* Name */}
        <h3 className="text-lg font-black uppercase text-white">
          {workout.name}
        </h3>

        {/* Equipment */}
        <p className="mt-1 text-xs text-fit-muted">
          {workout.equipment}
        </p>

        {/* Stats */}
        <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-fit-border pt-3 text-xs text-gray-400">
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
      </div>
    </Link>
  );
}