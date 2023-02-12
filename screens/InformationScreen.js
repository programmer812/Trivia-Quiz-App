import { View, Text } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';

const InformationScreen = () => {

    const route = useRoute();
    const navigation = useNavigation();

    navigation.setOptions({
        title: route.params.title
    })

    return (
        <View>
            <Text>How many questions would you like to answer today?</Text>
            <TextInput  />
        </View>
    )
}

export default InformationScreen;