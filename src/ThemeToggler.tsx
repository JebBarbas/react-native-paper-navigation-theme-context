import React, {FC, useState, useEffect} from 'react'
import { StyleSheet, View } from 'react-native';
import { IconButton } from "react-native-paper";
import { useTheme } from "./ThemeContext";

interface ThemeTogglerProps {
    lightButtonIconName?: string,
    darkButtonIconName?: string,
    defaultButtonIconName?: string,
}

type UpdateThemeFunction = () => Promise<void>

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

    useEffect(()=>{}, [useLocalColorScheme])

    return (
        <View style={styles.flex}>
            <IconButton 
                icon={props.lightButtonIconName || "brightness-7" }
                color={localColorScheme === COLOR_SCHEME.LIGHT ? primary : text} 
                onPress={updateThemeLight}
            />

            <IconButton 
                icon={props.darkButtonIconName || "brightness-3" }
                color={localColorScheme === COLOR_SCHEME.DARK ? primary : text} 
                onPress={updateThemeDark}
            />

            <IconButton 
                icon={props.defaultButtonIconName || "brightness-4" }
                color={localColorScheme === COLOR_SCHEME.DEFAULT ? primary : text} 
                onPress={updateThemeDefault}
            />
        </View>
    )
}

export default ThemeToggler

const styles = StyleSheet.create({
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
})