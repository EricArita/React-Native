import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    mainUI: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      marginTop: 30,
      justifyContent: 'center',
    },
    Header:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 0
    },
    logoHeader:{ 
      flex: 1,
      height: 44,
      marginLeft: 37
    },
    inboxButton:{
      marginRight: 8,
    },
    avatarWrapper:{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 7,
      marginTop: 25,
      marginHorizontal: 12,
    },
    avatarImage:{
      width: 46,
      height: 46,
      borderRadius: 23
    },
    userName:{
      marginLeft: 12,
      fontSize: 15,
      fontWeight: '400'
    },
    // imageWrapper:{
    //   height: 300
    // },
    posterContent:{
      flex: 1,
      fontSize: 16,
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 7,
      marginTop: 25,
      marginHorizontal: 12,
    },
    imagePoster:{
      flex: 1,
      width: 360,
      height: 400,
    }, 
    interactButtonGroup:{
      flexDirection:'row',
      marginLeft: 6,
      
    },
    interactButton:{
      margin: 4,
    },
    likeIcon:{
      marginTop: -7,
      marginLeft: 10
    },
    likedAmountInfo:{
      marginLeft: 10,
      fontSize: 16
    }
  });
  
  export default styles;