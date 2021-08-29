import React, {FC, useEffect} from "react"
import { StyleProp, ViewStyle } from "react-native"
import { Switch } from "react-native-paper"
import { useTheme } from "./ThemeContext"

type DarkmodeSwitchProperties = {
    disabled?: boolean,
    color?: string,
    style?:StyleProp<ViewStyle>,
}

/**
 * @warning This component doesn't provide a mode to return to the device's default mode, only
 * switches from light and darkmode.
 */
const DarkmodeSwitch:FC<DarkmodeSwitchProperties> = (props) => {
    // Imports all useTheme functions
    const {
        updateThemeLight,
        updateThemeDark,
        COLOR_SCHEME,
        useLocalColorScheme,
    } = useTheme()

    // Sets in state the localColorScheme
    const localColorScheme = useLocalColorScheme()

    const isDarkMode = localColorScheme === COLOR_SCHEME.DARK

    const handleSwitchChange = (e:boolean) => {
        // e is true if the user wants to activate the dark theme
        if(e){
            updateThemeDark()
        }
        else{ // Then the user wants lightmode
            updateThemeLight()
        }
    }

    useEffect(()=>()=>{null},[useLocalColorScheme, props])

    return (
        <Switch 
            value={isDarkMode} 
            onValueChange={handleSwitchChange}
            disabled={props.disabled}
            color={props.color}
            style={props.style}
        />
    )
}

export default DarkmodeSwitch