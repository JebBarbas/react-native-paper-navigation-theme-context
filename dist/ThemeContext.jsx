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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTheme = void 0;
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var themes_1 = require("./themes");
var async_storage_1 = __importDefault(require("@react-native-async-storage/async-storage"));
// END TYPES //
// CONTEXT USE AND PROVIDER //
var themeContextDefaultValue = {
    COLOR_SCHEME: { LIGHT: 'light', DARK: 'dark', DEFAULT: 'default' },
    useLocalColorScheme: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, 'light'];
    }); }); },
    useMixedTheme: function () { return themes_1.DefaultTheme; },
    updateThemeLight: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    updateThemeDark: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    updateThemeDefault: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); }
};
var ThemeContext = (0, react_1.createContext)(themeContextDefaultValue);
var useTheme = function () {
    return (0, react_1.useContext)(ThemeContext);
};
exports.useTheme = useTheme;
var ThemeProvider = function (_a) {
    var children = _a.children, override = _a.override;
    // START MEMO CONSTANTS //
    var COLOR_SCHEME = (0, react_1.useMemo)(function () { return ({ LIGHT: 'light', DARK: 'dark', DEFAULT: 'default' }); }, []);
    var localColorSchemeKey = (0, react_1.useMemo)(function () { return 'localColorSheme'; }, []);
    // END MEMO CONSTANTS //
    // START THEME CREATOR //
    var createAppTheme = (0, react_1.useCallback)(function (colorSchemeValue) {
        var UsedTheme = colorSchemeValue === COLOR_SCHEME.DARK ? themes_1.DarkTheme : themes_1.DefaultTheme;
        return (0, themes_1.overrideTheme)(UsedTheme, override);
    }, [override]);
    // END THEME CREATOR //
    // START COMPONENT STATE //
    var _b = (0, react_1.useState)(createAppTheme('light')), theme = _b[0], setTheme = _b[1];
    var deviceColorSheme = (0, react_native_1.useColorScheme)();
    // END COMPONENT STATE
    // START ASYNC STORAGE //
    var useLocalColorScheme = (0, react_1.useCallback)(function () { return __awaiter(void 0, void 0, void 0, function () {
        var localColorScheme, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, async_storage_1.default.getItem(localColorSchemeKey)];
                case 1:
                    localColorScheme = _b.sent();
                    if (localColorScheme === COLOR_SCHEME.LIGHT)
                        return [2 /*return*/, COLOR_SCHEME.LIGHT];
                    else if (localColorScheme === COLOR_SCHEME.DARK)
                        return [2 /*return*/, COLOR_SCHEME.DARK];
                    else
                        return [2 /*return*/, COLOR_SCHEME.DEFAULT];
                    return [3 /*break*/, 3];
                case 2:
                    _a = _b.sent();
                    console.warn('Error trying to get the local color scheme');
                    return [2 /*return*/, COLOR_SCHEME.DEFAULT];
                case 3: return [2 /*return*/];
            }
        });
    }); }, []);
    var setLocalColorScheme = (0, react_1.useCallback)(function (colorSchemeValue) { return __awaiter(void 0, void 0, void 0, function () {
        var putable, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    putable = void 0;
                    if (colorSchemeValue === COLOR_SCHEME.LIGHT || colorSchemeValue === COLOR_SCHEME.DARK) {
                        putable = colorSchemeValue;
                    }
                    else {
                        putable = COLOR_SCHEME.DEFAULT;
                    }
                    return [4 /*yield*/, async_storage_1.default.setItem(localColorSchemeKey, putable)];
                case 1:
                    _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _a = _b.sent();
                    console.warn('Error trying to set the local color scheme');
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); }, []);
    // END ASYNC STORAGE //
    // START STATE UPDATE //
    var updateTheme = (0, react_1.useCallback)(function () { return __awaiter(void 0, void 0, void 0, function () {
        var theme_1, force, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, useLocalColorScheme()];
                case 1:
                    force = _a.sent();
                    if (force === COLOR_SCHEME.DEFAULT) {
                        theme_1 = createAppTheme(deviceColorSheme !== null && deviceColorSheme !== void 0 ? deviceColorSheme : 'light');
                    }
                    else {
                        theme_1 = createAppTheme(force);
                    }
                    setTheme(theme_1);
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.error(err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); }, [createAppTheme]);
    var updateThemeWith = (0, react_1.useCallback)(function (colorSchemeValue) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, setLocalColorScheme(colorSchemeValue)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, updateTheme()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); }, [updateTheme]);
    var updateThemeLight = (0, react_1.useCallback)(function () { return updateThemeWith(COLOR_SCHEME.LIGHT); }, [updateThemeWith]);
    var updateThemeDark = (0, react_1.useCallback)(function () { return updateThemeWith(COLOR_SCHEME.DARK); }, [updateThemeWith]);
    var updateThemeDefault = (0, react_1.useCallback)(function () { return updateThemeWith(COLOR_SCHEME.DEFAULT); }, [updateThemeWith]);
    // END STATE UPDATE //
    // START STATE GETER //
    var useMixedTheme = (0, react_1.useCallback)(function () { return theme; }, [theme]);
    // END STATE GETER //
    // START USEEFFECT AND RETURNS //
    (0, react_1.useEffect)(function () {
        updateTheme();
        return function () { };
    }, []);
    var value = {
        COLOR_SCHEME: COLOR_SCHEME,
        useLocalColorScheme: useLocalColorScheme,
        useMixedTheme: useMixedTheme,
        updateThemeLight: updateThemeLight,
        updateThemeDark: updateThemeDark,
        updateThemeDefault: updateThemeDefault,
    };
    return (<ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>);
    // END USEEFFECT AND RETURNS
};
exports.default = ThemeProvider;
//# sourceMappingURL=ThemeContext.jsx.map