export default async function getRecentlyViewedProducts(storeHash, accessToken, customerId) {
    const logTitle = " getRecentlyViewedProduct() ";
    try {
        const requestUrl = "https://f52f-119-153-103-211.ngrok.io/api/bigcommerce/get_recently_viewed_items";
        const requestHeaders = {
            'Access-Control-Allow-Origin': "*",
            'Access-Control-Allow-Methods': 'PUT, POST, PATCH, DELETE, GET',
            'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept, Authorization",
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'     
        }
        const requestBody = {
            storeHash,
            accessToken,
            customerId
        };

      return fetch(requestUrl, {
            method: "POST",
            body: JSON.stringify(requestBody),
            headers: requestHeaders
        })
        
    } catch(e) {
        console.error("ERROR IN"+logTitle, e)
    }
}
