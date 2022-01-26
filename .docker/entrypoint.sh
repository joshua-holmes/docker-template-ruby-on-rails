#!/bin/bash
set -e

# This file runs just before the Docker container is run each time.

# Remove a potentially pre-existing server.pid for Rails.
rm -f /ror/tmp/pids/server.pid

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"
