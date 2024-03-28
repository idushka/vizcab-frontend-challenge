## How to Get Started

-   Clone the repository.
-   Start the backend (see README), which will provide you with the API containing the list of buildings.
-   Get started with the Frontend by cloning the repo and installing dependencies:
    ```sh
    git clone https://github.com/idushka/vizcab-frontend-challenge.git
    cd frontend
    npm install
    npm run dev
    ```

## Stack Used

-   Tailwind CSS Framework
-   Vuejs 3 JS Framework
-   Pinia

## Objectives achieved

-   [x] Create a web interface displaying the list of buildings under construction.
-   [x] Clicking on a building in the list will take you to a page that presents its characteristics.
-   [x] Add an input for sorting buildings either by carbon emission per square meter or by building surface.

## What's left to be done due lack of time

-   [ ] Sort by carbon emission per square meter and not only by carbon_emission
-   [ ] Write tests to ensure the reliability of the application.
-   [ ] Add a pagination system to display buildings in batches of 10 on the same page.

## Improve the current implementation

-   [ ] The general layout of the application especially ergonomize HomeView and DetailView into a generic reusable layout component
-   [ ] Show a loader when a http request is in progress.
-   [ ] Rebuild BuildingSortSelect Component to be a completely reusable Select Component
-   [ ] Improve the communication between the BuildingSortSelect Component and the BuildingList Component
-   [ ] Console Warning



