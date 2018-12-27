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
var leftmenu_1 = require("./component/leftmenu/leftmenu");
var Reducer = require("./reducer/reducer");
require("./index.sass");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = Reducer.store.getState();
        _this.unsubscribe = function () { };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        var _this = this;
        this.unsubscribe = Reducer.store.subscribe(function () {
            _this.setState(Reducer.store.getState());
        });
    };
    App.prototype.componentWillUnmount = function () {
        this.unsubscribe();
    };
    App.prototype.render = function () {
        return (react_1["default"].createElement(leftmenu_1["default"], null));
    };
    return App;
}(react_1.Component));
exports["default"] = App;
