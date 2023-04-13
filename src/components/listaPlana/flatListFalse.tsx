import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, ScrollView } from "react-native";

import api from "../../services/api";
import styles from "./stylesFalse";
import Check from "../checkBox";

export default function () {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    api.get("/tasks").then((response) => {
      setDados(response.data);
    });
  }, []);

  const add = ({ item }) => (
    <View style={styles.itensList}>
      <View >
        <Image source={{ uri: item?.categoria }} style={styles.fotinha} />
      </View>
      <View style={styles.boxTextFlat}>
      <Text style={styles.textFlat}>{item?.tarefa}</Text>
      <Text style={styles.textFlat1}>{item?.hora}</Text>
      </View>
      <Check/>
    </View>
  );
  return (
    <View style={styles.list1}>
      <FlatList
        data={dados}
        keyExtractor={(item) => item.id}
        renderItem={add}
      />
    </View>
  );
}
