const {Collection, Item, Event} = require("postman-collection");

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

    mapMethodtoSniffet(items, method, sniffet) {
        items.filter(item=>this.usesHTTPMethod(item, method)).forEach((item)=> {
            item.event.push(new Event({
                listen: "test",
                script: {
                    exec: [sniffet],
                    type: "text/javascript"
                }
            }));
        });
    }
};