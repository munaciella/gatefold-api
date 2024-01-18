Wax Backend

![Wax](https://github.com/munaciella/gatefold-api/assets/122890990/45452ad1-5526-4b5c-8207-c5250825bc3c)

Run Locally
Clone the project

  `git clone https://github.com/munaciella/gatefold-api`

Go to the project directory

  ```cd gatefold-api```

Install dependencies

  ```npm install```

Create two new files .env.test and .env.development to set up the environment variables

```.env.test```
```PGDATABASE=gatefold_api_test```
```# Spotify```
```# Replace the following with your own Spotify API details```
```SPOTIFY_CLIENT_ID=your_spotify_client_id```
```SPOTIFY_CLIENT_SECRET=your_spotify_client_secret```
```SPOTIFY_REFRESH_TOKEN=your_spotify_refresh_token```

```.env.dev```
```PGDATABASE=gatefold_api```
```# Spotify```
```# Replace the following with your own Spotify API details```
```SPOTIFY_CLIENT_ID=your_spotify_client_id```
```SPOTIFY_CLIENT_SECRET=your_spotify_client_secret```
```SPOTIFY_REFRESH_TOKEN=your_spotify_refresh_token```

Setup the database

```npm run setup-db```

Seed the database

```npm run seed-dev```

Run tests

```npm run test```

Features
RESTful API: Handles user authentication, music data, and more.
Postgres Database: Main relational data storage.
AWS Lambda Function.
MongoDB Atlas: Secured database for sensitive user data.
Security Measures: Passwords hashed and salted with Bcrypt.
Jest and Supertest for testing
Frontend Repository
The frontend code for this project can be found in the https://github.com/munaciella/gatefold-frontend.

Authors
[](https://www.linkedin.com/in/jordan-watson-13884aba/)https://www.linkedin.com/in/jordan-watson-13884aba/
https://www.linkedin.com/in/hudaifa-tem/
[
](https://www.linkedin.com/in/ari-abendstern)https://www.linkedin.com/in/ari-abendstern
https://www.linkedin.com/in/francesco-vurchio/
https://www.linkedin.com/in/karo-barari-2a0947293/
https://uk.linkedin.com/in/roshrr
