import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { Actions } from 'react-native-router-flux';


export default class SignUpForm extends React.Component {
	render() {
		return(
			<View style = {styles.container}>
        <TextInput 
          style={styles.textInput}
          placeholder="نام و نام خانوادگی"
          underlineColorAndroid={'transparent'}
          onSubmitEditing={()=> this.phone.focus()}
        />
        <TextInput 
          style={styles.textInput}
          placeholder="تلفن همراه"
          keyboardType='numeric'
          underlineColorAndroid={'transparent'}
          onSubmitEditing={()=> this.email.focus()}
          ref={(input) => this.phone = input}
        />        
        <TouchableOpacity onPress={ Actions.Authentication } style={styles.button}>
          <Text style={styles.buttonText}>ثبت نام</Text>
        </TouchableOpacity>
  		</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInput: {
    width: 250,
    alignSelf: 'stretch',
    height: 55,
    fontSize: 16,
    marginBottom: 10,
    backgroundColor: '#F5F5F5',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1.8,
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 15,
  },

  button:{
    alignSelf: 'stretch',
    height: 50,
    backgroundColor: '#59cbbd',
    borderRadius:25,
    marginVertical: 13,
  },

  buttonText:{
    fontSize: 18,
    fontWeight: '500',
    color:'#fff',
    paddingVertical: 10,
    textAlign: 'center',
  },
});