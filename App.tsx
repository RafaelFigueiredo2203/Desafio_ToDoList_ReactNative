import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import { Header } from './src/components/Header';
import { BodyTasks } from './src/components/BodyTasks';


export default function App() {
  return (
    <View className="w-full h-full m-0 p-0 box-border bg-[#1A1A1A]">
     <Header/>
     <BodyTasks/>
     <StatusBar   style="light" />
    

    </View>
  );
}


