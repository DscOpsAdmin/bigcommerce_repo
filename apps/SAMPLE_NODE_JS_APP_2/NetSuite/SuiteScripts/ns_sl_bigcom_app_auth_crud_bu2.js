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
                log.debug(logTitle + "request", request);
                let responseBodyObj = {};
                responseBodyObj.status = "ERROR"
                responseBodyObj.message = "Unexpected Error!"
                let requestBodyObj = request.body ? JSON.parse(request.body) : {};
                if (request.method == "GET") {
                    // if(requestBodyObj){
                    //     switch (requestBodyObj.method){
                    //         default:
                    //             responseBodyObj.message = "Method not found. Provided method is null or invalid!";
                    //     }
                    // }
                } else if (request.method == "POST") {
                    if (requestBodyObj) {
                        switch (requestBodyObj.method) {
                            case "storeAuthInfoInNs":
                                const customRecordId = storeAuthInfoInNs(requestBodyObj.data);
                                log.debug(logTitle + "customRecordId", customRecordId);
                                if (customRecordId) {
                                    responseBodyObj.message = "Authorization Information Saved!"
                                    responseBodyObj.status = "SUCCESS";
                                } else {
                                    responseBodyObj.message = "Unable to store authorization information!";
                                }
                                break;
                            case "getStoreAuthInfoFromNs":
                                const authInfoJson = getStoreAuthInfoFromNs(requestBodyObj.data);
                                if (authInfoJson) {
                                    responseBodyObj.message = "Authorization information successfully fetched!"
                                    responseBodyObj.status = "SUCCESS";
                                    responseBodyObj.data = {
                                        authInfoJson
                                    }
                                } else {
                                    responseBodyObj.message = "Authorization information Not Found!"
                                    responseBodyObj.status = "ERROR";
                                }
                                break;
                            case "sendTestHttpRequest":
                                responseBodyObj.status = "SUCCESS";
                                responseBodyObj.message = "Test HTTP Request Successfully Received!"
                                break;
                            default:
                                responseBodyObj.message = "Method not found. Provided method is null or invalid!"
                        }
                    } else {
                        responseBodyObj.message = "Request information is empty!";
                    }
                }
                log.debug(logTitle + "responseBodyObj", responseBodyObj);
                response.writeLine(JSON.stringify(responseBodyObj))
            } catch (e) {
                log.error("ERROR IN" + logTitle, e)
            }
            log.debug(logTitle, "<--------------- Suitelet Script - END --------------->");
        }

        const storeAuthInfoInNs = requestBodyData => {
            const logTitle = " storeAuthInfoInNs() ";
            try {
                let recObj = record.create({
                    type: "customrecord_bigcom_owner_auth_info"
                });
                recObj.setValue("custrecord_bigcom_auth_store_owner_id", requestBodyData.user.id);
                recObj.setValue("custrecord_bigcom_auth_access_token", requestBodyData.access_token);
                recObj.setValue("custrecord_bigcom_auth_info_json", JSON.stringify(requestBodyData));
                let storeContext = requestBodyData.context;
                log.debug(logTitle + "storeContext", storeContext);
                let storeHash = storeContext ? storeContext.split("stores/")[1] : "";
                log.debug(logTitle + "storeHash", storeHash)
                recObj.setValue("custrecord_bigcom_auth_store_hash", storeHash);
                const recordId = recObj.save();
                return recordId;
            } catch (e) {
                log.error("ERROR IN" + logTitle, e);
            }
        }

        const getStoreAuthInfoFromNs = requestBodyData => {
            const logTitle = " getStoreAuthInfoFromNs() ";
            try {
                log.debug(logTitle + "requestBodyData", requestBodyData)
                let authInfoJson = undefined;
                let storeHash = "";
                let storeOwnerId = "";

                if (requestBodyData.context) {
                    storeHash = requestBodyData.context;
                } else if (requestBodyData.sub) {
                    let storeSub = requestBodyData.sub;
                    storeHash = storeSub.split("stores/")[1];
                }

                if (requestBodyData.owner.id) {
                    storeOwnerId = requestBodyData.owner.id;
                } else if (requestBodyData.user.id) {
                    storeOwnerId = requestBodyData.user.id;
                }

                if (storeHash && storeOwnerId) {
                    let customRecordSearch = search.create({
                        type: "customrecord_bigcom_owner_auth_info",
                        filters: [
                            search.createFilter({
                                name: "custrecord_bigcom_auth_store_owner_id",
                                operator: "is",
                                values: [storeOwnerId]
                            }),
                            search.createFilter({
                                name: "custrecord_bigcom_auth_store_hash",
                                operator: "is",
                                values: [storeHash]
                            })
                        ],
                        columns: [
                            search.createColumn({
                                name: "custrecord_bigcom_auth_info_json"
                            }),
                            search.createColumn({
                                name: "created",
                                sort: search.Sort.DESC
                            }),
                            search.createColumn({
                                name: "custrecord_bigcom_auth_store_hash"
                            })
                        ]
                    });
                    var searchResults = customRecordSearch.run().getRange({
                        start: 0,
                        end: 1
                    });
                    log.debug(logTitle + "searchResults", searchResults);

                    if (searchResults.length > 0) {
                        const authInfoJsonText = searchResults[0].getValue("custrecord_bigcom_auth_info_json");
                        authInfoJson = authInfoJsonText ? JSON.parse(authInfoJsonText) : {};
                        authInfoJson.storeHash = searchResults[0].getValue("custrecord_bigcom_auth_store_hash");
                    }
                }
                return authInfoJson;
            } catch (e) {
                log.error("ERROR IN" + logTitle, e);
            }
        }

        return {
            onRequest
        }
    }
)