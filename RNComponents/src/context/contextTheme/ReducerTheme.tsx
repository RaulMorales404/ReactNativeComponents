import { Theme } from '@react-navigation/native';
import { colors } from '../../themes/colors';





type ThemeAction =
    | { type: 'set_dark_theme' }
    | { type: 'set_light_theme' }

export interface ThemeState extends Theme {
    currenTheme: 'dark' | 'light',
    activitiColor:string,
}
export const lightTheme: ThemeState = {
    currenTheme: 'light',
    dark: false,
    activitiColor:'red',
    colors: {
        primary: colors.blue,
        background: colors.light,
        card: 'aqua',
        text: colors.dark,
        border: colors.border,
        notification: colors.grayDarck,

    },
};

export const darkTheme: ThemeState = {
    currenTheme: 'light',
    dark: true,
    activitiColor:'red',
    colors: {
        primary: colors.blue,
        background: colors.dark,
        card: 'aqua',
        text: colors.light,
        border: colors.grayDarck,
        notification: colors.grayDarck,

    },
};

export const themeReducer = (state: ThemeState, action: ThemeAction,): ThemeState => {
    switch (action.type) {
        case 'set_light_theme':
            return { ...lightTheme };
        case 'set_dark_theme':
            return { ...darkTheme };
        default:
            return state;
    }



};