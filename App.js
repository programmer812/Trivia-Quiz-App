import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import AcademicsScreen from './screens/AcademicsScreen';
import GeneralTriviaScreen from './screens/GeneralTriviaScreen';
import InformationScreen from './screens/InformationScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerTitleAlign: "center"
      }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title: "Which One?"
        }} />
        <Stack.Screen name="Academics" component={AcademicsScreen} options={{
          title: "Got A Test Coming Up?"
        }} />
        <Stack.Screen name="General-Trivia" component={GeneralTriviaScreen} />
        <Stack.Screen name="Information-Screen" component={InformationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
