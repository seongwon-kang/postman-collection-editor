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
module.exports = {
    isStatus: function (statusCode) {
        statusCode = statusCode || 200;
        return `pm.test("Generated test: statuscode check(${statusCode})", ()=> {pm.response.to.have.status(${statusCode});});`;
    },
    
    isResponseJsonPropertyEquals: function (property, expected) {
        var expectedString = JSON.stringify(expected);
        return `pm.test("Generated test: Expect response property", () =>{var jsonData = pm.response.json();pm.expect(jsonData["${property}"]).to.eql(${expectedString});});`;
    }

}