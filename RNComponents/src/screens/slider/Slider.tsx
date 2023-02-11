/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useState } from 'react';
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';
import { colors as color } from '../../themes/colors';
import { Slide, items } from '../../data/dataSlider';
import useAnimate from '../../hooks/useAnimate';
import { ThemeContext } from '../../context/contextTheme/ThemeContex';


interface Props extends StackScreenProps<any, any> { }


const Slider = ({ navigation }: Props) => {
    const { theme: { colors } } = useContext(ThemeContext);

    const { width: widthScreen, height: heightScreen } = Dimensions.get('screen');
    const [itemPosition, setItemPosition] = useState(0);
    const { opacity: opacisityButton, fadeIn } = useAnimate();

    const pointIndicator = (index: number) => {
        setItemPosition(index);
        index === items.length - 1 ? fadeIn(0.9, 0) : fadeIn(0, 0);
    };

    const renderItem = (item: Slide) => {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                borderRadius: 18,
                padding: 40,

            }}>
                <Image
                    source={item.img}
                    style={{
                        width: 350,
                        height: 500,
                        resizeMode: 'center',
                        alignSelf: 'center',
                    }}
                />
                <Text style={styles.titleText}>{item.title}</Text>
                <Text style={{...styles.subText,color:colors.text}}>{item.desc}</Text>
            </View>
        );

    };
    return (
        <SafeAreaView style={{ flex: 1, paddingTop: 50 }}>
            <Carousel
                // ref={(c) => { carousel = c; }}
                data={items}
                renderItem={({ item }: any) => renderItem(item)}
                sliderWidth={widthScreen}
                itemWidth={widthScreen}
                layout="default"
                onSnapToItem={index => pointIndicator(index)}

            />
            <View style={{
                justifyContent: 'space-around',
                flexDirection: 'row',

            }}>
                <Pagination
                    dotsLength={items.length}
                    activeDotIndex={itemPosition}
                    animatedDuration={0.5}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 10,
                        backgroundColor: colors.primary,
                    }}
                />
                <Animated.View style={{ opacity: opacisityButton }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                        disabled={itemPosition === 0}
                        activeOpacity={0.8}
                        style={{ ...styles.button }}>
                        <Text style={{ fontSize: 18, color: color.light }}>Entrar</Text>
                        <Icon name="chevron-forward-outline" size={25} color={color.light} />
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </SafeAreaView >
    );
};

export default Slider;

const styles = StyleSheet.create({
    titleText: {
        color: color.blue,
        fontSize: 30,
        fontWeight: 'bold',
    },
    subText: {
        fontSize: 16,
    },
    button: {
        height: 40,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: color.blue,
        alignSelf: 'center',
        flexDirection: 'row',
    },
});
