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
require("./category.sass");
var list_1 = require("../category/list/list");
var Reducer = require("../../../../reducer/reducer");
var Category = /** @class */ (function (_super) {
    __extends(Category, _super);
    function Category(props) {
        return _super.call(this, props) || this;
    }
    Category.prototype.press = function (id, e) {
        if (Reducer.condition.selectedCategoryId != id) {
            Reducer.condition.selectedCategoryId = id;
        }
        else {
            Reducer.condition.selectedCategoryId = null;
        }
        var action = { type: "setSelectedCategotyId" };
        Reducer.store.dispatch(action);
    };
    Category.prototype.render = function () {
        var _this = this;
        return (react_1["default"].createElement("section", { className: "leftmenu-category" },
            react_1["default"].createElement("div", { className: "leftmenu-category-block", onClick: function (e) { return _this.press(_this.props.id, e); } },
                react_1["default"].createElement("div", { className: "leftmenu-category-left-img" }),
                react_1["default"].createElement("div", { className: "leftmenu-category-image" }),
                react_1["default"].createElement("div", { className: "leftmenu-category-title" },
                    react_1["default"].createElement("h1", { className: "leftmenu-category-title-name" }, this.props.name),
                    react_1["default"].createElement("div", { className: "leftmenu-category-title-sometext" }, "some text"))),
            react_1["default"].createElement(list_1["default"], { key: this.props.id, categoryId: this.props.id })));
    };
    return Category;
}(react_1["default"].Component));
exports["default"] = Category;
