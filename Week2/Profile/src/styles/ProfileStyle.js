import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    Profile:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 40,
        backgroundColor: '#fff'
    },
    TopFunctionalButton:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    BackButton:{    
       marginLeft: 20,
    },
    MenuButton:{
        marginRight: 20,
     },
    Header:{
        flexDirection: 'row',
        marginLeft: 30,
        marginTop: 40
    },
    Avatar:{
        justifyContent: 'center',
        alignItems: 'center',  
        height: 97,
        width: 100,
        borderRadius: 60
    },
    InfoAndContact:{
        flexDirection: 'column',
        marginLeft: 30
    },
    Info:{
        flexDirection: 'column',
    },
    UserName:{
        fontSize: 22,
        fontWeight: 'bold',
    },
    Job:{
        color: '#999',
        fontSize: 15
    },
    Contact:{
        flexDirection: 'row',
        marginTop: 10,
    },
    FollowButton:{
        backgroundColor: 'rgb(71,113,246)',
        width: 95,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    SendMessageButton:{
        backgroundColor: 'rgb(120,213,250)',
        width: 61,
        height: 35,
        alignItems: 'center',
        marginLeft: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    Statistic:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30,
        height: 50,
        marginBottom: 20
    },
    StatisticData:{
        fontSize: 22,
        fontStyle: 'italic',
        fontWeight: '400'
    },
    StatisticCategory:{
        color: '#999'
    },
    ImageContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    leftImageContainer:{
        flexDirection:'column',      
    },
    rightImageContainer:{
        flexDirection:'column',
        marginLeft: 10,
    },
    LeftImage:{
        width: 150,
        height: 190,
        marginBottom: 10,
        borderRadius: 10
    },
    RightImage:{
        width: 170,
        height: 150,       
        marginBottom: 10,
        borderRadius: 10
    }
});

export default styles;
  