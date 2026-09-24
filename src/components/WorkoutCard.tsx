import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Star } from "lucide-react";
import type { Workout } from "@/types/workout";

type WorkoutCardProps = {
  workout: Workout;
};

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <Link href={`/workout/${workout.id}`} className="block h-full">
      <div
        className="
          group h-full overflow-hidden rounded-xl
          border border-fit-border
          bg-fit-card
          transition-all duration-300
          hover:border-fit-lime
          hover:shadow-[0_0_20px_rgba(204,255,0,0.12)]
        "
      >
        {/* Workout Image */}
        <div className="relative h-64 w-full overflow-hidden md:h-72">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Card Content */}
        <div className="p-5">
          {/* Muscle Groups */}
          <div className="mb-6 flex flex-wrap gap-3">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-fit-lime px-4 py-2 text-xs font-black uppercase text-black"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Workout Name */}
          <h2 className="text-xl font-black uppercase tracking-tight text-white">
            {workout.name}
          </h2>

          {/* Equipment */}
          <p className="mt-2 text-sm text-fit-muted">
            {workout.equipment}
          </p>

          {/* Divider */}
          <div className="my-6 border-t border-fit-border" />

          {/* Workout Stats */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-fit-muted">
            {/* Duration */}
            <div className="flex items-center gap-2">
              <Clock size={19} className="text-fit-lime" />
              <span>{workout.duration} min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-2">
              <Flame size={19} className="text-fit-lime" />
              <span>{workout.caloriesBurned} kcal</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <Star size={19} className="text-fit-lime" />
              <span>{workout.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}