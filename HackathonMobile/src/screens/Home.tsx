import React from 'react';
import Login from '../components/LoginPage/LoginComponent'
import ClientsList from '../components/ClientsPage/ClientsComponent'
import { View } from 'react-native';

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
    <ClientsList/>
    </View>
  );
}