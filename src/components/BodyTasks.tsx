import { StyleSheet, Alert, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { InputNewTask } from './InputNewTask'
import { ClipboardText, Trash } from 'phosphor-react-native';
import Checkbox from 'expo-checkbox';
import { toast } from 'react-toastify';

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
  
}

export function BodyTasks() {

  const notify = () => toast.error('Por favor digite uma tarefa!', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    }); 

  const [newTask, setNewTask] = useState('');
  const [tasks,setTasks] = useState<Task[]>([]);
  const [isCompletation, setIsCompletation] = useState(0);
  const [isChecked, setChecked] = useState(false);

  useEffect(() => {
    const getTask = tasks.filter(task => task.isComplete === true).length;
   
    setIsCompletation(getTask)
  },[tasks]);
  
  function handleParticipantAdd(){
    if(newTask === ''){
      return Alert.alert("Por favor inclua uma tarefa")
    }
    const newNTask = {
      id: Math.random(),
      title: newTask,
      isComplete: false
     
    }
    setTasks(prevState => [...prevState, newNTask])
    setNewTask('');
  }

  

  function handleTaskRemove(id: number){

    Alert.alert("Remover", `Remover a tarefa?`,[
      {
        text:'Sim',
        onPress:() => setTasks(prevState => prevState.filter(task => task.id !== id))
      },
      {
        text:'Não',
        style:'cancel'
      }
    ])

    
  }

  function handleTaskCompletion(id: number) {

    const newTasks = tasks.map(task => task.id === id ? {
      ...task,
      isComplete: !task.isComplete
    } : task);
    
    setTasks(newTasks);

  }

  
  return (
    <View>
      <InputNewTask
        task={newTask}
        onCreateTask={handleParticipantAdd}
        onTaskChange={setNewTask}
      />

     <View className='w-full flex flex-col items-center justify-center mt-12'>
        <View className='w-[327px] h-[600px] '>
          <View className='w-full h-5 flex flex-row items-center justify-between mb-2 '>
        <Text className="text-sm text-[#4EA8DE]">Criadas {tasks.length}</Text>
        <Text className="text-sm text-[#8284FA]">Concluída {isCompletation} de {tasks.length}</Text>
        </View>
      <FlatList 
      showsVerticalScrollIndicator={false}
      data={tasks}
      keyExtractor={item => item.title}
      renderItem={({item}) => (
   
  
        <View  className="pt-4 flex-col flex items-center justify-center rounded-lg ">
        <View className='w-full h-[72px] rounded-lg border bg-zinc-800 border-[#333333] px-4  flex flex-row items-center justify-between '>
        <Checkbox color="#5E60CE" className=' rounded-full data-[state=checked]:bg-[#5E60CE]'  value={item.isComplete} onValueChange={() => handleTaskCompletion(item.id)} />
  
          <Text className="font-normal text-sm leading-5 text-gray-100">
            {item.title}
          </Text>
  
        <TouchableOpacity onPress={() => handleTaskRemove(item.id)}>
        <Trash color="red" size={24} />
        </TouchableOpacity>
        
        </View>
  
  
        </View>
  
     
      )}
      ListEmptyComponent={() => (
        
  
        <View  className="pt-14 flex-col flex items-center justify-center rounded-lg border-t-2 border-t-[#3a3a3a]">
        <ClipboardText color="#3a3a3a" size={64} />
  
        <Text
        className="font-normal mt-6 mb-[-20px] text-base leading-6 text-zinc-400"
        >Você ainda não tem tarefas cadastradas </Text>
        <Text
         className="font-normal mt-6 text-base leading-6 text-zinc-600"
        >Crie tarefas e organize seus itens a fazer</Text>
        </View>
  
      
      )}
        />

       </View>
       </View>
    
    

    
    </View>
  )
}

const styles = StyleSheet.create({
  checkbox: {
    backgroundColor:'#5E60CE',
    margin: 8,
  },
});