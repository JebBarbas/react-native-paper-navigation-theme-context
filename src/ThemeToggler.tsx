import React, {FC, useEffect} from 'react'
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';
import { IconButton } from "react-native-paper";
import { useTheme } from "./ThemeContext";

interface ThemeTogglerProps {
    lightButtonIconName?: string,
    darkButtonIconName?: string,
    defaultButtonIconName?: string,

    selectedButtonColor?: string,
    defaultButtonColor?: string,
    buttonSize?: number,

    disableLightButton?: boolean,
    disableDarkButton?: boolean,
    disableDefaultButton?:boolean,

    lightButtonStyle?: StyleProp<ViewStyle>,
    darkButtonStyle?: StyleProp<ViewStyle>,
    defaultButtonStyle?: StyleProp<ViewStyle>,

    buttonsDirection?: 'row' | 'column'
}

const ThemeToggler:FC<ThemeTogglerProps> = (props) => {
    // Imports all useTheme functions
    const {
        updateThemeLight,
        updateThemeDark,
        updateThemeDefault,
        COLOR_SCHEME,
        useLocalColorScheme,
        useMixedTheme,
    } = useTheme()

    // Sets in state the localColorScheme
    const localColorScheme = useLocalColorScheme()
    
    // Stores the primary and text color to indicate what theme is in usage
    const { primary, text } = useMixedTheme().colors

    const activeButtonColor = props.selectedButtonColor ?? primary
    const inactiveButtonColor = props.defaultButtonColor ?? text

    useEffect(()=>()=>{null}, [useLocalColorScheme, props])

    return (
        <View style={props.buttonsDirection === "column" ? styles.flexColumn : styles.flexRow}>
            <IconButton 
                icon={props.lightButtonIconName || "brightness-7" }
                color={localColorScheme === COLOR_SCHEME.LIGHT ? activeButtonColor : inactiveButtonColor} 
                onPress={updateThemeLight}
                accessibilityLabel="Activate Lightmode"

                size={props.buttonSize}
                disabled={props.disableLightButton}
                style={props.lightButtonStyle}
            />

            <IconButton 
                icon={props.darkButtonIconName || "brightness-3" }
                color={localColorScheme === COLOR_SCHEME.DARK ? activeButtonColor : inactiveButtonColor} 
                onPress={updateThemeDark}
                accessibilityLabel="Activate Darkmode"

                size={props.buttonSize}
                disabled={props.disableDarkButton}
                style={props.darkButtonStyle}
            />

            <IconButton 
                icon={props.defaultButtonIconName || "brightness-4" }
                color={localColorScheme === COLOR_SCHEME.DEFAULT ? activeButtonColor : inactiveButtonColor} 
                onPress={updateThemeDefault}
                accessibilityLabel="Return to device default mode"

                size={props.buttonSize}
                disabled={props.disableDefaultButton}
                style={props.defaultButtonStyle}
            />
        </View>
    )
}

export default ThemeToggler

const styles = StyleSheet.create({
    flexRow: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    flexColumn: {
        flexDirection: 'column',
    }
})