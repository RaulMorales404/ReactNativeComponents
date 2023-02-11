import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeContext } from '../context/contextTheme/ThemeContex';
import Home from '../screens/home/Home';
import Animation01 from '../screens/AnimationsScreens/Animation01';
import Animation02 from '../screens/AnimationsScreens/Animation02';
import Swich from '../screens/swichs/Swich';
import Alerts from '../screens/alerts/Alerts';
import Input from '../screens/inputs/Input';
import PullToRefresh from '../screens/pullToRefresh/PullToRefresh';
import List from '../screens/List/List';
import Modals from '../screens/modals/Modals';
import InfinitiScroll from '../screens/infinitiScroll/InfinitiScroll';
import Slider from '../screens/slider/Slider';
import ThemeSettings from '../screens/themesConfig/ThemeSettings';
import { NavigationContainer } from '@react-navigation/native';



const Stack = createStackNavigator();

const Navigation = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <NavigationContainer
            theme={theme}
        >
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Animation01" component={Animation01} />
                <Stack.Screen name="Animation02" component={Animation02} />
                <Stack.Screen name="Swich" component={Swich} />
                <Stack.Screen name="Alerts" component={Alerts} />
                <Stack.Screen name="Input" component={Input} />
                <Stack.Screen name="List" component={List} />
                <Stack.Screen name="PullToRefresh" component={PullToRefresh} />
                <Stack.Screen name="Modal" component={Modals} />
                <Stack.Screen name="InfinitiScroll" component={InfinitiScroll} />
                <Stack.Screen name="Slider" component={Slider} />
                <Stack.Screen name="ThemeSettings" component={ThemeSettings} />

            </Stack.Navigator >
        </NavigationContainer>

    );
};
export default Navigation;
