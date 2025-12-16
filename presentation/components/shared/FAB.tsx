import { Ionicons } from '@expo/vector-icons';
import { StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';

interface Props {
    iconName: keyof typeof Ionicons.glyphMap;
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
}

const FAB = ({ iconName, onPress, style }: Props) => {
    return (
        <View>
            <TouchableOpacity
                style={[styles.btn, style]}
                onPress={onPress}
            >
                <Ionicons name={iconName} size={35} color='white' />
            </TouchableOpacity>
        </View>
    )
}

export default FAB;

const styles = StyleSheet.create({
    btn: {
        zIndex: 1,
        position: 'absolute',
        height: 50,
        width: 50,
        borderRadius: 30,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        shadowOpacity: 0.3,
        shadowOffset: {
            height: 0.27,
            width: 4.5
        },
        elevation: 5
    }
})