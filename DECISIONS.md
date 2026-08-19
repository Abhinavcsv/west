# Decisions

## 1. Why this approach?

I chose to build the premium home page as an interactive travel-planning experience rather than a traditional static landing page. The main goal was to communicate the product value within the first few seconds while also letting the user experience the product directly.

The homepage uses a strong hero section followed by an interactive trip planner where users can select a destination, duration, budget, and travel vibe. The generated itinerary preview makes the product tangible instead of relying only on marketing copy.

I chose Next.js, React, Tailwind CSS, and Framer Motion because they allowed me to move quickly while keeping the implementation component-based, responsive, and easy to extend. The obvious alternative would have been a simpler static HTML/CSS landing page, but that would have demonstrated less of the actual product experience.

## 2. Trade-off

Under the time constraint, I prioritized the core user journey and visual polish over building a complete backend or production-grade trip generation system.

The planner currently focuses on demonstrating the intended interaction and product experience rather than connecting to live travel APIs or persistent user accounts.

With a real week, I would connect the planner to real destination and travel data, improve itinerary generation, add stronger accessibility testing, and run more extensive responsive/device testing. I would also add analytics to understand which parts of the homepage users interact with most.

## 3. AI usage

I used AI tools during development to help with implementation ideas, debugging, component structure, and exploring UI/interaction approaches.

I personally reviewed, tested, and modified the generated suggestions rather than submitting unverified output. I verified the application behavior locally and through the deployed version, and adjusted the implementation to fit the intended product experience, responsive layout, and visual direction.

The final implementation and design decisions were reviewed by me, and I can explain the structure, interactions, and technical choices used in the project.
