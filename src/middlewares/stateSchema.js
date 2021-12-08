export const schema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "comments": {
      "type": "object",
      "properties": {
        "list": {
          "type": "array",
          "items": [
            {
              "type": "string"
            }
          ]
        }
      },
      "required": [
        "list"
      ]
    },
    "auth": {
      "type": "object",
      "properties": {
        "loggedIn": {
          "type": "boolean"
        }
      },
      "required": [
        "loggedIn"
      ]
    }
  },
  "required": [
    "comments",
    "auth"
  ]
}
