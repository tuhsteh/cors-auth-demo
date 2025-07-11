# cors-auth-demo

From a tutorial, [How To Authenticate Users and Implement CORS in NodeJS Applications](https://www.freecodecamp.org/news/how-to-authenticate-users-and-implement-cors-in-nodejs-applications/).

## Config

Using `.env.example` as an example, create a `.env` file in your project root, and populate values you want to use for your DB and App startup. The same values are used by Docker-Compose, as the `docker-compose.yml` references the .env file you'll create.

For improved security, consider installing and using [dotenvx](https://dotenvx.com/). This encrypts your `.env` values, so that even if you were good and added environment files to your `.gitignore`, you are still protected from AI tools in your IDE that might leak your secrets, or misspelling your `.enb` files!

## Testing

Coming soon(TM).

### Running

#### 1. Database

Start with `docker-compose up -d`. Fix any errors you find there.

#### 2. Application

In the project root, use either `npm` or `yarn` to start.

```shell
$ npm run dev
  #  or
$ yarn dev
```
