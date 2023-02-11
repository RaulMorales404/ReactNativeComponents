/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TypeMenuItem } from '../interfaces/TypeMenuItem';
import { colors as color } from '../themes/colors';
import { ThemeContext } from '../context/contextTheme/ThemeContex';


const RenderItemCart = ({ icon, name, nameComponent }: TypeMenuItem) => {
    const navigation = useNavigation();
    const { theme: { colors } } = useContext(ThemeContext);
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(nameComponent as never, {} as never)}
            activeOpacity={0.8}
            style={{
                width: '100%',
                height: 50,
                flexDirection: 'row',
                paddingHorizontal: 20,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name={icon} size={20} color={color.blue} />
                <Text style={{ color: colors.text, paddingLeft: 10 }}>
                    {name}
                </Text>
            </View>
            <Icon name="chevron-forward-sharp" size={30} color={color.blue} />
        </TouchableOpacity>
    );
};

export default RenderItemCart;

