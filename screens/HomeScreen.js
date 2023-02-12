import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FilterCard from '../components/FilterCard';

const HomeScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.homeContainer}>
            <FilterCard 
                backgroundColor="red"
                dimensions={200}
                onPress={() => navigation.navigate("Academics")}
            >Academics</FilterCard>
            <FilterCard 
                backgroundColor="#8080ff"
                dimensions={200}
                onPress={() => navigation.navigate("General-Trivia")}
            >General Trivia</FilterCard>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
})