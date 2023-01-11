"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_custom_api-testing_js"],{

/***/ "./assets/js/theme/custom/api-testing.js":
/*!***********************************************!*\
  !*** ./assets/js/theme/custom/api-testing.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ apiTesting)
/* harmony export */ });
/* harmony import */ var _theme_page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../theme/page-manager */ "./assets/js/theme/page-manager.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var apiTesting = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(apiTesting, _PageManager);
  function apiTesting() {
    return _PageManager.apply(this, arguments) || this;
  }
  var _proto = apiTesting.prototype;
  _proto.onReady = function onReady() {
    alert("Hello world!");
  };
  return apiTesting;
}(_theme_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]); // get cart api

$('body').find('#btn-get-cart').on('click', function (event) {
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
$('body').find('#btn-create-cart').on('click', function (event) {
  fetch("/api/storefront/carts", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "lineItems": [{
        "quantity": 1,
        "productId": 107
      }, {
        "quantity": 1,
        "productId": 104
      }]
    })
  }).then(function (response) {
    return response.json();
  }).then(function (responseBody) {
    var responseText = JSON.stringify(responseBody, null, "\t");
    console.log('responseText', responseText);
    $("#api-output").html(responseText);
  });
});

//get checkout 
$('body').find('#btn-get-checkout').on('click', function (event) {
  var checkoutId = "174b39b3-11c3-4175-bcdc-fb9be6d2bd87";
  fetch("/api/storefront/checkouts/" + checkoutId, {
    method: "GET",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(function (response) {
    return response.json();
  }).then(function (responseBody) {
    console.log("responseBody", responseBody);
    var responseText = JSON.stringify(responseBody, null, "\t");
    console.log('responseText', responseText);
    $("#api-output").html(responseText);
  });
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jdXN0b21fYXBpLXRlc3RpbmdfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUQ7QUFBQSxJQUNoQ0MsVUFBVTtFQUFBO0VBQUE7SUFBQTtFQUFBO0VBQUE7RUFBQSxPQUMzQkMsT0FBTyxHQUFQLG1CQUFVO0lBQ05DLEtBQUssQ0FBQyxjQUFjLENBQUM7RUFDekIsQ0FBQztFQUFBO0FBQUEsRUFIbUNILDJEQUFXLEdBS25EO0FBTCtCO0FBTS9CSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQ0MsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDQyxLQUFLLEVBQUs7RUFDbkRDLEtBQUssQ0FBQyx1QkFBdUIsRUFBRTtJQUMzQkMsTUFBTSxFQUFFLEtBQUs7SUFDYkMsV0FBVyxFQUFFLGFBQWE7SUFDMUJDLE9BQU8sRUFBRTtNQUNMLGNBQWMsRUFBRTtJQUNwQjtFQUNKLENBQUMsQ0FBQyxDQUFDQyxJQUFJLENBQUMsVUFBVUMsUUFBUSxFQUFFO0lBQ3hCLE9BQU9BLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFO0VBQzFCLENBQUMsQ0FBQyxDQUFDRixJQUFJLENBQUMsVUFBVUcsWUFBWSxFQUFFO0lBQzVCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxjQUFjLEVBQUVGLFlBQVksQ0FBQztJQUN6QyxJQUFJRyxZQUFZLEdBQUdDLElBQUksQ0FBQ0MsU0FBUyxDQUFDTCxZQUFZLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztJQUMzRFgsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDaUIsSUFBSSxDQUFDSCxZQUFZLENBQUM7SUFDbkNGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixZQUFZLENBQUM7RUFDN0IsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDO0FBQ0Y7QUFDQVgsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQ0MsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDQyxLQUFLLEVBQUs7RUFDdERDLEtBQUssMEJBQTBCO0lBQ3ZCQyxNQUFNLEVBQUUsTUFBTTtJQUNkQyxXQUFXLEVBQUUsYUFBYTtJQUMxQkMsT0FBTyxFQUFFO01BQ0wsY0FBYyxFQUFFO0lBQ3BCLENBQUM7SUFDRFcsSUFBSSxFQUFFSCxJQUFJLENBQUNDLFNBQVMsQ0FBQztNQUNqQixXQUFXLEVBQUUsQ0FBQztRQUNOLFVBQVUsRUFBRSxDQUFDO1FBQ2IsV0FBVyxFQUFFO01BQ2pCLENBQUMsRUFDRDtRQUNJLFVBQVUsRUFBRSxDQUFDO1FBQ2IsV0FBVyxFQUFFO01BQ2pCLENBQUM7SUFFVCxDQUFDO0VBQ0wsQ0FBQyxDQUFDLENBQ0pSLElBQUksQ0FBQyxVQUFBQyxRQUFRO0lBQUEsT0FBSUEsUUFBUSxDQUFDQyxJQUFJLEVBQUU7RUFBQSxFQUFDLENBQUNGLElBQUksQ0FBQyxVQUFBRyxZQUFZLEVBQUk7SUFDcEQsSUFBSUcsWUFBWSxHQUFHQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0wsWUFBWSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7SUFDM0RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsRUFBQ0MsWUFBWSxDQUFDO0lBQ3hDZCxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUNpQixJQUFJLENBQUNILFlBQVksQ0FBQztFQUN2QyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7O0FBRUY7QUFDQWQsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQ0MsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDQyxLQUFLLEVBQUs7RUFDcEQsSUFBSWdCLFVBQVUsR0FBRyxzQ0FBc0M7RUFDdERmLEtBQUssQ0FBQyw0QkFBNEIsR0FBR2UsVUFBVSxFQUFFO0lBQzdDZCxNQUFNLEVBQUUsS0FBSztJQUNiQyxXQUFXLEVBQUUsYUFBYTtJQUMxQkMsT0FBTyxFQUFFO01BQ0wsY0FBYyxFQUFFO0lBQ3BCO0VBQ0osQ0FBQyxDQUFDLENBQUNDLElBQUksQ0FBQyxVQUFBQyxRQUFRLEVBQUk7SUFDaEIsT0FBT0EsUUFBUSxDQUFDQyxJQUFJLEVBQUU7RUFDMUIsQ0FBQyxDQUFDLENBQUNGLElBQUksQ0FBQyxVQUFBRyxZQUFZLEVBQUk7SUFDaEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsRUFBRUYsWUFBWSxDQUFDO0lBQ3pDLElBQUlHLFlBQVksR0FBR0MsSUFBSSxDQUFDQyxTQUFTLENBQUNMLFlBQVksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQzNEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxjQUFjLEVBQUNDLFlBQVksQ0FBQztJQUN4Q2QsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDaUIsSUFBSSxDQUFDSCxZQUFZLENBQUM7RUFDM0MsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY3VzdG9tL2FwaS10ZXN0aW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tIFwiLi8uLi8uLi90aGVtZS9wYWdlLW1hbmFnZXJcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgYXBpVGVzdGluZyBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcclxuICAgIG9uUmVhZHkoKSB7XHJcbiAgICAgICAgYWxlcnQoXCJIZWxsbyB3b3JsZCFcIik7XHJcbiAgICB9XHJcbn1cclxuLy8gZ2V0IGNhcnQgYXBpXHJcbiQoJ2JvZHknKS5maW5kKCcjYnRuLWdldC1jYXJ0Jykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICBmZXRjaCgnL2FwaS9zdG9yZWZyb250L2NhcnRzJywge1xyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgfVxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2VCb2R5KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Jlc3BvbnNlQm9keScsIHJlc3BvbnNlQm9keSk7XHJcbiAgICAgICAgdmFyIHJlc3BvbnNlVGV4dCA9IEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlQm9keSwgbnVsbCwgXCJcXHRcIik7XHJcbiAgICAgICAgJChcIiNhcGktb3V0cHV0XCIpLmh0bWwocmVzcG9uc2VUZXh0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZUJvZHkpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4vLyBjcmVhdGUgY2FydCBhcGlcclxuJCgnYm9keScpLmZpbmQoJyNidG4tY3JlYXRlLWNhcnQnKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgIGZldGNoKGAvYXBpL3N0b3JlZnJvbnQvY2FydHNgLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIFwibGluZUl0ZW1zXCI6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9kdWN0SWRcIjogMTA3XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9kdWN0SWRcIjogMTA0XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pIFxyXG4gICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbihyZXNwb25zZUJvZHkgPT4ge1xyXG4gICAgICAgICB2YXIgcmVzcG9uc2VUZXh0ID0gSlNPTi5zdHJpbmdpZnkocmVzcG9uc2VCb2R5LCBudWxsLCBcIlxcdFwiKTtcclxuICAgICAgICAgY29uc29sZS5sb2coJ3Jlc3BvbnNlVGV4dCcscmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgJChcIiNhcGktb3V0cHV0XCIpLmh0bWwocmVzcG9uc2VUZXh0KTtcclxuICAgICB9KTtcclxufSk7XHJcblxyXG4vL2dldCBjaGVja291dCBcclxuJCgnYm9keScpLmZpbmQoJyNidG4tZ2V0LWNoZWNrb3V0Jykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICB2YXIgY2hlY2tvdXRJZCA9IFwiMTc0YjM5YjMtMTFjMy00MTc1LWJjZGMtZmI5YmU2ZDJiZDg3XCJcclxuICAgICAgICBmZXRjaChcIi9hcGkvc3RvcmVmcm9udC9jaGVja291dHMvXCIgKyBjaGVja291dElkLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgfSkudGhlbihyZXNwb25zZUJvZHkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZUJvZHlcIiwgcmVzcG9uc2VCb2R5KTtcclxuICAgICAgICAgICAgICAgIHZhciByZXNwb25zZVRleHQgPSBKU09OLnN0cmluZ2lmeShyZXNwb25zZUJvZHksIG51bGwsIFwiXFx0XCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Jlc3BvbnNlVGV4dCcscmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICQoXCIjYXBpLW91dHB1dFwiKS5odG1sKHJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuIl0sIm5hbWVzIjpbIlBhZ2VNYW5hZ2VyIiwiYXBpVGVzdGluZyIsIm9uUmVhZHkiLCJhbGVydCIsIiQiLCJmaW5kIiwib24iLCJldmVudCIsImZldGNoIiwibWV0aG9kIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInJlc3BvbnNlQm9keSIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZVRleHQiLCJKU09OIiwic3RyaW5naWZ5IiwiaHRtbCIsImJvZHkiLCJjaGVja291dElkIl0sInNvdXJjZVJvb3QiOiIifQ==