# Docker Template: React on Rails with PostgreSQL

## Introduction 
This project serves as a template that will allow you to toss your React on Rails (Ruby on Rails backend with React fronend) application into a folder, configure a few settings, then quickly have a Docker Compose environment setup. This environment houses a PostgreSQL database Docker Container and a Docker Container for your app, with a network connecting the two. From there, the app can be deployed on a VPS (Virtual Private Server) with almost no environment configuration. Using Docker also makes it easier to manage apps multiple apps running on the same VPS, which makes it very cost-effective when you have more than a few apps deployed.

## Installation Instructions
### _2-second version_

### _2-minute manual version_
1. Copy and paste your React on Rails application inside `ror/` so that `ror/` is the root directory of your RoR app.
2. In `.docker/` copy the `.env.example` file into the same directory and rename it `.env`. You do not need to change any variables here in your local repository, but you will need to configure this file on your server repo.
3. Copy and paste the contents of `.docker/example.database.yml` into `ror/config/database.yml` and replace the contents inside, being careful of any database configurations you have already set for your project (if any).
4. Open `docker-compose.yml` file in this project's root directory and change the first port number only, to specify which port you want your app to run on. For example change it to `"4000:3000"` if you want to run the app on port 4000. Do not change the second number.
5. Open your terminal in the root directory and enter `bin/build-frontend`.
6. You can now upload your app to GitHub and then pull it down onto your server. Once on your server, go to `.docker/` directory in your server project repo and repeat step 2 above. This time, choose a secure password and set the correct variable to your chosen password.
7. Now copy the master key from your local repo in `ror/config/master.key` and paste that key either into `ror/config/master.key` on your server repo, _or_ uncomment the `RAILS_MASTER_KEY` variable in the `.docker/.env`  and paste the key in that line in on your server repo.
8. Your app is dockerized!! You can now run `sudo docker compose up --build -d` to build the image on your server

### _2-hour version_
This is more of an explanation of the steps taken in the other versions and does not really take 2 hours.
1. The `ror/` directory stands for Ruby on Rails or React on Rails. Your React app should then be inside the `client/` folder inside of your ruby app directory.

4. Create a controller called `fallback_controller.rb` in `ror/app/controllers/` and paste this code in:
```
class FallbackController < ActionController::Base
  def index
    render file: 'public/index.html'
  end
end
```
5. Open the routes file, found in `ror/config/routes.rb`, and add this line - `get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }` - to the bottom of the main code block so it looks something like this:
```
Rails.application.routes.draw do
  ...
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
```
