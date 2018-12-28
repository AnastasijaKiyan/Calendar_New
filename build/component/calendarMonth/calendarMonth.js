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
// import { CalendarHeader } from './calendarHeader';
var calendarBody_1 = require("./calendarBody/calendarBody");
var dataday_1 = require("../../data/dataday");
var calendarHeader_1 = require("./calendarHeader/calendarHeader");
var CalendarMonth = /** @class */ (function (_super) {
    __extends(CalendarMonth, _super);
    function CalendarMonth(props) {
        return _super.call(this, props) || this;
    }
    CalendarMonth.prototype.render = function () {
        var d = dataday_1["default"];
        return (react_1["default"].createElement("div", { className: "calendarMonth" },
            react_1["default"].createElement(calendarHeader_1["default"], null),
            react_1["default"].createElement(calendarBody_1.CalendarBody, { days: d })));
    };
    return CalendarMonth;
}(react_1.Component));
exports["default"] = CalendarMonth;
