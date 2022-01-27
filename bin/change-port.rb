require 'yaml'

# Initialization
port = ARGV[0]
targetFile = "#{__dir__}/../docker-compose.yml"

# Saving YAML file data as a hash
data = YAML.load_file(targetFile)

# Modifying the port number
data["services"]["web"]["ports"][0] = "#{port}:3000"

# Saving hash into YAML file
File.open(targetFile, "w") { |f| f.write(data.to_yaml) }