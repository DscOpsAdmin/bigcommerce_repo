export default async function getProductImages(storeHash, accessToken, productId){
    const logTitle = " getProductImages() ";
    try {
const requestBody = {
    storeHash,
    accessToken,
    productId
};
console.log('requestBody', requestBody); 
fetch("https://6b4e-119-153-103-211.ngrok.io/api/bigcommerce/get_product_images", {
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
.then(response => response.json())
.then(responseObj => {
    console.log(logTitle + "responseObj", responseObj);
});}
catch(e){
    console.error("ERROR IN"+logTitle, e)
}
}
