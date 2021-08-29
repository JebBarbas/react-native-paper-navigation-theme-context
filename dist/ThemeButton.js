import React, { useEffect } from 'react';
import { Button } from "react-native-paper";
import { useTheme } from "./ThemeContext";
const ThemeButton = (props) => {
    const { updateThemeLight, updateThemeDark, updateThemeDefault, COLOR_SCHEME, useLocalColorScheme, useMixedTheme, } = useTheme();
    const localColorScheme = useLocalColorScheme();
    const { primary } = useMixedTheme().colors;
    const getButtonIcon = () => {
        switch (localColorScheme) {
            case COLOR_SCHEME.LIGHT: return props.lightIcon ?? "brightness-7";
            case COLOR_SCHEME.DARK: return props.darkIcon ?? "brightness-3";
            case COLOR_SCHEME.DEFAULT: return props.defaultIcon ?? "brightness-4";
            default: return 'help';
        }
    };
    const getButtonText = () => {
        switch (localColorScheme) {
            case COLOR_SCHEME.LIGHT: return 'Light';
            case COLOR_SCHEME.DARK: return 'Dark';
            case COLOR_SCHEME.DEFAULT: return 'Default';
            default: return 'Not Found';
        }
    };
    const handlePress = () => {
        switch (localColorScheme) {
            case COLOR_SCHEME.LIGHT:
                updateThemeDark();
                break;
            case COLOR_SCHEME.DARK:
                updateThemeDefault();
                break;
            case COLOR_SCHEME.DEFAULT:
                updateThemeLight();
                break;
            default: break;
        }
    };
    useEffect(() => () => { null; }, [useLocalColorScheme, props]);
    return (React.createElement(Button, { icon: getButtonIcon(), color: props.color ?? primary, accessibilityLabel: `${localColorScheme} theme`, onPress: handlePress, mode: props.mode, loading: props.loading, disabled: props.disabled, contentStyle: props.contentStyle, labelStyle: props.labelStyle, style: props.style }, props.showLabel ? getButtonText() : ''));
};
export default ThemeButton;
//# sourceMappingURL=ThemeButton.js.map