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
var title_1 = require("./title/title");
var section_1 = require("./section/section");
var LeftMenu = /** @class */ (function (_super) {
    __extends(LeftMenu, _super);
    function LeftMenu(props) {
        return _super.call(this, props) || this;
    }
    LeftMenu.prototype.render = function () {
        return (react_1["default"].createElement("div", { className: "leftmenu-main" },
            react_1["default"].createElement(title_1["default"], null),
            react_1["default"].createElement(section_1["default"], null)));
    };
    return LeftMenu;
}(react_1.Component));
exports["default"] = LeftMenu;
