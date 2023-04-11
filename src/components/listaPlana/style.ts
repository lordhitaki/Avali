import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    list1:{
        position:"absolute",
        backgroundColor:"#fff",
        width:358,
        left: 25,
        top: 158,
        display:"flex",
        alignItems:"center",
        gap:24,
        borderRadius:16,
        justifyContent:"flex-start",
        flexDirection: 'column',
        
    },
    itensList:{
        flex:1,
        borderBottomWidth: 1,
        width: "100%"
    }
});

export default styles;
