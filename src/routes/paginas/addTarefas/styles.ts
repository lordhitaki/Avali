import { StyleSheet } from 'react-native';
import colors from '../../../colors';

const styles = StyleSheet.create({
    tela:{
        flex: 1,
        backgroundColor: colors.Branco.A,
        position:"absolute"
    },
    tela2:{
        flex:1,
        width:"100%",
        paddingHorizontal:20,
        marginTop:35
    },
    cabecalho:{
        backgroundColor: colors.Roxo.Escuro,
        flex: 1,
        width: "100%",
        maxHeight: 96,
        justifyContent:"flex-start",
        alignItems:"center",
        flexDirection:"row",
        
    },
    textCabecalho:{
        color: colors.Branco.W,
        fontSize: 18,
        fontWeight: "600",
        left: 120,
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
    },
    boxButton:{
        marginTop:120
    },
    inputHora:{
        backgroundColor: colors.Branco.W,
        height:60,
        borderRadius:6
    }
    

});

export default styles;
