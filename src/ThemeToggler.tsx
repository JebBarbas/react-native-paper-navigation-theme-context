import React, {FC, useState, useEffect, useCallback} from 'react'
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

    // Sets in state the localColorScheme and defaults to COLOR_SCHEME.LIGHT 
    // (to save as a colorSchemeName) (this will be changed after).
    const [localColorScheme, setLocalColorScheme] = useState(COLOR_SCHEME.LIGHT)
    
    // Stores the primary and text color to indicate what theme is in usage
    const { primary, text } = useMixedTheme().colors

    // Creates an async function to set the localColorScheme
    const loadLocalColorScheme = useCallback(async () => {
        try{
            // useLocalColorScheme returns a Promise, so, will await it
            const localColorScheme = await useLocalColorScheme()
            setLocalColorScheme(localColorScheme)
        }
        catch(err){
            console.error('Error loading the colorScheme from storage:',err)
        }
    },[])

    // To recharge the component once the theme is changed
    const updateAndLoad = useCallback(async (updateFunction:UpdateThemeFunction) => {
        await updateFunction()
        await loadLocalColorScheme()
    },[])


    useEffect(()=>{
        loadLocalColorScheme()
    },[])

    return (
        <View style={styles.flex}>
            <IconButton 
                icon={props.lightButtonIconName || "brightness-7" }
                color={localColorScheme === COLOR_SCHEME.LIGHT ? primary : text} 
                onPress={() => updateAndLoad(updateThemeLight)}
            />

            <IconButton 
                icon={props.darkButtonIconName || "brightness-3" }
                color={localColorScheme === COLOR_SCHEME.DARK ? primary : text} 
                onPress={() => updateAndLoad(updateThemeDark)}
            />

            <IconButton 
                icon={props.defaultButtonIconName || "brightness-4" }
                color={localColorScheme === COLOR_SCHEME.DEFAULT ? primary : text} 
                onPress={() => updateAndLoad(updateThemeDefault)}
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