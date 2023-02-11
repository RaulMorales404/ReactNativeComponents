/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { SectionList, ScrollView, Text, View } from 'react-native';
import HeaderTitle from '../../componentes/HeaderTitle';
import RenderSeparateItem from '../../componentes/RenderSeparateItem';
import { colors as color } from '../../themes/colors';
import { styles } from '../../themes/Themes';
import { ThemeContext } from '../../context/contextTheme/ThemeContex';


interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
        casa: "DC Comics",
        data: ["Batman", "Superman", "Robin",]
    },
    {
        casa: "Marvel Comics",
        data: ["Antman", "Thor", "Spiderman", "Antman", "Kenshin", "Goku", "Saitama",]
    },
    {
        casa: "Anime",
        data: ["Kenshin", "Goku", "Saitama", "Antman", "Thor", "Spiderman", "Antman", "Kenshin", "Goku", "Saitama",]
    },
    {
        casa: "Animales",
        data: ["Kenshin", "Goku", "Saitama", "Spiderman", "Antman", "Kenshin", "Goku", "Saitama",]
    },
    {
        casa: "Marvel Comics",
        data: ["Antman", "Thor", "Spiderman", "Antman", "Kenshin", "Goku", "Saitama",]
    },
    {
        casa: "Anime",
        data: ["Kenshin", "Goku", "Saitama", "Antman", "Thor", "Spiderman", "Antman", "Kenshin", "Goku", "Saitama",]
    },
    {
        casa: "Animales",
        data: ["Kenshin", "Goku", "Saitama", "Spiderman", "Antman", "Kenshin", "Goku", "Saitama",]
    }
];

const List = () => {

    const { theme: { colors } } = useContext(ThemeContext);
    return (
        <View style={{ ...styles.container }}>


            <SectionList
                sections={casas}
                ListHeaderComponent={() => <HeaderTitle title="List Components" />}
                ListFooterComponent={() => (
                    <View style={{ marginBottom: 50 }}>
                        <HeaderTitle title={`Total de casas ${casas.length}`} color={colors.text} />
                    </View>
                )}

                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Text style={{ color: colors.text }}>{item}</Text>}
                renderSectionHeader={({ section }) => (
                    <View style={{ backgroundColor: colors.background }}>
                        <HeaderTitle
                            title={section.casa}
                        />
                    </View>
                )}
                renderSectionFooter={({ section }) => <Text
                    style={{
                        color: color.blue,
                        fontWeight: 'bold',
                        fontSize: 20,
                        marginTop: 10,
                    }}
                >Total {section.data.length}</Text>}

                stickySectionHeadersEnabled
                showsVerticalScrollIndicator={false}

                // ItemSeparatorComponent={() => <RenderSeparateItem />}
                SectionSeparatorComponent={() => <RenderSeparateItem />}

            />

        </View>

    );
};

export default List;
