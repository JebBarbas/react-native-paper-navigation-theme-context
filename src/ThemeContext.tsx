import React, {
    FC,
    createContext, 
    useContext, 
    useState, 
    useEffect
} from 'react';
import { useColorScheme } from 'react-native';
import { MixedTheme, OptionalMixedTheme, DefaultTheme, DarkTheme, overrideTheme } from './themes';
import AsyncStorage from '@react-native-async-storage/async-storage';


// START TYPES //
type ThemeProviderProps = {
    override?: OptionalMixedTheme
}

type ColorSchemeName = 'light' | 'dark' | 'default'

type ColorSchemeNameObject = {
    LIGHT: ColorSchemeName,
    DARK: ColorSchemeName,
    DEFAULT: ColorSchemeName,
}

type ContextValue = {
    COLOR_SCHEME: ColorSchemeNameObject,
    useLocalColorScheme: () => Promise<ColorSchemeName>,
    useMixedTheme: () => MixedTheme,
    updateThemeLight: () => Promise<void>,
    updateThemeDark: () => Promise<void>,
    updateThemeDefault: () => Promise<void>
}
// END TYPES //

// CONTEXT USE AND PROVIDER //
const themeContextDefaultValue:ContextValue = {
    COLOR_SCHEME: {LIGHT:'light', DARK:'dark',DEFAULT:'default'},
    useLocalColorScheme: async () => 'light',
    useMixedTheme: () => DefaultTheme,
    updateThemeLight: async () => {},
    updateThemeDark: async () => {},
    updateThemeDefault: async () => {}
}
const ThemeContext = createContext(themeContextDefaultValue)

export const useTheme = () => {
    return useContext(ThemeContext)
}

const ThemeProvider:FC<ThemeProviderProps> = ({children, override}) => {  
    // START MEMO CONSTANTS //
    const COLOR_SCHEME:ColorSchemeNameObject = {LIGHT: 'light',DARK: 'dark',DEFAULT: 'default'}

    const localColorSchemeKey = 'localColorSheme'
    // END MEMO CONSTANTS //

    // START THEME CREATOR //
    const createAppTheme = (colorSchemeValue:ColorSchemeName):MixedTheme => {
        const UsedTheme = colorSchemeValue === COLOR_SCHEME.DARK ? DarkTheme : DefaultTheme
        return overrideTheme(UsedTheme, override)
    }
    // END THEME CREATOR //

    // START COMPONENT STATE //
    const [theme, setTheme] = useState(createAppTheme('light'))
    const deviceColorSheme = useColorScheme()
    // END COMPONENT STATE

    // START ASYNC STORAGE //
    const useLocalColorScheme = async () => {
        try{
            const localColorScheme = await AsyncStorage.getItem(localColorSchemeKey)
            if(localColorScheme === COLOR_SCHEME.LIGHT) return COLOR_SCHEME.LIGHT
            else if(localColorScheme === COLOR_SCHEME.DARK) return COLOR_SCHEME.DARK
            else return COLOR_SCHEME.DEFAULT
        }
        catch{
            console.warn('Error trying to get the local color scheme')
            return COLOR_SCHEME.DEFAULT
        }
    }

    const setLocalColorScheme = async (colorSchemeValue:ColorSchemeName) => {
        try{
            let putable:ColorSchemeName
            if(colorSchemeValue === COLOR_SCHEME.LIGHT || colorSchemeValue === COLOR_SCHEME.DARK){
                putable = colorSchemeValue
            }
            else{
                putable = COLOR_SCHEME.DEFAULT
            }

            await AsyncStorage.setItem(localColorSchemeKey, putable)
        }
        catch{
            console.warn('Error trying to set the local color scheme')
        }
    }
    // END ASYNC STORAGE //

    // START STATE UPDATE //
    const updateTheme = async () => {
        try{
            let theme:MixedTheme
            const force = await useLocalColorScheme()

            if(force === COLOR_SCHEME.DEFAULT){
                theme = createAppTheme(deviceColorSheme ?? 'light')
            }
            else{
                theme = createAppTheme(force)
            }

            setTheme(theme)
        }
        catch(err){
            console.error(err)
        }
    }

    const updateThemeWith = async (colorSchemeValue:ColorSchemeName) => {
        await setLocalColorScheme(colorSchemeValue)
        await updateTheme()
    }

    const updateThemeLight = () => updateThemeWith(COLOR_SCHEME.LIGHT)
    const updateThemeDark = () => updateThemeWith(COLOR_SCHEME.DARK)
    const updateThemeDefault = () => updateThemeWith(COLOR_SCHEME.DEFAULT)
    // END STATE UPDATE //

    // START STATE GETER //
    const useMixedTheme = () => theme
    // END STATE GETER //

    // START USEEFFECT AND RETURNS //
    useEffect(()=>{
        updateTheme()
        return () => {}
    }, [])

    const value = {
        COLOR_SCHEME,
        useLocalColorScheme,
        useMixedTheme,
        updateThemeLight,
        updateThemeDark,
        updateThemeDefault,
    }

    return (
        <ThemeContext.Provider value={value}>
            { children }
        </ThemeContext.Provider>
    )
    // END USEEFFECT AND RETURNS
}

export default ThemeProvider