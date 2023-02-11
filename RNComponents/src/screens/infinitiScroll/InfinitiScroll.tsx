/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import HeaderTitle from '../../componentes/HeaderTitle';
import { FlatList } from 'react-native-gesture-handler';
import { colors } from '../../themes/colors';
import FadeInImage from '../../componentes/FadeInImage';
import { styles } from '../../themes/Themes';

const InfinitiScroll = () => {
    const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const leadMore = () => {
        const newArray: number[] = [];
        for (let i = 0; i < 20; i++) {
            newArray[i] = data.length + i;
        }
        setTimeout(() => {
            setData([...data, ...newArray]);
        }, 1500);

    };

    const renderItem = (item: number) => {
        return (
            <FadeInImage uri={`https://picsum.photos/id/${item}/500/400`}
                style={{
                    width: '100%',
                    height: 400,
                }}
            />
        );
        // return (
        //     <Image source={{ uri: `https://picsum.photos/id/${item}/500/400` }}
        //         style={{ width: '100%', height: 400 }}
        //     />
        // );
    };
    return (
        <View style={{ flex: 1 }}>

            <FlatList
                data={data}
                renderItem={({ item }) => renderItem(item)}
                keyExtractor={(item, index) => item + index.toString()}
                ListHeaderComponent={() => (
                    <View style={styles.container}>
                        <HeaderTitle title="Infiniti Scroll" />
                    </View>
                )}
                ListFooterComponent={
                    <View style={{ height: 150, justifyContent: 'center' }}>
                        <ActivityIndicator color={colors.blue} size={50} />
                    </View>

                }
                onEndReached={leadMore}
                onEndReachedThreshold={0.6}
            />

        </View>
    );
};

export default InfinitiScroll;

