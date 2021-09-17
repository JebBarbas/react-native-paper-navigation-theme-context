import { DefaultTheme as NavigationDefaultTheme, DarkTheme as NavigationDarkTheme, } from './NavigationThemes';
import { DefaultTheme as PaperDefaultTheme, DarkTheme as PaperDarkTheme, } from './PaperThemes';
export const overrideTheme = (UsedTheme, override) => {
    const theme = {
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
    };
    return theme;
};
export const DefaultTheme = {
    ...PaperDefaultTheme,
    ...NavigationDefaultTheme,
    colors: {
        ...PaperDefaultTheme.colors,
        ...NavigationDefaultTheme.colors
    }
};
export const DarkTheme = {
    ...PaperDarkTheme,
    ...NavigationDarkTheme,
    colors: {
        ...PaperDarkTheme.colors,
        ...NavigationDarkTheme.colors
    }
};
//# sourceMappingURL=themes.js.map