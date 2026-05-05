# Impinj Gen2X REST API Reference

## Endpoint

- Method: PUT
- URL: /cloud/impinjGen2X
- Description: Set Impinj Gen2X configuration
- Command value: set_impinjGen2X

## Request Body Rules

- Content type: application/json
- The request body must include at least one feature object.
- Supported feature objects: fastID, tagProtect, tagFocus, tagQuieting

## Feature Schemas

### FastID

```json
{
  "type": "object",
  "properties": {
    "fastID": {
      "type": "object",
      "description": "Impinj FastID configuration.",
      "properties": {
        "enabled": {
          "type": "boolean",
          "description": "Enable or disable the FastID feature."
        },
        "tidSelector": {
          "type": "string",
          "description": "Optional TID word selector mask.",
          "enum": ["TID[0]", "TID[1]", "TID[2]", "TID[3]"]
        }
      },
      "required": ["enabled"]
    }
  },
  "required": ["fastID"]
}
```

### TagProtect

```json
{
  "type": "object",
  "properties": {
    "tagProtect": {
      "oneOf": [
        {
          "type": "object",
          "title": "Protect or Unprotect Tag",
          "properties": {
            "action": {
              "type": "string",
              "enum": ["enableTagProtection", "disableTagProtection"]
            },
            "password": {
              "type": "string",
              "minLength": 8,
              "maxLength": 8,
              "pattern": "^[0-9A-Fa-f]{8}$"
            },
            "tagID": {
              "type": "string",
              "pattern": "^[0-9A-Fa-f]+$"
            },
            "enableShortRange": {
              "type": "boolean"
            }
          },
          "required": ["action", "password", "tagID"]
        },
        {
          "type": "object",
          "title": "Enable or Disable Protected Tag Reading",
          "properties": {
            "action": {
              "type": "string",
              "enum": ["enableTagVisibility", "disableTagVisibility"]
            },
            "password": {
              "type": "string",
              "minLength": 8,
              "maxLength": 8,
              "pattern": "^[0-9A-Fa-f]{8}$"
            },
            "enableShortRange": {
              "type": "boolean"
            }
          },
          "required": ["action", "password"]
        }
      ]
    }
  },
  "required": ["tagProtect"]
}
```

### TagFocus

```json
{
  "type": "object",
  "properties": {
    "tagFocus": {
      "type": "object",
      "description": "Impinj TagFocus configuration.",
      "properties": {
        "enabled": {
          "type": "boolean",
          "description": "Enable or disable the TagFocus feature."
        }
      },
      "required": ["enabled"]
    }
  },
  "required": ["tagFocus"]
}
```

### TagQuieting

```json
{
  "type": "object",
  "properties": {
    "tagQuieting": {
      "type": "object",
      "description": "Impinj TagQuieting configuration.",
      "properties": {
        "basic": {
          "type": "object",
          "properties": {
            "action": {
              "type": "string",
              "enum": ["quiet", "unquiet"]
            },
            "tagIDs": {
              "type": "array",
              "minItems": 1,
              "items": {
                "type": "string",
                "pattern": "^[0-9A-Fa-f]+$"
              }
            }
          },
          "required": ["action", "tagIDs"]
        }
      },
      "required": ["basic"]
    }
  },
  "required": ["tagQuieting"]
}
```

## Applicable Request Examples

### FastID

```json
{
  "fastID": {
    "enabled": true,
    "tidSelector": "TID[0]"
  }
}
```

### TagProtect (Protect or Unprotect Tag)

```json
{
  "tagProtect": {
    "action": "enableTagProtection",
    "password": "77777777",
    "tagID": "e2801191a5030069073b426d",
    "enableShortRange": true
  }
}
```

### TagProtect (Enable or Disable Protected Tag Reading)

```json
{
  "tagProtect": {
    "action": "enableTagVisibility",
    "password": "77777777"
  }
}
```

### TagFocus

```json
{
  "tagFocus": {
    "enabled": true
  }
}
```

### TagQuieting

```json
{
  "tagQuieting": {
    "basic": {
      "action": "quiet",
      "tagIDs": [
        "e2801191a5030069073b426d"
      ]
    }
  }
}
```
