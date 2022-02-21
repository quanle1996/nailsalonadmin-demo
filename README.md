# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```
npm run build
# or
yarn build
```

# nailsalonadmin-demo

## Install PostgreSQL

WSL (ie. Ubuntu):
Open your WSL terminal (ie. Ubuntu).
Update your Ubuntu packages:
`sudo apt update`

Once the packages have updated, install PostgreSQL (and the -contrib package which has some helpful utilities) with:
`sudo apt install postgresql postgresql-contrib`

Enter the command: `sudo passwd postgres`
You will get a prompt to enter your new password.
Close and reopen your terminal.
To run PostgreSQL with psql shell:
Start your postgres service: `sudo service postgresql start`
