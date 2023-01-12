"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_common_utils_translations-utils_js-assets_js_theme_custom_product-listing_js"],{

/***/ "./assets/js/dsc_utils/getallproducts.js":
/*!***********************************************!*\
  !*** ./assets/js/dsc_utils/getallproducts.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getAllProducts)
/* harmony export */ });
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function getAllProducts(_x, _x2) {
  return _getAllProducts.apply(this, arguments);
}
function _getAllProducts() {
  _getAllProducts = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(storeHash, accessToken) {
    var logTitle, requestBody;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          logTitle = " getAllProducts() ";
          _context.prev = 1;
          requestBody = {
            storeHash: storeHash,
            accessToken: accessToken
          };
          return _context.abrupt("return", fetch("https://f52f-119-153-103-211.ngrok.io/api/bigcommerce/get_products", {
            method: "POST",
            headers: {
              'Access-Control-Allow-Origin': "*",
              'Access-Control-Allow-Methods': 'PUT, POST, PATCH, DELETE, GET',
              'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept, Authorization",
              'Content-Type': 'application/json',
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'
            },
            body: JSON.stringify(requestBody)
          }));
        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](1);
          console.error("ERROR IN" + logTitle, _context.t0);
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 6]]);
  }));
  return _getAllProducts.apply(this, arguments);
}

/***/ }),

/***/ "./assets/js/theme/common/utils/translations-utils.js":
/*!************************************************************!*\
  !*** ./assets/js/theme/common/utils/translations-utils.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslationDictionary": () => (/* binding */ createTranslationDictionary)
/* harmony export */ });
var TRANSLATIONS = 'translations';
var isTranslationDictionaryNotEmpty = function isTranslationDictionaryNotEmpty(dictionary) {
  return !!Object.keys(dictionary[TRANSLATIONS]).length;
};
var chooseActiveDictionary = function chooseActiveDictionary() {
  for (var i = 0; i < arguments.length; i++) {
    var dictionary = JSON.parse(i < 0 || arguments.length <= i ? undefined : arguments[i]);
    if (isTranslationDictionaryNotEmpty(dictionary)) {
      return dictionary;
    }
  }
};

/**
 * defines Translation Dictionary to use
 * @param context provides access to 3 validation JSONs from en.json:
 * validation_messages, validation_fallback_messages and default_messages
 * @returns {Object}
 */
var createTranslationDictionary = function createTranslationDictionary(context) {
  var validationDictionaryJSON = context.validationDictionaryJSON,
    validationFallbackDictionaryJSON = context.validationFallbackDictionaryJSON,
    validationDefaultDictionaryJSON = context.validationDefaultDictionaryJSON;
  var activeDictionary = chooseActiveDictionary(validationDictionaryJSON, validationFallbackDictionaryJSON, validationDefaultDictionaryJSON);
  var localizations = Object.values(activeDictionary[TRANSLATIONS]);
  var translationKeys = Object.keys(activeDictionary[TRANSLATIONS]).map(function (key) {
    return key.split('.').pop();
  });
  return translationKeys.reduce(function (acc, key, i) {
    acc[key] = localizations[i];
    return acc;
  }, {});
};

/***/ }),

/***/ "./assets/js/theme/custom/product-listing.js":
/*!***************************************************!*\
  !*** ./assets/js/theme/custom/product-listing.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plpCartBindEvents": () => (/* binding */ plpCartBindEvents),
/* harmony export */   "updatePlpCart": () => (/* binding */ updatePlpCart)
/* harmony export */ });
/* harmony import */ var _dsc_utils_getallproducts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dsc_utils/getallproducts */ "./assets/js/dsc_utils/getallproducts.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

function updatePlpCart(actionName) {
  var logTitle = " updatePlpCart() ";
  try {
    var _$overlay = $('[data-plp-cart] .loadingOverlay');
    console.log(logTitle + "$overlay", _$overlay);
    _$overlay.show();
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
        var cartTotalItems = 0;
        var cartSubtotal = 0.00;
        var cartTaxTotal = 0.00;
        var cartGrandTotal = 0.00;
        var cartHasProducts = false;
        var cartItemsHtml = "";
        cartItemsHtml += "<table data-class='plp-order-summary-products-table'>";
        for (var index1 in cartsResponseArray) {
          var cartObj = cartsResponseArray[index1];
          if (index1 == 0 && cartObj) {
            var quickAddSkuButtonDom = $("[data-class='quick-add-sku-button']");
            if (quickAddSkuButtonDom) quickAddSkuButtonDom.attr("data-cart-id", cartObj.id);
          }
          for (var lineItemType in cartObj.lineItems) {
            var itemTypeDataArray = cartObj.lineItems[lineItemType];
            for (var index2 in itemTypeDataArray) {
              var itemObj = itemTypeDataArray[index2];
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
              var cartItemName = itemObj.name;
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
            }
            ;
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
              }).then(function (response) {
                return response.json();
              }).then(function (checkoutResponseObj) {
                cartTaxTotal = parseFloat(checkoutResponseObj.taxTotal);
                cartSubtotal = parseFloat(checkoutResponseObj.subtotal);
                cartGrandTotal = parseFloat(checkoutResponseObj.grandTotal);
                $("#api-total-items").html(cartTotalItems);
                $("#api-taxtotal").html(cartTaxTotal.toFixed(2));
                $("#api-subtotal").html(cartSubtotal.toFixed(2));
                $("#api-grandtotal").html(cartGrandTotal.toFixed(2));
                _$overlay.hide();
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
        // $("[data-class='quick-add-sku-button']").removeClass("data-cart-id"); //Not Working
        $("[data-class='quick-add-sku-button']").attr("data-cart-id", "");
        $("#plp-order-summary-products").html("Your cart is empty");
        $("#api-total-items").html("0");
        $("#api-taxtotal").html("0.00");
        $("#api-subtotal").html("0.00");
        $("#api-grandtotal").html("0.00");
        _$overlay.hide();
      }
    });
  } catch (e) {
    console.error("ERROR IN" + logTitle, e);
  }
}
function plpCartBindEvents() {
  var logTitle = " plpCartBindEvents() ";
  try {
    console.log(logTitle, "EXECUTED!");
    $("body").on('click', function (event) {
      var targetObj = event.target;
      var dataClass = $(targetObj).attr("data-class");
      if (dataClass == "remove-from-plp-cart") {
        var cartId = $(targetObj).attr("data-cart-id");
        var cartItemId = $(targetObj).attr("data-product-id");
        if (cartId && cartItemId) {
          deleteCartItem(cartId, cartItemId);
        }
      }
      //Add to Cart with SKU - START
      else if (dataClass == "quick-add-sku-button") {
        var _cartId = $("[data-class='quick-add-sku-button']").attr("data-cart-id");
        console.log(logTitle + "cartId 1", _cartId);
        performQuickAddSkuOperations(_cartId, dataClass);
      }
      //Display SKU Search Results - START
      else if (dataClass == "search-matching-sku-results-btn") {
        var $quickAddSkuInput = $("[data-id='quick-add-item-sku']");
        if ($quickAddSkuInput && $quickAddSkuInput.length > 0) {
          var quickAddItemSkuLowerCase = $quickAddSkuInput.val().toLowerCase();
          console.log(logTitle + "quickAddItemSkuLowerCase", quickAddItemSkuLowerCase);
          if (quickAddItemSkuLowerCase) {
            var _$overlay2 = $('[data-plp-cart] .loadingOverlay');
            _$overlay2.show();
            (0,_dsc_utils_getallproducts__WEBPACK_IMPORTED_MODULE_0__["default"])("l1m6wbgej9", "t1v78525y56m540j8kx7rrzoa4cc32u").then(function (response) {
              return response.json();
            }).then(function (getProductsResponseObj) {
              console.log(logTitle + "getProductsResponseObj", getProductsResponseObj);
              if (getProductsResponseObj && getProductsResponseObj.data) {
                var matchedProductSkus = [];
                for (var productIndex in getProductsResponseObj.data) {
                  var productsObj = getProductsResponseObj.data[productIndex];
                  for (var productVariantIndex in productsObj.variants) {
                    var productVariantObj = productsObj.variants[productVariantIndex];
                    if (productVariantObj.sku) {
                      var productVariantSkuLowerCase = productVariantObj.sku.toLowerCase();
                      if (productVariantSkuLowerCase.includes(quickAddItemSkuLowerCase)) {
                        matchedProductSkus.push(productVariantObj.sku);
                      }
                    }
                  }
                }
                var $searchResultsContainer = $("[data-id='sku-search-results-container']");
                var matchedProductSkusHtml = "";
                if (matchedProductSkus.length > 0) {
                  console.log(logTitle + "matchedProductSkus", matchedProductSkus);
                  matchedProductSkusHtml += "<ul class='items-search-results' data-id='sku-search-results'>";
                  for (var skuIndex in matchedProductSkus) {
                    var productSku = matchedProductSkus[skuIndex];
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
                _$overlay2.hide();
              }
            })["catch"](function (error) {
              console.error(logTitle + "error", error);
              _$overlay2.hide();
            });
          } else {
            alert("Please specify SKU");
          }
        }
      } else if (dataClass == "matched-search-result") {
        console.log(logTitle + "dataClass", dataClass);
        console.log(logTitle + "targetObj", targetObj);
        var selectedSku = $(targetObj).html();
        console.log(logTitle + "selectedSku", selectedSku);
        var _$quickAddSkuInput = $("[data-id='quick-add-item-sku']");
        if (_$quickAddSkuInput && _$quickAddSkuInput.length > 0) {
          _$quickAddSkuInput.val(selectedSku);
        }
      }
      if (dataClass != "search-matching-sku-results-btn") {
        var $searchResultsContainer = $("[data-id='sku-search-results-container']");
        if ($searchResultsContainer && $searchResultsContainer.length > 0) $searchResultsContainer.css("display", "none");
      }
      //Display SKU Search Results - END
      //Add to Cart with SKU - END
      var targetClasses = $(targetObj).attr("class");
      if (targetClasses && targetClasses.includes("quickview")) {
        $("body").on('submit', '[data-cart-item-add]', function (event) {
          setTimeout(function () {
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
    var elements = document.querySelectorAll('.plp-cart-product-quantity');
    Array.from(elements).forEach(function (element, index) {
      console.log(logTitle + "index", index);
      console.log(logTitle + "element", element);
      $(element).on('change', function (event) {
        console.log(logTitle + "event", event);
        var targetObj = event.target;
        var parentObj = targetObj.parentNode;
        var cartId = $(parentObj).attr("data-cart-id");
        var cartItemId = $(parentObj).attr("data-cart-product-id");
        var productId = $(parentObj).attr("data-product-id");
        var variantId = $(parentObj).attr("data-product-variant-id");
        var cartItemQty = $(targetObj).val();
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
        productId: productId,
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
      body: JSON.stringify(requestBody)
    }).then(function (response) {
      return response.json();
    }).then(function (responseObj) {
      if (responseObj.id) {
        updatePlpCart('update_cart');
      }
    });
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
        productId: productId,
        variantId: variantId,
        "quantity": cartItemQty
      }]
    };
    fetch(requestUrl, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    }).then(function (response) {
      return response.json();
    }).then(function (responseObj) {
      if (responseObj.id) {
        updatePlpCart('update_cart');
      }
    })["catch"](function (error) {
      $overlay.hide();
    });
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
        "Content-Type": "application/json"
      }
    }).then(function (response) {
      return response.json();
    }).then(function (responseObj) {
      // console.log(logTitle+"responseObj", responseObj);
      if (responseObj.id) {
        updatePlpCart('update_cart');
      }
    })["catch"](function (error) {
      console.log(logTitle + "reequest catch error", error);
      // setTimeout(() => {
      updatePlpCart('update_cart');
      // }, 2000);
    });
  } catch (e) {
    console.error("ERROR IN" + logTitle, e);
  }
}
function performQuickAddSkuOperations(cartId, dataClass) {
  var logTitle = " performQuickAddSkuOperations() ";
  try {
    console.log(logTitle + "dataClass", dataClass);
    var quickAddItemSku = $("[data-id='quick-add-item-sku']").val();
    var quickAddItemQty = $("[data-id='quick-add-item-qty']").val();
    quickAddItemQty = quickAddItemQty ? parseFloat(quickAddItemQty) : 0;
    if (quickAddItemSku && quickAddItemQty) {
      if (quickAddItemQty > 0) {
        console.log(logTitle + "quickAddItemSku", quickAddItemSku);
        console.log(logTitle + "quickAddItemQty", quickAddItemQty);
        var _$overlay3 = $('[data-plp-cart] .loadingOverlay');
        _$overlay3.show();
        (0,_dsc_utils_getallproducts__WEBPACK_IMPORTED_MODULE_0__["default"])("l1m6wbgej9", "t1v78525y56m540j8kx7rrzoa4cc32u").then(function (response) {
          return response.json();
        }).then(function (getProductsResponseObj) {
          console.log(logTitle + "getProductsResponseObj", getProductsResponseObj);
          var productsSkuMapObj = {};
          if (getProductsResponseObj && getProductsResponseObj.data) {
            for (var productIndex in getProductsResponseObj.data) {
              var productsObj = getProductsResponseObj.data[productIndex];
              for (var productVariantIndex in productsObj.variants) {
                var productVariantObj = productsObj.variants[productVariantIndex];
                if (productVariantObj.sku && !productsSkuMapObj[productVariantObj.sku]) productsSkuMapObj[productVariantObj.sku] = productVariantObj;
              }
            }
            console.log(logTitle + "productsSkuMapObj", productsSkuMapObj);
            console.log(logTitle + "productsSkuMapObj[quickAddItemSku]", productsSkuMapObj[quickAddItemSku]);
            if (productsSkuMapObj[quickAddItemSku]) {
              console.log(logTitle + "cartId", cartId);
              if (cartId) {
                addCartItem(cartId, productsSkuMapObj[quickAddItemSku].product_id, productsSkuMapObj[quickAddItemSku].id, quickAddItemQty, _$overlay3);
              } else {
                var requestBodyLineItems = [{
                  "productId": productsSkuMapObj[quickAddItemSku].product_id,
                  "variantId": productsSkuMapObj[quickAddItemSku].id,
                  "quantity": quickAddItemQty
                }];
                createCart(requestBodyLineItems, _$overlay3);
              }
            } else {
              alert("Provided SKU does not exist!");
              _$overlay3.hide();
            }
          } else {
            _$overlay3.hide();
          }
        })["catch"](function (error) {
          console.error(logTitle + "error", error);
          _$overlay3.hide();
        });
      } else {
        alert("Quantity must be greater than zero");
      }
    } else {
      alert("Please specify both SKU & item quantity");
    }
  } catch (e) {
    console.error("ERROR IN" + logTitle, e);
  }
}
function createCart(requestBodyLineItems) {
  var logTitle = " createCart() ";
  try {
    var requestBody = {
      "lineItems": requestBodyLineItems
    };
    var requestUrl = "/api/storefront/carts";
    console.log('requestUrl', requestUrl);
    fetch(requestUrl, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    }).then(function (response) {
      return response.json();
    }).then(function (createCartResponseBody) {
      console.log(logTitle + "createCartResponseBody", createCartResponseBody);
      if (createCartResponseBody.id) {
        updatePlpCart('update_cart');
      }
    })["catch"](function (error) {
      $overlay.hide();
    });
  } catch (e) {
    console.error("ERROR IN" + logTitle, e);
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jb21tb25fdXRpbHNfdHJhbnNsYXRpb25zLXV0aWxzX2pzLWFzc2V0c19qc190aGVtZV9jdXN0b21fcHJvZHVjdC1saXN0aW5nX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7K0NBQ0E7QUFBQTtBQUFBO0FBRGUsU0FBZUEsY0FBYztFQUFBO0FBQUE7QUFzQjNDO0VBQUEsNkVBdEJjLGlCQUE4QkMsU0FBUyxFQUFFQyxXQUFXO0lBQUE7SUFBQTtNQUFBO1FBQUE7VUFDekRDLFFBQVEsR0FBRyxvQkFBb0I7VUFBQTtVQUUzQkMsV0FBVyxHQUFHO1lBQ2hCSCxTQUFTLEVBQVRBLFNBQVM7WUFDVEMsV0FBVyxFQUFYQTtVQUNKLENBQUM7VUFBQSxpQ0FDTUcsS0FBSyxDQUFDLG9FQUFvRSxFQUFFO1lBQy9FQyxNQUFNLEVBQUUsTUFBTTtZQUNkQyxPQUFPLEVBQUU7Y0FDTCw2QkFBNkIsRUFBRSxHQUFHO2NBQ2xDLDhCQUE4QixFQUFFLCtCQUErQjtjQUMvRCw4QkFBOEIsRUFBRSwrREFBK0Q7Y0FDL0YsY0FBYyxFQUFFLGtCQUFrQjtjQUNsQyxZQUFZLEVBQUU7WUFDbEIsQ0FBQztZQUNEQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDTixXQUFXO1VBQ3BDLENBQUMsQ0FBQztRQUFBO1VBQUE7VUFBQTtVQUdGTyxPQUFPLENBQUNDLEtBQUssQ0FBQyxVQUFVLEdBQUdULFFBQVEsY0FBSTtRQUFBO1FBQUE7VUFBQTtNQUFBO0lBQUE7RUFBQSxDQUU5QztFQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FDdEJELElBQU1VLFlBQVksR0FBRyxjQUFjO0FBQ25DLElBQU1DLCtCQUErQixHQUFHLFNBQWxDQSwrQkFBK0IsQ0FBSUMsVUFBVTtFQUFBLE9BQUssQ0FBQyxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ0YsVUFBVSxDQUFDRixZQUFZLENBQUMsQ0FBQyxDQUFDSyxNQUFNO0FBQUE7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RTtJQUNuQixDQUFDLENBQUM7RUFDTixDQUFDLENBQUMsT0FBT0MsQ0FBQyxFQUFFO0lBQ1I1RSxPQUFPLENBQUNDLEtBQUssQ0FBQyxVQUFVLEdBQUdULFFBQVEsRUFBRW9GLENBQUMsQ0FBQztFQUMzQztBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvZHNjX3V0aWxzL2dldGFsbHByb2R1Y3RzLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY3VzdG9tL3Byb2R1Y3QtbGlzdGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQcm9kdWN0cyhzdG9yZUhhc2gsIGFjY2Vzc1Rva2VuKSB7XHJcbiAgICBjb25zdCBsb2dUaXRsZSA9IFwiIGdldEFsbFByb2R1Y3RzKCkgXCI7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RCb2R5ID0ge1xyXG4gICAgICAgICAgICBzdG9yZUhhc2gsXHJcbiAgICAgICAgICAgIGFjY2Vzc1Rva2VuLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKFwiaHR0cHM6Ly9mNTJmLTExOS0xNTMtMTAzLTIxMS5uZ3Jvay5pby9hcGkvYmlnY29tbWVyY2UvZ2V0X3Byb2R1Y3RzXCIsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6IFwiKlwiLFxyXG4gICAgICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnOiAnUFVULCBQT1NULCBQQVRDSCwgREVMRVRFLCBHRVQnLFxyXG4gICAgICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnOiBcIk9yaWdpbiwgWC1SZXF1ZXN0ZWQtV2l0aCwgQ29udGVudC1UeXBlLCBBY2NlcHQsIEF1dGhvcml6YXRpb25cIixcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnVXNlci1BZ2VudCc6ICdNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTA3LjAuMC4wIFNhZmFyaS81MzcuMzYnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcXVlc3RCb2R5KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFUlJPUiBJTlwiICsgbG9nVGl0bGUsIGUpXHJcbiAgICB9XHJcbn1cclxuIiwiY29uc3QgVFJBTlNMQVRJT05TID0gJ3RyYW5zbGF0aW9ucyc7XG5jb25zdCBpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5ID0gKGRpY3Rpb25hcnkpID0+ICEhT2JqZWN0LmtleXMoZGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKS5sZW5ndGg7XG5jb25zdCBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5ID0gKC4uLmRpY3Rpb25hcnlKc29uTGlzdCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGljdGlvbmFyeUpzb25MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRpY3Rpb25hcnkgPSBKU09OLnBhcnNlKGRpY3Rpb25hcnlKc29uTGlzdFtpXSk7XG4gICAgICAgIGlmIChpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5KGRpY3Rpb25hcnkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZGljdGlvbmFyeTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICogZGVmaW5lcyBUcmFuc2xhdGlvbiBEaWN0aW9uYXJ5IHRvIHVzZVxuICogQHBhcmFtIGNvbnRleHQgcHJvdmlkZXMgYWNjZXNzIHRvIDMgdmFsaWRhdGlvbiBKU09OcyBmcm9tIGVuLmpzb246XG4gKiB2YWxpZGF0aW9uX21lc3NhZ2VzLCB2YWxpZGF0aW9uX2ZhbGxiYWNrX21lc3NhZ2VzIGFuZCBkZWZhdWx0X21lc3NhZ2VzXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5ID0gKGNvbnRleHQpID0+IHtcbiAgICBjb25zdCB7IHZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04gfSA9IGNvbnRleHQ7XG4gICAgY29uc3QgYWN0aXZlRGljdGlvbmFyeSA9IGNob29zZUFjdGl2ZURpY3Rpb25hcnkodmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTik7XG4gICAgY29uc3QgbG9jYWxpemF0aW9ucyA9IE9iamVjdC52YWx1ZXMoYWN0aXZlRGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKTtcbiAgICBjb25zdCB0cmFuc2xhdGlvbktleXMgPSBPYmplY3Qua2V5cyhhY3RpdmVEaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pLm1hcChrZXkgPT4ga2V5LnNwbGl0KCcuJykucG9wKCkpO1xuXG4gICAgcmV0dXJuIHRyYW5zbGF0aW9uS2V5cy5yZWR1Y2UoKGFjYywga2V5LCBpKSA9PiB7XG4gICAgICAgIGFjY1trZXldID0gbG9jYWxpemF0aW9uc1tpXTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG59O1xuIiwiaW1wb3J0IGdldEFsbFByb2R1Y3RzIGZyb20gXCIuLi8uLi9kc2NfdXRpbHMvZ2V0YWxscHJvZHVjdHNcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVBscENhcnQoYWN0aW9uTmFtZSkge1xyXG4gICAgdmFyIGxvZ1RpdGxlID0gXCIgdXBkYXRlUGxwQ2FydCgpIFwiO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBsZXQgJG92ZXJsYXkgPSAkKCdbZGF0YS1wbHAtY2FydF0gLmxvYWRpbmdPdmVybGF5Jyk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobG9nVGl0bGUgKyBcIiRvdmVybGF5XCIsICRvdmVybGF5KVxyXG4gICAgICAgICRvdmVybGF5LnNob3coKTtcclxuICAgICAgICBmZXRjaCgnL2FwaS9zdG9yZWZyb250L2NhcnRzJywge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChjYXJ0c1Jlc3BvbnNlQXJyYXkpIHtcclxuICAgICAgICAgICAgaWYgKGNhcnRzUmVzcG9uc2VBcnJheS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhsb2dUaXRsZSArIFwiY2FydHMgLSBjYXJ0c1Jlc3BvbnNlQXJyYXlcIiwgY2FydHNSZXNwb25zZUFycmF5KTtcclxuICAgICAgICAgICAgICAgIGxldCBjYXJ0VG90YWxJdGVtcyA9IDA7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2FydFN1YnRvdGFsID0gMC4wMDtcclxuICAgICAgICAgICAgICAgIGxldCBjYXJ0VGF4VG90YWwgPSAwLjAwO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNhcnRHcmFuZFRvdGFsID0gMC4wMDtcclxuICAgICAgICAgICAgICAgIGxldCBjYXJ0SGFzUHJvZHVjdHMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY2FydEl0ZW1zSHRtbCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBjYXJ0SXRlbXNIdG1sICs9IFwiPHRhYmxlIGRhdGEtY2xhc3M9J3BscC1vcmRlci1zdW1tYXJ5LXByb2R1Y3RzLXRhYmxlJz5cIjtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleDEgaW4gY2FydHNSZXNwb25zZUFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FydE9iaiA9IGNhcnRzUmVzcG9uc2VBcnJheVtpbmRleDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleDEgPT0gMCAmJiBjYXJ0T2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHF1aWNrQWRkU2t1QnV0dG9uRG9tID0gJChcIltkYXRhLWNsYXNzPSdxdWljay1hZGQtc2t1LWJ1dHRvbiddXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocXVpY2tBZGRTa3VCdXR0b25Eb20pIHF1aWNrQWRkU2t1QnV0dG9uRG9tLmF0dHIoXCJkYXRhLWNhcnQtaWRcIiwgY2FydE9iai5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGxpbmVJdGVtVHlwZSBpbiBjYXJ0T2JqLmxpbmVJdGVtcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtVHlwZURhdGFBcnJheSA9IGNhcnRPYmoubGluZUl0ZW1zW2xpbmVJdGVtVHlwZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4MiBpbiBpdGVtVHlwZURhdGFBcnJheSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1PYmogPSBpdGVtVHlwZURhdGFBcnJheVtpbmRleDJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobG9nVGl0bGUgKyBcIml0ZW1PYmpcIiwgaXRlbU9iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJ0VG90YWxJdGVtcyArPSBpdGVtT2JqLnF1YW50aXR5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FydFN1YnRvdGFsICs9IGl0ZW1PYmoucXVhbnRpdHkgKiBpdGVtT2JqLnNhbGVQcmljZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxldCBjYXJ0SXRlbVRheCA9ICBpdGVtT2JqLmV4dGVuZGVkU2FsZVByaWNlIC0gaXRlbU9iai5leHRlbmRlZExpc3RQcmljZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhcnRUYXhUb3RhbCArPSBjYXJ0SXRlbVRheDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2dlbmVyYXRpbmcgY2FydCBwcm9kdWN0cyBodG1sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJ0SXRlbXNIdG1sICs9IFwiPHRyPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8tLT4gUExQIE9yZGVyIFN1bW1hcnkgUHJvZHVjdCBJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FydEl0ZW1zSHRtbCArPSBcIjx0ZCB3aWR0aD0nMjAlJz5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcnRJdGVtc0h0bWwgKz0gXCI8ZGl2PjxpbWcgc3JjPSdcIiArIGl0ZW1PYmouaW1hZ2VVcmwgKyBcIicgYWx0PScnIHdpZHRoLz48L2Rpdj5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcnRJdGVtc0h0bWwgKz0gXCI8dGQ+XCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FydEl0ZW1zSHRtbCArPSBcIjx0ZCB3aWR0aD0nNzAlJz5cIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJ0SXRlbXNIdG1sICs9IFwiPGRpdiBzdHlsZT0ncGFkZGluZzozcHg7Jz5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcnRJdGVtc0h0bWwgKz0gXCI8dGFibGU+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJ0SXRlbXNIdG1sICs9IFwiPHRyPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8tLT4gUExQIE9yZGVyIFN1bW1hcnkgUHJvZHVjdCBOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJ0SXRlbXNIdG1sICs9IFwiPHRkIHdpZHRoPScxMDAlJz5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYXJ0SXRlbU5hbWUgPSBpdGVtT2JqLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FydEl0ZW1OYW1lICYmIGNhcnRJdGVtTmFtZS5sZW5ndGggPiAxNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcnRJdGVtTmFtZSA9IGNhcnRJdGVtTmFtZS5zdWJzdHJpbmcoMCwgMTUpLnRyaW0oKSArIFwiLi4uXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJ0SXRlbXNIdG1sICs9IFwiPHNwYW4gdGl0bGU9J1wiICsgaXRlbU9iai5za3UgKyBcIiAoXCIgKyBpdGVtT2JqLm5hbWUgKyBcIilcIiArIFwiJz5cIiArIGNhcnRJdGVtTmFtZSArIFwiPC9zcGFuPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FydEl0ZW1zSHRtbCArPSBcIjwvdGQ+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXJ0SXRlbXNIdG1sICs9IFwiPHRkIHdpZHRoPScwJSc+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXJ0SXRlbXNIdG1sICs9IFwiPC90ZD5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcnRJdGVtc0h0bWwgKz0gXCI8L3RyPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FydEl0ZW1zSHRtbCArPSBcIjx0cj5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLS0+IFBMUCBPcmRlciBTdW1tYXJ5IFByb2R1Y3QgUXVhbnRpdHkgJiBTYWxlcyBQcmljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FydEl0ZW1zSHRtbCArPSBcIjx0ZCBkYXRhLWNhcnQtcHJvZHVjdC1pZD0nXCIgKyBpdGVtT2JqLmlkICsgXCInIGRhdGEtcHJvZHVjdC1pZD0nXCIgKyBpdGVtT2JqLnByb2R1Y3RJZCArIFwiJyBkYXRhLXByb2R1Y3QtdmFyaWFudC1pZD0nXCIgKyBpdGVtT2JqLnZhcmlhbnRJZCArIFwiJyBkYXRhLWNhcnQtaWQ9J1wiICsgY2FydE9iai5pZCArIFwiJz5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcnRJdGVtc0h0bWwgKz0gXCI8aW5wdXQgY2xhc3M9J3BscC1jYXJ0LXByb2R1Y3QtcXVhbnRpdHknIHR5cGU9J251bWJlcicgdmFsdWU9J1wiICsgaXRlbU9iai5xdWFudGl0eSArIFwiJyBtaW49JzAnIG1heD0nOTk5JyAvPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FydEl0ZW1zSHRtbCArPSBcIiB4IFwiICsgY2FydE9iai5jdXJyZW5jeS5zeW1ib2wgKyBpdGVtT2JqLnNhbGVQcmljZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcnRJdGVtc0h0bWwgKz0gXCI8L3RkPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8tLT4gUExQIE9yZGVyIFN1bW1hcnkgUHJvZHVjdCBTYWxlcyBQcmljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FydEl0ZW1zSHRtbCArPSBcIjx0ZCB3aWR0aD0nMCUnIGFsaWduPSdyaWdodCc+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXJ0SXRlbXNIdG1sICs9IFwiPC90ZD5cIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJ0SXRlbXNIdG1sICs9IFwiPC90cj5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcnRJdGVtc0h0bWwgKz0gXCI8L3RhYmxlPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FydEl0ZW1zSHRtbCArPSBcIjwvZGl2PlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcnRJdGVtc0h0bWwgKz0gXCI8L3RkPlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcnRJdGVtc0h0bWwgKz0gXCI8dGQgd2lkdGg9JzEwJSc+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJ0SXRlbXNIdG1sICs9IFwiPGJ1dHRvbiBkYXRhLWNsYXNzPSdyZW1vdmUtZnJvbS1wbHAtY2FydCcgZGF0YS1wcm9kdWN0LWlkPSdcIiArIGl0ZW1PYmouaWQgKyBcIicgZGF0YS1jYXJ0LWlkPSdcIiArIGNhcnRPYmouaWQgKyBcIic+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJ0SXRlbXNIdG1sICs9IFwiPGltZyBkYXRhLWNsYXNzPSdyZW1vdmUtZnJvbS1wbHAtY2FydCcgc3JjPSdodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzUxMi8xMDYvMTA2ODMwLnBuZycgZGF0YS1wcm9kdWN0LWlkPSdcIiArIGl0ZW1PYmouaWQgKyBcIicgZGF0YS1jYXJ0LWlkPSdcIiArIGNhcnRPYmouaWQgKyBcIicvPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FydEl0ZW1zSHRtbCArPSBcIjwvYnV0dG9uPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FydEl0ZW1zSHRtbCArPSBcIjwvdGQ+XCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FydEl0ZW1zSHRtbCArPSBcIjwvdHI+XCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FydEhhc1Byb2R1Y3RzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXJ0SXRlbXNIdG1sICs9IFwiPC90YWJsZT5cIjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2FydEhhc1Byb2R1Y3RzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNwbHAtb3JkZXItc3VtbWFyeS1wcm9kdWN0c1wiKS5odG1sKGNhcnRJdGVtc0h0bWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYmluZFVwZGF0ZVBscENhcnRFdmVudCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbk5hbWUgPT0gXCJ1cGRhdGVfY2FydFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoZWNrb3V0SWQgPSBjYXJ0c1Jlc3BvbnNlQXJyYXlbMF0uaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrb3V0SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0VXJsID0gXCIvYXBpL3N0b3JlZnJvbnQvY2hlY2tvdXRzL1wiICsgY2hlY2tvdXRJZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKHJlcXVlc3RVcmwsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihjaGVja291dFJlc3BvbnNlT2JqID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJ0VGF4VG90YWwgPSBwYXJzZUZsb2F0KGNoZWNrb3V0UmVzcG9uc2VPYmoudGF4VG90YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcnRTdWJ0b3RhbCA9IHBhcnNlRmxvYXQoY2hlY2tvdXRSZXNwb25zZU9iai5zdWJ0b3RhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FydEdyYW5kVG90YWwgPSBwYXJzZUZsb2F0KGNoZWNrb3V0UmVzcG9uc2VPYmouZ3JhbmRUb3RhbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjYXBpLXRvdGFsLWl0ZW1zXCIpLmh0bWwoY2FydFRvdGFsSXRlbXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjYXBpLXRheHRvdGFsXCIpLmh0bWwoY2FydFRheFRvdGFsLnRvRml4ZWQoMikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjYXBpLXN1YnRvdGFsXCIpLmh0bWwoY2FydFN1YnRvdGFsLnRvRml4ZWQoMikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjYXBpLWdyYW5kdG90YWxcIikuaHRtbChjYXJ0R3JhbmRUb3RhbC50b0ZpeGVkKDIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkb3ZlcmxheS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmFyIHN5bWJvbCA9IHJlc3BvbnNlQm9keS5jYXJ0LmN1cnJlbmN5LnN5bWJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZhciBzdWJUb3RhbCA9IHJlc3BvbnNlQm9keS5zdWJ0b3RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZhciBzaGlwcGluZyA9IHJlc3BvbnNlQm9keS5zaGlwcGluZ0Nvc3RUb3RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZhciB0YXggPSByZXNwb25zZUJvZHkudGF4VG90YWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB2YXIgdG90YWwgPSByZXNwb25zZUJvZHkuZ3JhbmRUb3RhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAvLyBjb25zb2xlLmxvZygnc3ltYm9sJywgc3ltYm9sKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc3ViVG90YWwnLCBzdWJUb3RhbCwgJ3NoaXBwaW5nJywgc2hpcHBpbmcsICd0YXgnLCB0YXgsICd0b3RhbCcsIHRvdGFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAkKFwiI2FwaS1zdWJ0b3RhbFwiKS5odG1sKHN5bWJvbCArIHN1YlRvdGFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAkKFwiI2FwaS1zaGlwcGluZ1wiKS5odG1sKHN5bWJvbCArIHNoaXBwaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAkKFwiI2FwaS10YXhcIikuaHRtbChzeW1ib2wgKyB0YXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICQoXCIjYXBpLXRvdGFsXCIpLmh0bWwoc3ltYm9sICsgdG90YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFUlJPUiBJTlwiICsgbG9nVGl0bGUsIGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gJChcIltkYXRhLWNsYXNzPSdxdWljay1hZGQtc2t1LWJ1dHRvbiddXCIpLnJlbW92ZUNsYXNzKFwiZGF0YS1jYXJ0LWlkXCIpOyAvL05vdCBXb3JraW5nXHJcbiAgICAgICAgICAgICAgICAkKFwiW2RhdGEtY2xhc3M9J3F1aWNrLWFkZC1za3UtYnV0dG9uJ11cIikuYXR0cihcImRhdGEtY2FydC1pZFwiLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICQoXCIjcGxwLW9yZGVyLXN1bW1hcnktcHJvZHVjdHNcIikuaHRtbChcIllvdXIgY2FydCBpcyBlbXB0eVwiKTtcclxuICAgICAgICAgICAgICAgICQoXCIjYXBpLXRvdGFsLWl0ZW1zXCIpLmh0bWwoXCIwXCIpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNhcGktdGF4dG90YWxcIikuaHRtbChcIjAuMDBcIik7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2FwaS1zdWJ0b3RhbFwiKS5odG1sKFwiMC4wMFwiKTtcclxuICAgICAgICAgICAgICAgICQoXCIjYXBpLWdyYW5kdG90YWxcIikuaHRtbChcIjAuMDBcIik7XHJcbiAgICAgICAgICAgICAgICAkb3ZlcmxheS5oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRVJST1IgSU5cIiArIGxvZ1RpdGxlLCBlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBscENhcnRCaW5kRXZlbnRzKCkge1xyXG4gICAgY29uc3QgbG9nVGl0bGUgPSBcIiBwbHBDYXJ0QmluZEV2ZW50cygpIFwiO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhsb2dUaXRsZSwgXCJFWEVDVVRFRCFcIilcclxuICAgICAgICAkKFwiYm9keVwiKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdmFyIHRhcmdldE9iaiA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAgICAgY29uc3QgZGF0YUNsYXNzID0gJCh0YXJnZXRPYmopLmF0dHIoXCJkYXRhLWNsYXNzXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGFDbGFzcyA9PSBcInJlbW92ZS1mcm9tLXBscC1jYXJ0XCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhcnRJZCA9ICQodGFyZ2V0T2JqKS5hdHRyKFwiZGF0YS1jYXJ0LWlkXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FydEl0ZW1JZCA9ICQodGFyZ2V0T2JqKS5hdHRyKFwiZGF0YS1wcm9kdWN0LWlkXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhcnRJZCAmJiBjYXJ0SXRlbUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlQ2FydEl0ZW0oY2FydElkLCBjYXJ0SXRlbUlkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL0FkZCB0byBDYXJ0IHdpdGggU0tVIC0gU1RBUlRcclxuICAgICAgICAgICAgZWxzZSBpZiAoZGF0YUNsYXNzID09IFwicXVpY2stYWRkLXNrdS1idXR0b25cIikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FydElkID0gJChcIltkYXRhLWNsYXNzPSdxdWljay1hZGQtc2t1LWJ1dHRvbiddXCIpLmF0dHIoXCJkYXRhLWNhcnQtaWRcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhsb2dUaXRsZSArIFwiY2FydElkIDFcIiwgY2FydElkKTtcclxuICAgICAgICAgICAgICAgIHBlcmZvcm1RdWlja0FkZFNrdU9wZXJhdGlvbnMoY2FydElkLCBkYXRhQ2xhc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vRGlzcGxheSBTS1UgU2VhcmNoIFJlc3VsdHMgLSBTVEFSVFxyXG4gICAgICAgICAgICBlbHNlIGlmIChkYXRhQ2xhc3MgPT0gXCJzZWFyY2gtbWF0Y2hpbmctc2t1LXJlc3VsdHMtYnRuXCIpIHtcclxuICAgICAgICAgICAgICAgIGxldCAkcXVpY2tBZGRTa3VJbnB1dCA9ICQoXCJbZGF0YS1pZD0ncXVpY2stYWRkLWl0ZW0tc2t1J11cIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoJHF1aWNrQWRkU2t1SW5wdXQgJiYgJHF1aWNrQWRkU2t1SW5wdXQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHF1aWNrQWRkSXRlbVNrdUxvd2VyQ2FzZSA9ICRxdWlja0FkZFNrdUlucHV0LnZhbCgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobG9nVGl0bGUgKyBcInF1aWNrQWRkSXRlbVNrdUxvd2VyQ2FzZVwiLCBxdWlja0FkZEl0ZW1Ta3VMb3dlckNhc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChxdWlja0FkZEl0ZW1Ta3VMb3dlckNhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0ICRvdmVybGF5ID0gJCgnW2RhdGEtcGxwLWNhcnRdIC5sb2FkaW5nT3ZlcmxheScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkb3ZlcmxheS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldEFsbFByb2R1Y3RzKFwibDFtNndiZ2VqOVwiLCBcInQxdjc4NTI1eTU2bTU0MGo4a3g3cnJ6b2E0Y2MzMnVcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGdldFByb2R1Y3RzUmVzcG9uc2VPYmogPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvZ1RpdGxlICsgXCJnZXRQcm9kdWN0c1Jlc3BvbnNlT2JqXCIsIGdldFByb2R1Y3RzUmVzcG9uc2VPYmopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnZXRQcm9kdWN0c1Jlc3BvbnNlT2JqICYmIGdldFByb2R1Y3RzUmVzcG9uc2VPYmouZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWF0Y2hlZFByb2R1Y3RTa3VzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHByb2R1Y3RJbmRleCBpbiBnZXRQcm9kdWN0c1Jlc3BvbnNlT2JqLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9kdWN0c09iaiA9IGdldFByb2R1Y3RzUmVzcG9uc2VPYmouZGF0YVtwcm9kdWN0SW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgcHJvZHVjdFZhcmlhbnRJbmRleCBpbiBwcm9kdWN0c09iai52YXJpYW50cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9kdWN0VmFyaWFudE9iaiA9IHByb2R1Y3RzT2JqLnZhcmlhbnRzW3Byb2R1Y3RWYXJpYW50SW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9kdWN0VmFyaWFudE9iai5za3UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb2R1Y3RWYXJpYW50U2t1TG93ZXJDYXNlID0gcHJvZHVjdFZhcmlhbnRPYmouc2t1LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9kdWN0VmFyaWFudFNrdUxvd2VyQ2FzZS5pbmNsdWRlcyhxdWlja0FkZEl0ZW1Ta3VMb3dlckNhc2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVkUHJvZHVjdFNrdXMucHVzaChwcm9kdWN0VmFyaWFudE9iai5za3UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgJHNlYXJjaFJlc3VsdHNDb250YWluZXIgPSAkKFwiW2RhdGEtaWQ9J3NrdS1zZWFyY2gtcmVzdWx0cy1jb250YWluZXInXVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hdGNoZWRQcm9kdWN0U2t1c0h0bWwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlZFByb2R1Y3RTa3VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvZ1RpdGxlICsgXCJtYXRjaGVkUHJvZHVjdFNrdXNcIiwgbWF0Y2hlZFByb2R1Y3RTa3VzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZWRQcm9kdWN0U2t1c0h0bWwgKz0gXCI8dWwgY2xhc3M9J2l0ZW1zLXNlYXJjaC1yZXN1bHRzJyBkYXRhLWlkPSdza3Utc2VhcmNoLXJlc3VsdHMnPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgc2t1SW5kZXggaW4gbWF0Y2hlZFByb2R1Y3RTa3VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdFNrdSA9IG1hdGNoZWRQcm9kdWN0U2t1c1tza3VJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlZFByb2R1Y3RTa3VzSHRtbCArPSBcIjxsaSBkYXRhLWNsYXNzPSdtYXRjaGVkLXNlYXJjaC1yZXN1bHQnPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZWRQcm9kdWN0U2t1c0h0bWwgKz0gcHJvZHVjdFNrdTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVkUHJvZHVjdFNrdXNIdG1sICs9IFwiPC9saT5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZWRQcm9kdWN0U2t1c0h0bWwgKz0gXCI8L3VsPlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZWRQcm9kdWN0U2t1c0h0bWwgKz0gXCI8ZGl2Pk5vIG1hdGNoIGZvdW5kPC9kaXY+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNlYXJjaFJlc3VsdHNDb250YWluZXIuaHRtbChtYXRjaGVkUHJvZHVjdFNrdXNIdG1sKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNlYXJjaFJlc3VsdHNDb250YWluZXIuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkb3ZlcmxheS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihsb2dUaXRsZSArIFwiZXJyb3JcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRvdmVybGF5LmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIHNwZWNpZnkgU0tVXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFDbGFzcyA9PSBcIm1hdGNoZWQtc2VhcmNoLXJlc3VsdFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhsb2dUaXRsZSArIFwiZGF0YUNsYXNzXCIsIGRhdGFDbGFzcyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhsb2dUaXRsZSArIFwidGFyZ2V0T2JqXCIsIHRhcmdldE9iaik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZFNrdSA9ICQodGFyZ2V0T2JqKS5odG1sKClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvZ1RpdGxlICsgXCJzZWxlY3RlZFNrdVwiLCBzZWxlY3RlZFNrdSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgJHF1aWNrQWRkU2t1SW5wdXQgPSAkKFwiW2RhdGEtaWQ9J3F1aWNrLWFkZC1pdGVtLXNrdSddXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCRxdWlja0FkZFNrdUlucHV0ICYmICRxdWlja0FkZFNrdUlucHV0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkcXVpY2tBZGRTa3VJbnB1dC52YWwoc2VsZWN0ZWRTa3UpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRhdGFDbGFzcyAhPSBcInNlYXJjaC1tYXRjaGluZy1za3UtcmVzdWx0cy1idG5cIikge1xyXG4gICAgICAgICAgICAgICAgbGV0ICRzZWFyY2hSZXN1bHRzQ29udGFpbmVyID0gJChcIltkYXRhLWlkPSdza3Utc2VhcmNoLXJlc3VsdHMtY29udGFpbmVyJ11cIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoJHNlYXJjaFJlc3VsdHNDb250YWluZXIgJiYgJHNlYXJjaFJlc3VsdHNDb250YWluZXIubGVuZ3RoID4gMCkgJHNlYXJjaFJlc3VsdHNDb250YWluZXIuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9EaXNwbGF5IFNLVSBTZWFyY2ggUmVzdWx0cyAtIEVORFxyXG4gICAgICAgICAgICAvL0FkZCB0byBDYXJ0IHdpdGggU0tVIC0gRU5EXHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldENsYXNzZXMgPSAkKHRhcmdldE9iaikuYXR0cihcImNsYXNzXCIpO1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0Q2xhc3NlcyAmJiB0YXJnZXRDbGFzc2VzLmluY2x1ZGVzKFwicXVpY2t2aWV3XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiYm9keVwiKS5vbignc3VibWl0JywgJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVBscENhcnQoJ3VwZGF0ZV9jYXJ0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFUlJPUiBJTlwiICsgbG9nVGl0bGUsIGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBiaW5kVXBkYXRlUGxwQ2FydEV2ZW50KCkge1xyXG4gICAgdmFyIGxvZ1RpdGxlID0gXCIgYmluZFVwZGF0ZVBscENhcnRFdmVudCgpIFwiO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbHAtY2FydC1wcm9kdWN0LXF1YW50aXR5Jyk7XHJcbiAgICAgICAgQXJyYXkuZnJvbShlbGVtZW50cykuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobG9nVGl0bGUgKyBcImluZGV4XCIsIGluZGV4KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobG9nVGl0bGUgKyBcImVsZW1lbnRcIiwgZWxlbWVudCk7XHJcbiAgICAgICAgICAgICQoZWxlbWVudCkub24oJ2NoYW5nZScsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobG9nVGl0bGUgKyBcImV2ZW50XCIsIGV2ZW50KVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0T2JqID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50T2JqID0gdGFyZ2V0T2JqLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJ0SWQgPSAkKHBhcmVudE9iaikuYXR0cihcImRhdGEtY2FydC1pZFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhcnRJdGVtSWQgPSAkKHBhcmVudE9iaikuYXR0cihcImRhdGEtY2FydC1wcm9kdWN0LWlkXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdElkID0gJChwYXJlbnRPYmopLmF0dHIoXCJkYXRhLXByb2R1Y3QtaWRcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YXJpYW50SWQgPSAkKHBhcmVudE9iaikuYXR0cihcImRhdGEtcHJvZHVjdC12YXJpYW50LWlkXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FydEl0ZW1RdHkgPSAkKHRhcmdldE9iaikudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FydElkICYmIGNhcnRJdGVtSWQgJiYgcHJvZHVjdElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcnRJdGVtUXR5ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVDYXJ0SXRlbShjYXJ0SWQsIGNhcnRJdGVtSWQsIHByb2R1Y3RJZCwgdmFyaWFudElkLCBjYXJ0SXRlbVF0eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlQ2FydEl0ZW0oY2FydElkLCBjYXJ0SXRlbUlkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRVJST1IgSU5cIiArIGxvZ1RpdGxlLCBlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlQ2FydEl0ZW0oY2FydElkLCBjYXJ0SXRlbUlkLCBwcm9kdWN0SWQsIHZhcmlhbnRJZCwgY2FydEl0ZW1RdHkpIHtcclxuICAgIHZhciBsb2dUaXRsZSA9IFwiIHVwZGF0ZUNhcnRJdGVtKCkgXCI7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGxvZ1RpdGxlICsgXCJjYXJ0SWQgOiBjYXJ0SXRlbUlkIDogcHJvZHVjdElkIDogdmFyaWFudElkIDogY2FydEl0ZW1RdHlcIiwgY2FydElkICsgXCIgOiBcIiArIGNhcnRJdGVtSWQgKyBcIiA6IFwiICsgcHJvZHVjdElkICsgXCIgOiBcIiArICt2YXJpYW50SWQgKyBcIiA6IFwiICsgY2FydEl0ZW1RdHkpO1xyXG5cclxuICAgICAgICB2YXIgcmVxdWVzdFVybCA9IFwiL2FwaS9zdG9yZWZyb250L2NhcnRzL1wiICsgY2FydElkICsgXCIvaXRlbXMvXCIgKyBjYXJ0SXRlbUlkO1xyXG4gICAgICAgIHZhciByZXF1ZXN0Qm9keSA9IHtcclxuICAgICAgICAgICAgXCJsaW5lSXRlbVwiOiB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0SWQsXHJcbiAgICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IGNhcnRJdGVtUXR5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICh2YXJpYW50SWQpIHJlcXVlc3RCb2R5LmxpbmVJdGVtLnZhcmlhbnRJZCA9IHZhcmlhbnRJZDtcclxuICAgICAgICBmZXRjaChyZXF1ZXN0VXJsLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdEJvZHkpLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlT2JqID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZU9iai5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVBscENhcnQoJ3VwZGF0ZV9jYXJ0JylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVSUk9SIElOXCIgKyBsb2dUaXRsZSwgZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vQWRkIHRvIENhcnQgd2l0aCBTS1UgLSBTVEFSVFxyXG5mdW5jdGlvbiBhZGRDYXJ0SXRlbShjYXJ0SWQsIHByb2R1Y3RJZCwgdmFyaWFudElkLCBjYXJ0SXRlbVF0eSwgJG92ZXJsYXkpIHtcclxuICAgIHZhciBsb2dUaXRsZSA9IFwiIGFkZENhcnRJdGVtKCkgXCI7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHZhciByZXF1ZXN0VXJsID0gXCIvYXBpL3N0b3JlZnJvbnQvY2FydHMvXCIgKyBjYXJ0SWQgKyBcIi9pdGVtc1wiO1xyXG4gICAgICAgIHZhciByZXF1ZXN0Qm9keSA9IHtcclxuICAgICAgICAgICAgXCJsaW5lSXRlbXNcIjogW3tcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RJZCxcclxuICAgICAgICAgICAgICAgIHZhcmlhbnRJZCxcclxuICAgICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogY2FydEl0ZW1RdHlcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGZldGNoKHJlcXVlc3RVcmwsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdEJvZHkpLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlT2JqID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZU9iai5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVBscENhcnQoJ3VwZGF0ZV9jYXJ0JylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICRvdmVybGF5LmhpZGUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRVJST1IgSU5cIiArIGxvZ1RpdGxlLCBlKTtcclxuICAgIH1cclxufVxyXG4vL0FkZCB0byBDYXJ0IHdpdGggU0tVIC0gRU5EXHJcbmZ1bmN0aW9uIGRlbGV0ZUNhcnRJdGVtKGNhcnRJZCwgY2FydEl0ZW1JZCkge1xyXG4gICAgdmFyIGxvZ1RpdGxlID0gXCIgZGVsZXRlQ2FydEl0ZW0oKSBcIjtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgdmFyIHJlcXVlc3RVcmwgPSBcIi9hcGkvc3RvcmVmcm9udC9jYXJ0cy9cIiArIGNhcnRJZCArIFwiL2l0ZW1zL1wiICsgY2FydEl0ZW1JZDtcclxuICAgICAgICBmZXRjaChyZXF1ZXN0VXJsLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlT2JqID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGxvZ1RpdGxlK1wicmVzcG9uc2VPYmpcIiwgcmVzcG9uc2VPYmopO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlT2JqLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlUGxwQ2FydCgndXBkYXRlX2NhcnQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKFxyXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobG9nVGl0bGUgKyBcInJlZXF1ZXN0IGNhdGNoIGVycm9yXCIsIGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVBscENhcnQoJ3VwZGF0ZV9jYXJ0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSwgMjAwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVSUk9SIElOXCIgKyBsb2dUaXRsZSwgZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBlcmZvcm1RdWlja0FkZFNrdU9wZXJhdGlvbnMoY2FydElkLCBkYXRhQ2xhc3MpIHtcclxuICAgIGNvbnN0IGxvZ1RpdGxlID0gXCIgcGVyZm9ybVF1aWNrQWRkU2t1T3BlcmF0aW9ucygpIFwiO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhsb2dUaXRsZSArIFwiZGF0YUNsYXNzXCIsIGRhdGFDbGFzcyk7XHJcbiAgICAgICAgY29uc3QgcXVpY2tBZGRJdGVtU2t1ID0gJChcIltkYXRhLWlkPSdxdWljay1hZGQtaXRlbS1za3UnXVwiKS52YWwoKTtcclxuICAgICAgICBsZXQgcXVpY2tBZGRJdGVtUXR5ID0gJChcIltkYXRhLWlkPSdxdWljay1hZGQtaXRlbS1xdHknXVwiKS52YWwoKTtcclxuICAgICAgICBxdWlja0FkZEl0ZW1RdHkgPSBxdWlja0FkZEl0ZW1RdHkgPyBwYXJzZUZsb2F0KHF1aWNrQWRkSXRlbVF0eSkgOiAwO1xyXG4gICAgICAgIGlmIChxdWlja0FkZEl0ZW1Ta3UgJiYgcXVpY2tBZGRJdGVtUXR5KSB7XHJcbiAgICAgICAgICAgIGlmIChxdWlja0FkZEl0ZW1RdHkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhsb2dUaXRsZSArIFwicXVpY2tBZGRJdGVtU2t1XCIsIHF1aWNrQWRkSXRlbVNrdSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhsb2dUaXRsZSArIFwicXVpY2tBZGRJdGVtUXR5XCIsIHF1aWNrQWRkSXRlbVF0eSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgJG92ZXJsYXkgPSAkKCdbZGF0YS1wbHAtY2FydF0gLmxvYWRpbmdPdmVybGF5Jyk7XHJcbiAgICAgICAgICAgICAgICAkb3ZlcmxheS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICBnZXRBbGxQcm9kdWN0cyhcImwxbTZ3YmdlajlcIiwgXCJ0MXY3ODUyNXk1Nm01NDBqOGt4N3Jyem9hNGNjMzJ1XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGdldFByb2R1Y3RzUmVzcG9uc2VPYmogPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhsb2dUaXRsZSArIFwiZ2V0UHJvZHVjdHNSZXNwb25zZU9ialwiLCBnZXRQcm9kdWN0c1Jlc3BvbnNlT2JqKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb2R1Y3RzU2t1TWFwT2JqID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnZXRQcm9kdWN0c1Jlc3BvbnNlT2JqICYmIGdldFByb2R1Y3RzUmVzcG9uc2VPYmouZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgcHJvZHVjdEluZGV4IGluIGdldFByb2R1Y3RzUmVzcG9uc2VPYmouZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9kdWN0c09iaiA9IGdldFByb2R1Y3RzUmVzcG9uc2VPYmouZGF0YVtwcm9kdWN0SW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHByb2R1Y3RWYXJpYW50SW5kZXggaW4gcHJvZHVjdHNPYmoudmFyaWFudHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb2R1Y3RWYXJpYW50T2JqID0gcHJvZHVjdHNPYmoudmFyaWFudHNbcHJvZHVjdFZhcmlhbnRJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9kdWN0VmFyaWFudE9iai5za3UgJiYgIXByb2R1Y3RzU2t1TWFwT2JqW3Byb2R1Y3RWYXJpYW50T2JqLnNrdV0pIHByb2R1Y3RzU2t1TWFwT2JqW3Byb2R1Y3RWYXJpYW50T2JqLnNrdV0gPSBwcm9kdWN0VmFyaWFudE9iajtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhsb2dUaXRsZSArIFwicHJvZHVjdHNTa3VNYXBPYmpcIiwgcHJvZHVjdHNTa3VNYXBPYmopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobG9nVGl0bGUgKyBcInByb2R1Y3RzU2t1TWFwT2JqW3F1aWNrQWRkSXRlbVNrdV1cIiwgcHJvZHVjdHNTa3VNYXBPYmpbcXVpY2tBZGRJdGVtU2t1XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvZHVjdHNTa3VNYXBPYmpbcXVpY2tBZGRJdGVtU2t1XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvZ1RpdGxlICsgXCJjYXJ0SWRcIiwgY2FydElkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FydElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZENhcnRJdGVtKGNhcnRJZCwgcHJvZHVjdHNTa3VNYXBPYmpbcXVpY2tBZGRJdGVtU2t1XS5wcm9kdWN0X2lkLCBwcm9kdWN0c1NrdU1hcE9ialtxdWlja0FkZEl0ZW1Ta3VdLmlkLCBxdWlja0FkZEl0ZW1RdHksICRvdmVybGF5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdEJvZHlMaW5lSXRlbXMgPSBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9kdWN0SWRcIjogcHJvZHVjdHNTa3VNYXBPYmpbcXVpY2tBZGRJdGVtU2t1XS5wcm9kdWN0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YXJpYW50SWRcIjogcHJvZHVjdHNTa3VNYXBPYmpbcXVpY2tBZGRJdGVtU2t1XS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogcXVpY2tBZGRJdGVtUXR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVDYXJ0KHJlcXVlc3RCb2R5TGluZUl0ZW1zLCAkb3ZlcmxheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIlByb3ZpZGVkIFNLVSBkb2VzIG5vdCBleGlzdCFcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkb3ZlcmxheS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJG92ZXJsYXkuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihsb2dUaXRsZSArIFwiZXJyb3JcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkb3ZlcmxheS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIlF1YW50aXR5IG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm9cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydChcIlBsZWFzZSBzcGVjaWZ5IGJvdGggU0tVICYgaXRlbSBxdWFudGl0eVwiKVxyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRVJST1IgSU5cIiArIGxvZ1RpdGxlLCBlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2FydChyZXF1ZXN0Qm9keUxpbmVJdGVtcykge1xyXG4gICAgY29uc3QgbG9nVGl0bGUgPSBcIiBjcmVhdGVDYXJ0KCkgXCI7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHZhciByZXF1ZXN0Qm9keSA9IHtcclxuICAgICAgICAgICAgXCJsaW5lSXRlbXNcIjogcmVxdWVzdEJvZHlMaW5lSXRlbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciByZXF1ZXN0VXJsID0gXCIvYXBpL3N0b3JlZnJvbnQvY2FydHNcIjtcclxuICAgICAgICBjb25zb2xlLmxvZygncmVxdWVzdFVybCcsIHJlcXVlc3RVcmwpXHJcbiAgICAgICAgZmV0Y2gocmVxdWVzdFVybCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0Qm9keSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbihjcmVhdGVDYXJ0UmVzcG9uc2VCb2R5ID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobG9nVGl0bGUrXCJjcmVhdGVDYXJ0UmVzcG9uc2VCb2R5XCIsIGNyZWF0ZUNhcnRSZXNwb25zZUJvZHkpO1xyXG4gICAgICAgICAgICBpZiAoY3JlYXRlQ2FydFJlc3BvbnNlQm9keS5pZCkge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlUGxwQ2FydCgndXBkYXRlX2NhcnQnKVxyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAkb3ZlcmxheS5oaWRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVSUk9SIElOXCIgKyBsb2dUaXRsZSwgZSk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiZ2V0QWxsUHJvZHVjdHMiLCJzdG9yZUhhc2giLCJhY2Nlc3NUb2tlbiIsImxvZ1RpdGxlIiwicmVxdWVzdEJvZHkiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJlcnJvciIsIlRSQU5TTEFUSU9OUyIsImlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkiLCJkaWN0aW9uYXJ5IiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImNob29zZUFjdGl2ZURpY3Rpb25hcnkiLCJpIiwicGFyc2UiLCJjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkiLCJjb250ZXh0IiwidmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OIiwidmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04iLCJ2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OIiwiYWN0aXZlRGljdGlvbmFyeSIsImxvY2FsaXphdGlvbnMiLCJ2YWx1ZXMiLCJ0cmFuc2xhdGlvbktleXMiLCJtYXAiLCJrZXkiLCJzcGxpdCIsInBvcCIsInJlZHVjZSIsImFjYyIsInVwZGF0ZVBscENhcnQiLCJhY3Rpb25OYW1lIiwiJG92ZXJsYXkiLCIkIiwibG9nIiwic2hvdyIsImNyZWRlbnRpYWxzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImNhcnRzUmVzcG9uc2VBcnJheSIsImNhcnRUb3RhbEl0ZW1zIiwiY2FydFN1YnRvdGFsIiwiY2FydFRheFRvdGFsIiwiY2FydEdyYW5kVG90YWwiLCJjYXJ0SGFzUHJvZHVjdHMiLCJjYXJ0SXRlbXNIdG1sIiwiaW5kZXgxIiwiY2FydE9iaiIsInF1aWNrQWRkU2t1QnV0dG9uRG9tIiwiYXR0ciIsImlkIiwibGluZUl0ZW1UeXBlIiwibGluZUl0ZW1zIiwiaXRlbVR5cGVEYXRhQXJyYXkiLCJpbmRleDIiLCJpdGVtT2JqIiwicXVhbnRpdHkiLCJpbWFnZVVybCIsImNhcnRJdGVtTmFtZSIsIm5hbWUiLCJzdWJzdHJpbmciLCJ0cmltIiwic2t1IiwicHJvZHVjdElkIiwidmFyaWFudElkIiwiY3VycmVuY3kiLCJzeW1ib2wiLCJzYWxlUHJpY2UiLCJodG1sIiwiYmluZFVwZGF0ZVBscENhcnRFdmVudCIsImNoZWNrb3V0SWQiLCJyZXF1ZXN0VXJsIiwiY2hlY2tvdXRSZXNwb25zZU9iaiIsInBhcnNlRmxvYXQiLCJ0YXhUb3RhbCIsInN1YnRvdGFsIiwiZ3JhbmRUb3RhbCIsInRvRml4ZWQiLCJoaWRlIiwiZSIsInBscENhcnRCaW5kRXZlbnRzIiwib24iLCJldmVudCIsInRhcmdldE9iaiIsInRhcmdldCIsImRhdGFDbGFzcyIsImNhcnRJZCIsImNhcnRJdGVtSWQiLCJkZWxldGVDYXJ0SXRlbSIsInBlcmZvcm1RdWlja0FkZFNrdU9wZXJhdGlvbnMiLCIkcXVpY2tBZGRTa3VJbnB1dCIsInF1aWNrQWRkSXRlbVNrdUxvd2VyQ2FzZSIsInZhbCIsInRvTG93ZXJDYXNlIiwiZ2V0UHJvZHVjdHNSZXNwb25zZU9iaiIsImRhdGEiLCJtYXRjaGVkUHJvZHVjdFNrdXMiLCJwcm9kdWN0SW5kZXgiLCJwcm9kdWN0c09iaiIsInByb2R1Y3RWYXJpYW50SW5kZXgiLCJ2YXJpYW50cyIsInByb2R1Y3RWYXJpYW50T2JqIiwicHJvZHVjdFZhcmlhbnRTa3VMb3dlckNhc2UiLCJpbmNsdWRlcyIsInB1c2giLCIkc2VhcmNoUmVzdWx0c0NvbnRhaW5lciIsIm1hdGNoZWRQcm9kdWN0U2t1c0h0bWwiLCJza3VJbmRleCIsInByb2R1Y3RTa3UiLCJjc3MiLCJhbGVydCIsInNlbGVjdGVkU2t1IiwidGFyZ2V0Q2xhc3NlcyIsInNldFRpbWVvdXQiLCJlbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIkFycmF5IiwiZnJvbSIsImZvckVhY2giLCJlbGVtZW50IiwiaW5kZXgiLCJwYXJlbnRPYmoiLCJwYXJlbnROb2RlIiwiY2FydEl0ZW1RdHkiLCJ1cGRhdGVDYXJ0SXRlbSIsImxpbmVJdGVtIiwicmVzcG9uc2VPYmoiLCJhZGRDYXJ0SXRlbSIsInF1aWNrQWRkSXRlbVNrdSIsInF1aWNrQWRkSXRlbVF0eSIsInByb2R1Y3RzU2t1TWFwT2JqIiwicHJvZHVjdF9pZCIsInJlcXVlc3RCb2R5TGluZUl0ZW1zIiwiY3JlYXRlQ2FydCIsImNyZWF0ZUNhcnRSZXNwb25zZUJvZHkiXSwic291cmNlUm9vdCI6IiJ9