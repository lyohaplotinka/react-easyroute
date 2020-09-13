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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var routerContext = react_1.default.createContext({ router: null, nestingDepth: 0 });
var RouterOutlet = /** @class */ (function (_super) {
    __extends(RouterOutlet, _super);
    function RouterOutlet(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            component: react_1.default.createElement("div", null, "Test")
        };
        console.log(_this.props);
        return _this;
    }
    RouterOutlet.prototype.matchedSubscribe = function () {
        var matched = this.props.router.currentMatched.getValue;
        var component = matched[0].component;
        var Component = new component();
        this.setState({
            component: Component.render ? Component.render() : component()
        });
    };
    RouterOutlet.prototype.componentDidMount = function () {
        this.props.router.currentMatched.subscribe(this.matchedSubscribe.bind(this));
    };
    RouterOutlet.prototype.render = function () {
        return (react_1.default.createElement(routerContext.Provider, { value: { router: this.props.router, nestingDepth: 1 } }, this.state.component));
    };
    return RouterOutlet;
}(react_1.Component));
exports.RouterOutlet = RouterOutlet;
RouterOutlet.contextType = routerContext;