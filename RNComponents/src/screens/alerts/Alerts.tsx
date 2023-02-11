import React from 'react';
import { Button, StyleSheet, View, Alert } from 'react-native';
import prompt from 'react-native-prompt-android';
import HeaderTitle from '../../componentes/HeaderTitle';
import { styles } from '../../themes/Themes';

const Alerts = () => {

    const showAlert = () => {
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'destructive',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ], {
            cancelable: true,

        }
        );
    };

    const showPront = () => {
        // Alert.prompt(
        //     'Alert Title',
        //     'My Alert Msg',
        // );

        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password) },
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder',
            }
        );
    };
    return (
        <View style={styles.container}>
            <HeaderTitle title="Alerts" />
            <View>
                <Button
                    title="Alert"
                    onPress={showAlert}
                />
                <Button
                    title="Pront"
                    onPress={showPront}
                />
            </View>

        </View>
    );
};

export default Alerts;

const styless = StyleSheet.create({

});
