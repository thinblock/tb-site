export const codeString = `curl --location --request POST "http://jobs.service.thinblock.io/jobs" \
"trigger": {
  "id": "5b87c976fda2f82592e303e0",
  "conditions": [
    {
      "when": "current_value",
      "operation": "$gt",
      "argument": {
        "type\": \"number\",
        "valu\": \"2\"
      }
    }
  ]
}`
