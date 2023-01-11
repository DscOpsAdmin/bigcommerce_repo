    /**
     *@NApiVersion 2.1
     *@NScriptType UserEventScript
     *
     */
    const AUTH_CRUD_SL_SCRIPT_ID = "customscript_ns_sl_bigcom_app_auth_crud";
    const AUTH_CRUD_SL_DEPLOYMENT_ID = "customdeploy_ns_sl_bigcom_app_auth_crud";
    define(['N/record', 'N/search', 'N/url', 'N/https'],
        function (record, search, url, https) {

            function afterSubmit(context) {
                const logTitle = " afterSubmit() ";
                log.debug(logTitle, "<--------------- UE Script - START --------------->");
                try {
                    if (context.type != context.UserEventType.CREATE || context.type != context.UserEventType.EDIT) {
                        // let recObj = context.newRecord;


                        const isBigComCustomer = context.newRecord.getValue("custentity_is_bigcom_customer");

                        if (isBigComCustomer) {
                            let recObj = record.load({
                                type: record.Type.CUSTOMER,
                                id: context.newRecord.id
                            })
                            let bigComCustomerDataObj = {};
                            bigComCustomerDataObj.first_name = recObj.getValue("firstname");
                            bigComCustomerDataObj.last_name = recObj.getValue("lastname");
                            bigComCustomerDataObj.email = recObj.getValue("email");
                            bigComCustomerDataObj.phone = recObj.getValue("phone");
                            bigComCustomerDataObj.company = recObj.getValue("companyname");

                            const bigcomCustomerId = recObj.getValue("custentity_bigcom_customer_id");
                            const bigCommerceStoreHash = recObj.getValue("custentity_bigcom_store_hash");

                            if (bigCommerceStoreHash) {
                                const bigComAuthResponseObj = getBigCommerceAuthData(bigCommerceStoreHash);

                                if (bigComAuthResponseObj && bigComAuthResponseObj.status == "SUCCESS") {
                                    const bigCommerceAccessToken = (bigComAuthResponseObj.data && bigComAuthResponseObj.data.authInfoJson && bigComAuthResponseObj.data.authInfoJson.access_token) ? bigComAuthResponseObj.data.authInfoJson.access_token : "";
                                    if (bigCommerceAccessToken) {
                                        const createdCustomerResponseObj = createCustomerInBigCommerce(bigCommerceStoreHash, bigCommerceAccessToken, bigcomCustomerId, bigComCustomerDataObj);
                                        bigcomCustomerId = createdCustomerResponseObj.id;
                                        if (bigcomCustomerId) {
                                            recObj.setValue("custentity_bigcom_customer_id", bigcomCustomerId);
                                        }
                                    }
                                }
                            }
                            recObj.setValue("custentity_is_bigcom_customer", false);
                            const nsCustomerId = recObj.save();
                            log.debug(logTitle + "nsCustomerId", nsCustomerId);
                        }
                    }
                } catch (e) {
                    log.error("ERROR IN" + logTitle, e);
                }
                log.debug(logTitle, "<--------------- UE Script - END --------------->");
            }

            function getBigCommerceAuthData(bigCommerceStoreHash) {
                const logTitle = " getBigCommerceAuthData() ";
                try {
                    var suiteletUrl = url.resolveScript({
                        scriptId: AUTH_CRUD_SL_SCRIPT_ID,
                        deploymentId: AUTH_CRUD_SL_DEPLOYMENT_ID,
                        returnExternalUrl: true
                    });
                    let requestBodyObj = {
                        method: "getStoreAuthInfoFromNs",
                        data: {
                            context: bigCommerceStoreHash
                        }
                    }
                    var headers = {};
                    headers['Content-Type'] = 'application/json';
                    var responseObj = https.post({
                        url: suiteletUrl,
                        body: JSON.stringify(requestBodyObj),
                        headers
                    });
                    let responseBodyObj = responseObj && responseObj.body ? JSON.parse(responseObj.body) : {}
                    return responseBodyObj;
                } catch (e) {
                    log.error("ERROR IN" + logTitle, e);
                }
            }

            function createCustomerInBigCommerce(bigCommerceStoreHash, bigCommerceAccessToken, bigcomCustomerId, bigComCustomerDataObj) {
                const logTitle = " createCustomerInBigCommerce() ";
                try {
                    let requestUrl = "https://api.bigcommerce.com/stores/" + bigCommerceStoreHash + "/v2/customers"
                    let requestMethod = "POST";
                    let requestHeaders = {
                        "X-Auth-Token": bigCommerceAccessToken,
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    };
                    let requestBody = bigComCustomerDataObj;
                    if (bigcomCustomerId) {
                        requestUrl = "https://api.bigcommerce.com/stores/" + bigCommerceStoreHash + "/v2/customers/" + bigcomCustomerId;
                        requestMethod = "PUT";
                    }
                    var responseObj = https.post({
                        url: requestUrl,
                        body: JSON.stringify(requestBody),
                        headers: requestHeaders
                    });

                    const responseBodyObj = (responseObj && responseObj.code == 201 && responseObj.body) ? JSON.parse(responseObj.body) : {}
                    return responseBodyObj;
                } catch (e) {
                    log.error("ERROR IN" + logTitle, e);
                }
            }

            return {
                beforeSubmit,
                afterSubmit
            }
        }
    );