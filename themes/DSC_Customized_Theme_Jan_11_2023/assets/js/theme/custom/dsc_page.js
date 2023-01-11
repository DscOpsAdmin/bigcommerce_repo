import PageManager from './../../theme/page-manager';
import utils from '@bigcommerce/stencil-utils';
import customerViewedProducts from './customerviewedproducts';
import {
    defaultModal,
    ModalEvents
} from './../../theme/global/modal';
import DataTable from "../../lib/jquery.dataTables.min.js"
export default class ProductCustom extends PageManager {
    constructor(context) {
        super(context);
    }
    onReady() {
       /*  const $customerviewed = $('[customer-viewed-products]');
        // console.log('$customerviewed in dsc-page', $customerviewed)
        console.log('$customerviewed Length',$customerviewed.length)
        if ($customerviewed.length == 1) 
        {
            customerViewedProducts();
        }
        console.log('working dsc page') */
        var logTitle = "ProductCustom :: onReady() ";
        try {
            // console.log(logTitle + "this.context", this.context);
            $('#example').DataTable();
            this.bindEvents(this.context.newProducts);
        } catch (e) {
            console.error("ERROR IN" + logTitle, e);
        }
    }
    bindEvents(newProducts) {
        var logTitle = "ProductCustom :: bindEvents() ";
        // console.log(logTitle + "newProducts", newProducts);
        try {
            //Using JS Modules with HTML
            $('body').find('#print-js-message-btn').on('click', (event) => {
                $("#js-output").html("You just clicked on 'Print Message' button.");
            });
            $('body').find('#clear-js-message-btn').on('click', (event) => {
                $("#js-output").html("");
            });
            $('body').find('#print-product-names-btn').on('click', (event) => {
                var productNamesHtml = "<ol>";
                for (var index in newProducts) {
                    var productObj = newProducts[index];
                    productNamesHtml += "<li>" + productObj.name + "</li>"
                }
                productNamesHtml += "</ol>";
                $("#js-output").html(productNamesHtml);
            });

            //BigCommerce Storefront APIs
            //Cart APIs
            $('body').find('#btn-create-cart').on('click', (event) => {
                this.createCart();
            });
            $('body').find('#btn-get-cart').on('click', (event) => {
                this.getCart('get_cart');
            });
            $('body').find('#btn-delete-cart').on('click', (event) => {
                this.getCart('delete_cart');
            });
            $('body').find('#btn-add-cart-item').on('click', (event) => {
                this.getCart('add_cart_item');
            });
            $('body').find('#btn-delete-cart-item').on('click', (event) => {
                this.getCart('delete_cart_item');
            });
            //Checkout APIs
            $('body').find('#btn-get-checkout').on('click', (event) => {
                this.getCart('get_checkout');
            });
            $('body').find('#btn-update-customer-messages').on('click', (event) => {
                this.getCart('update_customer_messages');
            });
            
            $('body').find('#btn-add-bill-address').on('click', (event) => {
                this.getCart('add_bill_address');
            });

            //Order APIs
            $('body').find('#btn-get-order').on('click', (event) => {
                this.getOrder('get_order');
            });

            //Rendering HTML with Ajax
            $('body').find('#btn-open-product-quick-view').on('click', (event) => {
                var newestProductObj = newProducts[0];
                this.openProductQuickView(newestProductObj.id);
            });


        } catch (e) {
            console.error("ERROR IN" + logTitle, e);
        }
    }
    openProductQuickView(newestProductId) {
        var logTitle = " openProductQuickView() ";
        try {
            const modal = defaultModal();
            modal.open({
                size: 'large'
            });
            utils.api.product.getById(newestProductId, {
                template: 'products/quick-view'
            }, (err, responseObj) => {
                if (err) return;
                console.log(logTitle + "responseObj", responseObj);
                modal.updateContent(responseObj);
            });
        } catch (e) {
            console.error("ERROR IN" + logTitle, e);
        }
    }
    createCart() {
        var logTitle = " createCart() ";
        try {
            var requestBody = {
                "lineItems": [{
                        "quantity": 1,
                        "productId": 121,
                    }, {
                        "quantity": 2,
                        "productId": 120,
                    },
                    {
                        "quantity": 3,
                        "productId": 118,
                    }
                ]
            };
            var requestUrl = "/api/storefront/carts";
            console.log('requestUrl', requestUrl)
            fetch(requestUrl, {
                method: "POST",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestBody)
            }).then(response => response.json()).then(responseBody => {
                var responseText = JSON.stringify(responseBody, null, "\t");
                $("#api-output").html(responseText);
            });
        } catch (e) {
            console.error("ERROR IN" + logTitle, e);
        }
    }
    getCart(actionName) {
        var logTitle = " getCart() ";
        try {
            var requestUrl = "/api/storefront/carts";
            var requestUrlWithParams = "/api/storefront/carts?include=lineItems.digitalItems.options,lineItems.physicalItems.options";
            console.log('requestUrlWithParams', requestUrlWithParams);
            fetch(requestUrlWithParams, {
                method: "GET",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(response => {
                return response.json()
            }).then(responseBody => {
                if (actionName == "get_cart") {
                    var responseText = JSON.stringify(responseBody, null, "\t");
                    $("#api-output").html(responseText);
                } else if (actionName == "delete_cart") {
                    if (responseBody && responseBody[0] && responseBody[0].id) {
                        var cartId = responseBody[0].id;
                        this.deleteCart(cartId);
                    }
                } else if (actionName == "add_cart_item") {
                    if (responseBody && responseBody[0] && responseBody[0].id) {
                        var cartId = responseBody[0].id;
                        this.addCartItem(cartId);
                    }
                } else if (actionName == "delete_cart_item") {
                    if (responseBody && responseBody[0] && responseBody[0].id) {
                        var cartId = responseBody[0].id;
                        var firstCartItemId = responseBody[0].lineItems.physicalItems[0].id;
                        this.deleteCartItem(cartId, firstCartItemId);
                    }
                } else if (actionName == "get_checkout") {
                    console.log(logTitle + "responseBody", responseBody);
                    var checkoutId = responseBody[0].id;
                    this.getCheckout(checkoutId, 'get_checkout');
                } else if (actionName == "update_customer_messages") {
                    var checkoutId = responseBody[0].id;
                    //Adds Order Comments on Checkout using storefront api
                    this.updateCustomerMessages(checkoutId);
                } else if (actionName == "add_bill_address") {
                    var checkoutId = responseBody[0].id;
                    this.addBillAddress(checkoutId);
                }

            });
        } catch (e) {
            console.error("ERROR IN" + logTitle, e);
        }
    }
    deleteCart(cartId) {
        var logTitle = " deleteCart() ";
        try {
            var requestUrl = "/api/storefront/carts/" + cartId;

            console.log(logTitle + "requestUrl", requestUrl);
            fetch(requestUrl, {
                method: "DELETE",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(responseObj => {
                $("#api-output").html("");
            })
        } catch (e) {
            console.error("ERROR IN" + logTitle, e);
        }
    }

    addCartItem(cartId, firstCartItemId) {
        var logTitle = " addCartItem() ";
        try {
            var requestUrl = "/api/storefront/carts/" + cartId + "/items";
            var requestBody = {
                "lineItems": [{
                    "quantity": 2,
                    "productId": 121
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
                .then(responseBody => {
                    console.log(logTitle + "responseBody", responseBody);
                    var responseText = JSON.stringify(responseBody, null, "\t");
                    $("#api-output").html(responseText);
                })
        } catch (e) {
            console.error("ERROR IN" + logTitle, e);
        }
    }

    deleteCartItem(cartId, cartItemId) {
        var logTitle = " deleteCartItem() ";
        try {
            var requestUrl = "/api/storefront/carts/" + cartId + "/items/" + cartItemId;
            fetch(requestUrl, {
                method: "DELETE",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                }
            }).then(response => {
                $("#api-output").html("");
            });
        } catch (e) {
            console.error("ERROR IN" + logTitle, e);
        }
    }

    getCheckout(checkoutId, actionName) {
        var logTitle = " getCheckout() ";
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
            }).then(responseBody => {
                if (actionName == "get_checkout") {
                    console.log(logTitle + "responseBody", responseBody);
                    var responseText = JSON.stringify(responseBody, null, "\t");
                    console.log('responseText', responseText);
                    $("#api-output").html(responseText);
                }
            });
        } catch (e) {
            console.error("ERROR IN" + logTitle, e);
        }
    }

    updateCustomerMessages(checkoutId) {
        var logTitle = " updateCustomerMessages() ";
        try {
            var requestUrl = "/api/storefront/checkouts/" + checkoutId;
            var requestBody = {
                "customerMessage": "A Message from Customer!"
            };
            fetch(requestUrl, {
                method: "PUT",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestBody)
            }).then(response => {
                return response.json()
            }).then(responseBody => {
                console.log(logTitle + "responseBody", responseBody);
                var responseText = JSON.stringify(responseBody, null, "\t");
                $("#api-output").html(responseText);
            })
        } catch (e) {
            console.error("ERROR IN" + logTitle, e);
        }
    }

    addBillAddress(checkoutId) {
        var logTitle = " addBillAddress() ";
        try {
            var requestUrl = "/api/storefront/checkouts/" + checkoutId + "/billing-address";
            var requestBody = {
                "firstName": "Jane",
                "lastName": "Doe",
                "email": "janedoe@email.com",
                "company": "BigCommerce",
                "address1": "123 Main Street",
                "address2": "Apt 1",
                "city": "Austin",
                "stateOrProvinceCode": "TX",
                "countryCode": "USA",
                "postalCode": "78751"
            };
            fetch(requestUrl, {
                method: "POST",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestBody)
            }).then(response => {
                return response.json()
            }).then(responseBody => {
                var responseText = JSON.stringify(responseBody, null, "\t");
                $("#api-output").html(responseText);
            });
        } catch (e) {
            console.error("ERROR IN" + logTitle, e);
        }
    }

    getOrder(actionName) {
        var logTitle = " actionName() ";
        try {
            var orderId = $("#input-customer-order-id").val();
            console.log("orderId:", orderId)
            if (orderId) {
                var requestUrl = "/api/storefront/orders/" + orderId;
                fetch(requestUrl, {
                        method: "GET",
                        credentials: "same-origin",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                    .then(response => response.json())
                    .then(responseObj => {
                        console.log(logTitle + "responseObj", responseObj);
                        var responseText = JSON.stringify(responseObj, null, "\t");
                        $("#api-output").html(responseText);
                    });
            } else {
                alert("Please first enter order id in the given text field.")
            }
        } catch (e) {
            console.error("ERROR IN" + logTitle, e)
        }
    }

}
