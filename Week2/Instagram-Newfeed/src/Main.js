import * as React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import {TableView, Section} from 'react-native-tableview-simple';
import {EvilIcons, Feather, Ionicons } from '@expo/vector-icons';
import styles from './styles/NewFeedStyle';

export default class App extends React.Component{ 
    constructor(){
      super();
      this.state = {
          PosterData: [
            {
              id: 1,
              name: 'NhaTrang',
              content: 'Love my home tour <3',
              image: require('./assets/NhaTrangBeach.jpg'),
              likeCount: 5,
              avatar: require('./assets/myAvatar.jpg')
            },
            {
              id: 2,
              name: 'Fuji',
              content: 'Such a beautiful mountain in Japan !',
              image: require('./assets/FujiJapan.jpg'),
              likeCount: 10,
              avatar: require('./assets/myAvatar.jpg')
            },
            {
              id: 3,
              name: 'Fuji',
              content: 'My new Avatar',
              image: require('./assets/myAvatar.jpg'),
              likeCount: 100,
              avatar: require('./assets/myAvatar.jpg')
            },
          ],
      }
    }

    increaseLike(posterID){
      let tmpData = this.state.PosterData;
      tmpData.find(image => image.id === posterID).likeCount++;
      
      this.setState({
        PosterData: tmpData
      });
    }

    render(){
      return (
          <View style={styles.mainUI}>
            <View style={styles.Header} >
                <View style={undefined}/>
                <Image source={require('./assets/instagramLogo.png')} style={styles.logoHeader} resizeMode="contain"/>
                < Feather name="inbox" size={30} color="black" style={styles.inboxButton}/>
            </View>  
            <ScrollView>
              <TableView>
                {this.state.PosterData.map(item => {
                    return(     
                      <View>          
                        <Section>                          
                            <View style={styles.avatarWrapper}>
                                <Image source={require('./assets/myAvatar.jpg')} style={styles.avatarImage} resizeMode='cover'/>
                                <Text style={styles.userName}>Eric Arita</Text>
                            </View>                                   
                            <View style={styles.imageWrapper}>                               
                                <Image source={item.image} style={styles.imagePoster} resizeMode='cover'/>
                            </View>
                            <View style={styles.interactButtonGroup}>
                                <EvilIcons name="heart" size={35} style={styles.interactButton} onPress={() => this.increaseLike(item.id)}/>
                                <EvilIcons name="comment" size={35} style={styles.interactButton}  onPress={() => alert("Comment Active")}/>
                                <EvilIcons name="share-apple" size={35} style={styles.interactButton}  onPress={() => alert("Shared")}/>
                            </View>                          
                        </Section>      
                        <View style={styles.interactButtonGroup}>
                          <Ionicons name="md-heart" size={28} style={styles.likeIcon}/>   
                          <Text style={styles.likedAmountInfo}>{this.state.PosterData.find(image => image.id === item.id).likeCount} likes</Text>                 
                        </View>        
                      </View>          
                    )          
                })} 
              </TableView>
            </ScrollView>
          </View>   
      );
    }
     
}

//========================================================
