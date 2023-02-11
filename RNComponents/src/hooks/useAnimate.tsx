import { useRef } from 'react';
import { Animated, Easing } from 'react-native';

const useAnimate = () => {
    const opacity = useRef(new Animated.Value(0)).current;
    const top = useRef(new Animated.Value(-300)).current;

    const fadeIn = (numOpacity: number, numTop: number, duration?: number) => {
        Animated.timing(
            opacity, {
            toValue: numOpacity,
            duration: 500,
            useNativeDriver: true,
        }
        ).start();
        Animated.timing(
            top, {
            toValue: numTop,
            duration: duration ? duration : 300,
            useNativeDriver: true,
            easing: Easing.bounce,

        },
        ).start();
    };
    return {
        fadeIn,
        top,
        opacity,
    };
};

export default useAnimate;
