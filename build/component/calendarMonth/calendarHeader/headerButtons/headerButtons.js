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
var HeaderButtons = /** @class */ (function (_super) {
    __extends(HeaderButtons, _super);
    function HeaderButtons(props) {
        return _super.call(this, props) || this;
    }
    HeaderButtons.prototype.render = function () {
        return (react_1["default"].createElement("div", { className: "headerButtons" },
            react_1["default"].createElement("input", { type: "button", value: "Properties" }),
            react_1["default"].createElement("input", { type: "button", value: "Calendar" }),
            react_1["default"].createElement("input", { type: "button", value: "Logs" })));
    };
    return HeaderButtons;
}(react_1.Component));
exports["default"] = HeaderButtons;
