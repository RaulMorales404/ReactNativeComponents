/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    ScrollView,
    TextInput,
    View,
    Text,
} from 'react-native';

import HeaderTitle from '../../componentes/HeaderTitle';
import { styles } from '../../themes/Themes';
import { useForm } from '../../hooks/useForm';
import Swiches from '../../componentes/Swiches';
import { ThemeContext } from '../../context/contextTheme/ThemeContex';
import { colors as color } from '../../themes/colors';

const Input = () => {
    const { theme: { colors } } = useContext(ThemeContext);
    const { form, onChange, isSuscribe } = useForm({
        isSuscribe: false,
        name: '',
        email: '',
        phone: '',

    });

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView>
                <View style={{ ...styles.container, marginBottom: 100 }}>
                    <HeaderTitle title="Input" />

                    <TextInput style={{ ...styless.input, borderColor: colors.border,color:colors.text }}
                        placeholder={'Full Name'}
                        autoCorrect={false}
                        placeholderTextColor={color.grayDarck}
                        onChangeText={(value) => onChange(value, 'name')}
                    />

                    <TextInput style={{ ...styless.input, borderColor: colors.border,color:colors.text }}
                        placeholder={'@email'}
                        placeholderTextColor={color.grayDarck}
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        onChangeText={(value) => onChange(value, 'email')}
                    />
                    <HeaderTitle title={JSON.stringify(form, null, 3)} color={colors.text} />
                    <HeaderTitle title={JSON.stringify(form, null, 3)} color={colors.text}/>

                    <TextInput style={{ ...styless.input, borderColor: colors.border,color:colors.text }}
                        placeholder={'Phone'}
                        placeholderTextColor={color.grayDarck}
                        onChangeText={(value) => onChange(value, 'phone')}
                        keyboardAppearance="dark"
                        keyboardType="number-pad"
                    />
                    <View style={styless.rowSwich}>
                        <Text style={{...styless.swichText,color:colors.text}}>Suscribete</Text>
                        <Swiches isOne={isSuscribe} onChange={(value) => onChange(value, 'isSuscribe')} />
                    </View>
                </View>
            </ScrollView>

        </KeyboardAvoidingView>

    );
};

export default Input;
export const styless = StyleSheet.create({
    input: {
        borderColor: 'rgba(0,0,0,0.3)',
        borderWidth: 2,
        height: 50,
        paddingHorizontal: 15,
        borderRadius: 8,
        marginVertical: 10,
    },
    swichText: {
        fontSize: 20,
        color: color.dark,
    },
    rowSwich: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
});

