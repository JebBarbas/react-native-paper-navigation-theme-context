import { FC } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
declare type ThemeButtonProperties = {
    mode?: 'contained' | 'outlined' | 'text';
    color?: string;
    loading?: boolean;
    disabled?: boolean;
    lightIcon?: string;
    darkIcon?: string;
    defaultIcon?: string;
    showLabel?: boolean;
    contentStyle?: StyleProp<ViewStyle>;
    labelStyle?: StyleProp<TextStyle>;
    style?: StyleProp<ViewStyle>;
};
declare const ThemeButton: FC<ThemeButtonProperties>;
export default ThemeButton;
