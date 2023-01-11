/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 * @NModuleScope SameAccount
 */

const DEFAULT_SUBSIDIARY_ID = "17"; //Generation N US
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
                log.debug(logTitle+"requestBodyObj", requestBodyObj)
                if (requestBodyObj) {
                    if (request.method == "GET") {

                    } else if (request.method == "POST") {
                        switch (requestBodyObj.method) {
                            case "updateCustomer":
                                const customerId = updateCustomer(requestBodyObj.data);
                                if (customerId) {
                                    responseBodyObj.message = "Customer Record Updated!"
                                    responseBodyObj.status = "SUCCESS";
                                    responseBodyObj.customerId = customerId;
                                } else {
                                    responseBodyObj.message = "Unable to save customer record!";
                                }
                                break;
                            default:
                                responseBodyObj.message = "Method not found. Provided method is null or invalid!"
                        }
                    }
                }
                log.debug(logTitle + "responseBodyObj", responseBodyObj);
                response.writeLine(JSON.stringify(responseBodyObj))
            } catch (e) {
                log.error("ERROR IN" + logTitle, e)
            }
            log.debug(logTitle, "<--------------- Suitelet Script - END --------------->");
        }

        const updateCustomer = (requestBodyData) => {
            const logTitle = " onRequest() ";
            try {
                const bigComCustomerId = requestBodyData.customer.id;
                const bigComStoreHash = requestBodyData.storeHash;
                const customerId = searchCustomerRecord(bigComCustomerId);
                let customerRecObj;
                if (customerId) {
                    customerRecObj = record.load({
                        type: record.Type.CUSTOMER,
                        id: customerId
                    });
                } else {
                    customerRecObj = record.create({
                        type: record.Type.CUSTOMER,
                    });
                    customerRecObj.setValue({
                        fieldId: "subsidiary",
                        value: DEFAULT_SUBSIDIARY_ID
                    });
                    customerRecObj.setValue({
                        fieldId: "custentity_bigcom_customer_id",
                        value: bigComCustomerId
                    });
                    //subsidiary, DEFAULT_SUBSIDIARY_ID 
                }
                customerRecObj.setValue({
                    fieldId: "firstname",
                    value: requestBodyData.customer.first_name
                })
                customerRecObj.setValue({
                    fieldId: "lastname",
                    value: requestBodyData.customer.last_name
                })
                customerRecObj.setValue({
                    fieldId: "email",
                    value: requestBodyData.customer.email
                })
                customerRecObj.setValue({
                    fieldId: "companyname",
                    value: requestBodyData.customer.company
                })
                customerRecObj.setValue({
                    fieldId: "phone",
                    value: requestBodyData.customer.phone
                })
                customerRecObj.setValue({
                    fieldId: "custentity_bigcom_store_hash",
                    value: bigComStoreHash
                });
                const updatedCustomerId = customerRecObj.save();
                if(updatedCustomerId) return updatedCustomerId;
            } catch (e) {
                log.error("ERROR IN" + logTitle, e)
            }
        }

        const searchCustomerRecord = (bigComCustomerId) => {
            const logTitle = " onRequest() ";
            try {
                let customerId = "";
                const customerSearch = search.create({
                    type: search.Type.CUSTOMER,
                    columns: [
                        search.createColumn({
                            name: "internalid"
                        })
                    ],
                    filters: [
                        search.createFilter({
                            name: "custentity_bigcom_customer_id",
                            operator: "is",
                            values: [bigComCustomerId]
                        })
                    ]
                });
                var searchResults = customerSearch.run().getRange({
                    start: 0,
                    end: 1
                });
                if (searchResults.length > 0) {
                    customerId = searchResults[0].getValue({
                        name: "internalid"
                    })
                }
                return customerId;
            } catch (e) {
                log.error("ERROR IN" + logTitle, e)
            }
        }
        return {
            onRequest
        }
    }
);