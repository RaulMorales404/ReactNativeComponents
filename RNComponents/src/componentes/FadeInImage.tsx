/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native';
import useAnimate from '../hooks/useAnimate';
import { colors } from '../themes/colors';

interface Props {
    uri: string,
    style?: StyleProp<ImageStyle>,
}
const FadeInImage = ({ uri, style }: Props) => {
    const [isLoading, setIsLoading] = useState(true);
    const { opacity, top, fadeIn } = useAnimate();
    const finishLoadingImage = () => {
        //pasamos la opasidad,top y duracion
        fadeIn(0.9, 0, 500);
        setIsLoading(false);

    };

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            {isLoading && <ActivityIndicator
                style={{ position: 'absolute' }}
                size={50}
                color={colors.blue}
            />}
            <Animated.Image
                source={{ uri }}
                onLoadEnd={() => finishLoadingImage()}
                style={{
                    ...style as any, opacity,
                    transform: [{
                        translateX: top,
                    }],
                }}

            // style={{
            //     width: '100%',
            //     height: 400,
            //    
            // }} 
            />
        </View>

    );
};

export default FadeInImage;
