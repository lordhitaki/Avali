import { position } from 'native-base/lib/typescript/theme/styled-system';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    tela:{
        flex: 1,
        backgroundColor: "#F1F5F9",
        position:"absolute",

    },
    cabecalho:{
        backgroundColor:"#4A3780",
        flex: 1,
        width: "100%",
        minHeight: 222,
        justifyContent:"flex-start",
        flexDirection:"row",        
    },
    textCabecalho:{
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
        left: 130,
        position: "absolute",
        marginTop: 36

    },
    fechar:{
        justifyContent:"flex-start",
        alignItems:"flex-start",
        marginLeft:20,
        position: "absolute",
        marginTop: 24

    },
    img:{
        marginTop: 78
    },
    img2:{
        marginLeft:200,
        marginBottom:100
    },
    list1:{
        position:"absolute",
        backgroundColor:"#fff",
        width:358,
        height:290,
        left: 25,
        top: 158,
        display:"flex",
        flexDirection:"column",
        alignItems:"flex-start",
        gap:24,
        borderRadius:16
    },
});

export default styles;
