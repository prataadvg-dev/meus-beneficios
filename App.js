// import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, /* Text, View */ } from 'react-native';
import ListGridHome from './src/components/ListGridHome';
import MeuBeneficio from './src/components/MeuBeneficio';
import AboutCompany from './src/components/AboutCompany';
import BenefitView from './src/components/BenefitView';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      {/* <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View> */}
      < NavigationContainer >
        <Stack.Navigator
          screenOptions={{
            contentStyle: {
              backgroundColor: '#FFFFFF'
            }
          }}>
          <Stack.Screen name="Bem-Vindo" component={ListGridHome} />
          <Stack.Screen name="Meu Benefício" component={MeuBeneficio} />
          <Stack.Screen name="Sobre a Empresa" component={AboutCompany} />
          <Stack.Screen name="Visualizar" component={BenefitView} options={({ route }) => ({ title: route.params.benefitItem.label, })} />
        </Stack.Navigator>
      </NavigationContainer ></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
