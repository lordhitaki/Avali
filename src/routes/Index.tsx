import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Lista from "./paginas/lista";
import AddTask from "./paginas/addTarefas";

const Stack = createNativeStackNavigator();


export default function Routes() {
    return(
        <Stack.Navigator>
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