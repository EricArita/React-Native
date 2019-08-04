import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 23,
      backgroundColor: '#999',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    },
    resultNotification:{
      flex: 0.1,
      
    },
    playBoard:{
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: 340,
      height: 80,
      flex: 0.6,
      backgroundColor: "#fff",
      borderWidth: 0.8,
      marginTop: 30
    },
    card:{
      flexDirection: 'column',  
      alignItems: 'center'
    },
    buttonGroup:{
      flex:0.3,
      marginTop: 45
    },
    buttonStyle: {
      width: 200,
      marginTop: 5,
      height: 40,
      borderRadius: 10,
      alignContent: "center",
      justifyContent: "center",
      backgroundColor: "#640D14"
    },
    buttonText:{
      color: "#fff",
      fontSize: 22,
      fontWeight: "bold",
      textAlign: "center"
    },
    itemImage:{
      width: 120,
      height: 150,
    },
    title:{
      fontSize: 20,
      fontWeight: 'bold'
    },
    itemName:{
      fontSize: 18,
      marginTop: 10,
    },
  });   

  export default styles;    