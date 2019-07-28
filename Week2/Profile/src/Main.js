import React from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Feather, Ionicons} from '@expo/vector-icons';
import styles from './styles/ProfileStyle';

export default class App extends React.Component{

  PersonalImageAlbum = [
    { id: 1, imgSource: require('D:/React Native/React-Native/Week2/Profile/assets/myAvatar.jpg') },
    { id: 2, imgSource: require('D:/React Native/React-Native/Week2/Profile/assets/FujiJapan.jpg') },
    { id: 3, imgSource: require('D:/React Native/React-Native/Week2/Profile/assets/NhaTrangBeach.jpg') },
    { id: 4, imgSource: require('D:/React Native/React-Native/Week2/Profile/assets/Netherlands.jpg') },
    { id: 5, imgSource: require('D:/React Native/React-Native/Week2/Profile/assets/City.jpg') },
    { id: 6, imgSource: require('D:/React Native/React-Native/Week2/Profile/assets/French.jpg') },
    { id: 7, imgSource: require('D:/React Native/React-Native/Week2/Profile/assets/NhaTrangBeach.jpg') },
    { id: 8, imgSource: require('D:/React Native/React-Native/Week2/Profile/assets/Netherlands.jpg') },
    { id: 9, imgSource: require('D:/React Native/React-Native/Week2/Profile/assets/City.jpg') },
  ];
  
  constructor(){
    super();
  }

  render(){
    let midElement = Math.floor(this.PersonalImageAlbum.length / 2);

    return (
      <View style={styles.Profile}>
        <View style={styles.TopFunctionalButton}>
            <TouchableOpacity style={styles.BackButton}>
                <Ionicons name='md-arrow-back' size={28} color='#999'/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.MenuButton}>
                <Ionicons name='ios-menu' size={28} color='#999'/>
            </TouchableOpacity>
        </View>
        <View style={styles.Header}>
          <View>
            <Image source={require('D:/React Native/React-Native/Week2/Profile/assets/myAvatar.jpg')} style={styles.Avatar} resizeMode='cover'/>
          </View>
          <View style={styles.InfoAndContact}>
            <View style={styles.Info}> 
                <Text style={styles.UserName}>Eric Arita</Text>
                <Text style={styles.Job}>Android Developer</Text>
            </View>
            <View style={styles.Contact}> 
                <TouchableOpacity style={styles.FollowButton}>
                    <Text style={{color: '#fff', fontSize: 15}}>Follow</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.SendMessageButton}>
                    <Feather name='send' size={21} style={{color: '#fff'}} />
                </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.Statistic}>
            <View>
              <Text style={styles.StatisticData}>210</Text>
              <Text style={styles.StatisticCategory}>Photos</Text>
            </View>
            <View>
              <Text style={styles.StatisticData}>15k</Text>
              <Text style={styles.StatisticCategory}>Followers</Text>
            </View>
            <View>
              <Text style={styles.StatisticData}>605</Text>
              <Text style={styles.StatisticCategory}>Following</Text>
            </View>
        </View>
        <ScrollView>
          <View style={styles.ImageContainer}>
            <View style={styles.leftImageContainer}>
                {         
                  this.PersonalImageAlbum.slice(0, midElement).map(image => {
                      return(
                        <Image source={image.imgSource} style={styles.LeftImage} resizeMode='cover'/>
                      );
                  })
                }        
            </View>
            <View style={styles.rightImageContainer}>
                {         
                  this.PersonalImageAlbum.slice(midElement).map(image => {
                      return(
                        <Image source={image.imgSource} style={styles.RightImage} resizeMode='cover'/>
                      );
                  })
                }        
            </View>  
          </View> 
        </ScrollView>
      </View>    
    );
  }
}

