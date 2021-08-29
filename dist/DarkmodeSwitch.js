import React, { useEffect } from "react";
import { Switch } from "react-native-paper";
import { useTheme } from "./ThemeContext";
/**
 * @warning This component doesn't provide a mode to return to the device's default mode, only
 * switches from light and darkmode.
 */
const DarkmodeSwitch = (props) => {
    // Imports all useTheme functions
    const { updateThemeLight, updateThemeDark, COLOR_SCHEME, useLocalColorScheme, } = useTheme();
    // Sets in state the localColorScheme
    const localColorScheme = useLocalColorScheme();
    const isDarkMode = localColorScheme === COLOR_SCHEME.DARK;
    const handleSwitchChange = (e) => {
        // e is true if the user wants to activate the dark theme
        if (e) {
            updateThemeDark();
        }
        else { // Then the user wants lightmode
            updateThemeLight();
        }
    };
    useEffect(() => () => { null; }, [useLocalColorScheme, props]);
    return (React.createElement(Switch, { value: isDarkMode, onValueChange: handleSwitchChange, disabled: props.disabled, color: props.color, style: props.style }));
};
export default DarkmodeSwitch;
//# sourceMappingURL=DarkmodeSwitch.js.map