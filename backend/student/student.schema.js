const config = require('../config.json');

// Define Odata model of the resource entity i.e. Product. 
// The metadata is defined using OData type system called the Entity Data Model (EDM),
// consisting of EntitySets, Entities, ComplexTypes and Scalar Types.
const schema = {
    namespace: config.DB_NAME,
    entityTypes: {
        "Student": {
            //"_id": { "type": "Edm.String", key: true },
            "_id": { "type": "Edm.String", key: true },
            "Name": { "type": "Edm.String" },
            "DOB": { "type": "Edm.Date" },
            "address": { "type": "Edm.String" },
            "age": { "type": "Edm.String" },
            "result": {
                "type": "Edm.ComplexType",
                "fields": {
                    "StreetAddress": { "type": "Edm.String" },
                    "City": { "type": "Edm.String" },
                    "StateProvince": { "type": "Edm.String" }
                }
            }
        }
    },
    entitySets: {
        [config.DB_COLLECTION]: {
            entityType: config.DB_NAME + ".Student"
        }
    }
};

module.exports = schema
