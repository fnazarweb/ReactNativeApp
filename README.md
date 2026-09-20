# Stats Tracker

A React Native mobile app that displays statistics on Russian military losses (equipment and personnel) in the war against Ukraine, using data from the public [russianwarship.rip](https://russianwarship.rip) API.

## About

The app shows the latest overall loss statistics on the home screen, and a calendar view for browsing losses on a specific date. Built as a learning project to practice React Native fundamentals together with real API integration and state management.

**Status:** early-stage / learning project. Manually tested on Android only (developed on Windows, no access to macOS/Xcode for iOS testing).

## Tech stack

- **React Native** + TypeScript entry point (`App.tsx`)
- **Redux Toolkit** — state management, async thunks for API calls
- **Axios** — fetching statistics from the russianwarship.rip API
