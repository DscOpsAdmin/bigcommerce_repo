import PageManager from "./../../theme/page-manager";
export default class apiTesting extends PageManager {
    onReady() {
        alert("Hello world!");
    }
}
// get cart api
$('body').find('#btn-get-cart').on('click', (event) => {
    fetch('/api/storefront/carts', {
        method: "GET",
        credentials: 'same-origin',
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function (response) {
        return response.json();
    }).then(function (responseBody) {
        console.log('responseBody', responseBody);
        var responseText = JSON.stringify(responseBody, null, "\t");
        $("#api-output").html(responseText);
        console.log(responseBody);
    });
});
// create cart api
$('body').find('#btn-create-cart').on('click', (event) => {
    fetch(`/api/storefront/carts`, {
            method: "POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "lineItems": [{
                        "quantity": 1,
                        "productId": 107
                    },
                    {
                        "quantity": 1,
                        "productId": 104
                    }
                ]
            })
        }) 
     .then(response => response.json()).then(responseBody => {
         var responseText = JSON.stringify(responseBody, null, "\t");
         console.log('responseText',responseText);
         $("#api-output").html(responseText);
     });
});

//get checkout 
$('body').find('#btn-get-checkout').on('click', (event) => {
       var checkoutId = "174b39b3-11c3-4175-bcdc-fb9be6d2bd87"
        fetch("/api/storefront/checkouts/" + checkoutId, {
            method: "GET",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            return response.json()
        }).then(responseBody => {
                console.log("responseBody", responseBody);
                var responseText = JSON.stringify(responseBody, null, "\t");
                console.log('responseText',responseText);
                $("#api-output").html(responseText);
        });
    });
