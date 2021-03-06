const collectionUtil = require("./collectionUtil");

const fs = require("fs");

describe("collection smoke test", ()=> {
    it("makes a new collection", ()=> {
        var col = collectionUtil.newCollection();
        expect(col).not.toBeUndefined();
        //console.log(JSON.stringify(col));
    });

    it("adds item list", ()=> {
        var col = collectionUtil.newCollection();
        col.items.add([
            { name: 'GET Request', request: 'https://postman-echo.com/get?auth=basic' },
            { name: 'PUT Request', request: 'https://postman-echo.com/put?auth=basic' }
        ]);
        expect(col).not.toBeUndefined();
        //console.log(JSON.stringify(col));
    });

    it("add event", ()=> {
        fail();
        var col = collectionUtil.newCollection();
        col.items.add([
            { name: 'GET Request', request: 'https://postman-echo.com/get?auth=basic' },
        ]);
        col.items.one("GET Request").events.add({
            listen: "test",
            script: {
                exec: [`'"pm.test(\\"Generated test: statuscode check(200)\\", function () {\\n    pm.response.to.have.status(200);\\n});"'`]
            }
        });
        expect(col).not.toBeUndefined();
        //console.log(JSON.stringify(col));
    });
});

describe("add event to existing json", ()=> {
    it("add GET sniffet", ()=> {
        var col = {
            "info": {
                "_postman_id": "3f0f4c5b-81d6-4ee5-b3b8-d7810a4ad9db",
                "name": "Swagger Petstore",
                "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
            },
            "item": [
                {
                    "name": "pets",
                    "item": [
                        {
                            "name": "List all pets",
                            "event": [
                                {
                                    "listen": "prerequest",
                                    "script": {
                                        "id": "c3b5102c-31ee-42b9-a07b-0a9978da7a25",
                                        "exec": [
                                            ""
                                        ],
                                        "type": "text/javascript"
                                    }
                                },
                                {
                                    "listen": "test",
                                    "script": {
                                        "id": "5019db7f-1c23-4a6e-bc01-646140badade",
                                        "exec": [
                                            "pm.test(\"Status code is 200\", function () {",
                                            "    pm.response.to.have.status(200);",
                                            "});"
                                        ],
                                        "type": "text/javascript"
                                    }
                                }
                            ],
                            "request": {
                                "auth": {
                                    "type": "noauth"
                                },
                                "method": "GET",
                                "header": [],
                                "url": {
                                    "raw": "{{baseUrl}}/pets?limit=<integer>",
                                    "host": [
                                        "{{baseUrl}}"
                                    ],
                                    "path": [
                                        "pets"
                                    ],
                                    "query": [
                                        {
                                            "key": "limit",
                                            "value": "<integer>",
                                            "description": "How many items to return at one time (max 100)"
                                        }
                                    ]
                                }
                            },
                            "response": [
                                {
                                    "name": "unexpected error",
                                    "originalRequest": {
                                        "method": "GET",
                                        "header": [],
                                        "url": {
                                            "raw": "{{baseUrl}}/pets?limit=<integer>",
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "path": [
                                                "pets"
                                            ],
                                            "query": [
                                                {
                                                    "key": "limit",
                                                    "value": "<integer>"
                                                }
                                            ]
                                        }
                                    },
                                    "status": "Internal Server Error",
                                    "code": 500,
                                    "_postman_previewlanguage": "json",
                                    "header": [
                                        {
                                            "key": "Content-Type",
                                            "value": "application/json"
                                        }
                                    ],
                                    "cookie": [],
                                    "body": "{\n \"code\": \"<integer>\",\n \"message\": \"<string>\"\n}"
                                },
                                {
                                    "name": "A paged array of pets",
                                    "originalRequest": {
                                        "method": "GET",
                                        "header": [],
                                        "url": {
                                            "raw": "{{baseUrl}}/pets?limit=<integer>",
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "path": [
                                                "pets"
                                            ],
                                            "query": [
                                                {
                                                    "key": "limit",
                                                    "value": "<integer>"
                                                }
                                            ]
                                        }
                                    },
                                    "status": "OK",
                                    "code": 200,
                                    "_postman_previewlanguage": "json",
                                    "header": [
                                        {
                                            "key": "x-next",
                                            "value": "<string>",
                                            "description": "A link to the next page of responses"
                                        },
                                        {
                                            "key": "Content-Type",
                                            "value": "application/json"
                                        }
                                    ],
                                    "cookie": [],
                                    "body": "[\n {\n  \"id\": \"<long>\",\n  \"name\": \"<string>\",\n  \"tag\": \"<string>\"\n },\n {\n  \"id\": \"<long>\",\n  \"name\": \"<string>\",\n  \"tag\": \"<string>\"\n }\n]"
                                }
                            ]
                        },
                        {
                            "name": "Info for a specific pet Copy Copy",
                            "event": [
                                {
                                    "listen": "prerequest",
                                    "script": {
                                        "id": "75651834-a517-4b91-9b2d-db6e88d62450",
                                        "exec": [
                                            ""
                                        ],
                                        "type": "text/javascript"
                                    }
                                },
                                {
                                    "listen": "test",
                                    "script": {
                                        "id": "28f7d16c-bf36-4956-becd-6bca345961c3",
                                        "exec": [
                                            "pm.test(\"Status code is 200\", function () {",
                                            "    pm.response.to.have.status(200);",
                                            "});"
                                        ],
                                        "type": "text/javascript"
                                    }
                                }
                            ],
                            "request": {
                                "auth": {
                                    "type": "noauth"
                                },
                                "method": "GET",
                                "header": [],
                                "url": {
                                    "raw": "{{baseUrl}}/pets/:petId",
                                    "host": [
                                        "{{baseUrl}}"
                                    ],
                                    "path": [
                                        "pets",
                                        ":petId"
                                    ],
                                    "variable": [
                                        {
                                            "key": "petId",
                                            "value": "<string>",
                                            "description": "The id of the pet to retrieve"
                                        }
                                    ]
                                }
                            },
                            "response": [
                                {
                                    "name": "Expected response to a valid request",
                                    "originalRequest": {
                                        "method": "GET",
                                        "header": [],
                                        "url": {
                                            "raw": "{{baseUrl}}/pets/<string>",
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "path": [
                                                "pets",
                                                "<string>"
                                            ]
                                        }
                                    },
                                    "status": "OK",
                                    "code": 200,
                                    "_postman_previewlanguage": "json",
                                    "header": [
                                        {
                                            "key": "Content-Type",
                                            "value": "application/json"
                                        }
                                    ],
                                    "cookie": [],
                                    "body": "{\n \"id\": \"<long>\",\n \"name\": \"<string>\",\n \"tag\": \"<string>\"\n}"
                                },
                                {
                                    "name": "unexpected error",
                                    "originalRequest": {
                                        "method": "GET",
                                        "header": [],
                                        "url": {
                                            "raw": "{{baseUrl}}/pets/<string>",
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "path": [
                                                "pets",
                                                "<string>"
                                            ]
                                        }
                                    },
                                    "status": "Internal Server Error",
                                    "code": 500,
                                    "_postman_previewlanguage": "json",
                                    "header": [
                                        {
                                            "key": "Content-Type",
                                            "value": "application/json"
                                        }
                                    ],
                                    "cookie": [],
                                    "body": "{\n \"code\": \"<integer>\",\n \"message\": \"<string>\"\n}"
                                }
                            ]
                        },
                        {
                            "name": "Create a pet",
                            "event": [
                                {
                                    "listen": "prerequest",
                                    "script": {
                                        "id": "e649aaf4-3bf5-419e-9e2f-9bed00f1f4ad",
                                        "exec": [
                                            ""
                                        ],
                                        "type": "text/javascript"
                                    }
                                },
                                {
                                    "listen": "test",
                                    "script": {
                                        "id": "b789ffa5-b793-407b-9a7f-a116c19bb2ef",
                                        "exec": [
                                            "pm.test(\"Status code is 200\", function () {",
                                            "    pm.response.to.have.status(200);",
                                            "});"
                                        ],
                                        "type": "text/javascript"
                                    }
                                }
                            ],
                            "request": {
                                "auth": {
                                    "type": "noauth"
                                },
                                "method": "POST",
                                "header": [],
                                "url": {
                                    "raw": "{{baseUrl}}/pets",
                                    "host": [
                                        "{{baseUrl}}"
                                    ],
                                    "path": [
                                        "pets"
                                    ]
                                }
                            },
                            "response": [
                                {
                                    "name": "unexpected error",
                                    "originalRequest": {
                                        "method": "POST",
                                        "header": [],
                                        "url": {
                                            "raw": "{{baseUrl}}/pets",
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "path": [
                                                "pets"
                                            ]
                                        }
                                    },
                                    "status": "Internal Server Error",
                                    "code": 500,
                                    "_postman_previewlanguage": "json",
                                    "header": [
                                        {
                                            "key": "Content-Type",
                                            "value": "application/json"
                                        }
                                    ],
                                    "cookie": [],
                                    "body": "{\n \"code\": \"<integer>\",\n \"message\": \"<string>\"\n}"
                                },
                                {
                                    "name": "Null response",
                                    "originalRequest": {
                                        "method": "POST",
                                        "header": [],
                                        "url": {
                                            "raw": "{{baseUrl}}/pets",
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "path": [
                                                "pets"
                                            ]
                                        }
                                    },
                                    "status": "Created",
                                    "code": 201,
                                    "_postman_previewlanguage": "text",
                                    "header": [
                                        {
                                            "key": "Content-Type",
                                            "value": "text/plain"
                                        }
                                    ],
                                    "cookie": [],
                                    "body": ""
                                }
                            ]
                        },
                        {
                            "name": "Info for a specific pet",
                            "event": [
                                {
                                    "listen": "prerequest",
                                    "script": {
                                        "id": "c88e4058-6467-4dbc-80e3-93fb07b40de9",
                                        "exec": [
                                            ""
                                        ],
                                        "type": "text/javascript"
                                    }
                                },
                                {
                                    "listen": "test",
                                    "script": {
                                        "id": "aeacd728-2087-4d22-a198-ae27d1b38945",
                                        "exec": [
                                            "pm.test(\"Status code is 200\", function () {",
                                            "    pm.response.to.have.status(200);",
                                            "});"
                                        ],
                                        "type": "text/javascript"
                                    }
                                }
                            ],
                            "request": {
                                "auth": {
                                    "type": "noauth"
                                },
                                "method": "GET",
                                "header": [],
                                "url": {
                                    "raw": "{{baseUrl}}/pets/:petId",
                                    "host": [
                                        "{{baseUrl}}"
                                    ],
                                    "path": [
                                        "pets",
                                        ":petId"
                                    ],
                                    "variable": [
                                        {
                                            "key": "petId",
                                            "value": "<string>",
                                            "description": "The id of the pet to retrieve"
                                        }
                                    ]
                                }
                            },
                            "response": [
                                {
                                    "name": "unexpected error",
                                    "originalRequest": {
                                        "method": "GET",
                                        "header": [],
                                        "url": {
                                            "raw": "{{baseUrl}}/pets/<string>",
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "path": [
                                                "pets",
                                                "<string>"
                                            ]
                                        }
                                    },
                                    "status": "Internal Server Error",
                                    "code": 500,
                                    "_postman_previewlanguage": "json",
                                    "header": [
                                        {
                                            "key": "Content-Type",
                                            "value": "application/json"
                                        }
                                    ],
                                    "cookie": [],
                                    "body": "{\n \"code\": \"<integer>\",\n \"message\": \"<string>\"\n}"
                                },
                                {
                                    "name": "Expected response to a valid request",
                                    "originalRequest": {
                                        "method": "GET",
                                        "header": [],
                                        "url": {
                                            "raw": "{{baseUrl}}/pets/<string>",
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "path": [
                                                "pets",
                                                "<string>"
                                            ]
                                        }
                                    },
                                    "status": "OK",
                                    "code": 200,
                                    "_postman_previewlanguage": "json",
                                    "header": [
                                        {
                                            "key": "Content-Type",
                                            "value": "application/json"
                                        }
                                    ],
                                    "cookie": [],
                                    "body": "{\n \"id\": \"<long>\",\n \"name\": \"<string>\",\n \"tag\": \"<string>\"\n}"
                                }
                            ]
                        },
                        {
                            "name": "Info for a specific pet Copy Copy Copy",
                            "event": [
                                {
                                    "listen": "prerequest",
                                    "script": {
                                        "id": "6065642c-805a-4a89-81f9-0759dc889428",
                                        "exec": [
                                            ""
                                        ],
                                        "type": "text/javascript"
                                    }
                                },
                                {
                                    "listen": "test",
                                    "script": {
                                        "id": "05cb9105-0e92-4da0-bc31-5a9a5165a188",
                                        "exec": [
                                            "pm.test(\"Status code is 200\", function () {",
                                            "    pm.response.to.have.status(200);",
                                            "});"
                                        ],
                                        "type": "text/javascript"
                                    }
                                }
                            ],
                            "request": {
                                "auth": {
                                    "type": "noauth"
                                },
                                "method": "GET",
                                "header": [],
                                "url": {
                                    "raw": "{{baseUrl}}/pets/:petId",
                                    "host": [
                                        "{{baseUrl}}"
                                    ],
                                    "path": [
                                        "pets",
                                        ":petId"
                                    ],
                                    "variable": [
                                        {
                                            "key": "petId",
                                            "value": "<string>",
                                            "description": "The id of the pet to retrieve"
                                        }
                                    ]
                                }
                            },
                            "response": [
                                {
                                    "name": "unexpected error",
                                    "originalRequest": {
                                        "method": "GET",
                                        "header": [],
                                        "url": {
                                            "raw": "{{baseUrl}}/pets/<string>",
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "path": [
                                                "pets",
                                                "<string>"
                                            ]
                                        }
                                    },
                                    "status": "Internal Server Error",
                                    "code": 500,
                                    "_postman_previewlanguage": "json",
                                    "header": [
                                        {
                                            "key": "Content-Type",
                                            "value": "application/json"
                                        }
                                    ],
                                    "cookie": [],
                                    "body": "{\n \"code\": \"<integer>\",\n \"message\": \"<string>\"\n}"
                                },
                                {
                                    "name": "Expected response to a valid request",
                                    "originalRequest": {
                                        "method": "GET",
                                        "header": [],
                                        "url": {
                                            "raw": "{{baseUrl}}/pets/<string>",
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "path": [
                                                "pets",
                                                "<string>"
                                            ]
                                        }
                                    },
                                    "status": "OK",
                                    "code": 200,
                                    "_postman_previewlanguage": "json",
                                    "header": [
                                        {
                                            "key": "Content-Type",
                                            "value": "application/json"
                                        }
                                    ],
                                    "cookie": [],
                                    "body": "{\n \"id\": \"<long>\",\n \"name\": \"<string>\",\n \"tag\": \"<string>\"\n}"
                                }
                            ]
                        },
                        {
                            "name": "Create a pet Copy",
                            "event": [
                                {
                                    "listen": "prerequest",
                                    "script": {
                                        "id": "7e451fb3-6e1a-42b7-b77e-decc55e6f47d",
                                        "exec": [
                                            ""
                                        ],
                                        "type": "text/javascript"
                                    }
                                },
                                {
                                    "listen": "test",
                                    "script": {
                                        "id": "4afa3abe-0d84-4147-b5fe-cc3f01044fcd",
                                        "exec": [
                                            "pm.test(\"Status code is 200\", function () {",
                                            "    pm.response.to.have.status(200);",
                                            "});"
                                        ],
                                        "type": "text/javascript"
                                    }
                                }
                            ],
                            "request": {
                                "auth": {
                                    "type": "noauth"
                                },
                                "method": "POST",
                                "header": [],
                                "url": {
                                    "raw": "{{baseUrl}}/pets",
                                    "host": [
                                        "{{baseUrl}}"
                                    ],
                                    "path": [
                                        "pets"
                                    ]
                                }
                            },
                            "response": [
                                {
                                    "name": "Null response",
                                    "originalRequest": {
                                        "method": "POST",
                                        "header": [],
                                        "url": {
                                            "raw": "{{baseUrl}}/pets",
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "path": [
                                                "pets"
                                            ]
                                        }
                                    },
                                    "status": "Created",
                                    "code": 201,
                                    "_postman_previewlanguage": "text",
                                    "header": [
                                        {
                                            "key": "Content-Type",
                                            "value": "text/plain"
                                        }
                                    ],
                                    "cookie": [],
                                    "body": ""
                                },
                                {
                                    "name": "unexpected error",
                                    "originalRequest": {
                                        "method": "POST",
                                        "header": [],
                                        "url": {
                                            "raw": "{{baseUrl}}/pets",
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "path": [
                                                "pets"
                                            ]
                                        }
                                    },
                                    "status": "Internal Server Error",
                                    "code": 500,
                                    "_postman_previewlanguage": "json",
                                    "header": [
                                        {
                                            "key": "Content-Type",
                                            "value": "application/json"
                                        }
                                    ],
                                    "cookie": [],
                                    "body": "{\n \"code\": \"<integer>\",\n \"message\": \"<string>\"\n}"
                                }
                            ]
                        },
                        {
                            "name": "Info for a specific pet Copy",
                            "event": [
                                {
                                    "listen": "prerequest",
                                    "script": {
                                        "id": "ee9aac4a-8224-44d9-81a3-fbaf99f0ac54",
                                        "exec": [
                                            ""
                                        ],
                                        "type": "text/javascript"
                                    }
                                },
                                {
                                    "listen": "test",
                                    "script": {
                                        "id": "d7b79e04-413c-43db-863f-5c5426c05f9e",
                                        "exec": [
                                            "pm.test(\"Status code is 200\", function () {",
                                            "    pm.response.to.have.status(200);",
                                            "});"
                                        ],
                                        "type": "text/javascript"
                                    }
                                }
                            ],
                            "request": {
                                "auth": {
                                    "type": "noauth"
                                },
                                "method": "GET",
                                "header": [],
                                "url": {
                                    "raw": "{{baseUrl}}/pets/:petId",
                                    "host": [
                                        "{{baseUrl}}"
                                    ],
                                    "path": [
                                        "pets",
                                        ":petId"
                                    ],
                                    "variable": [
                                        {
                                            "key": "petId",
                                            "value": "<string>",
                                            "description": "The id of the pet to retrieve"
                                        }
                                    ]
                                }
                            },
                            "response": [
                                {
                                    "name": "Expected response to a valid request",
                                    "originalRequest": {
                                        "method": "GET",
                                        "header": [],
                                        "url": {
                                            "raw": "{{baseUrl}}/pets/<string>",
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "path": [
                                                "pets",
                                                "<string>"
                                            ]
                                        }
                                    },
                                    "status": "OK",
                                    "code": 200,
                                    "_postman_previewlanguage": "json",
                                    "header": [
                                        {
                                            "key": "Content-Type",
                                            "value": "application/json"
                                        }
                                    ],
                                    "cookie": [],
                                    "body": "{\n \"id\": \"<long>\",\n \"name\": \"<string>\",\n \"tag\": \"<string>\"\n}"
                                },
                                {
                                    "name": "unexpected error",
                                    "originalRequest": {
                                        "method": "GET",
                                        "header": [],
                                        "url": {
                                            "raw": "{{baseUrl}}/pets/<string>",
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "path": [
                                                "pets",
                                                "<string>"
                                            ]
                                        }
                                    },
                                    "status": "Internal Server Error",
                                    "code": 500,
                                    "_postman_previewlanguage": "json",
                                    "header": [
                                        {
                                            "key": "Content-Type",
                                            "value": "application/json"
                                        }
                                    ],
                                    "cookie": [],
                                    "body": "{\n \"code\": \"<integer>\",\n \"message\": \"<string>\"\n}"
                                }
                            ]
                        }
                    ],
                    "protocolProfileBehavior": {}
                }
            ],
            "event": [
                {
                    "listen": "prerequest",
                    "script": {
                        "id": "26ab4be9-8cfa-4e0d-980d-78d5b68419d2",
                        "type": "text/javascript",
                        "exec": [
                            ""
                        ]
                    }
                },
                {
                    "listen": "test",
                    "script": {
                        "id": "5c4a3af4-6e38-406a-98cb-1146ca90dbbd",
                        "type": "text/javascript",
                        "exec": [
                            ""
                        ]
                    }
                }
            ],
            "variable": [
                {
                    "id": "2957d1cb-c3b5-454f-a2ba-707dd708ea99",
                    "key": "baseUrl",
                    "value": "http://localhost:8080/v1",
                    "type": "string"
                }
            ],
            "protocolProfileBehavior": {}
        };
        var statusCode = 200;
        var sniffet = `pm.test("Generated test: statuscode check(${statusCode})", ()=> {pm.response.to.have.status(${statusCode});});`;
        collectionUtil.mapMethodtoSniffet(col, "GET", sniffet);
        
        expect(col).not.toBeUndefined();
        var actuallJson = JSON.parse(JSON.stringify(col));
        
        //GET 1
        expect(actuallJson.item[0].item[0].event[1].script.exec.length).toBe(4);
        expect(actuallJson.item[0].item[0].event[1].script.exec[3]).toStrictEqual(sniffet);
        
        //GET 2
        expect(actuallJson.item[0].item[1].event[1].script.exec.length).toBe(4);
        expect(actuallJson.item[0].item[1].event[1].script.exec[3]).toStrictEqual(sniffet);

        //POST
        expect(actuallJson.item[0].item[2].event[1].script.exec.length).not.toBe(4);
        expect(actuallJson.item[0].item[2].event[1].script.exec[3]).toBeUndefined();
        fs.writeFileSync("collection-appended.json", JSON.stringify(actuallJson));
    });

});