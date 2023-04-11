import 'react-native-gesture-handler'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import Routes from './src/routes/Index'
import styles from './styles/styles'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar/>
      <Routes />
    </NavigationContainer>
  );
}



