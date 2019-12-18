const { Collection, Item, Event } = require("postman-collection");

const Sniffets = require("../sniffets/sniffets");

module.exports = {
    newCollection() {
        return new Collection({
            info: {
                name: "Auto-generated Collection",
                "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
            }
        });
    },

    newItem(collection, name) {
        collection.items.one("").items.add(new Item({
            name: name,
            event: new Event(),
            request: new Request(),
        }));
    },

    usesHTTPMethod(item, method) {
        return item.request.method === method;
    },
    /**
     * 
     * @param {*} items Array (Collection.item)
     * @param {*} method HTTP Method ["GET", "POST", "PUT", "DELETE"]
     * @param {*} sniffet a jsonified string from `sniffet.js`
     */
    mapMethodtoSniffet(collectionArray, method, sniffet) {
        // Request/Response Set resides in Folder
        collectionArray.item.forEach((reqresSet) => {
            reqresSet.item.filter(reqresItem => this.usesHTTPMethod(reqresItem, method))
                .forEach((item) => {
                    item.event.push(new Event({
                        listen: "test",
                        script: {
                            exec: [sniffet],
                            type: "text/javascript"
                        }
                    }));
                });
        });
    }
};