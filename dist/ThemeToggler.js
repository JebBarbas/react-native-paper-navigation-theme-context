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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var react_native_paper_1 = require("react-native-paper");
var ThemeContext_1 = require("./ThemeContext");
var ThemeToggler = function (props) {
    // Imports all useTheme functions
    var _a = (0, ThemeContext_1.useTheme)(), updateThemeLight = _a.updateThemeLight, updateThemeDark = _a.updateThemeDark, updateThemeDefault = _a.updateThemeDefault, COLOR_SCHEME = _a.COLOR_SCHEME, useLocalColorScheme = _a.useLocalColorScheme, useMixedTheme = _a.useMixedTheme;
    // Sets in state the localColorScheme
    var localColorScheme = useLocalColorScheme();
    // Stores the primary and text color to indicate what theme is in usage
    var _b = useMixedTheme().colors, primary = _b.primary, text = _b.text;
    (0, react_1.useEffect)(function () { }, [useLocalColorScheme]);
    return (<react_native_1.View style={styles.flex}>
            <react_native_paper_1.IconButton icon={props.lightButtonIconName || "brightness-7"} color={localColorScheme === COLOR_SCHEME.LIGHT ? primary : text} onPress={updateThemeLight}/>

            <react_native_paper_1.IconButton icon={props.darkButtonIconName || "brightness-3"} color={localColorScheme === COLOR_SCHEME.DARK ? primary : text} onPress={updateThemeDark}/>

            <react_native_paper_1.IconButton icon={props.defaultButtonIconName || "brightness-4"} color={localColorScheme === COLOR_SCHEME.DEFAULT ? primary : text} onPress={updateThemeDefault}/>
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