import { getWorkouts } from "@/lib/workouts";
import LibraryClient from "@/components/LibraryClient";

export default async function WorkoutLibrary() {
  const workouts = await getWorkouts();

  return (
    <section
      id="library"
      className="mx-auto max-w-295 px-4 py-14 md:px-6 md:py-16"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-black uppercase text-white md:text-4xl">
          THE LIBRARY
        </h2>

        <p className="mt-2 text-sm text-fit-muted">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <LibraryClient workouts={workouts} />
    </section>
  );
}