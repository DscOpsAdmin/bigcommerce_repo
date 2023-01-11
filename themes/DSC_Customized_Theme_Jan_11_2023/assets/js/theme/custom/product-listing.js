import getAllProducts from "../../dsc_utils/getallproducts";
export function updatePlpCart(actionName) {
    var logTitle = " updatePlpCart() ";
    try {
        let $overlay = $('[data-plp-cart] .loadingOverlay');
        console.log(logTitle + "$overlay", $overlay)
        $overlay.show();
        fetch('/api/storefront/carts', {
            method: "GET",
            credentials: 'same-origin',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (response) {
            return response.json();
        }).then(function (cartsResponseArray) {
            if (cartsResponseArray.length > 0) {
                console.log(logTitle + "carts - cartsResponseArray", cartsResponseArray);
                let cartTotalItems = 0;
                let cartSubtotal = 0.00;
                let cartTaxTotal = 0.00;
                let cartGrandTotal = 0.00;
                let cartHasProducts = false;

                let cartItemsHtml = "";
                cartItemsHtml += "<table data-class='plp-order-summary-products-table'>";

                for (let index1 in cartsResponseArray) {
                    const cartObj = cartsResponseArray[index1];
                    if (index1 == 0 && cartObj) {
                        const quickAddSkuButtonDom = $("[data-class='quick-add-sku-button']");
                        if (quickAddSkuButtonDom) quickAddSkuButtonDom.attr("data-cart-id", cartObj.id);
                    }
                    for (let lineItemType in cartObj.lineItems) {
                        const itemTypeDataArray = cartObj.lineItems[lineItemType];
                        for (let index2 in itemTypeDataArray) {

                            const itemObj = itemTypeDataArray[index2];
                            console.log(logTitle + "itemObj", itemObj);
                            cartTotalItems += itemObj.quantity;
                            // cartSubtotal += itemObj.quantity * itemObj.salePrice;
                            // let cartItemTax =  itemObj.extendedSalePrice - itemObj.extendedListPrice;
                            // cartTaxTotal += cartItemTax;

                            //generating cart products html
                            cartItemsHtml += "<tr>";
                            //--> PLP Order Summary Product Image
                            cartItemsHtml += "<td width='20%'>";
                            cartItemsHtml += "<div><img src='" + itemObj.imageUrl + "' alt='' width/></div>";
                            cartItemsHtml += "<td>";

                            cartItemsHtml += "<td width='70%'>";

                            cartItemsHtml += "<div style='padding:3px;'>";
                            cartItemsHtml += "<table>";
                            cartItemsHtml += "<tr>";
                            //--> PLP Order Summary Product Name
                            cartItemsHtml += "<td width='100%'>";
                            let cartItemName = itemObj.name;
                            if (cartItemName && cartItemName.length > 15) {
                                cartItemName = cartItemName.substring(0, 15).trim() + "...";
                            }
                            cartItemsHtml += "<span title='" + itemObj.sku + " (" + itemObj.name + ")" + "'>" + cartItemName + "</span>";
                            cartItemsHtml += "</td>";
                            // cartItemsHtml += "<td width='0%'>";
                            // cartItemsHtml += "</td>";
                            cartItemsHtml += "</tr>";
                            cartItemsHtml += "<tr>";
                            //--> PLP Order Summary Product Quantity & Sales Price
                            cartItemsHtml += "<td data-cart-product-id='" + itemObj.id + "' data-product-id='" + itemObj.productId + "' data-product-variant-id='" + itemObj.variantId + "' data-cart-id='" + cartObj.id + "'>";
                            cartItemsHtml += "<input class='plp-cart-product-quantity' type='number' value='" + itemObj.quantity + "' min='0' max='999' />";
                            cartItemsHtml += " x " + cartObj.currency.symbol + itemObj.salePrice;
                            cartItemsHtml += "</td>";
                            //--> PLP Order Summary Product Sales Price
                            // cartItemsHtml += "<td width='0%' align='right'>";
                            // cartItemsHtml += "</td>";

                            cartItemsHtml += "</tr>";
                            cartItemsHtml += "</table>";
                            cartItemsHtml += "</div>";

                            cartItemsHtml += "</td>";

                            cartItemsHtml += "<td width='10%'>";
                            cartItemsHtml += "<button data-class='remove-from-plp-cart' data-product-id='" + itemObj.id + "' data-cart-id='" + cartObj.id + "'>";
                            cartItemsHtml += "<img data-class='remove-from-plp-cart' src='https://cdn-icons-png.flaticon.com/512/106/106830.png' data-product-id='" + itemObj.id + "' data-cart-id='" + cartObj.id + "'/>";
                            cartItemsHtml += "</button>";
                            cartItemsHtml += "</td>";

                            cartItemsHtml += "</tr>";

                            cartHasProducts = true;
                        };
                    }
                }
                cartItemsHtml += "</table>";

                if (cartHasProducts) {
                    $("#plp-order-summary-products").html(cartItemsHtml);
                }
                bindUpdatePlpCartEvent();
                if (actionName == "update_cart") {
                    var checkoutId = cartsResponseArray[0].id;
                    if (checkoutId) {
                        try {
                            var requestUrl = "/api/storefront/checkouts/" + checkoutId;
                            fetch(requestUrl, {
                                method: "GET",
                                credentials: "same-origin",
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            }).then(response => {
                                return response.json()
                            }).then(checkoutResponseObj => {
                                cartTaxTotal = parseFloat(checkoutResponseObj.taxTotal);
                                cartSubtotal = parseFloat(checkoutResponseObj.subtotal);
                                cartGrandTotal = parseFloat(checkoutResponseObj.grandTotal);

                                $("#api-total-items").html(cartTotalItems);
                                $("#api-taxtotal").html(cartTaxTotal.toFixed(2));
                                $("#api-subtotal").html(cartSubtotal.toFixed(2));
                                $("#api-grandtotal").html(cartGrandTotal.toFixed(2));
                                $overlay.hide();
                                // var symbol = responseBody.cart.currency.symbol
                                // var subTotal = responseBody.subtotal
                                // var shipping = responseBody.shippingCostTotal
                                // var tax = responseBody.taxTotal
                                // var total = responseBody.grandTotal;
                                // // console.log('symbol', symbol);
                                // console.log('subTotal', subTotal, 'shipping', shipping, 'tax', tax, 'total', total);
                                // $("#api-subtotal").html(symbol + subTotal);
                                // $("#api-shipping").html(symbol + shipping);
                                // $("#api-tax").html(symbol + tax);
                                // $("#api-total").html(symbol + total);
                            });
                        } catch (e) {
                            console.error("ERROR IN" + logTitle, e);
                        }
                    }
                }
            } else {
                $("#plp-order-summary-products").html("Your cart is empty");
                $("#api-total-items").html("0");
                $("#api-taxtotal").html("0.00");
                $("#api-subtotal").html("0.00");
                $("#api-grandtotal").html("0.00");
                $overlay.hide();
            }
        });
    } catch (e) {
        console.error("ERROR IN" + logTitle, e);
    }
}

export function plpCartBindEvents() {
    const logTitle = " plpCartBindEvents() ";
    try {
        console.log(logTitle, "EXECUTED!")
        $("body").on('click', (event) => {
            var targetObj = event.target;
            const dataClass = $(targetObj).attr("data-class");

            if (dataClass == "remove-from-plp-cart") {
                const cartId = $(targetObj).attr("data-cart-id");
                const cartItemId = $(targetObj).attr("data-product-id");
                if (cartId && cartItemId) {
                    deleteCartItem(cartId, cartItemId);
                }
            }
            //Add to Cart with SKU - START
            else if (dataClass == "quick-add-sku-button") {
                const cartId = $("[data-class='quick-add-sku-button']").attr("data-cart-id");
                console.log(logTitle + "cartId", cartId);
                if (cartId) {
                    console.log(logTitle + "dataClass", dataClass);
                    const quickAddItemSku = $("[data-id='quick-add-item-sku']").val();
                    let quickAddItemQty = $("[data-id='quick-add-item-qty']").val();
                    quickAddItemQty = quickAddItemQty ? parseFloat(quickAddItemQty) : 0;
                    if (quickAddItemSku && quickAddItemQty) {
                        if (quickAddItemQty > 0) {
                            console.log(logTitle + "quickAddItemSku", quickAddItemSku);
                            console.log(logTitle + "quickAddItemQty", quickAddItemQty);
                            let $overlay = $('[data-plp-cart] .loadingOverlay');
                            $overlay.show();
                            getAllProducts("l1m6wbgej9", "t1v78525y56m540j8kx7rrzoa4cc32u")
                                .then(response => response.json())
                                .then(getProductsResponseObj => {
                                    console.log(logTitle + "getProductsResponseObj", getProductsResponseObj)
                                    let productsSkuMapObj = {};
                                    if (getProductsResponseObj && getProductsResponseObj.data) {
                                        for (let productIndex in getProductsResponseObj.data) {
                                            let productsObj = getProductsResponseObj.data[productIndex];
                                            for (let productVariantIndex in productsObj.variants) {
                                                let productVariantObj = productsObj.variants[productVariantIndex];
                                                if (productVariantObj.sku && !productsSkuMapObj[productVariantObj.sku]) productsSkuMapObj[productVariantObj.sku] = productVariantObj;
                                            }
                                        }
                                        console.log(logTitle + "productsSkuMapObj", productsSkuMapObj);
                                        console.log(logTitle + "productsSkuMapObj[quickAddItemSku]", productsSkuMapObj[quickAddItemSku]);
                                        if (productsSkuMapObj[quickAddItemSku]) {
                                            addCartItem(cartId, productsSkuMapObj[quickAddItemSku].product_id, productsSkuMapObj[quickAddItemSku].id, quickAddItemQty, $overlay)
                                        } else {
                                            alert("Provided SKU does not exist!")
                                            $overlay.hide();
                                        }

                                    } else {
                                        $overlay.hide();
                                    }

                                })
                                .catch(error => {
                                    console.error(logTitle + "error", error);
                                    $overlay.hide();
                                });
                        } else {
                            alert("Quantity must be greater than zero");
                        }
                    } else {
                        alert("Please specify both SKU & item quantity")
                    }
                }
            }
            //Display SKU Search Results - START
            else if (dataClass == "search-matching-sku-results-btn") {
                let $quickAddSkuInput = $("[data-id='quick-add-item-sku']");
                if ($quickAddSkuInput && $quickAddSkuInput.length > 0) {
                    const quickAddItemSkuLowerCase = $quickAddSkuInput.val().toLowerCase();
                    console.log(logTitle + "quickAddItemSkuLowerCase", quickAddItemSkuLowerCase);
                    if (quickAddItemSkuLowerCase) {
                        let $overlay = $('[data-plp-cart] .loadingOverlay');
                        $overlay.show();
                        getAllProducts("l1m6wbgej9", "t1v78525y56m540j8kx7rrzoa4cc32u")
                            .then(response => response.json())
                            .then(getProductsResponseObj => {
                                console.log(logTitle + "getProductsResponseObj", getProductsResponseObj);
                                if (getProductsResponseObj && getProductsResponseObj.data) {
                                    let matchedProductSkus = [];
                                    for (var productIndex in getProductsResponseObj.data) {
                                        let productsObj = getProductsResponseObj.data[productIndex];
                                        for (let productVariantIndex in productsObj.variants) {
                                            let productVariantObj = productsObj.variants[productVariantIndex];
                                            if (productVariantObj.sku) {
                                                let productVariantSkuLowerCase = productVariantObj.sku.toLowerCase();
                                                if (productVariantSkuLowerCase.includes(quickAddItemSkuLowerCase)) {
                                                    matchedProductSkus.push(productVariantObj.sku);
                                                }
                                            }
                                        }
                                    }

                                    let $searchResultsContainer = $("[data-id='sku-search-results-container']");
                                    let matchedProductSkusHtml = "";
                                    if (matchedProductSkus.length > 0) {
                                        console.log(logTitle + "matchedProductSkus", matchedProductSkus);
                                        matchedProductSkusHtml += "<ul class='items-search-results' data-id='sku-search-results'>";
                                        for (let skuIndex in matchedProductSkus) {
                                            const productSku = matchedProductSkus[skuIndex];
                                            matchedProductSkusHtml += "<li data-class='matched-search-result'>";
                                            matchedProductSkusHtml += productSku;
                                            matchedProductSkusHtml += "</li>";
                                        }
                                        matchedProductSkusHtml += "</ul>";

                                    } else {
                                        matchedProductSkusHtml += "<div>No match found</div>";
                                    }
                                    $searchResultsContainer.html(matchedProductSkusHtml);
                                    $searchResultsContainer.css("display", "block");
                                    $overlay.hide();
                                }
                            })
                            .catch(error => {
                                console.error(logTitle + "error", error);
                                $overlay.hide();
                            })

                    } else {
                        alert("Please specify SKU")
                    }
                }
            } else if (dataClass == "matched-search-result") {
                console.log(logTitle + "dataClass", dataClass);
                console.log(logTitle + "targetObj", targetObj);
                const selectedSku = $(targetObj).html()
                console.log(logTitle + "selectedSku", selectedSku);
                let $quickAddSkuInput = $("[data-id='quick-add-item-sku']");
                if ($quickAddSkuInput && $quickAddSkuInput.length > 0) {
                    $quickAddSkuInput.val(selectedSku)
                }
            }
            if (dataClass != "search-matching-sku-results-btn") {
                let $searchResultsContainer = $("[data-id='sku-search-results-container']");
                if ($searchResultsContainer && $searchResultsContainer.length > 0) $searchResultsContainer.css("display", "none");
            }
            //Display SKU Search Results - END
            //Add to Cart with SKU - END
            const targetClasses = $(targetObj).attr("class");
            if (targetClasses && targetClasses.includes("quickview")) {
                $("body").on('submit', '[data-cart-item-add]', (event) => {
                    setTimeout(() => {
                        updatePlpCart('update_cart');
                    }, 2000);
                });
            }
        });
    } catch (e) {
        console.error("ERROR IN" + logTitle, e);
    }
}

function bindUpdatePlpCartEvent() {
    var logTitle = " bindUpdatePlpCartEvent() ";
    try {
        const elements = document.querySelectorAll('.plp-cart-product-quantity');
        Array.from(elements).forEach((element, index) => {
            console.log(logTitle + "index", index);
            console.log(logTitle + "element", element);
            $(element).on('change', (event) => {
                console.log(logTitle + "event", event)
                const targetObj = event.target;
                const parentObj = targetObj.parentNode;
                const cartId = $(parentObj).attr("data-cart-id");
                const cartItemId = $(parentObj).attr("data-cart-product-id");
                const productId = $(parentObj).attr("data-product-id");
                const variantId = $(parentObj).attr("data-product-variant-id");
                const cartItemQty = $(targetObj).val();
                if (cartId && cartItemId && productId) {
                    if (cartItemQty > 0) {
                        updateCartItem(cartId, cartItemId, productId, variantId, cartItemQty);
                    } else {
                        deleteCartItem(cartId, cartItemId);
                    }
                }

            });
        });
    } catch (e) {
        console.error("ERROR IN" + logTitle, e);
    }
}

function updateCartItem(cartId, cartItemId, productId, variantId, cartItemQty) {
    var logTitle = " updateCartItem() ";
    try {
        console.log(logTitle + "cartId : cartItemId : productId : variantId : cartItemQty", cartId + " : " + cartItemId + " : " + productId + " : " + +variantId + " : " + cartItemQty);

        var requestUrl = "/api/storefront/carts/" + cartId + "/items/" + cartItemId;
        var requestBody = {
            "lineItem": {
                productId,
                "quantity": cartItemQty
            }
        };
        if (variantId) requestBody.lineItem.variantId = variantId;
        fetch(requestUrl, {
                method: "PUT",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestBody),
            })
            .then(response => response.json())
            .then(responseObj => {
                if (responseObj.id) {
                    updatePlpCart('update_cart')
                }
            })

    } catch (e) {
        console.error("ERROR IN" + logTitle, e);
    }
}

//Add to Cart with SKU - START
function addCartItem(cartId, productId, variantId, cartItemQty, $overlay) {
    var logTitle = " addCartItem() ";
    try {
        var requestUrl = "/api/storefront/carts/" + cartId + "/items";
        var requestBody = {
            "lineItems": [{
                productId,
                variantId,
                "quantity": cartItemQty
            }]
        };
        fetch(requestUrl, {
                method: "POST",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestBody),
            })
            .then(response => response.json())
            .then(responseObj => {
                if (responseObj.id) {
                    updatePlpCart('update_cart')
                }
            })
            .catch(error => {
                $overlay.hide();
            })
    } catch (e) {
        console.error("ERROR IN" + logTitle, e);
    }
}
//Add to Cart with SKU - END
function deleteCartItem(cartId, cartItemId) {
    var logTitle = " deleteCartItem() ";
    try {
        var requestUrl = "/api/storefront/carts/" + cartId + "/items/" + cartItemId;
        fetch(requestUrl, {
                method: "DELETE",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            .then(response => response.json())
            .then(responseObj => {
                // console.log(logTitle+"responseObj", responseObj);
                if (responseObj.id) {
                    updatePlpCart('update_cart');
                }
            })
            .catch(
                (error) => {
                    console.log(logTitle + "reequest catch error", error)
                    // setTimeout(() => {
                    updatePlpCart('update_cart');
                    // }, 5000);
                }
            );
    } catch (e) {
        console.error("ERROR IN" + logTitle, e);
    }
}
