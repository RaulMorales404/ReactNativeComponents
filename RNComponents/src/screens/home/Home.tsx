import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import HeaderTitle from '../../componentes/HeaderTitle';
import RenderItemCart from '../../componentes/RenderItemCart';
import RenderSeparateItem from '../../componentes/RenderSeparateItem';
import { menuItem } from '../../data/DataMenu';
import { styles } from '../../themes/Themes';

const Home = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={menuItem}
                renderItem={({ item }) => <RenderItemCart {...item} />}
                keyExtractor={item => item.name}
                ListHeaderComponent={<HeaderTitle title="Opciones del menu" />}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <RenderSeparateItem />}
            />
        </View >
    );
};

export default Home;
