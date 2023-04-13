import React, {useState, useEffect} from 'react';
import { Text } from 'react-native';

export default function Time() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    var nomeMes = [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio','Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    var dia = new Date().getDate(); 
    var mes = nomeMes[new Date().getMonth()];   
    var ano = new Date().getFullYear(); 
 
    setCurrentDate(
      dia + '/' + mes + '/' + ano 
    );
  }, []);

  return (
          <Text>
            {currentDate}
          </Text>
  );
};