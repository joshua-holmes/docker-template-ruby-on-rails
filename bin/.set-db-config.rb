require 'pry'
require 'yaml'

# This program replaces the ror/config/database.yml file with the example file
# located in .docker/example.database.yml. It includes a special feature that
# preserves the name of the development, test, and production databases, so
# existing data in those databases can still be accessed in the app without
# additional configuration during development.

# Initialization
example_file = "#{__dir__}/../.docker/example.database.yml"
target_file = "#{__dir__}/../ror/config/database.yml"

# Saving example file as YAML
target_YAML = YAML.load_file(target_file)

# Getting existing database names
dev_DB = target_YAML["development"]["database"]
test_DB = target_YAML["test"]["database"]
prod_DB = target_YAML["production"]["database"]
raise "Could not find development database name in ror/config/database.yml" unless dev_DB
raise "Could not find test database name in ror/config/database.yml" unless test_DB
raise "Could not find production database name in ror/config/database.yml" unless prod_DB

# Saving target file data as string
example_string = File.read(example_file)
example_array = example_string.split("\n")

# Saving existing database names to new database config
example_array[20]["psql_development"] = dev_DB
example_array[24]["psql_test"] = test_DB
example_array[28]["psql_production"] = prod_DB

# Joining array with new lines (\n) and converting to YAML
new_data = example_array.join("\n")

# Overwriting ror/config/database.yml
File.write(target_file, new_data)