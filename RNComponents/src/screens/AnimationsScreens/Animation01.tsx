
import React from 'react';
import { View, StyleSheet, Animated, Button } from 'react-native';
import useAnimate from '../../hooks/useAnimate';

const Animation01 = () => {
    const { fadeIn, top, opacity } = useAnimate();

    return (
        <View style={styles.container}>
            <Button
                title="Opasiti"
                onPress={() => fadeIn(0.9, 0)}
            />
            <Button
                title="FadeOut"
                onPress={() => fadeIn(0, -300)}
            />
            <Animated.View style={{
                ...styles.row, opacity, transform: [{
                    translateY: top,
                }],
            }} />

        </View >
    );
};

export default Animation01;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        backgroundColor: 'blue',
        width: 150,
        height: 150,
    },
});
