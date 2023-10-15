import { TextInput, View,TouchableOpacity, TouchableOpacityProps, NativeSyntheticEvent, TextInputChangeEventData,  } from 'react-native'
import React, { ChangeEventHandler, FormEventHandler } from 'react'
import { PlusCircle } from 'phosphor-react-native'

interface InputPropsType extends TouchableOpacityProps {
  onCreateTask: () => void;
  onTaskChange:(text:string) => void;
  task:string
}

export function InputNewTask({task,onCreateTask, onTaskChange  }: InputPropsType) {
  return (
    <View className="flex flex-row w-full items-center justify-center mt-[-28px]">
      <TextInput  className="h-14 w-72 mr-2 bg-[#262626] rounded-lg p-2 border-0 text-zinc-200 text-base"
        placeholder='Adicione uma nova tarefa'
        placeholderTextColor='#808080'
        onChangeText={onTaskChange}
        value={task}
       />

       <TouchableOpacity
       onPress={onCreateTask}
       className=" text-white text-base w-16 h-14 rounded-lg bg-[#1E6F9F] flex items-center justify-center
       hover:opacity-60 focus:opacity-90"
       >
       <PlusCircle color='white' size={24} />
       </TouchableOpacity>
    </View>
  )
}

