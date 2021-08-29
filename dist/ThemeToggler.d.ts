import { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
interface ThemeTogglerProps {
    lightButtonIconName?: string;
    darkButtonIconName?: string;
    defaultButtonIconName?: string;
    selectedButtonColor?: string;
    defaultButtonColor?: string;
    buttonSize?: number;
    disableLightButton?: boolean;
    disableDarkButton?: boolean;
    disableDefaultButton?: boolean;
    lightButtonStyle?: StyleProp<ViewStyle>;
    darkButtonStyle?: StyleProp<ViewStyle>;
    defaultButtonStyle?: StyleProp<ViewStyle>;
    buttonsDirection?: 'row' | 'column';
}
declare const ThemeToggler: FC<ThemeTogglerProps>;
export default ThemeToggler;
