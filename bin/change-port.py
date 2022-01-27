import yaml, sys

fileDir = "../docker-compose.yml"

with open(fileDir, "r") as f:
  yamlData = yaml.safe_load(f)
  
yamlData["services"]["web"]["ports"][0] = sys.argv[1] + ":3000"

with open(fileDir, "w") as f:
  yaml.dump(yamlData, f, sort_keys=False)