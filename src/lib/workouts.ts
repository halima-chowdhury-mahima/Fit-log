import type { Workout } from "@/types/workout";

const API_URL =
  "https://api.abcz.workers.dev/api/fitlog";

export async function getWorkouts(): Promise<Workout[]> {
  const response = await fetch(API_URL, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const data: Workout[] = await response.json();

  return data;
}

export async function getWorkoutById(
  id: string
): Promise<Workout | null> {
  try {
    const response = await fetch(
      `${API_URL}/${id}`,
      {
        cache: "no-store",
      }
    );

    if (response.ok) {
      const data = await response.json();

      if (data && !data.error) {
        return data as Workout;
      }
    }
  } catch {
    // If single workout API fails,
    // we will find it from all workouts.
  }

  const workouts = await getWorkouts();

  const workout = workouts.find(
    (item) => item.id === Number(id)
  );

  return workout ?? null;
}