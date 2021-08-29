import { FC } from "react";
import { StyleProp, ViewStyle } from "react-native";
declare type DarkmodeSwitchProperties = {
    disabled?: boolean;
    color?: string;
    style?: StyleProp<ViewStyle>;
};
/**
 * @warning This component doesn't provide a mode to return to the device's default mode, only
 * switches from light and darkmode.
 */
declare const DarkmodeSwitch: FC<DarkmodeSwitchProperties>;
export default DarkmodeSwitch;
