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
var category_1 = require("./category/category");
var reducer_1 = require("../../../reducer/reducer");
var Section = /** @class */ (function (_super) {
    __extends(Section, _super);
    function Section(props) {
        return _super.call(this, props) || this;
    }
    Section.prototype.render = function () {
        var state = reducer_1.store.getState();
        return (react_1["default"].createElement("section", { className: "leftmenu-section" }, state.categories.map(function (category) {
            return (react_1["default"].createElement(category_1["default"], { key: category.id, name: category.name, id: category.id }));
        })));
    };
    return Section;
}(react_1["default"].Component));
exports["default"] = Section;
