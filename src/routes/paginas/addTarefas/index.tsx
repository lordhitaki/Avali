import { NativeBaseProvider, Heading} from "native-base";
import { View, TouchableOpacity, Text, Image, Keyboard,TouchableWithoutFeedback, SafeAreaView} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { AntDesign } from '@expo/vector-icons';

import styles from "./styles";
import { Inputs } from "../../../components/inputs/";
import { Buttons } from "../../../components/buttons"
import { InputMenor } from "../../../components/inputs/inputMenor";
import { InputMaior } from "../../../components/inputs/indexMaior";


type FormDataProps = {
  tarefa: string;
  data: string;
  hora: string;
  notas: string;
};
const signUpSchema = yup.object({
  tarefa: yup.string()
  .required("Informe o nome"),
  data: yup.string()
    .required("Informe a senha")
    .min(6, " A senha deve ter no minimo 6 digitos"),
  hora: yup.string()
    .required("Informe a senha")
    .min(6, " A senha deve ter no minimo 6 digitos"),
});


export default function AddTask() {


  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

  function handleSignUp(data: FormDataProps) {
    console.log(data);
    navigation.navigate("Lista");
  }

  const navigation = useNavigation();
  return (
    <NativeBaseProvider>
      <TouchableWithoutFeedback
        touchSoundDisabled
        onPress={() => Keyboard.dismiss()}
      >
        <SafeAreaView style={styles.tela}>
        <View style={styles.cabecalho}>
        <Image source={require('../../../components/images/mini.png')}/>
        <TouchableOpacity style={styles.fechar}
        onPress={() => navigation.navigate("Lista")}>
            <AntDesign name="closecircle" size={45} color="white" />
        </TouchableOpacity>
        <Text style={styles.textCabecalho}>
          Minha lista de tarefas
        </Text>
        <Image style={styles.img} source={require('../../../components/images/normal.png')}/>
        </View>
        <View style={styles.tela2}>
        <Heading fontSize={16} color="#1B1B1D" marginBottom="2" fontWeight="bold">
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
          <Text style={styles.textCategory}>
            Categorias
          </Text>
        <TouchableOpacity>
          <Image source={require('../../../components/images/calen.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../../components/images/papel.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../../components/images/trofeu.png')}/>
        </TouchableOpacity>
        </View>

        <View style={styles.boxInput}>
          <View style={styles.inputsMen}>
        <Heading fontSize={16} color="#1B1B1D" marginBottom="2" fontWeight="bold">
          Data
        </Heading>
        <Controller
          control={control}
          name= "data"
          render={({ field: { onChange, value } }) => (
            <InputMenor
              placeholder="Informe o horario..."
              value={value}
              secureTextEntry
              onChangeText={onChange}
              errorMessage={errors.data?.message}
            />
          )}
        />
        </View>
          <View style={styles.inputsMen}>
        <Heading fontSize={16} color="#1B1B1D" marginBottom="2" fontWeight="bold">
          Hora
        </Heading>
        <Controller
          control={control}
          name= "data"
          render={({ field: { onChange, value } }) => (
            <InputMenor
              placeholder="Informe a hora..."
              value={value}
              secureTextEntry
              onChangeText={onChange}
              errorMessage={errors.data?.message}
            />
          )}
        />
        </View>
       </View>
       <View style={styles.boxNotas}>
       <Heading fontSize={16} color="#1B1B1D" marginBottom="2" fontWeight="bold">
          Notas
        </Heading>
        <Controller
          control={control}
          name= "notas"
          render={({ field: { onChange, value } }) => (
            <InputMaior
              placeholder="Digite uma observação..."
              value={value}
              secureTextEntry
              onChangeText={onChange}
              errorMessage={errors.data?.message}
            />
          )}
        />
       </View>
        <Buttons
          title="Salvar Tarefa"
          // onPress={}
          marginTop="40"
        />
        </View>
      </SafeAreaView>
      </TouchableWithoutFeedback>
    </NativeBaseProvider>
  );
}