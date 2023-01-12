export default async function getAllProducts(storeHash, accessToken) {
    const logTitle = " getAllProducts() ";
    try {
        const requestBody = {
            storeHash,
            accessToken,
        };
        return fetch("https://f52f-119-153-103-211.ngrok.io/api/bigcommerce/get_products", {
            method: "POST",
            headers: {
                'Access-Control-Allow-Origin': "*",
                'Access-Control-Allow-Methods': 'PUT, POST, PATCH, DELETE, GET',
                'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept, Authorization",
                'Content-Type': 'application/json',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'
            },
            body: JSON.stringify(requestBody)
        })

    } catch (e) {
        console.error("ERROR IN" + logTitle, e)
    }
}
