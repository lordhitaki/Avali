import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Lista from "./paginas/lista";
import AddTask from "./paginas/addTarefas";
import Flatz from "../../../Arquivos/listaPlana/flatList";

const Stack = createNativeStackNavigator();


export default function Routes() {
    return(
        <Stack.Navigator>
            {/* <Stack.Screen
            name="Flatz"
            component={Flatz}
            options={{ headerShown: false }} 
            /> */}
            <Stack.Screen
            name="Lista"
            component={Lista}
            options={{ headerShown: false }} 
            />
            <Stack.Screen
            name="AddTask"
            component={AddTask}
            options={{ headerShown: false }} 
            />
        </Stack.Navigator>
    )
}