export default async function getAllBrands(storeHash, accessToken){
    const logTitle = " getAllBrands() ";
    try {
const requestBody = {
    storeHash,
    accessToken,
};
// console.log('requestBody', requestBody); 
return fetch("https://3158-119-153-103-211.ngrok.io/api/bigcommerce/get_brands", {
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

}
catch(e){
    console.error("ERROR IN"+logTitle, e)
}
}
