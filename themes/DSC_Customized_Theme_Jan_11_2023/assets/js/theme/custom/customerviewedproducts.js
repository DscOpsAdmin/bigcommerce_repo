/* import PageManager from "../../theme/page-manager";
export default class ProductCustom extends PageManager{
  /*   onReady(){
        alert("Hello world!");
    } 
} */
import getRecentlyViewedProducts from '../../dsc_utils/getRecentlyViewedProducts';
import getAllBrands from '../../dsc_utils/getallbrands';
export default async function customerViewedProducts(context) {
    console.log('customerViewedProducts context', context)
    var LogTitle = "customerViewedProducts()";
    console.log('LogTitle', LogTitle);
    const loadingClass = 'is-loading';
    const $recentlyviewedLoading = $('<div class="loadingOverlay"></div>');
    const $customerviewed = $('[customer-viewed-products]');
    console.log('$customerviewed', $customerviewed)
    $customerviewed
            .addClass(loadingClass)
            .html($recentlyviewedLoading);
        $recentlyviewedLoading
            .show();

    getRecentlyViewedProducts("l1m6wbgej9", "t1v78525y56m540j8kx7rrzoa4cc32u", context.customerId).then(response => response.json())
        .then(responseObj => {
            console.log("getRecentlyViewedProducts responseObj", responseObj);
            getAllBrands("l1m6wbgej9", "t1v78525y56m540j8kx7rrzoa4cc32u").then(response => response.json())
                .then(getBrandsResponseObj => {
                    console.log("getAllBrands responseObj", getBrandsResponseObj);
                    var brandsArray = getBrandsResponseObj.data;
                    console.log("brandsArray", brandsArray);
                    var brandsMapObj = {};
                    for (var brandIndex in brandsArray) {
                        var brandObj = brandsArray[brandIndex]
                        // console.log('brandObj', brandObj);
                        if (!brandsMapObj[brandObj.id]) brandsMapObj[brandObj.id] = brandObj;
                    }
                    console.log('brandsMapObj', brandsMapObj);
                    //Old code:
                    let viewedItemsHtml = "";
                    // var renderShowMoreButton = false;
                    console.log("getRecentlyViewedProducts responseObj", responseObj);
                    var dateMapObj = responseObj.data.recentlyViewedProductsMapObj;
                    // console.log('dateMapObj',dateMapObj);
                    var dateMapObjKeys = Object.keys(dateMapObj);
                    console.log('dataMapObjKeys', dateMapObjKeys);
                    if (dateMapObjKeys.length > 0) {
                        var dateMiliSecMapObj = {};
                        // console.log('dateMiliSecMapObj',dateMiliSecMapObj);
                        dateMapObjKeys.map(dateString => {
                            const dateParts = dateString.split("/");
                            const day = dateParts[0];
                            const month = dateParts[1];
                            const year = dateParts[2];
                            const dateNew = new Date(year, month - 1, day);
                            var dateInMiliSec = dateNew.getTime();
                            if (dateInMiliSec && !dateMiliSecMapObj[dateInMiliSec]) dateMiliSecMapObj[dateInMiliSec] = dateString;
                        });
                        var dateMiliSecKeySorted = Object.keys(dateMiliSecMapObj).sort(function (a, b) {
                                return b - a
                            })

                            // if (dateMapObjKeys.length > 3) renderShowMoreButton = true;
                          
                        viewedItemsHtml += "<h2 class='page-heading'>Customer Viewed Products</h2>"
                   
                        viewedItemsHtml += "<table width='100%'>";
                        for (var dateMiliSecIndex in dateMiliSecKeySorted) {
                            var dateMiliSec = dateMiliSecKeySorted[dateMiliSecIndex];
                            var date = dateMiliSecMapObj[dateMiliSec];
                            var productsByDate = dateMapObj[date];
                            // if (productsByDate.length > 3) renderShowMoreButton = true;
                            var dateIndex = dateMapObjKeys.indexOf(date);
                            // if (dateIndex >= 3) break;
                            // console.log('date', date);
                            // console.log('productsByDate', productsByDate);
                            const dateParts = date.split("/");
                            const day = dateParts[0];
                            const month = dateParts[1];
                            const year = dateParts[2];
                            const dateNew = new Date(year, month - 1, day);
                            // console.log('dateNew', dateNew);
                            const monthNames = ["January", "February", "March", "April", "May", "June",
                                "July", "August", "September", "October", "November", "December"
                            ];
                            const formattedDate = monthNames[dateNew.getMonth()] + " " + dateNew.getDate() + ", " + dateNew.getFullYear();
                            // console.log('formattedDate',formattedDate); 
                            // viewedItemsHtml += "<div class='previewCartWrapper'>";
                            // viewedItemsHtml += "<div class='previewCart'>";
                            // viewedItemsHtml += "<div class='previewCartItem-content'>"
                            viewedItemsHtml += "<div class='dsc-recently-viewed-date'><h4><b>" + formattedDate + "</b></h4></div>";
                            // viewedItemsHtml += "</div>"
                            viewedItemsHtml += "</br>"
                             for (var productIndex in productsByDate) {
                                // if (productIndex >= 3) break;
                                var productsObjbyDate = productsByDate[productIndex];
                                console.log('productsObjbyDate.brand_id', productsObjbyDate.brand_id)
                                console.log('productsObjbyDate', productsObjbyDate);
                                viewedItemsHtml += "<div class = 'grid-container'>" 
                                viewedItemsHtml += "<div class = 'product'>" 
                                viewedItemsHtml += "<div class='card'>"
                                for (var images in productsObjbyDate.images) {
                                    var thumbnailImage = productsObjbyDate.images[images]
                                    if (thumbnailImage.is_thumbnail == true) {
                                        viewedItemsHtml += "<div class = 'card-figure dsc-card-figure'>";
                                        viewedItemsHtml += "<img src=" + thumbnailImage.url_thumbnail + ">"
                                        viewedItemsHtml += "</div>";
                                        break;
                                    }
                                }
                                console.log('brandsMapObj in loop', brandsMapObj);
                                viewedItemsHtml += "<div class ='card-body'>"
                                if (brandsMapObj[productsObjbyDate.brand_id]) {
                                    viewedItemsHtml += "<span class='card-text'>" + brandsMapObj[productsObjbyDate.brand_id].name + "</span>"
                                }
                                viewedItemsHtml += "<h3 class='card-title'>"
                                viewedItemsHtml += "<a href=" + productsObjbyDate.custom_url.url + " alt= 'productsObjbyDate.name'>" + productsObjbyDate.name + "</a>"
                                viewedItemsHtml += "</h6>"
                                viewedItemsHtml += "<span class='card-text'>" + "Rs" + productsObjbyDate.price
                                viewedItemsHtml += "</span>"
                                viewedItemsHtml += "</div>"
                                viewedItemsHtml += "</div>"
                                viewedItemsHtml += "</div>"
                                viewedItemsHtml += "</div>"; 
                               
                                // viewedItemsHtml += "</div>";
                                // viewedItemsHtml += "</div>";
                            }
                            viewedItemsHtml += "<hr>"
                         /*    for (var productIndex in productsByDate) {
                                // if (productIndex >= 3) break;
                                var productsObjbyDate = productsByDate[productIndex];
                                console.log('productsObjbyDate.brand_id', productsObjbyDate.brand_id)
                                console.log('productsObjbyDate', productsObjbyDate);
                                 viewedItemsHtml += "<ul class='previewCartList'>";
                                viewedItemsHtml += "<li class='previewCartItem'>";
                                for (var images in productsObjbyDate.images) {
                                    var thumbnailImage = productsObjbyDate.images[images]
                                    // console.log('thumbnailImagme',thumbnailImage);
                                    if (thumbnailImage.is_thumbnail == true) {
                                        viewedItemsHtml += "<div class='previewCartItem-image'>";
                                        viewedItemsHtml += "<img src=" + thumbnailImage.url_thumbnail + ">"
                                        viewedItemsHtml += "</div>";
                                        break;
                                    }
                                }

                                viewedItemsHtml += "<div class='previewCartItem-content'>"
                                console.log('brandsMapObj in loop', brandsMapObj);
                                if (brandsMapObj[productsObjbyDate.brand_id]) {
                                    viewedItemsHtml += "<span class='previewCartItem-brand'>" + brandsMapObj[productsObjbyDate.brand_id].name + "</span>"
                                }
                                viewedItemsHtml += "<h6 class='previewCartItem-name'>"
                                viewedItemsHtml += "<a href=" + productsObjbyDate.custom_url.url + " alt= 'productsObjbyDate.name'>" + productsObjbyDate.name + "</a>"
                                viewedItemsHtml += "</h6>"
                                viewedItemsHtml += "<span class='previewCartItem-price'>" + "Rs" + productsObjbyDate.price
                                viewedItemsHtml += "</span>"
                                viewedItemsHtml += "</div>"
                                viewedItemsHtml += "</li>"
                                viewedItemsHtml += "</ul>"; 
                                // viewedItemsHtml += "<hr>"
                                viewedItemsHtml += "</div>";
                                viewedItemsHtml += "</div>";
                            } */

                        }
                        viewedItemsHtml += "</table>";
                    } else {
                        viewedItemsHtml += '<div role="alert" aria-live="polite" aria-atomic="false" class="previewCart-emptyBody">No products views yet</div>';
                    }
                    $customerviewed.html(viewedItemsHtml)
                });
        });



}
