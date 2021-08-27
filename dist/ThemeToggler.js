"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var react_native_paper_1 = require("react-native-paper");
var ThemeContext_1 = require("./ThemeContext");
var ThemeToggler = function (props) {
    // Imports all useTheme functions
    var _a = (0, ThemeContext_1.useTheme)(), updateThemeLight = _a.updateThemeLight, updateThemeDark = _a.updateThemeDark, updateThemeDefault = _a.updateThemeDefault, COLOR_SCHEME = _a.COLOR_SCHEME, useLocalColorScheme = _a.useLocalColorScheme, useMixedTheme = _a.useMixedTheme;
    // Sets in state the localColorScheme and defaults to COLOR_SCHEME.LIGHT 
    // (to save as a colorSchemeName) (this will be changed after).
    var _b = (0, react_1.useState)(COLOR_SCHEME.LIGHT), localColorScheme = _b[0], setLocalColorScheme = _b[1];
    // Stores the primary and text color to indicate what theme is in usage
    var _c = useMixedTheme().colors, primary = _c.primary, text = _c.text;
    // Creates an async function to set the localColorScheme
    var loadLocalColorScheme = function () { return __awaiter(void 0, void 0, void 0, function () {
        var localColorScheme_1, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, useLocalColorScheme()];
                case 1:
                    localColorScheme_1 = _a.sent();
                    setLocalColorScheme(localColorScheme_1);
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.error('Error loading the colorScheme from storage:', err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    // To recharge the component once the theme is changed
    var updateAndLoad = function (updateFunction) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, updateFunction()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, loadLocalColorScheme()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        loadLocalColorScheme();
    }, []);
    return (<react_native_1.View style={styles.flex}>
            <react_native_paper_1.IconButton icon={props.lightButtonIconName || "brightness-7"} color={localColorScheme === COLOR_SCHEME.LIGHT ? primary : text} onPress={function () { return updateAndLoad(updateThemeLight); }}/>

            <react_native_paper_1.IconButton icon={props.darkButtonIconName || "brightness-3"} color={localColorScheme === COLOR_SCHEME.DARK ? primary : text} onPress={function () { return updateAndLoad(updateThemeDark); }}/>

            <react_native_paper_1.IconButton icon={props.defaultButtonIconName || "brightness-4"} color={localColorScheme === COLOR_SCHEME.DEFAULT ? primary : text} onPress={function () { return updateAndLoad(updateThemeDefault); }}/>
        </react_native_1.View>);
};
exports.default = ThemeToggler;
var styles = react_native_1.StyleSheet.create({
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
});
//# sourceMappingURL=ThemeToggler.js.map