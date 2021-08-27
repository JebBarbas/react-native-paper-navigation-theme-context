# react-native-paper-navigation-theme-context
Theme Context for react-native, to support Light, Dark and Default (your device) theme for your react-native-paper and react-navigation components.

## Dependencies
This module deppends on:
- @react-native-async-storage/async-storage
- @react-navigation/native
- react
- react-native
- react-native-paper

## Instalation
Just run in your console
`npm i react-native-paper-navigation-theme-context`

## Usage - Principal
Now, instead of the normal PaperTheme and NavigationTheme, you'll use a mix of the two named MixedTheme, note that
initially, `useMixedTheme()` returns a MixedTheme based on your device's preferences (if you have the darkmode in you
device, a DarkTheme will be returned).

```jsx
import {ThemeProvider, useTheme} from 'react-native-paper-navigation-theme-context';
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

// This is suposed to be your app
import Screen from './Screen';

const Providers = ({children}) => {
    // useTheme gives you the functions from ThemeProvider
    const { useMixedTheme } = useTheme();

    // useMixedTheme gives you the theme (can be a light or dark based on your device's preferences)
    const theme = useMixedTheme();

    return (
        <PaperProvider theme={theme}>
            <NavigationContainer theme={theme}>
                {children}
            </NavigationContainer>
        </PaperProvider>
    )
};

const App = () => {
    return (
        <ThemeProvider>
            <Providers>
                <Screen/>
            </Providers>
        </ThemeProvider>
    )
};

export default App;
```

## Usage - Override Theme
Sometimes, we want to change the colors from the theme, for example, react-native-paper primary color is '#6200ee'
(a purple), if we want to override that color to, for example '#dd0000' (a red), and the accent color from '#03dac4'
(a cyan) to '#0000dd' (a blue), we can do this using the `override` property in `<ThemeProvider>`.

```jsx
// ...
const App = () => {
    return (
        <ThemeProvider 
            override={{
                colors:{
                    primary: '#dd0000', 
                    accent: '#0000dd'
                }
            }}
        >
            <Providers>
                <Screen/>
            </Providers>
        </ThemeProvider>
    )
}
```

Now our component's primary color will be '#dd0000' and accent color will be '#0000dd'.

## Usage - Toggle Theme
`useTheme()` also provides some functions to instantly change the theme of the App, and uses the AsyncStorage to
store this in the device, so, the next time you enter in the app the theme will be saved. You can create your own
Theme Toggler using the `useTheme()` functions (Provider values) or you can use the `<ThemeToggler/>` component that
does this at its own.
```jsx
// ...
const ConfigurationScreen = () => {
    // ...
    return (
        <View>
            <Text>Change App Theme</Text>
            <ThemeToggler/>
        </View>
    )
}
```

## Provider Values
List of constants and functions that `useTheme()` provides:
- updateThemeLight (function): Updates the theme of the app to lightmode and stores it in storage.
- updateThemeDark (function): Updates the theme of the app to darkmode and stores it in storage.
- updateThemeDefault (function): Updates the theme of the app to the device's default mode.
- COLOR_SCHEME (object): Stores the value of the possible results of `useLocalColorScheme()`. 
Can be used if you want to compare the result with something like:
```jsx
// ...
const App = () => {
    // ...
    return (
        <Text>{localColorScheme === COLOR_SCHEME.DEFAULT ? 'Using Device Theme' : 'Using Local Theme'}</Text>
    )
}
```
- useLocalColorScheme (function): Returns the localColorScheme that is being used, can return: 
`COLOR_SCHEME.LIGHT`, `COLOR_SCHEME.DARK` or `COLOR_SCHEME.DEFAULT`.
- useMixedTheme (function): Returns the theme that is being used. Can be used if you want to extract for example
a color of the theme:
```jsx
// ...
const CustomComponent = () => {
    // ...
    const theme = useMixedTheme()
    return (
        <View style={{backgroundColor: theme.dark ? theme.colors.surface : theme.colors.primary}}>
            <Text>{theme.dark ? 'Using Dark Theme' : 'Using Default Theme'}</Text>
        </View>
    )
}
```