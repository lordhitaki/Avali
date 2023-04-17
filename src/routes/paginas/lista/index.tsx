import React, { useState, useEffect } from "react";
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  Modal
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { NativeBaseProvider,} from "native-base";
import { Checkbox } from "native-base";

import styles from "./styles";
import api from "../../../services/api";
import { Buttons } from "../../../components/buttons";
import Time from "../../../components/time";
import colors from "../../../colors";

export default function Lista() {
  const [tarefasCompletas, setTarefasCompletas] = useState([]);
  const [tarefasIncompletas, setTarefasIncompletas] = useState([]);
  const [resposta, setResposta] = useState(null)
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  useEffect(() => {
    handle();
  }, []);
  
  useFocusEffect(
    React.useCallback(() => {
      handle()
    }, [])
  );


  async function handle() {
    const response = await api.get("/tasks");
    setResposta(response.data)
    const data = response.data;
    setTarefasCompletas(data.filter((data) => data.verificar));
    setTarefasIncompletas(data.filter((data) => !data.verificar));
  }

  async function change(id) {
    try {
      const info = {
        tarefa: resposta[id - 1].tarefa,
        dia: resposta[id - 1].dia,
        hora: resposta[id - 1].hora,
        categoria: resposta[id - 1].categoria,
        verificar: !resposta[id - 1].verificar,
        notas: resposta[id - 1].notas
      };
      await api.put(`/tasks/${id}`, info);
      handle();
    } catch (error) {
      console.error(error);
    }
  }


  const add = ({ item }) => (
    <View style={styles.itensList}>
      <View>
        <Image source={{ uri: item?.categoria }} style={styles.fotinha} />
      </View>
      <TouchableOpacity
        style={styles.boxTextFlat}
        onPress={() => openModal(item)}>
        <View>
          <Text style={styles.textFlat}>{item?.tarefa}</Text>
          <Text style={styles.textFlat1}>{item?.hora}</Text>
        </View>
      </TouchableOpacity>
      <Checkbox
        value=""
        colorScheme="purple"
        size="lg"
        aria-label="CheckTarefa"
        onChange={() => change(item.id)}
        style={styles.checkBoxFalse}
        />
      <View style={styles.centeredView}>
        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
            setModalVisible(false);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{selectedItem?.notas}</Text>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.textStyle}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
    
  );
  const addIsFalse = ({ item }) => (
    <View style={styles.itensListFalse}>
      <View>
        <Image source={{ uri: item?.categoria }} style={styles.fotinhaFalse} />
      </View>
      <TouchableOpacity
        style={styles.boxTextFlatFalse}
        onPress={() => openModal(item)}>
        <View>
          <Text style={styles.textFlatFalse}>{item?.tarefa}</Text>
          <Text style={styles.textFlat1False}>{item?.hora}</Text>
        </View>
      </TouchableOpacity>
      <Checkbox
        value=""
        colorScheme="purple"
        size="lg"
        aria-label="CheckTarefa"
        onChange={() => change(item.id)}
        isChecked
        style={styles.checkBoxFalse}
      />
      <View style={styles.centeredView}>
        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
            setModalVisible(false);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{selectedItem?.notas}</Text>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.textStyle}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );

  const navigation = useNavigation();

  return (
    <NativeBaseProvider>
      <TouchableWithoutFeedback
        touchSoundDisabled
        onPress={() => Keyboard.dismiss()}
      >
        <SafeAreaView style={styles.tela}>
          <View style={styles.cabecalho}>
            <Image
              style={styles.img}
              source={require("../../../components/images/eli1.png")}
            />
            <TouchableOpacity
              style={styles.fechar}
              onPress={() => navigation.navigate("AddTask")}
            >
              <AntDesign name="leftcircle" size={45} color={colors.Branco.W} />
            </TouchableOpacity>
            <Text style={styles.textCabecalho}>
              <Time />
            </Text>
            <Image
              style={styles.img2}
              source={require("../../../components/images/eli2.png")}
            />
            <Text style={styles.textCabecalho1}> Minha Lista de tarefas</Text>
          </View>
          <View style={styles.list1}>
            <FlatList
              data={tarefasIncompletas}
              keyExtractor={(item) => item.id.toString()}
              renderItem={(props) => add({ ...props })}
            />
          </View>
          <Text style={styles.textComplet}>Completas</Text>
          <View style={styles.itensList}>
          </View>
          <View style={styles.list1False}>
          <FlatList
            data={tarefasCompletas}
            keyExtractor={(item) => item.id.toString()}
            renderItem={(props) => addIsFalse({ ...props })}
          />
          </View>
          <View>
            <Buttons
              title="Adicionar nova Tarefa"
              onPress={() => navigation.navigate("AddTask")}
              bottom="5"
            />
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </NativeBaseProvider>
  );
}
