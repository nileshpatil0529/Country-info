# Angular Country Information App

This is a simple Angular application that allows users to explore and display information about countries in different regions. The application uses Angular, TypeScript, Observables, and NGRX for state management.

## Prerequisites
  - Node Version 16.0
  - Angular Version 16.1.0
  - RXJS Version 6.0

## Installation

Clone this repository to your local machine.
Navigate to the project directory: cd angular-country-info-app.
Install dependencies: `npm install`.

## Usage

Start the development server: `ng serve`.
Open your web browser and navigate to http://localhost:4200.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Application Overview

Components
1. a) Regions Dropdown
This component displays a dropdown list of available regions (Europe and Asia) for the user to select.

   b) Countries Dropdown
This component displays a dropdown list of countries based on the selected region. The list is populated using data from the API.

2. Country Details Table
This component displays detailed information about the selected country, including its name, capital, population, currencies, and flag.

## NGRX State Management

The application uses NGRX for state management. The following components are implemented:

- State: The application has a single state that contains the selected region and the list of countries for each region.

- Reducers: Reducers handle state transitions based on dispatched actions. They update the state immutably.

- Actions: Actions are dispatched to trigger state changes. In this app, actions are used to fetch region-specific country data and update the state accordingly.

- Selectors: Selectors are used to efficiently retrieve data from the state. They encapsulate the logic for deriving specific pieces of information from the state.

- Effects: Effects handle asynchronous operations such as API requests. In this app, effects fetch country data based on the selected region and update the state.

## Coding Style and Standards

Code follows the Angular Style Guide and TypeScript best practices.
Variable and function names are descriptive and follow camelCase convention.
HTML and CSS classes follow kebab-case naming convention.
Comments are added to clarify complex logic or important concepts.
