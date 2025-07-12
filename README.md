# cors-auth-demo

From a tutorial, [How To Authenticate Users and Implement CORS in NodeJS Applications](https://www.freecodecamp.org/news/how-to-authenticate-users-and-implement-cors-in-nodejs-applications/).

## Config

Using `.env.example` as an example, create a `.env` file in your project root, and populate values you want to use for your DB and App startup. The same values are used by Docker-Compose, as the `docker-compose.yml` references the .env file you'll create.

For improved security, consider installing and using [dotenvx](https://dotenvx.com/). This encrypts your `.env` values, so that even if you were good and added environment files to your `.gitignore`, you are still protected from AI tools in your IDE that might leak your secrets, or from misspelling your `.enb` files!

## Testing

Coming soon(TM).

## Running

### 1. Database

Start with `docker-compose up -d`. Fix any errors you find there.

### 2. Application

In the project root, use either `npm` or `yarn` to start.

```shell
$ npm run dev
  #  or
$ yarn dev
```

## Contributing

If you'd like to join in, well, that's strange. This is a personal project; it originated in a tutorial; it doesn't accomplish much; you could build your own thing instead.

### Keep Things Clean

In the `package.json`, there are a couple items you can use to make sure we get along when it comes to code style and such.

```shell
$ yarn prettier # format code according to '@stylistic/es-lint' rules
$ yarn lint # more rules, applied a slightly different way
```

In the future, i'd like to add pre-commit hooks so you can't commit code that doesn't match the style, or has other JS issues. That probably won't happen in this project.

--trs 2025_07_11
