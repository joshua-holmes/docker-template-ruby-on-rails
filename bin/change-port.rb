require 'yaml'

# Initialization
port = ARGV[0]
target_file = "#{__dir__}/../docker-compose.yml"

# Saving YAML file data as a hash
data = YAML.load_file(target_file)

# Modifying the port number
data["services"]["web"]["ports"][0] = "#{port}:3000"

# Saving hash into YAML file
File.write(target_file, data.to_yaml)