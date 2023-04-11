import React, {useEffect, useState} from "react";
import { View, Text, FlatList, } from "react-native";

import api from '../../services/api'
import styles from "./style";

export default function(){
    const [dados, setDados] = useState([])

  useEffect(()=> {
  api.get('/tasks').then((response) =>{
    setDados(response.data)
  })
},[])


    const add = ({item}) => (
    <View style={styles.itensList}>
         <Text>Tarefa: {item?.tarefa} - Hora {item?.hora} - Data: {item?.data}</Text>
    </View>


    )
    return(
        <View style={styles.list1}>
            <FlatList
            data={dados}
            keyExtractor={item => item.id}
            renderItem={add}
            />
                
        </View>
    )
}