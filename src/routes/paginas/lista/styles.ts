import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    tela:{
        flex: 1,
        backgroundColor: "#F1F5F9",
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
        marginTop: 36

    },
    textCabecalho1:{
        color: "#fff",
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
});

export default styles;
