declare type Mode = 'adaptive' | 'exact';
declare type FontWeight = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
export declare type MixedTheme = {
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
        card: string;
        border: string;
    };
    fonts: {
        regular: {
            fontFamily: string;
            fontWeight?: FontWeight;
        };
        medium: {
            fontFamily: string;
            fontWeight?: FontWeight;
        };
        light: {
            fontFamily: string;
            fontWeight?: FontWeight;
        };
        thin: {
            fontFamily: string;
            fontWeight?: FontWeight;
        };
    };
    animation: {
        scale: number;
    };
};
export declare type OptionalMixedTheme = {
    dark?: boolean;
    mode?: Mode;
    roundness?: number;
    colors?: {
        primary?: string;
        background?: string;
        surface?: string;
        accent?: string;
        error?: string;
        text?: string;
        onSurface?: string;
        disabled?: string;
        placeholder?: string;
        backdrop?: string;
        notification?: string;
        card?: string;
        border?: string;
    };
    fonts?: {
        regular?: {
            fontFamily?: string;
            fontWeight?: FontWeight;
        };
        medium?: {
            fontFamily?: string;
            fontWeight?: FontWeight;
        };
        light?: {
            fontFamily?: string;
            fontWeight?: FontWeight;
        };
        thin?: {
            fontFamily?: string;
            fontWeight?: FontWeight;
        };
    };
    animation?: {
        scale?: number;
    };
};
export declare const overrideTheme: (UsedTheme: MixedTheme, override?: OptionalMixedTheme | undefined) => MixedTheme;
export declare const DefaultTheme: MixedTheme;
export declare const DarkTheme: MixedTheme;
export {};
