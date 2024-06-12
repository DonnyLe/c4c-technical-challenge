# C4C Technical Challenge



## Quick Start
- Clone repo and in terminal, `cd c4c-technical-challenge`
- Run `npm run dev` 
- Open `http://localhost:3000`, and **sign up**  (not sign in)  using a Northeastern email. 
- Create a `.env.local` file with 
   `NEXT_PUBLIC_SUPABASE_URL=[INSERT SUPABASE PROJECT URL]`
   `NEXT_PUBLIC_SUPABASE_ANON_KEY=[INSERT SUPABASE PROJECT API ANON KEY]`



For the form (PartnerOrganizationForm.tsx), I used the zod libary for form validation and the form from the Shadcn component library (along with their input/checkbox components). In addition, I used the useFieldArray hook to allow users to input data for multiple partner organizations before submitting. I personally enjoy using these libraries for creating forms since they reduce the number of rerenders (which come when using useState for forms) and handle validation seemlessly (plus they come pre-styled). 

To handle POST requests to supabase, I used a Next.js feature, server actions, to insert data into Supabase. These POST requests include adding new partner organizations and removing partner organizations. 

## Reflection
Overall, this technical challenge went very smoothly besides some hiccups with authentication using Supabase. With the free tier of Supabase, you are only allowed three emails verification per hour which made it very fustrating to test if my authentication worked. As a result, I removed the need for email verification. If I had more time, I most likely would've looked for a better solution for authentication since I don't believe Supabase is the best option for it. In general, I think this technical challenge was great practice with working with Next.js design patterns like server-side rendering. It was also great general web development practice in TailwindCSS and React. 


   ```

`
