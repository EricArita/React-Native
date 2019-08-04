import React from 'react';
import {Text, View, Image } from 'react-native';
import {Button} from './components/Button';
import styles from './styles/appStyle';
import {Choices} from './constants/constant';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      result: '',
      resultTextColor: '',
      playerChoice: {},
      computerChoice: {}
    }
  }

  computerChoiceRandom(){
    randomIndex = Math.floor(Math.random() * Choices.length);
    return computerChoice = {
        itemName: Choices[randomIndex].name,
        itemImage: Choices[randomIndex].imagePath
    }
  }

  resultHandle(){
      let playerChoice = this.state.playerChoice.itemName;
      let computerChoice =  this.state.computerChoice.itemName;
     
      if (playerChoice === computerChoice){
        this.setState({
          result: 'Tie!',
          resultTextColor: 'aqua'
        })
      }
      else{
        switch(playerChoice){
          case 'Stone':
            computerChoice === 'Scissors' ? this.setState({result: 'You win!', resultTextColor: 'green'}) : this.setState({result: 'You lose!', resultTextColor: 'red'});
            break;
          case 'Scissors':
            computerChoice === 'Paper' ? this.setState({result: 'You win!', resultTextColor: 'green'}) : this.setState({result: 'You lose!', resultTextColor: 'red'});
            break;
          case 'Paper':
            computerChoice === 'Stone' ? this.setState({result: 'You win!', resultTextColor: 'green'}) : this.setState({result: 'You lose!', resultTextColor: 'red'});
            break;
        } 
      }

    
  }

  gameHandler = (selectedButtonName, selectedButtonImage) => {
    this.setState(
      {
        playerChoice: {
          itemName: selectedButtonName,
          itemImage: selectedButtonImage
        },
        computerChoice: this.computerChoiceRandom(),
      },

      () => this.resultHandle()
    );
  }

  render(){
    return (
      <View style={styles.container}>
        <View stype={styles.resultNotification}>
            <Text style={{fontSize: 25, color: this.state.resultTextColor}}>{this.state.result}</Text>
        </View>
        <View style={styles.playBoard}>
          <View style={styles.card}>
            <Text style={styles.title}>YOU</Text>
            <Image style={styles.itemImage} source={this.state.playerChoice.itemImage}/>
            <Text style={styles.itemName}>{this.state.playerChoice.itemName}</Text>
          </View>
          <Text>VS</Text>
          <View style={styles.card}>
            <Text style={styles.title}>COMP</Text>
            <Image style={styles.itemImage} source={this.state.computerChoice.itemImage} />
            <Text style={styles.itemName}>{this.state.computerChoice.itemName}</Text>
          </View>
        </View>
        <View style={styles.buttonGroup}>
          {
            Choices.map(item => 
                <Button key={item.name} name={item.name} img={item.imagePath} click={this.gameHandler} />
            )
          }
        </View>
      </View>   
    );
  }
} 

