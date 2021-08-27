"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DarkTheme = exports.DefaultTheme = exports.overrideTheme = void 0;
var native_1 = require("@react-navigation/native");
var react_native_paper_1 = require("react-native-paper");
var overrideTheme = function (UsedTheme, override) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30;
    var theme = {
        dark: (_a = override === null || override === void 0 ? void 0 : override.dark) !== null && _a !== void 0 ? _a : UsedTheme.dark,
        mode: (_b = override === null || override === void 0 ? void 0 : override.mode) !== null && _b !== void 0 ? _b : UsedTheme.mode,
        roundness: (_c = override === null || override === void 0 ? void 0 : override.roundness) !== null && _c !== void 0 ? _c : UsedTheme.roundness,
        colors: {
            primary: (_e = (_d = override === null || override === void 0 ? void 0 : override.colors) === null || _d === void 0 ? void 0 : _d.primary) !== null && _e !== void 0 ? _e : UsedTheme.colors.primary,
            background: (_g = (_f = override === null || override === void 0 ? void 0 : override.colors) === null || _f === void 0 ? void 0 : _f.background) !== null && _g !== void 0 ? _g : UsedTheme.colors.background,
            surface: (_j = (_h = override === null || override === void 0 ? void 0 : override.colors) === null || _h === void 0 ? void 0 : _h.surface) !== null && _j !== void 0 ? _j : UsedTheme.colors.surface,
            accent: (_l = (_k = override === null || override === void 0 ? void 0 : override.colors) === null || _k === void 0 ? void 0 : _k.accent) !== null && _l !== void 0 ? _l : UsedTheme.colors.accent,
            error: (_o = (_m = override === null || override === void 0 ? void 0 : override.colors) === null || _m === void 0 ? void 0 : _m.error) !== null && _o !== void 0 ? _o : UsedTheme.colors.error,
            text: (_q = (_p = override === null || override === void 0 ? void 0 : override.colors) === null || _p === void 0 ? void 0 : _p.text) !== null && _q !== void 0 ? _q : UsedTheme.colors.text,
            onSurface: (_s = (_r = override === null || override === void 0 ? void 0 : override.colors) === null || _r === void 0 ? void 0 : _r.onSurface) !== null && _s !== void 0 ? _s : UsedTheme.colors.onSurface,
            disabled: (_u = (_t = override === null || override === void 0 ? void 0 : override.colors) === null || _t === void 0 ? void 0 : _t.disabled) !== null && _u !== void 0 ? _u : UsedTheme.colors.disabled,
            placeholder: (_w = (_v = override === null || override === void 0 ? void 0 : override.colors) === null || _v === void 0 ? void 0 : _v.placeholder) !== null && _w !== void 0 ? _w : UsedTheme.colors.placeholder,
            backdrop: (_y = (_x = override === null || override === void 0 ? void 0 : override.colors) === null || _x === void 0 ? void 0 : _x.backdrop) !== null && _y !== void 0 ? _y : UsedTheme.colors.backdrop,
            notification: (_0 = (_z = override === null || override === void 0 ? void 0 : override.colors) === null || _z === void 0 ? void 0 : _z.notification) !== null && _0 !== void 0 ? _0 : UsedTheme.colors.notification,
            card: (_2 = (_1 = override === null || override === void 0 ? void 0 : override.colors) === null || _1 === void 0 ? void 0 : _1.card) !== null && _2 !== void 0 ? _2 : UsedTheme.colors.card,
            border: (_4 = (_3 = override === null || override === void 0 ? void 0 : override.colors) === null || _3 === void 0 ? void 0 : _3.border) !== null && _4 !== void 0 ? _4 : UsedTheme.colors.border,
        },
        fonts: {
            regular: {
                fontFamily: (_7 = (_6 = (_5 = override === null || override === void 0 ? void 0 : override.fonts) === null || _5 === void 0 ? void 0 : _5.regular) === null || _6 === void 0 ? void 0 : _6.fontFamily) !== null && _7 !== void 0 ? _7 : UsedTheme.fonts.regular.fontFamily,
                fontWeight: (_10 = (_9 = (_8 = override === null || override === void 0 ? void 0 : override.fonts) === null || _8 === void 0 ? void 0 : _8.regular) === null || _9 === void 0 ? void 0 : _9.fontWeight) !== null && _10 !== void 0 ? _10 : UsedTheme.fonts.regular.fontWeight,
            },
            medium: {
                fontFamily: (_13 = (_12 = (_11 = override === null || override === void 0 ? void 0 : override.fonts) === null || _11 === void 0 ? void 0 : _11.medium) === null || _12 === void 0 ? void 0 : _12.fontFamily) !== null && _13 !== void 0 ? _13 : UsedTheme.fonts.medium.fontFamily,
                fontWeight: (_16 = (_15 = (_14 = override === null || override === void 0 ? void 0 : override.fonts) === null || _14 === void 0 ? void 0 : _14.medium) === null || _15 === void 0 ? void 0 : _15.fontWeight) !== null && _16 !== void 0 ? _16 : UsedTheme.fonts.medium.fontWeight,
            },
            light: {
                fontFamily: (_19 = (_18 = (_17 = override === null || override === void 0 ? void 0 : override.fonts) === null || _17 === void 0 ? void 0 : _17.light) === null || _18 === void 0 ? void 0 : _18.fontFamily) !== null && _19 !== void 0 ? _19 : UsedTheme.fonts.light.fontFamily,
                fontWeight: (_22 = (_21 = (_20 = override === null || override === void 0 ? void 0 : override.fonts) === null || _20 === void 0 ? void 0 : _20.light) === null || _21 === void 0 ? void 0 : _21.fontWeight) !== null && _22 !== void 0 ? _22 : UsedTheme.fonts.light.fontWeight,
            },
            thin: {
                fontFamily: (_25 = (_24 = (_23 = override === null || override === void 0 ? void 0 : override.fonts) === null || _23 === void 0 ? void 0 : _23.thin) === null || _24 === void 0 ? void 0 : _24.fontFamily) !== null && _25 !== void 0 ? _25 : UsedTheme.fonts.thin.fontFamily,
                fontWeight: (_28 = (_27 = (_26 = override === null || override === void 0 ? void 0 : override.fonts) === null || _26 === void 0 ? void 0 : _26.thin) === null || _27 === void 0 ? void 0 : _27.fontWeight) !== null && _28 !== void 0 ? _28 : UsedTheme.fonts.thin.fontWeight,
            }
        },
        animation: {
            scale: (_30 = (_29 = override === null || override === void 0 ? void 0 : override.animation) === null || _29 === void 0 ? void 0 : _29.scale) !== null && _30 !== void 0 ? _30 : UsedTheme.animation.scale
        }
    };
    return theme;
};
exports.overrideTheme = overrideTheme;
exports.DefaultTheme = __assign(__assign(__assign({}, react_native_paper_1.DefaultTheme), native_1.DefaultTheme), { colors: __assign(__assign({}, react_native_paper_1.DefaultTheme.colors), native_1.DefaultTheme.colors) });
exports.DarkTheme = __assign(__assign(__assign({}, react_native_paper_1.DarkTheme), native_1.DarkTheme), { colors: __assign(__assign({}, react_native_paper_1.DarkTheme.colors), native_1.DarkTheme.colors) });
//# sourceMappingURL=themes.js.map