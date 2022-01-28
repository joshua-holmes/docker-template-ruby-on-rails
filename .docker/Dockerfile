FROM ruby:2.7.4-alpine

# Install necessary dependencies
RUN apk update && apk upgrade
RUN apk add --no-cache build-base postgresql-dev postgresql-client bash tzdata npm

# Prepare working directory.
WORKDIR /ror
COPY ./ror .
# The 'build-frontend' script looks in a folder called 'ror', so it must be
# placed one folder up from /ror
COPY ./bin/build-frontend ..
RUN ../build-frontend
RUN gem install bundler:2.3.4
RUN bundle install
RUN bundle add tzinfo-data
RUN bundle add tzinfo

# Clean up
RUN rm -fr ./client

# Prepare run file
COPY ./.docker/run-app /usr/bin/
RUN chmod +x /usr/bin/run-app

# Prepare entrypoint file
COPY ./.docker/entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

# This is the command that starts the container
CMD ["run-app"]