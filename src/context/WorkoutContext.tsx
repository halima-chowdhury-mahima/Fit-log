"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import toast from "react-hot-toast";
import type { PlanWorkout, Workout } from "@/types/workout";

interface WorkoutContextType {
  todayPlan: PlanWorkout[];
  savedWorkouts: Workout[];
  ready: boolean;
  addToPlan: (workout: Workout) => void;
  saveWorkout: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
  markAsDone: (id: number) => void;
}

const WorkoutContext = createContext<WorkoutContextType | undefined>(
  undefined
);

export function WorkoutProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [todayPlan, setTodayPlan] = useState<PlanWorkout[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<Workout[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const storedPlan = localStorage.getItem("todayPlan");
    const storedSaved = localStorage.getItem("savedWorkouts");

    if (storedPlan) {
      setTodayPlan(JSON.parse(storedPlan) as PlanWorkout[]);
    }

    if (storedSaved) {
      setSavedWorkouts(JSON.parse(storedSaved) as Workout[]);
    }

    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;

    localStorage.setItem(
      "todayPlan",
      JSON.stringify(todayPlan)
    );
  }, [todayPlan, ready]);

  useEffect(() => {
    if (!ready) return;

    localStorage.setItem(
      "savedWorkouts",
      JSON.stringify(savedWorkouts)
    );
  }, [savedWorkouts, ready]);

  const addToPlan = (workout: Workout) => {
    const alreadyAdded = todayPlan.some(
      (item) => item.id === workout.id
    );

    if (alreadyAdded) {
      toast.error("Workout already added to today's plan");
      return;
    }

    if (todayPlan.length >= 5) {
      toast.error("You can add maximum 5 workouts");
      return;
    }

    setTodayPlan((previous) => [
      ...previous,
      {
        ...workout,
        done: false,
      },
    ]);

    toast.success("Added to today's plan");
  };

  const saveWorkout = (workout: Workout) => {
    const alreadySaved = savedWorkouts.some(
      (item) => item.id === workout.id
    );

    if (alreadySaved) {
      toast.error("Workout already saved");
      return;
    }

    setSavedWorkouts((previous) => [
      ...previous,
      workout,
    ]);

    toast.success("Workout saved for later");
  };

  const removeFromPlan = (id: number) => {
    setTodayPlan((previous) =>
      previous.filter(
        (workout) => workout.id !== id
      )
    );

    toast.success("Workout removed");
  };

  const removeFromSaved = (id: number) => {
    setSavedWorkouts((previous) =>
      previous.filter(
        (workout) => workout.id !== id
      )
    );

    toast.success("Saved workout removed");
  };

  const markAsDone = (id: number) => {
    setTodayPlan((previous) =>
      previous.map((workout) =>
        workout.id === id
          ? {
              ...workout,
              done: true,
            }
          : workout
      )
    );

    toast.success("Workout marked as done");
  };

  return (
    <WorkoutContext.Provider
      value={{
        todayPlan,
        savedWorkouts,
        ready,
        addToPlan,
        saveWorkout,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
}

export function useWorkout() {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error(
      "useWorkout must be used inside WorkoutProvider"
    );
  }

  return context;
}
