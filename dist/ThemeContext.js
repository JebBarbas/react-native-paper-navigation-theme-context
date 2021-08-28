import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { DefaultTheme, DarkTheme, overrideTheme } from './themes';
import AsyncStorage from '@react-native-async-storage/async-storage';
// END TYPES //
// CONTEXT USE AND PROVIDER //
const themeContextDefaultValue = {
    COLOR_SCHEME: { LIGHT: 'light', DARK: 'dark', DEFAULT: 'default' },
    useLocalColorScheme: () => 'light',
    useMixedTheme: () => DefaultTheme,
    updateThemeLight: async () => { 0; },
    updateThemeDark: async () => { 0; },
    updateThemeDefault: async () => { 0; }
};
const ThemeContext = createContext(themeContextDefaultValue);
export const useTheme = () => {
    return useContext(ThemeContext);
};
const ThemeProvider = ({ children, override }) => {
    // START MEMO CONSTANTS //
    const COLOR_SCHEME = { LIGHT: 'light', DARK: 'dark', DEFAULT: 'default' };
    const localColorSchemeKey = 'localColorSheme';
    // END MEMO CONSTANTS //
    // START THEME CREATOR //
    const createAppTheme = (colorSchemeValue) => {
        const UsedTheme = colorSchemeValue === COLOR_SCHEME.DARK ? DarkTheme : DefaultTheme;
        return overrideTheme(UsedTheme, override);
    };
    // END THEME CREATOR //
    // START COMPONENT STATE //
    const [theme, setTheme] = useState(createAppTheme('light'));
    const [localColorScheme, setLocalColorScheme] = useState(COLOR_SCHEME.LIGHT);
    const deviceColorScheme = useColorScheme();
    // END COMPONENT STATE
    // START ASYNC STORAGE //
    const getLocalColorScheme = async () => {
        try {
            const localColorScheme = await AsyncStorage.getItem(localColorSchemeKey);
            if (localColorScheme === COLOR_SCHEME.LIGHT)
                return COLOR_SCHEME.LIGHT;
            else if (localColorScheme === COLOR_SCHEME.DARK)
                return COLOR_SCHEME.DARK;
            else
                return COLOR_SCHEME.DEFAULT;
        }
        catch {
            console.warn('Error trying to get the local color scheme');
            return COLOR_SCHEME.DEFAULT;
        }
    };
    const saveLocalColorScheme = async (colorSchemeValue) => {
        try {
            let putable;
            if (colorSchemeValue === COLOR_SCHEME.LIGHT || colorSchemeValue === COLOR_SCHEME.DARK) {
                putable = colorSchemeValue;
            }
            else {
                putable = COLOR_SCHEME.DEFAULT;
            }
            await AsyncStorage.setItem(localColorSchemeKey, putable);
        }
        catch {
            console.warn('Error trying to set the local color scheme');
        }
    };
    // END ASYNC STORAGE //
    // START STATE UPDATE //
    const updateTheme = async () => {
        try {
            let theme;
            const force = await getLocalColorScheme();
            if (force === COLOR_SCHEME.DEFAULT) {
                theme = createAppTheme(deviceColorScheme ?? 'light');
            }
            else {
                theme = createAppTheme(force);
            }
            setTheme(theme);
            setLocalColorScheme(force);
        }
        catch (err) {
            console.error(err);
        }
    };
    const updateThemeWith = async (colorSchemeValue) => {
        await saveLocalColorScheme(colorSchemeValue);
        await updateTheme();
    };
    const updateThemeLight = () => updateThemeWith(COLOR_SCHEME.LIGHT);
    const updateThemeDark = () => updateThemeWith(COLOR_SCHEME.DARK);
    const updateThemeDefault = () => updateThemeWith(COLOR_SCHEME.DEFAULT);
    // END STATE UPDATE //
    // START STATE GETER //
    const useMixedTheme = () => theme;
    const useLocalColorScheme = () => localColorScheme;
    // END STATE GETER //
    // START USEEFFECT AND RETURNS //
    useEffect(() => {
        updateTheme();
        return () => { 0; };
    }, []);
    const value = {
        COLOR_SCHEME,
        useLocalColorScheme,
        useMixedTheme,
        updateThemeLight,
        updateThemeDark,
        updateThemeDefault,
    };
    return (React.createElement(ThemeContext.Provider, { value: value }, children));
    // END USEEFFECT AND RETURNS
};
export default ThemeProvider;
//# sourceMappingURL=ThemeContext.js.map