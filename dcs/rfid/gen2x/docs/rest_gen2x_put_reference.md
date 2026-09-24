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
              "pattern": "^([0-9A-Fa-f]{24})+$"
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

Provide exactly one of `basic` or `advanced`.

```json
{
  "type": "object",
  "properties": {
    "tagQuieting": {
      "type": "object",
      "description": "Impinj TagQuieting configuration. Provide exactly one of basic or advanced.",
      "oneOf": [
        { "required": ["basic"] },
        { "required": ["advanced"] }
      ],
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
        },
        "advanced": {
          "type": "object",
          "required": ["tagQuietMasks", "target", "stateAwareAction"],
          "properties": {
            "preSelect": { "type": "array", "maxItems": 31 },
            "tagQuietMasks": { "type": "array", "minItems": 1, "maxItems": 3 },
            "target": { "type": "string", "enum": ["SL", "S0", "S1", "S2", "S3"] },
            "stateAwareAction": { "type": "string" }
          }
        }
      }
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
    "enabled": true
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

### TagQuieting (Basic)

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

### TagQuieting (Advanced)

```json
{
  "tagQuieting": {
    "advanced": {
      "preSelect": [
        {
          "target": "SL",
          "action": "ASSERTSL_NOTHING",
          "mask": {
            "bank": "EPC",
            "pointer": 32,
            "length": 96,
            "value": "E280123456789012345678AB"
          }
        },
        {
          "target": "S2",
          "action": "INVB_INVA",
          "mask": {
            "bank": "EPC",
            "pointer": 32,
            "length": 96,
            "value": "E280AABBCCDDEEFF11223344"
          }
        }
      ],
      "tagQuietMasks": ["SL_ASSERT", "S2B"],
      "target": "SL",
      "stateAwareAction": "ASSERTSL_DEASSERTSL"
    }
  }
}
```
