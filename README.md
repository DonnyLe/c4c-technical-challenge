# C4C Technical Challenge



## Quick Start
- Clone repo and in terminal, `cd c4c-technical-challenge`
- Run `npm install` 
- Run `npm run dev` 
- Open `http://localhost:3000`, and **sign up**  (not sign in)using a Northeastern email. 

## Design Overview 
The web-app is built with Next.js and Supabase using Tailwind CSS and Shadcn for components/styling. Supabase is used for both authorization and storing data. The Postgres database in Supabase simply has one table for storing information for each inputted partner organization. 

In the frontend, the web app contains a dashboard page (which contains a form) and a login screen. The dashboard page utilizes both server-side rendering and server-side data fetching, along with Next.js caching features. By doing this, when the user opens the dashboard, the page loads with everything rendered (except the images which use client-side fetching to get the images from the links). In addition, I cache all data fetched to reduce the refetches when refreshing the page. The only time data is revalidated (refetched) is after submitting new partner organizations from the form. 

For the form (PartnerOrganizationForm.tsx), I used the zod libary for client-side validation and the form from the Shadcn component library (along with their input/checkbox components). In addition, I used the useFieldArray hook to allow users to input data for multiple partner organizations before submitting. I personally enjoy using these libraries for creating forms since they reduce the number of rerenders (which come when using useState for forms) and handle validation seemlessly (plus they come pre-styled). 

To handle POST requests to supabase, I used a Next.js feature, server actions, to insert data into Supabase. These post requests include adding new partner organizations and removing partner organizations. 

## Reflection
Overall, this technical challenge went very smoothly besides some hiccups with authentication using Supabase. With the free tier of Supabase, you are only allowed three emails verification per hour which made it very fustrating to test if my authentication worked. As a result, I removed the need for email verification. If I had more time, I most likely would've looked for a better solution for authentication since I don't believe Supabase is the best option for it. I think this technical challenge was great practice with working with Next.js design patterns like server-side rendering. It was also great general web development practice in CSS and React. 

## Bonus Features
- Authorization (only Northeastern emails work with login)
- Data persists (in Supabase database)
- Adding multiple organizations at the same time (meaning you don't have to submit organizations one by one)

