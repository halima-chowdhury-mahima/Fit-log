import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-125 flex-col items-center justify-center gap-3">
      <LoaderCircle
        size={40}
        className="animate-spin text-fit-lime"
      />

      <p className="text-sm text-fit-muted">
        Loading workouts…
      </p>
    </div>
  );
}