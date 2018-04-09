import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';


export default class SignInForm extends React.Component {
	

  render() {
		return(
			<View style = {styles.container}>
        <TextInput 
          style={styles.textInput}
          placeholder="شماره تلفن"
          keyboardType='numeric'
          underlineColorAndroid={'transparent'}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>ورود</Text>
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


/*
_callGoogle() {
    GoogleSignin.configure({
    })
    .then(() => {
      GoogleSignin.signIn()
      .then((user) => {
        console.log(user);
        this.setState({user: user});
      })
      .catch((err) => {
        console.log('WRONG SIGNIN', err);
      })
      .done();
    });
  }

<GoogleSigninButton
            style={styles.button}
            size={GoogleSigninButton.Size.Icon}
            color={GoogleSigninButton.Color.Dark}
            onPress={this._callGoogle.bind(this)}>
              <Text>Sign in with google</Text>
</GoogleSigninButton> 

*/