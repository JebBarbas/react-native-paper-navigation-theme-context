export declare type FontWeight = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
export interface Font {
    fontFamily: string;
    fontWeight?: FontWeight;
}
export interface Fonts {
    regular: Font;
    medium: Font;
    light: Font;
    thin: Font;
}
export declare type Mode = 'adaptive' | 'exact';
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
export declare const DefaultTheme: Theme;
export declare const DarkTheme: Theme;
