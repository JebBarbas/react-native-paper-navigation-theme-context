import {
    DefaultTheme as NavigationDefaultTheme, 
    DarkTheme as NavigationDarkTheme, 
} from './NavigationThemes';
import type {Theme as NavigationTheme} from './NavigationThemes'

import {
    DefaultTheme as PaperDefaultTheme, 
    DarkTheme as PaperDarkTheme,
} from './PaperThemes';
import type {Theme as PaperTheme, Mode, FontWeight} from './PaperThemes'

export type MixedTheme = NavigationTheme & PaperTheme

export interface OptionalMixedTheme {
    dark?: boolean,
    mode?: Mode,
    roundness?: number,
    colors?: {
        primary?: string,
        background?: string,
        surface?: string,
        accent?: string,
        error?: string,
        text?: string,
        onSurface?: string,
        disabled?: string,
        placeholder?: string,
        backdrop?: string,
        notification?: string,
        card?: string,
        border?: string,
    },
    fonts?: {
        regular?: {
            fontFamily?: string,
            fontWeight?: FontWeight,
        },
        medium?: {
            fontFamily?: string,
            fontWeight?: FontWeight,
        },
        light?: {
            fontFamily?: string,
            fontWeight?: FontWeight,
        },
        thin?: {
            fontFamily?: string,
            fontWeight?: FontWeight,
        }
    },
    animation?: {
        scale?: number
    } 
}

export const overrideTheme = (UsedTheme:MixedTheme, override?:OptionalMixedTheme):MixedTheme => {
    const theme:MixedTheme =  {
        dark: override?.dark ?? UsedTheme.dark,
        mode: override?.mode ?? UsedTheme.mode,
        roundness: override?.roundness ?? UsedTheme.roundness,
        colors: {
            primary: override?.colors?.primary ?? UsedTheme.colors.primary,
            background: override?.colors?.background ?? UsedTheme.colors.background,
            surface: override?.colors?.surface ?? UsedTheme.colors.surface,
            accent: override?.colors?.accent ?? UsedTheme.colors.accent,
            error: override?.colors?.error ?? UsedTheme.colors.error,
            text: override?.colors?.text ?? UsedTheme.colors.text,
            onSurface: override?.colors?.onSurface ?? UsedTheme.colors.onSurface,
            disabled: override?.colors?.disabled ?? UsedTheme.colors.disabled,
            placeholder: override?.colors?.placeholder ?? UsedTheme.colors.placeholder,
            backdrop: override?.colors?.backdrop ?? UsedTheme.colors.backdrop,
            notification: override?.colors?.notification ?? UsedTheme.colors.notification,
            card: override?.colors?.card ?? UsedTheme.colors.card,
            border: override?.colors?.border ?? UsedTheme.colors.border,
        },
        fonts: {
            regular: {
                fontFamily: override?.fonts?.regular?.fontFamily ?? UsedTheme.fonts.regular.fontFamily,
                fontWeight: override?.fonts?.regular?.fontWeight ?? UsedTheme.fonts.regular.fontWeight,
            },
            medium: {
                fontFamily: override?.fonts?.medium?.fontFamily ?? UsedTheme.fonts.medium.fontFamily,
                fontWeight: override?.fonts?.medium?.fontWeight ?? UsedTheme.fonts.medium.fontWeight,
            },
            light: {
                fontFamily: override?.fonts?.light?.fontFamily ?? UsedTheme.fonts.light.fontFamily,
                fontWeight: override?.fonts?.light?.fontWeight ?? UsedTheme.fonts.light.fontWeight,
            },
            thin: {
                fontFamily: override?.fonts?.thin?.fontFamily ?? UsedTheme.fonts.thin.fontFamily,
                fontWeight: override?.fonts?.thin?.fontWeight ?? UsedTheme.fonts.thin.fontWeight,
            }
        },
        animation: {
            scale: override?.animation?.scale ?? UsedTheme.animation.scale
        } 
    }

    return theme
}

export const DefaultTheme:MixedTheme = {
    ...PaperDefaultTheme,
    ...NavigationDefaultTheme,
    colors : {
        ...PaperDefaultTheme.colors,
        ...NavigationDefaultTheme.colors
    }
}

export const DarkTheme:MixedTheme = {
    ...PaperDarkTheme,
    ...NavigationDarkTheme,
    colors : {
        ...PaperDarkTheme.colors,
        ...NavigationDarkTheme.colors
    }
}