import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    mainGUI: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      marginTop: 40,
      //justifyContent: 'center',
    },
    txtInput:{
        height: 60,
        padding: 5,
        width: 300,
        fontSize: 35,
        borderWidth: 1,
        borderColor: 'lightblue'
    },
    btnConvert:{
      height: 35,
      width: 200,
      margin: 10,
      marginTop: 10,
      borderWidth: 2,
      borderRadius: 20,
      alignItems: 'center',
      borderColor: 'lightblue',
      justifyContent: 'center'
    },
    conversionTitle:{
      alignItems: 'center', 
      justifyContent: 'center',
    }
  });

  export default styles;
  