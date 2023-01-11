/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 * @NModuleScope SameAccount
*/
define(['N/record', 'N/search', 'N/https'],
    function(record, search, https) {
        const onRequest = (context) => {
            const logTitle = " onRequest() ";
            try {
                var request = context.request;
				var response = context.response;
                log.debug(logTitle + "request", request);
                if (request.method == "GET"){

                } else if (request.method == "POST") {

                }
            } catch(e) {
                log.error("ERROR IN"+logTitle, e)
            }
        }
        return {
            onRequest
        }
    }
)