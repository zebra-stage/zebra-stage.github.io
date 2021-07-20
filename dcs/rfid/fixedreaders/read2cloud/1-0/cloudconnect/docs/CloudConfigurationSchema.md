# Cloud Configuration Schema

The beginning of an awesome article...
```json json_schema
{
  "title": "Cloud Agent Configuration",
  "type": "object",
  "x-examples": {
    "Full Cloud Deployment (Initial Implementation)": {
      "control": {
        "commandResponse": {
          "enableLocalRest": false,
          "connections": [
            {
              "type": "mqtt",
              "options": {
                "endpoint": {
                  "hostName": "mqtt.googleapis.com",
                  "port": 443
                },
                "enableSecurity": true,
                "security": {
                  "keyFormat": "PEM",
                  "keyAlgorithm": "RSA256",
                  "CACertificateFileLocation": "/readerconfig/ssl/certs/cloud-trusted-ca-certs.crt",
                  "publicKeyFileLocation": "/readerconfig/ssl/server.crt",
                  "privateKeyFileLocation": "/readerconfig/ssl/server.key"
                },
                "additional": {
                  "keepAlive": 60,
                  "cleanSession": true,
                  "debug": false,
                  "reconnectDelay": 1,
                  "reconnectDelayMax": 1,
                  "qos": 0,
                  "clientId": "projects/es-ds-dataservices-p/locations/us-central1/registries/savanna-device/devices/RFID84248D7F3D81"
                },
                "publishTopic": "/devices/RFID84248D7F3D81/events/command-responses",
                "subscribeTopic": "/devices/RFID84248D7F3D81/commands/#"
              }
            }
          ]
        }
      },
      "data": {
        "event": {
          "connections": [
            {
              "type": "mqtt",
              "options": {
                "endpoint": {
                  "hostName": "mqtt.googleapis.com",
                  "port": 443
                },
                "enableSecurity": true,
                "security": {
                  "keyFormat": "PEM",
                  "keyAlgorithm": "RSA256",
                  "CACertificateFileLocation": "/readerconfig/ssl/certs/cloud-trusted-ca-certs.crt",
                  "publicKeyFileLocation": "/readerconfig/ssl/server.crt",
                  "privateKeyFileLocation": "/readerconfig/ssl/server.key"
                },
                "additional": {
                  "keepAlive": 60,
                  "cleanSession": true,
                  "debug": false,
                  "reconnectDelay": 1,
                  "reconnectDelayMax": 1,
                  "qos": 0,
                  "clientId": "projects/es-ds-dataservices-p/locations/us-central1/registries/savanna-device/devices/RFID84248D7F3D81"
                },
                "publishTopic": "/devices/RFID84248D7F3D81/events/readEvents",
                "subscribeTopic": ""
              }
            }
          ]
        }
      },
      "management": {
        "commandReponse": {
          "enableLocalRest": false,
          "connections": [
            {
              "type": "mqtt",
              "options": {
                "endpoint": {
                  "hostName": "mqtt.googleapis.com",
                  "port": 443
                },
                "enableSecurity": true,
                "security": {
                  "keyFormat": "PEM",
                  "keyAlgorithm": "RSA256",
                  "CACertificateFileLocation": "/readerconfig/ssl/certs/cloud-trusted-ca-certs.crt",
                  "publicKeyFileLocation": "/readerconfig/ssl/server.crt",
                  "privateKeyFileLocation": "/readerconfig/ssl/server.key"
                },
                "additional": {
                  "keepAlive": 60,
                  "cleanSession": true,
                  "debug": false,
                  "reconnectDelay": 1,
                  "reconnectDelayMax": 1,
                  "qos": 0,
                  "clientId": "projects/es-ds-dataservices-p/locations/us-central1/registries/savanna-device/devices/RFID84248D7F3D81"
                },
                "publishTopic": "/devices/RFID84248D7F3D81/events/command-responses",
                "subscribeTopic": "/devices/RFID84248D7F3D81/commands/#"
              }
            }
          ]
        }
      }
    },
    "Full Cloud Deployment with HTTP Post": {
      "control": {
        "commandResponse": {
          "enableLocalRest": false,
          "connections": [
            {
              "type": "mqtt",
              "options": {
                "endpoint": {
                  "hostName": "mqtt.googleapis.com",
                  "port": 443
                },
                "enableSecurity": true,
                "security": {
                  "keyFormat": "PEM",
                  "keyAlgorithm": "RSA256",
                  "CACertificateFileLocation": "/readerconfig/ssl/certs/cloud-trusted-ca-certs.crt",
                  "publicKeyFileLocation": "/readerconfig/ssl/server.crt",
                  "privateKeyFileLocation": "/readerconfig/ssl/server.key"
                },
                "additional": {
                  "keepAlive": 60,
                  "cleanSession": true,
                  "debug": false,
                  "reconnectDelay": 1,
                  "reconnectDelayMax": 1,
                  "qos": 0,
                  "clientId": "projects/es-ds-dataservices-p/locations/us-central1/registries/savanna-device/devices/RFID84248D7F3D81"
                },
                "publishTopic": "/devices/RFID84248D7F3D81/events/command-responses",
                "subscribeTopic": "/devices/RFID84248D7F3D81/commands/#"
              }
            }
          ]
        }
      },
      "data": {
        "event": {
          "connections": [
            {
              "type": "httpPost",
              "options": {
                "URL": "https://webhook.site/ac51accb-1c37-4fa7-a9e0-b1a2a6b4dcf0",
                "security": {
                  "verifyPeer": true,
                  "verifyHost": true,
                  "authenticationType": "BASIC",
                  "authenticationOptions": {
                    "username": "Alford",
                    "password": "Williams"
                  }
                }
              }
            }
          ]
        }
      },
      "management": {
        "commandReponse": {
          "enableLocalRest": false,
          "connections": [
            {
              "type": "mqtt",
              "options": {
                "endpoint": {
                  "hostName": "mqtt.googleapis.com",
                  "port": 443
                },
                "enableSecurity": true,
                "security": {
                  "keyFormat": "PEM",
                  "keyAlgorithm": "RSA256",
                  "CACertificateFileLocation": "/readerconfig/ssl/certs/cloud-trusted-ca-certs.crt",
                  "publicKeyFileLocation": "/readerconfig/ssl/server.crt",
                  "privateKeyFileLocation": "/readerconfig/ssl/server.key"
                },
                "additional": {
                  "keepAlive": 60,
                  "cleanSession": true,
                  "debug": false,
                  "reconnectDelay": 1,
                  "reconnectDelayMax": 1,
                  "qos": 0,
                  "clientId": "projects/es-ds-dataservices-p/locations/us-central1/registries/savanna-device/devices/RFID84248D7F3D81"
                },
                "publishTopic": "/devices/RFID84248D7F3D81/events/command-responses",
                "subscribeTopic": "/devices/RFID84248D7F3D81/commands/#"
              }
            }
          ]
        }
      }
    },
    "UPS": {
      "control": {
        "commandResponse": {
          "enableLocalRest": true
        }
      },
      "data": {
        "event": {
          "connections": [
            {
              "type": "httpPost",
              "options": {
                "URL": "https://192.168.1.1:443",
                "security": {
                  "verifyPeer": true,
                  "verifyHost": true,
                  "authenticationType": "NONE"
                }
              }
            }
          ]
        }
      },
      "management": {
        "commandReponse": {
          "enableLocalRest": false,
          "connections": [
            {
              "type": "mqtt",
              "options": {
                "endpoint": {
                  "hostName": "mqtt.googleapis.com",
                  "port": 443
                },
                "enableSecurity": true,
                "security": {
                  "keyFormat": "PEM",
                  "keyAlgorithm": "RSA256",
                  "CACertificateFileLocation": "/readerconfig/ssl/certs/cloud-trusted-ca-certs.crt",
                  "publicKeyFileLocation": "/readerconfig/ssl/server.crt",
                  "privateKeyFileLocation": "/readerconfig/ssl/server.key"
                },
                "additional": {
                  "keepAlive": 60,
                  "cleanSession": true,
                  "debug": false,
                  "reconnectDelay": 1,
                  "reconnectDelayMax": 1,
                  "qos": 0,
                  "clientId": "projects/es-ds-dataservices-p/locations/us-central1/registries/savanna-device/devices/RFID84248D7F3D81"
                },
                "publishTopic": "/devices/RFID84248D7F3D81/events/command-responses",
                "subscribeTopic": "/devices/RFID84248D7F3D81/commands/#"
              }
            }
          ]
        }
      }
    },
    "Hybrid Deployment 2": {
      "control": {
        "commandResponse": {
          "enableLocalRest": false,
          "connections": [
            {
              "type": "mqtt",
              "options": {
                "endpoint": {
                  "hostName": "mqtt.googleapis.com",
                  "port": 443
                },
                "enableSecurity": true,
                "security": {
                  "keyFormat": "PEM",
                  "keyAlgorithm": "RSA256",
                  "CACertificateFileLocation": "/readerconfig/ssl/certs/cloud-trusted-ca-certs.crt",
                  "publicKeyFileLocation": "/readerconfig/ssl/server.crt",
                  "privateKeyFileLocation": "/readerconfig/ssl/server.key"
                },
                "additional": {
                  "keepAlive": 60,
                  "cleanSession": true,
                  "debug": false,
                  "reconnectDelay": 1,
                  "reconnectDelayMax": 1,
                  "qos": 0,
                  "clientId": "projects/es-ds-dataservices-p/locations/us-central1/registries/savanna-device/devices/RFID84248D7F3D81"
                },
                "publishTopic": "/devices/RFID84248D7F3D81/events/command-responses",
                "subscribeTopic": "/devices/RFID84248D7F3D81/commands/#"
              }
            }
          ]
        }
      },
      "data": {
        "event": {
          "connections": [
            {
              "type": "mqtt",
              "options": {
                "endpoint": {
                  "hostName": "mqtt.googleapis.com",
                  "port": 443
                },
                "enableSecurity": true,
                "security": {
                  "keyFormat": "PEM",
                  "keyAlgorithm": "RSA256",
                  "CACertificateFileLocation": "/readerconfig/ssl/certs/cloud-trusted-ca-certs.crt",
                  "publicKeyFileLocation": "/readerconfig/ssl/server.crt",
                  "privateKeyFileLocation": "/readerconfig/ssl/server.key"
                },
                "additional": {
                  "keepAlive": 60,
                  "cleanSession": true,
                  "debug": false,
                  "reconnectDelay": 1,
                  "reconnectDelayMax": 1,
                  "qos": 0,
                  "clientId": "projects/es-ds-dataservices-p/locations/us-central1/registries/savanna-device/devices/RFID84248D7F3D81"
                },
                "publishTopic": "/devices/RFID84248D7F3D81/events/readEvents",
                "subscribeTopic": ""
              }
            }
          ]
        }
      },
      "management": {
        "commandReponse": {
          "enableLocalRest": true
        }
      }
    },
    "On Premise Deployment": {
      "control": {
        "commandResponse": {
          "enableLocalRest": true
        }
      },
      "data": {
        "event": {
          "connections": [
            {
              "type": "httpPost",
              "options": {
                "URL": "https://192.168.1.1:443",
                "security": {
                  "verifyPeer": true,
                  "verifyHost": true,
                  "authenticationType": "NONE"
                }
              }
            }
          ]
        }
      },
      "management": {
        "commandReponse": {
          "enableLocalRest": true
        }
      }
    }
  },
  "description": "High Level R2C Configuration",
  "properties": {
    "data": {
      "type": "object",
      "description": "Configuration of the Data Plane",
      "required": [
        "event"
      ],
      "properties": {
        "event": {
          "title": "Event",
          "type": "object",
          "description": "Configuration of Event Channel",
          "properties": {
            "connections": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "string",
                    "enum": [
                      "mqtt",
                      "httpPost"
                    ],
                    "description": "Type of Channel"
                  },
                  "options": {
                    "anyOf": [
                      {
                        "$ref": "#/properties/control/properties/commandResponse/properties/connections/items/properties/options"
                      },
                      {
                        "title": "HTTP Post",
                        "type": "object",
                        "description": "Configuration of HTTP Post",
                        "properties": {
                          "URL": {
                            "type": "string",
                            "format": "uri",
                            "description": "Destination URL to Post messages"
                          },
                          "security": {
                            "title": "HTTP Post Security",
                            "type": "object",
                            "description": "Configuration of HTTP Post Security",
                            "properties": {
                              "verifyPeer": {
                                "type": "boolean",
                                "description": "Enables or Disabled verifying that the server cert is for the server to which the message is being posted"
                              },
                              "verifyHost": {
                                "type": "boolean",
                                "description": "Enable or Disable verifiying that host name in the certificate is valid for the host name to which messages are being posted"
                              },
                              "authenticationType": {
                                "type": "string",
                                "enum": [
                                  "NONE",
                                  "BASIC",
                                  "TLS-Client"
                                ],
                                "description": "Type of Authentication to use when posting message"
                              },
                              "authenticationOptions": {
                                "oneOf": [
                                  {
                                    "$ref": "#/properties/control/properties/commandResponse/properties/connections/items/properties/options/properties/basicAuthentication"
                                  },
                                  {
                                    "title": "httpPostTLSClientAuthentication",
                                    "type": "object",
                                    "properties": {
                                      "publicKeyFileLocation": {
                                        "type": "string",
                                        "description": "Path and file name of the Public Key"
                                      },
                                      "privateKeyFileLocation": {
                                        "type": "string",
                                        "description": "Path and file name of the Private Key"
                                      }
                                    },
                                    "required": [
                                      "publicKeyFileLocation",
                                      "privateKeyFileLocation"
                                    ]
                                  }
                                ],
                                "description": "Configuration of the Authentication Options"
                              },
                              "CACertificateFileLocation": {
                                "type": "string",
                                "description": "Path and file name of the CA Certificate"
                              }
                            },
                            "required": [
                              "verifyPeer",
                              "verifyHost",
                              "authenticationType"
                            ]
                          }
                        },
                        "required": [
                          "URL",
                          "security"
                        ]
                      }
                    ],
                    "description": "Options for the chosen type"
                  }
                }
              }
            }
          }
        },
        "retention": {
          "type": "object",
          "description": "configure data queueing",
          "properties": {
            "throttle": {
              "type": "integer",
              "default": 500,
              "description": "Rate (in events per second) to report data events when network is reconnected"
            },
            "maxNumEvents": {
              "type": "integer",
              "default": 150000,
              "description": "Maximum number of events to retain"
            },
            "maxEventRetentionTimeInMin": {
              "type": "integer",
              "description": "Maximum event retention time (in minutes)",
              "default": 0
            }
          }
        },
        "batching": {
          "type": "object",
          "description": "Data batching configuration",
          "properties": {
            "reportingInterval": {
              "type": "number",
              "description": "Event Report interval in milli seconds"
            },
            "maxPayloadSizePerReport": {
              "type": "number",
              "description": "Maximum payload size in bytes"
            }
          }
        }
      }
    },
    "management": {
      "type": "object",
      "description": "Configuration of the Management Plane",
      "properties": {
        "event": {
          "$ref": "#/properties/data/properties/event"
        },
        "commandResponse": {
          "$ref": "#/properties/control/properties/commandResponse"
        }
      }
    },
    "control": {
      "type": "object",
      "description": "Configuration of the Control Plane",
      "properties": {
        "commandResponse": {
          "title": "Command/Responses",
          "type": "object",
          "description": "Configuration of the Command/Reponse Channel",
          "properties": {
            "enableLocalRest": {
              "type": "boolean",
              "description": "Enables or Disables the Local REST Interface"
            },
            "connections": {
              "type": "array",
              "description": "Configuration of the Command/Response Channels",
              "items": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "string",
                    "description": "Type of Channel",
                    "enum": [
                      "mqtt",
                      "mqtt-GCP"
                    ]
                  },
                  "options": {
                    "title": "MQTT",
                    "type": "object",
                    "x-tags": [
                      "mqtt"
                    ],
                    "description": "Configuration of MQTT",
                    "properties": {
                      "endpoint": {
                        "title": "MQTT Endpoint",
                        "x-tags": [
                          "mqtt"
                        ],
                        "description": "Configuration of MQTT Endpoint",
                        "oneOf": [
                          {
                            "type": "object",
                            "properties": {
                              "hostName": {
                                "type": "string",
                                "description": "Host name of the MQTT Connection"
                              },
                              "port": {
                                "type": "integer",
                                "description": "Port Number of the MQTT Connection"
                              },
                              "protocol": {
                                "type": "string",
                                "description": "type of protocol to be used. If not provided tcp or ssl determined from enableSecurity flag.",
                                "enum": [
                                  "tcp",
                                  "ssl",
                                  "ws",
                                  "wss"
                                ]
                              }
                            },
                            "required": [
                              "hostName",
                              "port"
                            ]
                          },
                          {
                            "type": "string",
                            "description": "\"tcp://host:port\"  - TCP (unsecure)\n\"ssl://host:port\"  - SSL/TLS\n\"ws://host:port\"   - Unsecure websockets\n\"wss://host:port\"  - Secure websockets",
                            "example": "tcp://10.17.231.76:1883"
                          }
                        ]
                      },
                      "security": {
                        "title": "MQTT Security",
                        "type": "object",
                        "description": "Configuration of MQTT Security",
                        "properties": {
                          "keyFormat": {
                            "type": "string",
                            "enum": [
                              "PEM"
                            ],
                            "description": "Format for the CA Certificate and Public and Private Keys"
                          },
                          "keyAlgorithm": {
                            "type": "string",
                            "description": "Algorithm used for the CA Certificate and Public and Private Keys",
                            "enum": [
                              "RSA256"
                            ]
                          },
                          "CACertificateFileLocation": {
                            "type": "string",
                            "description": "Path and file name of the CA Certificate"
                          },
                          "publicKeyFileLocation": {
                            "type": "string",
                            "description": "Path and file name of the Public Key"
                          },
                          "privateKeyFileLocation": {
                            "type": "string",
                            "description": "Path and file name of the Private Key"
                          },
                          "verifyHostName": {
                            "type": "boolean",
                            "description": "check that the server certificate hostname matches the remote. Using this option means that you cannot be sure that the remote host is the server you wish to connect to and so is insecure."
                          }
                        },
                        "required": [
                          "keyFormat",
                          "keyAlgorithm",
                          "CACertificateFileLocation",
                          "publicKeyFileLocation",
                          "privateKeyFileLocation",
                          "verifyHostName"
                        ]
                      },
                      "additional": {
                        "title": "MQTT Additional Options",
                        "type": "object",
                        "x-tags": [
                          "mqtt"
                        ],
                        "description": "Configuration of Additional MQTT Options",
                        "properties": {
                          "keepAlive": {
                            "type": "integer",
                            "description": "The duration (in seconds) to buffer messages when the connection to MQTT is lost"
                          },
                          "cleanSession": {
                            "type": "boolean",
                            "description": "Enables or Disables cleaning session of connection to MQTT"
                          },
                          "debug": {
                            "type": "boolean",
                            "description": "Enables or Disables logging of MQTT Debug messages"
                          },
                          "reconnectDelay": {
                            "type": "integer",
                            "description": "The period to attempt reconnection when MQTT connection is lost (in seconds)"
                          },
                          "reconnectDelayMax": {
                            "type": "integer",
                            "description": "Maximum amount of time (in seconds) to attempt to reconnect after MQTT connection is lost (0 indicates continuing to try \"forever\")"
                          },
                          "clientId": {
                            "type": "string",
                            "description": "Identifier for the MQTT client"
                          },
                          "qos": {
                            "type": "integer",
                            "minimum": 0,
                            "maximum": 2,
                            "description": "Sets the Quality of Service for the MQTT Connection"
                          }
                        },
                        "required": [
                          "keepAlive",
                          "cleanSession",
                          "debug",
                          "reconnectDelay",
                          "reconnectDelayMax",
                          "clientId",
                          "qos"
                        ]
                      },
                      "publishTopic": {
                        "type": "array",
                        "description": "Topic to which to publish messages",
                        "minItems": 1,
                        "items": {
                          "type": "string"
                        }
                      },
                      "subscribeTopic": {
                        "type": "array",
                        "description": "Topic to which to subscribe for messages",
                        "minItems": 0,
                        "items": {
                          "type": "string"
                        }
                      },
                      "enableSecurity": {
                        "type": "boolean",
                        "description": "Enable or Disable Security for MQTT connection"
                      },
                      "basicAuthentication": {
                        "title": "Basic Authentication for external server connections",
                        "type": "object",
                        "description": "Configuration of Basic Authentication",
                        "properties": {
                          "username": {
                            "type": "string",
                            "description": "Basic Authentication Username"
                          },
                          "password": {
                            "type": "string",
                            "description": "Basic Authentication Password"
                          }
                        },
                        "required": [
                          "username",
                          "password"
                        ]
                      }
                    },
                    "required": [
                      "additional",
                      "publishTopic",
                      "enableSecurity"
                    ]
                  }
                },
                "required": [
                  "type"
                ]
              }
            }
          },
          "required": [
            "enableLocalRest"
          ]
        }
      }
    }
  },
  "required": [
    "data",
    "management",
    "control"
  ]
}
```
