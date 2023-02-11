/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Modal, Button, Text, View, StyleSheet, Pressable } from 'react-native';
import HeaderTitle from '../../componentes/HeaderTitle';
import { styles } from '../../themes/Themes';
import { colors } from '../../themes/colors';

const Modals = () => {
    const [modalVisible, setModalVisible] = useState(false);


    return (
        <View style={styles.container}>
            <Modal
                animationType="fade"
                transparent
                visible={modalVisible}
            >
                <View style={styless.centeredView}>

                    <View style={styless.modalView}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: colors.blue, margin: 10 }}>
                            Hi Modal
                        </Text>

                        <Text style={{ color: 'black' }}>
                            Description to modal
                        </Text>


                        <Pressable onPress={() => setModalVisible(!modalVisible)} >
                            <Text style={{ fontSize: 20, color: 'red' }}>
                                Close
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </Modal >

            <HeaderTitle title="Modals" />
            <Button
                title="Open Modal"
                onPress={() => setModalVisible(!modalVisible)}

            />
        </View >
    );
};

export default Modals;

const styless = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {

        backgroundColor: 'white',
        borderRadius: 20,
        width: '80%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

});
