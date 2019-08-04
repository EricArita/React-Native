import React, {Component} from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles/appStyle.js'

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      currCurrency: 0,
      conversionCurrency: 0,
      currUnit: 'vnd'
    };

    const rate = 23000;
  }

  convertCurrency(from, to){
    if (from === 'usd' && to === 'vnd'){
        this.setState(
          {
            conversionCurrency: this.state.currCurrency * 23000
          }
        );
    }
    else if (from === 'vnd' && to === 'usd'){
         this.setState(
           {
              conversionCurrency: this.state.currCurrency / 23000
           }
         );
    }
  }

  setCurrentUnit_VND(){
    //alert('current unit is VND');
    this.setState(
      {
       currUnit: 'vnd'
      },
      //() => alert(this.state.currUnit)
      this.convertCurrency('vnd', 'usd'),
    )
  }

   setCurrentUnit_USD(){
     //alert('current unit is USD');
     this.setState(
      {
        currUnit: 'usd'
      },
      //() => alert(this.state.currUnit)
      this.convertCurrency('usd', 'vnd'),
    )
  }

  setCurrencyValue(text){
      //alert(this.state.currUnit);
      if (this.state.currUnit === 'vnd'){
        //alert('converted');
        this.setState(
          {
            currCurrency: text
          },
          this.convertCurrency('vnd', 'usd'),
        );
       
      }
      else{
          //alert('converted');
         this.setState(
          {
            currCurrency: text
          },
          this.convertCurrency('usd', 'vnd'),
        );
        
      }
  }
  
  render(){
    return (
        <View style={styles.mainGUI}>  
          <Text>Please enter the value you want to convert!</Text>
          <TextInput style={styles.txtInput} 
            autoFocus={true}
            textAlign="center"
            selectionColor="red"
            keyboardType="number-pad"
            placeholder="100,000,000 VND" 
            onChangeText={text => this.setCurrencyValue(text)} />
            <View>
                <View>
                    <TouchableOpacity style={styles.btnConvert} 
                      onPress={() => {this.setCurrentUnit_VND()}}>
                        <Text>VND to USD</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnConvert} 
                      onPress={() => {this.setCurrentUnit_USD()}}>
                        <Text>USD to VND</Text>
                    </TouchableOpacity>
                </View>         
                <View style={styles.conversionTitle}>
                    <Text>Current Currency</Text>
                    <Text style={{color: 'green'}}>{this.state.currCurrency}</Text>
                    <Text>Conversion Currency</Text>
                    <Text style={{color: 'green'}}>{this.state.conversionCurrency}</Text>
                </View>             
            </View>
        </View>
      
    );
  }
}

