import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    list1:{
        backgroundColor:"#fff",
        gap:24,
        borderRadius:16,
        justifyContent:"center",
        textAlign:"center",
        marginHorizontal:30,
        height:"30%"
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

    }
});

export default styles;
