/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../themes/Themes';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../themes/colors';

interface Props {
    title: string
    color?: string
}
const HeaderTitle = ({ title, color = colors.blue }: Props) => {
    const { top } = useSafeAreaInsets();
    return (
        <View style={{ marginTop: top + 20, marginBottom: 20 }}>
            <Text style={{ ...styles.title, color }}>
                {title}
            </Text>
        </View >
    );
};

export default HeaderTitle;
