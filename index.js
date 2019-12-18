const args = require("args-parser")(process.argv);
const collectionUtil = require("./collection/collectionUtil");
const Sniffet = require("./sniffets/sniffets");

function addContractTest(collectionArray) {
    collectionUtil.mapMethodtoSniffet(
        collectionArray,
        "GET",
        Sniffet.isStatus(200));
}

function addSnapshotTest(collectionArray) {

}

async function run() {
    if (process.argv.length < 2) {
        console.log(`
            a utility program that inserts test script
            usage: ${process.argv[0]} [options] collection_json_length
                options: 
                    -c, --contract: adds 200 ok test on ("GET") and one of 201, 202 on ("POST)
                    -s, --snapshot: adds 
                    --mock-server-url=<wiremock>:
        `);
    }
}

run();