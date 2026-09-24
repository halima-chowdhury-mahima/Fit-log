# 🏋️ FitLog — Workout Library & Training Planner

FitLog is a modern, responsive workout management application built with **Next.js, TypeScript, and Tailwind CSS**. It allows users to explore a structured workout library, view detailed exercise information, build a personalized daily workout plan, save exercises for later, and track workout metrics from one clean interface.

The project focuses on responsive UI design, dynamic routing, state management, reusable components, and a smooth user experience across mobile, tablet, and desktop devices.

---

## 🚀 Live Demo

**Live Website:**  
[View FitLog Live](https://fit-log-chi.vercel.app/)

**GitHub Repository:**  
[FitLog Repository](https://github.com/halima-chowdhury-mahima/Fit-log)

---

## Project Overview

FitLog is designed as a simple but practical fitness companion.

Users can browse a collection of workouts, inspect individual exercise details, add workouts to **Today's Plan**, save exercises for later, and manage their selected workouts from the **My Plan** page.

The application also calculates workout statistics such as total exercises, workout duration, and calories based on the user's current plan.

---

## ✨ Key Features

- Browse a complete workout library
- View detailed information for individual workouts
- Dynamic workout details pages
- Add exercises to Today's Plan
- Save workouts for later
- Live Plan and Saved counters in the navbar
- View total exercises, minutes, and calories
- Switch between Today's Plan and Saved workouts
- Mark planned workouts as completed
- Remove workouts from the plan
- Sort workouts by duration, calories, or rating
- Toast notifications for user actions
- Loading states while workout data is being fetched
- Custom 404 page for invalid routes
- Responsive layout for mobile, tablet, and desktop
- Smooth navigation using Next.js App Router
- Persistent workout data using Local Storage

---

## 🛠️ Technologies Used

| Technology | Purpose |
| --- | --- |
| Next.js | Application framework |
| React | Component-based UI |
| TypeScript | Type-safe development |
| Tailwind CSS | Styling and responsive design |
| Next.js App Router | Routing and navigation |
| Lucide React | Icons |
| Local Storage | Persistent plan and saved data |
| Vercel | Deployment |

---

## Main Pages

### Home

The Home page contains the main Hero section and Workout Library.

Users can:

- Browse available workouts
- View workout categories
- Check duration, calories, and ratings
- Navigate to individual workout details
- Sort workouts based on different criteria

---

### Workout Details

Each workout has its own dynamic details page.

The page displays:

- Workout image
- Workout title
- Description
- Categories
- Equipment
- Difficulty
- Sets
- Repetitions
- Duration
- Calories
- Rating
- Step-by-step instructions

Users can also:

- Add the workout to Today's Plan
- Save the workout for later

---

### My Plan

The My Plan page acts as the workout management dashboard.

It includes:

- Today's Plan tab
- Saved tab
- Exercise count
- Total workout minutes
- Total calories
- View Details action
- Mark as Done action
- Remove workout action
- Empty state when no workouts are available

---

## Workout Planning

FitLog dynamically updates the user's workout information when exercises are added or removed.

The dashboard calculates:

```text
Exercises = Total workouts in Today's Plan
Minutes   = Total duration of planned workouts
Calories  = Total estimated calories of planned workouts
