import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderTitle from '../../componentes/HeaderTitle';
import Swiches from '../../componentes/Swiches';
import { styles  } from '../../themes/Themes';
import { ThemeContext } from '../../context/contextTheme/ThemeContex';



const Swich = () => {
    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true,
    });
    const { isActive, isHappy, isHungry } = state;
    const { theme: { colors } } = useContext(ThemeContext);
    const onChange = (value: boolean, file: string) => {
        setState({
            ...state,
            [file]: value,
        });

    };
    return (

        <View style={styles.container}>
            <HeaderTitle title="Swiches" />
            <View style={styless.rowSwich}>
                <Text style={{...styless.swichText,color:colors.text}}>is Active</Text>
                <Swiches isOne={isActive} onChange={(value) => onChange(value, 'isActive')} />
            </View>
            <View style={styless.rowSwich}>
                <Text style={{...styless.swichText,color:colors.text}}>is Hungry</Text>
                <Swiches isOne={isHungry} onChange={(value) => onChange(value, 'isHungry')} />
            </View>
            <View style={styless.rowSwich}>
                <Text style={{...styless.swichText,color:colors.text}}>is Happy</Text>
                <Swiches isOne={isHappy} onChange={(value) => onChange(value, 'isHappy')} />
            </View>

            <Text style={{...styless.swichTextJson,color:colors.text}}>
                {JSON.stringify(state, null, 5)}
            </Text>
        </View>

    );
};
export default Swich;

const styless = StyleSheet.create({
    swichTextJson: {
        fontSize: 28,
        color: 'black',
    },
    swichText: {
        fontSize: 20,
        color: 'black',
    },
    rowSwich: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
    },

});
