export const codeString = `curl --location --request POST "http://api.service.thinblock.io/jobs" \
"trigger": {
  "id": "5b87c976fda2f82592e303e0",
  "conditions": [
    {
      "when": "current_value",
      "operation": "$gt",
      "argument": {
        "type\": \"number\",
        "value\": \"2\"
      }
    }
  ]
}
[...]`


export const codeString2 = `curl --location --request POST "http://api.service.thinblock.io/jobs" \
"trigger": {
  "id": "5b87c976fda2f82592e303e0",
  [...]
  \"actions\": [{
		\"action\": \"5b87c6aaba7bb43cb33a72cd\"
	}],
	\"notification\": {
		\"type\": \"WEBHOOK\",
		\"value\": \"http://jobs.service.thinblock.io/test\"
	}
}`


export const codeString3 = `curl --location --request POST "http://api.service.thinblock.io/jobs" \
"trigger": {
  "id": "5b87c976fda2f82592e303e0",
  [...]
  \"actions\": [{
		\"action\": \"5b87c6aaba7bb43cb33a72cd\"
	}],
	\"notification\": {
		\"type\": \"WEBHOOK\",
		\"value\": \"http://jobs.service.thinblock.io/test\"
	}
}`

