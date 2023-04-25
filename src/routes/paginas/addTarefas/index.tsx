import React, { useState } from "react";
import { NativeBaseProvider, Heading } from "native-base";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";
import { Inputs } from "../../../components/inputs/";
import { Buttons } from "../../../components/buttons";
import { InputMenor } from "../../../components/inputs/inputMenor";
import { InputMaior } from "../../../components/inputs/indexMaior";
import api from "../../../services/api";
import colors from "../../../colors";

type FormDataProps = {
  tarefa: string;
  dia: string;
  hora: string;
  notas: string;
};

let dataValidation =
  /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
let horaValidation = /^(?:([01]\d|2[0-3]):([0-5]\d))$/;

export default function AddTask() {
  const navigation = useNavigation();
  const [categoria, setCategoria] = useState("");
  const [errorCategoria, setErrorCategoria] = useState("");

  const signUpSchema = yup.object({
    tarefa: yup.string().required("Adicione uma tarefa"),
    dia: yup
      .string()
      .matches(dataValidation, "Informe uma data valida")
      .required("Selecione uma data"),
    hora: yup
      .string()
      .matches(horaValidation, "Informe um horario valido")
      .required("Informe uma hora"),
    notas: yup.string(),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

  function handleSignUp(data: FormDataProps) {
    if (categoria == "") {
      setErrorCategoria("Selecione uma categoria");
      alert("Selecione uma categoria.");
      return;
    } else {
      setErrorCategoria("");
    }
    api.post("/tasks", { ...data, categoria }).then(({ data }) => {
      console.log(data);
    });
    navigation.navigate("Lista");
  }

  return (
    <NativeBaseProvider>
      <TouchableWithoutFeedback
        touchSoundDisabled
        onPress={() => Keyboard.dismiss()}
      >
        <SafeAreaView style={styles.tela}>
          <View style={styles.cabecalho}>
            <Image source={require("../../../components/images/mini.png")} />
            <TouchableOpacity
              style={styles.fechar}
              onPress={() => navigation.navigate("Lista")}
            >
              <AntDesign name="closecircle" size={45} color={colors.Branco.W} />
            </TouchableOpacity>
            <Text style={styles.textCabecalho}>Adicionar uma nova tarefa</Text>
            <Image
              style={styles.img}
              source={require("../../../components/images/normal.png")}
            />
          </View>
          <View style={styles.tela2}>
            <Heading
              fontSize={16}
              color={colors.Preto.C}
              marginBottom="2"
              fontWeight="bold"
            >
              Nome da tarefa
            </Heading>
            <Controller
              control={control}
              name="tarefa"
              render={({ field: { onChange, value } }) => (
                <Inputs
                  placeholder="Digite qual é a tarefa..."
                  value={value}
                  onChangeText={onChange}
                  errorMessage={errors.tarefa?.message}
                />
              )}
            />
            <View style={styles.categorys}>
              <Text style={styles.textCategory}>Categorias</Text>
              <TouchableOpacity
                onPress={() =>
                  setCategoria(
                    "https://images2.imgbox.com/1f/88/DDVrvBXp_o.png"
                  )
                }
              >
                <Image
                  source={require("../../../components/images/calen.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  setCategoria(
                    "https://images2.imgbox.com/99/84/509wmiw1_o.png"
                  )
                }
              >
                <Image
                  source={require("../../../components/images/papel.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  setCategoria(
                    "https://images2.imgbox.com/24/28/RZqEMuh0_o.png"
                  )
                }
              >
                <Image
                  source={require("../../../components/images/trofeu.png")}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.boxInput}>
              <View style={styles.inputsMen}>
                <Heading
                  fontSize={16}
                  color={colors.Preto.C}
                  marginBottom="2"
                  fontWeight="bold"
                >
                  Data
                </Heading>
                <Controller
                  control={control}
                  name="dia"
                  render={({ field: { onChange, value } }) => (
                    <InputMenor
                      placeholder="Ex: 14/04/2023"
                      value={value}
                      onChangeText={onChange}
                      errorMessage={errors.dia?.message}
                    />
                  )}
                />
              </View>
              <View style={styles.inputsMen}>
                <Heading
                  fontSize={16}
                  color={colors.Preto.C}
                  marginBottom="2"
                  fontWeight="bold"
                >
                  Hora
                </Heading>
                <Controller
                  control={control}
                  name="hora"
                  render={({ field: { onChange, value } }) => (
                    <InputMenor
                      placeholder="Ex.: 14:03"
                      value={value}
                      onChangeText={onChange}
                      errorMessage={errors.hora?.message}
                    />
                  )}
                />
              </View>
            </View>
            <View style={styles.boxNotas}>
              <Heading
                fontSize={16}
                color={colors.Preto.C}
                marginBottom="2"
                fontWeight="bold"
              >
                Notas
              </Heading>
              <Controller
                control={control}
                name="notas"
                render={({ field: { onChange, value } }) => (
                  <InputMaior
                    placeholder="Digite uma observação..."
                    value={value}
                    onChangeText={onChange}
                  />
                )}
              />
            </View>
            <View style={styles.boxButton}>
              <Buttons
                title="Salvar Tarefa"
                onPress={handleSubmit(handleSignUp)}
              />
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </NativeBaseProvider>
  );
}
