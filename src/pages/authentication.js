import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  YellowBox,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import TimerCountdown from 'react-native-timer-countdown'


export default class Authentication extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <View style = {styles.container}>
          <Text style={styles.text} > ما یک sms، شامل کد فعال سازی را به شماره ..... فرستادیم</Text>
          <TextInput 
            style={styles.textInput}
            placeholder="کد تایید"
            underlineColorAndroid={'transparent'}
          />
          <TouchableOpacity onPress={ Actions.Home } style={styles.button}>
            <Text style={styles.buttonText}>تایید</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.retryButton}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>تلاش مجدد</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInput: {
    alignSelf: 'stretch',
    height: 55,
    fontSize: 16,
    marginBottom: 10,
    backgroundColor: '#F5F5F5',
    borderBottomColor: '#F5F5F5',
    borderBottomWidth: 0,
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 15,
  },

  button:{
    width:200,
    alignSelf: 'center',
    height: 50,
    margin: 13,
    backgroundColor: '#59cbbd',
    borderRadius:25,

  },

  text:{
    alignSelf: 'stretch',
    fontSize: 18,
    fontWeight: '500',
    color:'#000',
    paddingVertical: 10,
    textAlign: 'center',
  },

  buttonText:{
    fontSize: 18,
    fontWeight: '500',
    color:'#fff',
    paddingVertical: 10,
    textAlign: 'center',
  },

  retryButton: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: 20,
  },
});


