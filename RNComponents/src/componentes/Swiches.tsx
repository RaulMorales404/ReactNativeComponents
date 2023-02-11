import React, { useState } from 'react';
import { Switch } from 'react-native';
import { colors } from '../themes/colors';

interface Props {
    isOne: boolean,
    onChange: (value: boolean) => void;
}
const Swiches = ({ isOne, onChange }: Props) => {

    const [isActive, setIsActive] = useState(isOne);
    const toggleSwhich = () => {
        setIsActive(!isActive);
        onChange(!isActive);
    }


    return (
        <Switch
            trackColor={{ false: colors.grayAndroid, true: colors.blue }}
            thumbColor={isActive ? colors.graylite : '#f4f3f4'}
            ios_backgroundColor={colors.graylite}
            onValueChange={toggleSwhich}
            value={isActive}
        />
    );
};

export default Swiches;
