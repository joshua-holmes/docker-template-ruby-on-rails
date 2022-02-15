## What's In This Folder?

This folder contains scripts that save time when setting up and using Docker to manage and build your app. Each script can be run by running `bin/script-name` from the root directory of this project. Here's what each script does:
* `sudo bin/update-app` is a server-side script and should be run using `sudo` and:
  1. Takes the app offline
  2. Runs `git pull` to get changes and pull them down to your server repo
  3. Takes the app online again
* `bin/dockerize -p <PORT>` is a client-side script and:
  1. Creates a new .env file from the example.env file in `.docker/`
  2. Replaces `ror/config/database.yml` with the default template config file
  3. Changes the port number that the Docker Container runs on, using the -p flag
* `bin/server-setup -u <USERNAME> -p <PASSWORD> -m <MASTER_KEY>` is a server-side script and:
  1. Creates a new .env file and sets the database's username (optional), and password in that file, using the -u and -p flags.
  2. Places the master key in `ror/config/master.key`
* `ruby bin/change-port.rb` is either client-side or server-side, but requires Ruby, and:
  1. Changes the port the Docker Container runs in by editing the `docker-compose.yml` file in project's root directory
* `bin/build-frontend` is either client-side or server-side, but requires npm package manager, and:
  1. Builds the React app using `npm run build`
  2. Replaces the static frontend files in ror/public with the build files that were just created using `npm`
* `.set-db-config.rb` is used in `bin/dockerize`, but is not meant to be run from the terminal. It:
  1. Overwrites `ror/config/database.yml` with `.docker/example.database.yml`
  2. Preserves database names from the original file, so original databases can be used for development, if needed