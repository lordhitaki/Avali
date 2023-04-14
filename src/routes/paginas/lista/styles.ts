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
    list1:{
        backgroundColor:"#fff",
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
        borderBottomColor:"#ECEEF1",
        gap: 30,
    },
    fotinha:{
        width: 50,
        height: 50,
        backgroundColor: "#fff"
    },
    boxTextFlat:{
        flex: 1,
        flexDirection:"column",
    },
    textFlat:{
        fontSize: 18,
        fontWeight:"600",
        color:"#1b1b1d",

    },
    textFlat1:{
        fontSize: 16,
        fontWeight:"400",
        color:"#1b1b1d",

    },
    list1False:{
        backgroundColor:"#fff",
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
        borderBottomColor:"#ECEEF1",
        gap: 30,
    },
    fotinhaFalse:{
        width: 50,
        height: 50,
        backgroundColor: "#fff",
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
        color:"#1b1b1d",
        textDecorationLine:"line-through",
        opacity: 0.5


    },
    textFlat1False:{
        fontSize: 16,
        fontWeight:"400",
        color:"#1b1b1d",
        textDecorationLine:"line-through",
        opacity: 0.5
    }
});

export default styles;
