# Chronos

Chronos is a time management application that combines a calendar, a task tracker, and a reminder system in a single, unified interface. It lets you plan your time across multiple views and manage three distinct types of events depending on what you're trying to organize.

🔗 **Live demo:** [https://xopsreyli.github.io/chronos-app/]

![Chronos preview](add-your-screenshot-path-here.png)

## Overview

Most calendar apps treat everything as the same kind of "event," and most to-do apps have no real sense of time. Chronos sits in between: it's built around the idea that not everything on your schedule is the same kind of thing.

- **Arrangements** — events that involve other people or a fixed time and place (meetings, calls, appointments)
- **Tasks** — things you need to get done, optionally with a deadline, that can be marked complete
- **Reminders** — lightweight, time-based nudges that don't need full event details

These three types are managed in one cohesive app with five different views to match however you like to plan: Upcoming, Day, Week, Month, and Year.

## Features

- Multiple calendar views: Upcoming, Day, Week, Month, Year
- Three distinct event types — Arrangements, Tasks, and Reminders — each with its own behavior and fields
- Fast, validated forms for creating and editing events
- Clean, responsive UI built with Material UI

## Tech Stack

**Frontend**
- React + Vite + TypeScript
- Material UI for components and styling
- Zustand for client-side state management
- nuqs for syncing state to the URL
- React Hook Form + Zod for form handling and validation
- React Router for routing
- Day.js for date and time handling

[**Backend**](https://github.com/xopsreyli/chronos-api)
- Express.js
- Prisma ORM
- PostgreSQL
