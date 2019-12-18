/**
 * Creates sniffets
 * 
    "script": {
        "id": "5019db7f-1c23-4a6e-bc01-646140badade",
        "exec": [
            "pm.test(\"Status code is 200\", function () {",
            "    pm.response.to.have.status(200);",
            "});"
        ],
        "type": "text/javascript"
    }
 * @param {*} statusCode 
 */

function isStatus(statusCode) {
    statusCode = statusCode || 200;
    return `'"pm.test(\\"Generated test: statuscode check(${statusCode})\\", function () {\\n    pm.response.to.have.status(${statusCode});\\n});"'`;
}

function isResponseJsonPropertyEquals(property, expected) {
    var expectedString = JSON.stringify(expected);
    return `"pm.test(\\"Generated test: Expect response property\\", function () {\\n    var jsonData = pm.response.json();\\n    pm.expect(jsonData["${property}"]).to.eql(${expectedString});\\n});"`;
}