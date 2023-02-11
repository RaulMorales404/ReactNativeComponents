/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */

interface Props {
    backgroundColor?: string;
    opacity?: number
}
import { View } from 'react-native';

const RenderSeparateItem = ({ backgroundColor = '#D7DBDD', opacity = 0.5 }: Props) => {
    return (
        <View style={{
            width: '100%',
            height: 2,
            backgroundColor,
            marginVertical: 10,
            opacity,
        }} >
        </View>
    );
};

export default RenderSeparateItem;
