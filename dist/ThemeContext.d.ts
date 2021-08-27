import { FC } from 'react';
import { MixedTheme, OptionalMixedTheme } from './themes';
declare type ThemeProviderProps = {
    override?: OptionalMixedTheme;
};
declare type ColorSchemeName = 'light' | 'dark' | 'default';
declare type ColorSchemeNameObject = {
    LIGHT: ColorSchemeName;
    DARK: ColorSchemeName;
    DEFAULT: ColorSchemeName;
};
declare type ContextValue = {
    COLOR_SCHEME: ColorSchemeNameObject;
    useLocalColorScheme: () => ColorSchemeName;
    useMixedTheme: () => MixedTheme;
    updateThemeLight: () => Promise<void>;
    updateThemeDark: () => Promise<void>;
    updateThemeDefault: () => Promise<void>;
};
export declare const useTheme: () => ContextValue;
declare const ThemeProvider: FC<ThemeProviderProps>;
export default ThemeProvider;
