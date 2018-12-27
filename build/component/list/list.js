"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var Reducer = require("../../reducer/reducer");
var item_1 = require("../item/item");
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List(props) {
        return _super.call(this, props) || this;
    }
    List.prototype.render = function () {
        var _this = this;
        var allItems = Reducer.store.getState().items;
        var filteredItems = allItems.filter(function (i) { return i.field == _this.props.categoryId; });
        if (Reducer.condition.selectedCategoryId != this.props.categoryId) {
            return null;
        }
        else {
            return (react_1["default"].createElement("div", null, filteredItems.map(function (item) {
                return react_1["default"].createElement(item_1["default"], { key: item.id, name: item.name });
            })));
        }
    };
    return List;
}(react_1["default"].Component));
exports["default"] = List;
