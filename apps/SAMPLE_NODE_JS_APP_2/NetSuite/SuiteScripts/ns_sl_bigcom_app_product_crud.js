/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 * @NModuleScope SameAccount
 */
define(['N/record', 'N/search', 'N/https'],
    function (record, search, https) {
        const onRequest = (context) => {
            const logTitle = " onRequest() ";
            log.debug(logTitle, "<--------------- Suitelet Script - START --------------->");
            try {
                const request = context.request;
                const response = context.response;
                let responseBodyObj = {};
                responseBodyObj.status = "ERROR";
                responseBodyObj.message = "Unexpected Error!";

                let requestBodyObj = request.body ? JSON.parse(request.body) : {};
                if (requestBodyObj) {
                    if (request.method == "GET") {

                    } else if (request.method == "POST") {
                        switch (requestBodyObj.method) {
                            case "getItemInfoFromNs":
                                let itemsDataArray = getItemInfoFromNs();
                                if (itemsDataArray && itemsDataArray.length > 0) {
                                    responseBodyObj.message = "Products information successfully fetched!"
                                    responseBodyObj.status = "SUCCESS";
                                    responseBodyObj.data = itemsDataArray
                                } else {
                                    responseBodyObj.message = "Products information Not Found!"
                                    responseBodyObj.status = "ERROR";
                                }
                                break;
                            default:
                                responseBodyObj.message = "Method not found. Provided method is null or invalid!"
                        }
                    }
                } else {
                    responseBodyObj.message = "Request information is empty!";
                }
                log.debug(logTitle + "responseBodyObj", responseBodyObj);
                response.writeLine(JSON.stringify(responseBodyObj))

            } catch (e) {
                log.error("ERROR IN" + logTitle, e)
            }
            log.debug(logTitle, "<--------------- Suitelet Script - END --------------->");
        }

        const getItemInfoFromNs = () => {
            const logTitle = " getItemInfoFromNs() ";
            try {
                let itemsDataArray = [];
                const itemSearch = search.create({
                    type: search.Type.ITEM,
                    columns: [
                        search.createColumn({
                            name: "itemid"
                        }),
                        search.createColumn({
                            name: "quantityavailable"
                        }),
                        search.createColumn({
                            name: "cost"
                        }),
                        search.createColumn({
                            name: "salesdescription"
                        })
                    ],
                    filters: [
                        search.createFilter({
                            name: "matrixchild",
                            operator: "is",
                            values: ["F"]
                        }),
                        search.createFilter({
                            name: "matrix",
                            operator: "is",
                            values: ["F"]
                        }),
                        search.createFilter({
                            name: "type",
                            operator: "anyof",
                            values: ["InvtPart"]
                        })
                    ]
                });
                var searchResults = itemSearch.run().getRange({
                    start: 0,
                    end: 1000
                });
                log.debug(logTitle + "searchResults", searchResults);
                for (var i = 0; i < searchResults.length; i++) {
                    var itemDataObj = {};
                    itemDataObj.id = searchResults[i].id;
                    itemDataObj.name = searchResults[i].getValue({
                        name: "itemid"
                    });
                    itemDataObj.description = searchResults[i].getValue({
                        name: "salesdescription"
                    });
                    itemDataObj.description = itemDataObj.description ? itemDataObj.description : itemDataObj.name;
                    itemDataObj.price = parseFloat(searchResults[i].getValue({
                        name: "cost"
                    }));
                    itemDataObj.price = itemDataObj.price ? itemDataObj.price : 0;
                    itemDataObj.inventory_level = parseFloat(searchResults[i].getValue({
                        name: "quantityavailable"
                    }));
                    itemDataObj.inventory_level = itemDataObj.inventory_level ? itemDataObj.inventory_level : 0;
                    itemsDataArray.push(itemDataObj)
                }
                return itemsDataArray;
            } catch (e) {
                log.error("ERROR IN" + logTitle, e)
            }
        }

        return {
            onRequest
        }
    }
)