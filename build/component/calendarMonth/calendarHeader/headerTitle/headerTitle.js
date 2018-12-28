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
var HeaderTitle = /** @class */ (function (_super) {
    __extends(HeaderTitle, _super);
    function HeaderTitle(props) {
        return _super.call(this, props) || this;
    }
    HeaderTitle.prototype.render = function () {
        return (react_1["default"].createElement("div", { className: "headerTitle" },
            react_1["default"].createElement("div", { className: "headerData" },
                react_1["default"].createElement("div", { className: "headerDataMonth" }, "October"),
                react_1["default"].createElement("div", { className: "headerDataYear" }, "2018")),
            react_1["default"].createElement("ul", { className: "headerTypeData" },
                react_1["default"].createElement("li", null, "Day"),
                react_1["default"].createElement("li", null, "Week"),
                react_1["default"].createElement("li", null, "Month")),
            react_1["default"].createElement("div", { className: "headerToggleData" },
                react_1["default"].createElement("img", { src: '../../../../style/pict/l.png' }),
                react_1["default"].createElement("span", null, "Today"),
                react_1["default"].createElement("img", { src: '../../../../style/pict/r.png' }))));
    };
    return HeaderTitle;
}(react_1.Component));
exports["default"] = HeaderTitle;
