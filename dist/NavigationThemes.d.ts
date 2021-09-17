export interface Theme {
    dark: boolean;
    colors: {
        primary: string;
        background: string;
        card: string;
        text: string;
        border: string;
        notification: string;
    };
}
export declare const DefaultTheme: Theme;
export declare const DarkTheme: Theme;
