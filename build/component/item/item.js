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
require("./item.sass");
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item(props) {
        return _super.call(this, props) || this;
    }
    Item.prototype.render = function () {
        return (react_1["default"].createElement("div", { className: "leftmenu-item" },
            react_1["default"].createElement("div", { className: "leftmenu-item-text" }, this.props.name),
            react_1["default"].createElement("div", { className: "leftmenu-item-gradient" })));
    };
    return Item;
}(react_1["default"].Component));
exports["default"] = Item;
