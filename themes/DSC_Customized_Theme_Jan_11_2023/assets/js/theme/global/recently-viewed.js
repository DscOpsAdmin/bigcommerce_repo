import 'foundation-sites/js/foundation/foundation';
import 'foundation-sites/js/foundation/foundation.dropdown';
import utils from '@bigcommerce/stencil-utils';
import setAsRecentlyViewedProduct from '../../dsc_utils/setAsRecentlyViewedProduct';
import getRecentlyViewedProducts from '../../dsc_utils/getRecentlyViewedProducts';
import getAllBrands from '../../dsc_utils/getallbrands';
import {
    ClickAwayListener
} from '@material-ui/core';

export const CartPreviewEvents = {
    close: 'closed.fndtn.dropdown',
    open: 'opened.fndtn.dropdown',
};
export default function (context) {
     console.log('recently viewed context', context);
    const loadingClass = 'is-loading';
    const $recentlyviewed = $('[data-recently-viewed-preview]');
    const $recentlyviewedDropdown = $('#recently-viewed-preview-dropdown');
    const $recentlyviewedLoading = $('<div class="loadingOverlay"></div>');

    $recentlyviewed.on('click', event => {

        // console.log('recentlyviewed is clicked')

        if (/Mobi/i.test(navigator.userAgent)) {
            return event.stopPropagation();
        }

        event.preventDefault();

        $recentlyviewedDropdown
            .addClass(loadingClass)
            .html($recentlyviewedLoading);
        $recentlyviewedLoading
            .show();
        getRecentlyViewedProducts("l1m6wbgej9", "t1v78525y56m540j8kx7rrzoa4cc32u", context.customerId).then(response => response.json())
            .then(responseObj => {
                getAllBrands("l1m6wbgej9", "t1v78525y56m540j8kx7rrzoa4cc32u").then(response => response.json())
                    .then(getBrandsResponseObj => {
                        // console.log( "getAllBrands responseObj", getBrandsResponseObj);
                        var brandsArray = getBrandsResponseObj.data;
                        // console.log( "brandsArray", brandsArray);
                        var brandsMapObj = {};
                        for (var brandIndex in brandsArray) {
                            var brandObj = brandsArray[brandIndex]
                            console.log('brandObj', brandObj);
                            if (!brandsMapObj[brandObj.id]) brandsMapObj[brandObj.id] = brandObj;
                            // console.log('brandsMapObj[brandObj.id]',brandsMapObj[brandObj.id]); 
                        
                        }
                        console.log('brandsMapObj', brandsMapObj);
                        //Old code:
                        let viewedItemsHtml = "";
                        var renderShowMoreButton = false;
                        console.log("getRecentlyViewedProducts responseObj", responseObj);
                        var dateMapObj = responseObj.data.recentlyViewedProductsMapObj;
                        console.log('dsc test 1 - dateMapObj',dateMapObj);
                        var dateMapObjKeys = Object.keys(dateMapObj);
                        console.log('dsc test 2 - dateMapObjKeys',dateMapObjKeys);
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
                            console.log("dsc test 3 - dateMiliSecMapObj", dateMiliSecMapObj)
                            var dateMiliSecKeySorted = Object.keys(dateMiliSecMapObj).sort(function (a, b) {
                                return b - a
                            })
                            console.log("dsc test 4 - dateMiliSecKeySorted", dateMiliSecKeySorted)
                            if (dateMapObjKeys.length > 3) renderShowMoreButton = true;
                         
                            viewedItemsHtml += "<table>";
                            for (var dateMiliSecIndex in dateMiliSecKeySorted) {
                                var dateMiliSec = dateMiliSecKeySorted[dateMiliSecIndex];
                                var date = dateMiliSecMapObj[dateMiliSec];
                                var productsByDate = dateMapObj[date];
                                if (productsByDate.length > 3) renderShowMoreButton = true;
                                var dateIndex = dateMapObjKeys.indexOf(date);
                                console.log("dsc test - in loop - dateIndex : dateMiliSecIndex", dateIndex, ":", dateMiliSecIndex)
                                if (dateMiliSecIndex >= 3) break;
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
                                viewedItemsHtml += "<div class='previewCartWrapper'>";
                                viewedItemsHtml += "<div class='previewCart'>";
                                viewedItemsHtml += "<div class='previewCartItem-content'>"
                                viewedItemsHtml += " <b><span class='previewCartItem-content'>" + formattedDate
                                viewedItemsHtml += "</span></b>"
                                viewedItemsHtml += "</div>"
                                viewedItemsHtml += "</br>"

                                for (var productIndex in productsByDate) {
                                    if (productIndex >= 3) break;
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
                                     if (brandsMapObj[productsObjbyDate.brand_id]){ 
                                        viewedItemsHtml += "<span class='previewCartItem-brand'>"+brandsMapObj[productsObjbyDate.brand_id].name+"</span>"
                                    }
                                    viewedItemsHtml += "<h6 class='previewCartItem-name'>"
                                    viewedItemsHtml += "<a href=" + productsObjbyDate.custom_url.url + " alt= 'productsObjbyDate.name'>" + productsObjbyDate.name + "</a>"
                                    viewedItemsHtml += "</h6>"
                                    viewedItemsHtml += "<span class='previewCartItem-price'>" + "Rs" + productsObjbyDate.price
                                    viewedItemsHtml += "</span>"
                                    viewedItemsHtml += "</div>"
                                    viewedItemsHtml += "</li>"
                                    viewedItemsHtml += "</ul>";
                                    viewedItemsHtml += "<hr>"
                                    viewedItemsHtml += "</div>";
                                    viewedItemsHtml += "</div>";
                                }

                            }

                            if (renderShowMoreButton) {
                                // viewedItemsHtml += "<div class='previewRecentViewAction'>"
                                viewedItemsHtml += "<div class='previewRecentViewAction-RecentView'>"
                                viewedItemsHtml += "<a href='/customer-viewed-products/' class='button button--small button--action'>Show more </a>"
                                viewedItemsHtml += "</div>"
                                // viewedItemsHtml += "</div>"
                            }
                            viewedItemsHtml += "</table>";
                        } else {
                            viewedItemsHtml += '<div role="alert" aria-live="polite" aria-atomic="false" class="previewCart-emptyBody">No products views yet</div>';
                        }
                        $recentlyviewedDropdown
                            .removeClass(loadingClass)
                            .html(viewedItemsHtml);
                        $recentlyviewedLoading
                            .hide();
                    });

            });
    });


}
