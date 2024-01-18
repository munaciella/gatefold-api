# Wax Backend

## ![Wax](https://github.com/munaciella/gatefold-api/assets/122890990/a86a4f71-040e-4643-b275-4c22afe5ed33)

## Run Locally
Clone the project
  ```sh
  git clone https://github.com/munaciella/gatefold-api
  ```

Go to the project directory
  ```sh
  cd gatefold-api
  ```

Install dependencies
  ```sh
  npm install
  ```

Create two new files .env.test and .env.development to set up the environment variables
  ```sh
  .env.test
  sh
  PGDATABASE=gatefold_api_test
  # Spotify
  # Replace the following with your own Spotify API details
  SPOTIFY_CLIENT_ID=your_spotify_client_id
  SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
  SPOTIFY_REFRESH_TOKEN=your_spotify_refresh_token
  ```
  
  ```sh
  .env.dev
  sh
  PGDATABASE=gatefold_api
  # Spotify
  # Replace the following with your own Spotify API details
  SPOTIFY_CLIENT_ID=your_spotify_client_id
  SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
  SPOTIFY_REFRESH_TOKEN=your_spotify_refresh_token
  ```

Setup the database
  ```sh
  npm run setup-db
  ```

Seed the database
  ```sh
  npm run seed-dev
  ```

Run tests
  ```sh
  npm run test
  ```

## Features:

RESTful API: Handles user authentication, music data, and more.

Postgres Database: Main relational data storage.

AWS Lambda Function.

MongoDB Atlas: Secured database for sensitive user data.

Security Measures: Passwords hashed and salted with Bcrypt.

Jest and Supertest for testing.

## Frontend Repository

The frontend code for this project can be found in the [gatefold-frontend-repository](https://github.com/munaciella/gatefold-frontend)

## Authors

[Jordan Watson](https://www.linkedin.com/in/jordan-watson-13884aba/)

[Hudaifa Temsamani Daoudi](https://www.linkedin.com/in/hudaifa-tem/)

[Ari Abendstern](https://www.linkedin.com/in/ari-abendstern)

[Francesco Vurchio](https://www.linkedin.com/in/francesco-vurchio/)

[Karo Barari](https://www.linkedin.com/in/karo-barari-2a0947293/)

[Roshan Roy](https://uk.linkedin.com/in/roshrr)
