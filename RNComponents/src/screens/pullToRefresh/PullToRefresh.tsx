import React, { useContext, useState } from 'react';
import { ScrollView, View, RefreshControl, Dimensions } from 'react-native';
import HeaderTitle from '../../componentes/HeaderTitle';
import { colors as color } from '../../themes/colors';
import { styles } from '../../themes/Themes';
import { ThemeContext } from '../../context/contextTheme/ThemeContex';

const PullToRefresh = () => {
    const { theme: {colors} } = useContext(ThemeContext);
    const tall = Dimensions.get('screen').height;
    const [refreshing, setRefreshing] = useState<boolean>(false);
    const [data, setData] = useState<string>();
    const onRefresh = (): void => {
        setRefreshing(true);
        setTimeout(() => {
            console.log('termine de cargar', tall);
            setRefreshing(false);
            setData('Hola tengo la data');
        }, 4500);

    };

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    //que tan abajo debe de estas
                    progressViewOffset={tall / 2}
                    //color de fondo
                    progressBackgroundColor={color.grayDarck}
                    //distintos colores durante la carga
                    colors={['orange', 'red', color.blue, 'black']}
                    //color para ios
                    tintColor={color.blue}
                    title={'holaaa'}
                />

            }
        >
            <View style={styles.container}>
                <HeaderTitle title="Push refresh" color={refreshing ? '#00C922' : color.blue} />
                {data &&
                    <HeaderTitle title={data} color={colors.text} />
                }
            </View>
        </ScrollView>

    );
};

export default PullToRefresh;
