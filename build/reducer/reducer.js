"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var datacategory_1 = require("../data/datacategory");
var dataitem_1 = require("../data/dataitem");
exports.condition = {
    selectedCategoryId: null
};
var initialState = {
    categories: datacategory_1["default"],
    items: dataitem_1["default"],
    selectedCategoryId: null
};
var reducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    var result = {
        categories: datacategory_1["default"],
        items: dataitem_1["default"],
        selectedCategoryId: exports.condition.selectedCategoryId
    };
    return result;
};
exports.store = redux_1.createStore(reducer);
