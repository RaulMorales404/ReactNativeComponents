/* eslint-disable react/react-in-jsx-scope */
import { createContext, useEffect, useReducer } from 'react';
import { ThemeState, darkTheme, lightTheme, themeReducer } from './ReducerTheme';
import { useColorScheme } from 'react-native';


interface ThemeProps {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeProps);

export const ThemeProvider = ({ children }: any) => {

    const colorSchange = useColorScheme();
    const [theme, dispatch] = useReducer(themeReducer, colorSchange === 'dark' ? darkTheme : lightTheme);

    useEffect(() => {
        if (colorSchange === 'dark') {
            dispatch({ type: 'set_dark_theme' });
        } else {
            dispatch({ type: 'set_light_theme' });
        }
        console.log('cambie el color',colorSchange);

    }, [colorSchange]);



    const setDarkTheme = () => {
        console.log('dark');
        dispatch({ type: 'set_dark_theme' });
    };

    const setLightTheme = () => {
        dispatch({ type: 'set_light_theme' });
        console.log('light');
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setDarkTheme,
                setLightTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
