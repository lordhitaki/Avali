import { position } from 'native-base/lib/typescript/theme/styled-system';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    tela:{
        flex: 1,
        backgroundColor: "#F1F5F9",
        position:"absolute"
    },
    tela2:{
        flex:1,
        width:"100%",
        paddingHorizontal:20,
        marginTop:35
    },
    cabecalho:{
        backgroundColor:"#4A3780",
        flex: 1,
        width: "100%",
        maxHeight: 96,
        justifyContent:"flex-start",
        alignItems:"center",
        flexDirection:"row",
        
    },
    textCabecalho:{
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
        left: 130,
        position: "absolute"

    },
    fechar:{
        justifyContent:"flex-start",
        alignItems:"flex-start",
        marginLeft:20,
        position: "absolute"
    },
    img:{
        marginLeft:200
    },
    categorys:{
        flex:1,
        flexDirection: "row",
        gap: 20,
        alignItems:"center",
        marginBottom:290
    },
    textCategory:{
        fontWeight: "600",
        fontSize: 15,
    },
    boxInput:{
        position:"absolute",
        flexDirection:"row",
        width: "100%",
        marginTop: 200,
    },
    inputsMen:{
        width:"52%",
        paddingLeft:15
    },
    boxNotas:{
        flex:1,
        position:"absolute",
        marginTop:330,
        width:"100%",
        marginLeft:12
    }
    

});

export default styles;
