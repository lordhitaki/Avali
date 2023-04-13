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
import LP1 from '../../../components/listaPlana/flatListFalse' 
import { Buttons } from '../../../components/buttons';
import Time from '../../../components/time';

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
        <Time />
      </Text>
      <Image style={styles.img2} source={require('../../../components/images/eli2.png')}/>
      <Text style={styles.textCabecalho1}> Minha Lista de tarefas</Text>
      </View>
        <Lp />
        <Text style={styles.textComplet}>
          Completas
        </Text>
        <LP1 />
        <View style={styles.boxButton}>
        <Buttons
          title="Adicionar nova Tarefa"
          onPress={() => navigation.navigate("AddTask")}
          marginTop="5"
        />
        </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  </NativeBaseProvider>
  );
}
