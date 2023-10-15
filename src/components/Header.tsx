import { Text, View, Image } from 'react-native'
import React from 'react'
import logo from '../../assets/logotodo.png';


export function Header (){
    return (
      <View className="w-full h-[200px] flex items-center justify-center bg-black ">
        <Image source={logo}/>
      
      </View>
    )
}