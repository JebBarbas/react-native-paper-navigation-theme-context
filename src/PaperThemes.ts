// ONLY SOME OF THE CODE IS MINE, I COPIED THE STRUCTURE FROM THE REACT-NATIVE-PAPER REPOSITORY*
// TO MAKE THIS MODULE INDEPENDENT, SO YOU WON'T NEED TO HAVE REACT-NAVIGATION INSTALLED
// IF YOU DONT WANT.

// *: react-native-paper themes uses color module to make its colors, so, I copied the structure of
// the themes and replace the 'color('black').alpha(0.26)...' with the equivalent result string.
// I made the same with the variables like 'pinkA400'.

import { Platform, PlatformOSType } from 'react-native';

// configureFonts() function
// https://github.com/callstack/react-native-paper/blob/main/src/styles/fonts.tsx
const fontConfig = {
    web: {
        regular: {
            fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
            fontWeight: '400',
        },
        medium: {
            fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
            fontWeight: '500',
        },
        light: {
            fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
            fontWeight: '300',
        },
        thin: {
            fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
            fontWeight: '100',
        },
    },
    ios: {
        regular: {
            fontFamily: 'System',
            fontWeight: '400',
        },
        medium: {
            fontFamily: 'System',
            fontWeight: '500',
        },
        light: {
            fontFamily: 'System',
            fontWeight: '300',
        },
        thin: {
            fontFamily: 'System',
            fontWeight: '100',
        },
    },
    default: {
        regular: {
            fontFamily: 'sans-serif',
            fontWeight: 'normal',
        },
        medium: {
            fontFamily: 'sans-serif-medium',
            fontWeight: 'normal',
        },
        light: {
            fontFamily: 'sans-serif-light',
            fontWeight: 'normal',
        },
        thin: {
            fontFamily: 'sans-serif-thin',
            fontWeight: 'normal',
        },
    },
}
  
function configureFonts(
    config?: { [platform in PlatformOSType | 'default']?: Fonts }
): Fonts {
    const fonts = Platform.select({ ...fontConfig, ...config }) as Fonts;
    return fonts;
}

// type Theme (and another types required)
// https://github.com/callstack/react-native-paper/blob/main/src/types.tsx
export type FontWeight =   | 'normal'
                    | 'bold'
                    | '100'
                    | '200'
                    | '300'
                    | '400'
                    | '500'
                    | '600'
                    | '700'
                    | '800'
                    | '900'

export interface Font {
    fontFamily: string;
    fontWeight?: FontWeight
}

export interface Fonts {
    regular: Font;
    medium: Font;
    light: Font;
    thin: Font;
}

export type Mode = 'adaptive' | 'exact';

export interface Theme {
    dark: boolean;
    mode?: Mode;
    roundness: number;
    colors: {
        primary: string;
        background: string;
        surface: string;
        accent: string;
        error: string;
        text: string;
        onSurface: string;
        disabled: string;
        placeholder: string;
        backdrop: string;
        notification: string;
    };
    fonts: Fonts;
    animation: {
        scale: number;
    };
}

// Paper DefaultTheme
// https://github.com/callstack/react-native-paper/blob/main/src/styles/DefaultTheme.tsx
export const DefaultTheme:Theme = {
    dark: false,
    roundness: 4,
    colors: {
        primary: '#6200ee',
        accent: '#03dac4',
        background: '#f6f6f6',
        surface: '#ffffff',
        error: '#B00020',
        text: '#000000',
        onSurface: '#000000',
        disabled: 'rgba(0, 0, 0, 0.26)',
        placeholder: 'rgba(0, 0, 0, 0.54)' ,
        backdrop: 'rgba(0, 0, 0, 0.5)',
        notification: '#f50057',
    },
    fonts: configureFonts(),
    animation: {
        scale: 1.0,
    },
};

// Paper DarkTheme
// https://github.com/callstack/react-native-paper/blob/main/src/styles/DarkTheme.tsx
export const DarkTheme:Theme = {
    ...DefaultTheme,
    dark: true,
    mode: 'adaptive',
    colors: {
        ...DefaultTheme.colors,
        primary: '#BB86FC',
        accent: '#03dac6',
        background: '#121212',
        surface: '#121212',
        error: '#CF6679',
        onSurface: '#FFFFFF',
        text: '#ffffff',
        disabled: 'rgba(255, 255, 255, 0.38)',
        placeholder: 'rgba(255, 255, 255, 0.54)',
        backdrop: 'rgba(0, 0, 0, 0.38)',
        notification: '#ff80ab',
    },
};