import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton } from "react-native-paper";
import { useTheme } from "./ThemeContext";
const ThemeToggler = (props) => {
    // Imports all useTheme functions
    const { updateThemeLight, updateThemeDark, updateThemeDefault, COLOR_SCHEME, useLocalColorScheme, useMixedTheme, } = useTheme();
    // Sets in state the localColorScheme
    const localColorScheme = useLocalColorScheme();
    // Stores the primary and text color to indicate what theme is in usage
    const { primary, text } = useMixedTheme().colors;
    useEffect(() => { 0; }, [useLocalColorScheme]);
    return (React.createElement(View, { style: styles.flex },
        React.createElement(IconButton, { icon: props.lightButtonIconName || "brightness-7", color: localColorScheme === COLOR_SCHEME.LIGHT ? primary : text, onPress: updateThemeLight }),
        React.createElement(IconButton, { icon: props.darkButtonIconName || "brightness-3", color: localColorScheme === COLOR_SCHEME.DARK ? primary : text, onPress: updateThemeDark }),
        React.createElement(IconButton, { icon: props.defaultButtonIconName || "brightness-4", color: localColorScheme === COLOR_SCHEME.DEFAULT ? primary : text, onPress: updateThemeDefault })));
};
export default ThemeToggler;
const styles = StyleSheet.create({
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
});
//# sourceMappingURL=ThemeToggler.js.map