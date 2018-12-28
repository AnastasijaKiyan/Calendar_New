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
var HeaderWeekDays = /** @class */ (function (_super) {
    __extends(HeaderWeekDays, _super);
    function HeaderWeekDays(props) {
        return _super.call(this, props) || this;
    }
    HeaderWeekDays.prototype.render = function () {
        return (react_1["default"].createElement("ul", { className: "headerWeekDays" },
            react_1["default"].createElement("li", null, "Sun"),
            react_1["default"].createElement("li", null, "Mon"),
            react_1["default"].createElement("li", null, "Tue"),
            react_1["default"].createElement("li", null, "Wen"),
            react_1["default"].createElement("li", null, "Thu"),
            react_1["default"].createElement("li", null, "Fri"),
            react_1["default"].createElement("li", null, "Sat")));
    };
    return HeaderWeekDays;
}(react_1.Component));
exports["default"] = HeaderWeekDays;
