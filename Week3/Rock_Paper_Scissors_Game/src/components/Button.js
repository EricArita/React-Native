import React from 'react';
import {Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/appStyle'

export class Button extends React.Component{
    render(){
        return(
               <TouchableOpacity style={styles.buttonStyle} onPress={() => this.props.click(this.props.name, this.props.img)}>
                   <Text style={styles.buttonText}>{this.props.name}</Text>
               </TouchableOpacity>
        );      
    }
}