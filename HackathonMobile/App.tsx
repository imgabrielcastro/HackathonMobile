import React from 'react';
import 'react-native-gesture-handler'; 
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { theme } from './src/theme/theme'; 
import Routes from './src/routes/AuthStack'; 
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Routes />
        <StatusBar style="light" />
      </NavigationContainer>
    </PaperProvider>
    </GestureHandlerRootView>
  );
}
