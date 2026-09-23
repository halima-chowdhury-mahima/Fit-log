"use client";

import type { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

import { WorkoutProvider } from "@/context/WorkoutContext";

export default function Providers({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <WorkoutProvider>
      {children}

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2500,
        }}
      />
    </WorkoutProvider>
  );
}