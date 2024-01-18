Wax Backend
Logo

Run Locally
Clone the project

  git clone https://github.com/royr5/gatefold-api.git
Go to the project directory

  cd gatefold-api
Install dependencies

  npm install
Create two new files .env.test and .env.development to set up the environment variables

.env.test
PGDATABASE=gatefold_api_test
# Spotify
# Replace the following with your own Spotify API details
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
SPOTIFY_REFRESH_TOKEN=your_spotify_refresh_token
.env.dev
PGDATABASE=gatefold_api
# Spotify
# Replace the following with your own Spotify API details
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
SPOTIFY_REFRESH_TOKEN=your_spotify_refresh_token
Setup the database

npm run setup-db
Seed the database

npm run seed-dev
Run tests

npm run test
Features
RESTful API: Handles user authentication, music data, and more.
Postgres Database: Main relational data storage.
AWS Lambda Function .
MongoDB Atlas: Secured database for sensitive user data.
Security Measures: Passwords hashed and salted with Bcrypt.
Jest and Supertest for testing
Frontend Repository
The frontend code for this project can be found in the gatefold-frontend repository.

Authors
Jordan Watson
Hudaifa Temsamani Daoudi
Ari Abendstern
Francesco Vurchio
Karo Barari
Roshan Roy
