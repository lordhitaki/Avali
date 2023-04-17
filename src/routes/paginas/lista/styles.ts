import { color } from 'native-base/lib/typescript/theme/styled-system';
import { StyleSheet } from 'react-native';
import colors from '../../../colors';

const styles = StyleSheet.create({
    tela:{
        flex: 1,
        backgroundColor: colors.Branco.A,
    },
    cabecalho:{
        backgroundColor: colors.Roxo.Escuro,
        flex: 1,
        width: "100%",
        minHeight: 222,
        justifyContent:"flex-start",
        flexDirection:"row",        
    },
    textCabecalho:{
        color: colors.Branco.W,
        fontSize: 18,
        fontWeight: "600",
        marginTop: 36

    },
    textCabecalho1:{
        color: colors.Branco.W,
        marginTop: 90,
        right: 350,
        fontSize: 26,
        fontWeight: "700",
        textAlign:"center"
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
        marginLeft:92,
    },
    textComplet:{
        padding:20,
        fontWeight:"600",
        fontSize: 16,
        
    },
    boxButton:{
        width:"90%",
        left: 20,
        marginBottom:20
    },
    list1:{
        backgroundColor:colors.Branco.W,
        gap:24,
        borderRadius:16,
        justifyContent:"center",
        textAlign:"center",
        marginHorizontal:30,
        marginTop:-65,
        height: "30%"
    },
    itensList:{
        flex:1,
        borderBottomWidth: 2,
        width: "100%",
        flexDirection:"row",
        padding: 16,
        alignItems:"center",
        borderBottomColor: colors.Branco.C3,
        gap: 30,
    },
    fotinha:{
        width: 50,
        height: 50,
        backgroundColor: colors.Branco.W
    },
    boxTextFlat:{
        flex: 1,
        flexDirection:"column",
    },
    textFlat:{
        fontSize: 18,
        fontWeight:"600",
        color: colors.Preto.C,

    },
    textFlat1:{
        fontSize: 16,
        fontWeight:"400",
        color: colors.Preto.C,
    },
    list1False:{
        backgroundColor: colors.Branco.W,
        gap:24,
        borderRadius:16,
        justifyContent:"center",
        textAlign:"center",
        marginHorizontal:30,
        bottom: 40,
        height:"30%",
    },
    itensListFalse:{
        flex:1,
        borderBottomWidth: 2,
        width: "100%",
        flexDirection:"row",
        padding: 16,
        alignItems:"center",
        borderBottomColor: colors.Branco.C3,
        gap: 30,
    },
    fotinhaFalse:{
        width: 50,
        height: 50,
        backgroundColor: colors.Branco.W,
        opacity: 0.5
    },
    boxTextFlatFalse:{
        flex: 1,
        flexDirection:"column",
        opacity: 0.5
    },
    textFlatFalse:{
        fontSize: 18,
        fontWeight:"600",
        color: colors.Preto.C,
        textDecorationLine:"line-through",
        opacity: 0.5


    },
    textFlat1False:{
        fontSize: 16,
        fontWeight:"400",
        color: colors.Preto.C,
        textDecorationLine:"line-through",
        opacity: 0.5
    },
    checkBoxFalse:{
        justifyContent:"flex-end",
        alignItems: "flex-end",
        left: 100
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: colors.Branco.W,
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: colors.Preto.P,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonClose: {
        top: 20,
        backgroundColor: colors.Roxo.Escuro,
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 16,
        fontWeight:"600",
      },
});

export default styles;
