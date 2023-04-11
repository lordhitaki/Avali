import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { NativeBaseProvider, Heading} from "native-base";

import styles from './styles';
import api from '../../../services/api';
import Lp from '../../../components/listaPlana/flatList' 

export default function Lista() {
  const [dados, setDados] = useState([])

  useEffect(()=> {
  api.get('/tasks').then((response) =>{
    setDados(response.data)
    console.log(dados)
  })
},[])
  const navigation = useNavigation();
  
  return (
    <NativeBaseProvider>
    <TouchableWithoutFeedback
      touchSoundDisabled
      onPress={() => Keyboard.dismiss()}
    >
      <SafeAreaView style={styles.tela}>
      <View style={styles.cabecalho}>
      <Image style={styles.img} source={require('../../../components/images/eli1.png')}/>
      <TouchableOpacity style={styles.fechar}
      onPress={() => navigation.navigate("AddTask")}>
          <AntDesign name="leftcircle" size={45} color="white" />
      </TouchableOpacity>
      <Text style={styles.textCabecalho}>
        Minha lista de tarefas
      </Text>
      <Image style={styles.img2} source={require('../../../components/images/eli2.png')}/>
      </View>
        <Lp />
    </SafeAreaView>
    </TouchableWithoutFeedback>
  </NativeBaseProvider>
  );
}
