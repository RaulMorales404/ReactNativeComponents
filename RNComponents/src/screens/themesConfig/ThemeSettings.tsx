/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import HeaderTitle from '../../componentes/HeaderTitle';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from '../../themes/Themes';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors as color } from '../../themes/colors';
import { ThemeContext } from '../../context/contextTheme/ThemeContex';


const ThemeSettings = () => {
    const { setDarkTheme, setLightTheme,theme: { colors } } = useContext(ThemeContext);
    return (
        <View style={{ ...styles.container}}>
            <HeaderTitle title="Themes" />
            <Text style={{ ...styless.titleText, alignSelf: 'flex-start', paddingVertical: 10, color: colors.text }}>
                Select a Theme app
            </Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', top: 20 }}>
                <View>
                    <TouchableOpacity style={styless.buttons} activeOpacity={0.8}
                        onPress={() => setDarkTheme()}
                    >
                        <Icon name="moon" color={colors.primary} size={50} />
                    </TouchableOpacity>
                    <Text style={{ ...styless.titleText, color: colors.text }}>Nigth</Text>

                </View>
                <View>
                    <TouchableOpacity style={styless.buttons} activeOpacity={0.8}
                        onPress={() => setLightTheme()}
                    >
                        <Icon name="sunny" color={colors.primary} size={50} />
                    </TouchableOpacity>
                    <Text style={{ ...styless.titleText, color: colors.text }}>Sunny</Text>
                </View>
            </View>

        </View>

    );
};

export default ThemeSettings;
const styless = StyleSheet.create({
    buttons: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.gray,
        width: 80,
        height: 80,
        borderRadius: 80,
    },
    titleText: {
        alignSelf: 'center',
        paddingVertical: 20,
        fontSize: 18,
    },

});
