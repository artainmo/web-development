'npm run start' in both frontend and backend to launch.

In this project backend/.env was created to hold the external APIs URL and secret key, but this is not visible on github.

In this project backend/provider/supabase.js was created to connect to the external API supabase which contains our PostgreSQL database.

Inside backend/routes/restaurants.js and backend/routes/starredRestaurants.js, the back-end uses the external API to answer requests from the front-end.
