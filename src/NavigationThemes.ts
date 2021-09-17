// NONE OF THIS CODE IS MINE, I COPIED IT FROM THE REACT-NAVIGATION/NATIVE REPOSITORY
// TO MAKE THIS MODULE INDEPENDENT, SO YOU WON'T NEED TO HAVE REACT-NAVIGATION INSTALLED
// IF YOU DONT WANT.

// type Theme
// https://github.com/react-navigation/react-navigation/blob/main/packages/native/src/types.tsx
export interface Theme {
    dark: boolean;
    colors: {
        primary: string;
        background: string;
        card: string;
        text: string;
        border: string;
        notification: string;
    }
}

// Navigation DefaultTheme
// https://github.com/react-navigation/react-navigation/blob/main/packages/native/src/theming/DefaultTheme.tsx
export const DefaultTheme:Theme = {
    dark: false,
    colors: {
        primary: 'rgb(0, 122, 255)',
        background: 'rgb(242, 242, 242)',
        card: 'rgb(255, 255, 255)',
        text: 'rgb(28, 28, 30)',
        border: 'rgb(216, 216, 216)',
        notification: 'rgb(255, 59, 48)',
    },
};

// Navigation DarkTheme
// https://github.com/react-navigation/react-navigation/blob/main/packages/native/src/theming/DarkTheme.tsx
export const DarkTheme:Theme = {
    dark: true,
    colors: {
        primary: 'rgb(10, 132, 255)',
        background: 'rgb(1, 1, 1)',
        card: 'rgb(18, 18, 18)',
        text: 'rgb(229, 229, 231)',
        border: 'rgb(39, 39, 41)',
        notification: 'rgb(255, 69, 58)',
    },
};
  
  