import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

// import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import { Actions } from 'react-native-router-flux';


export default class SignInForm extends React.Component {

  goHomePage(){
    Actions.Authentication(); 
  }

  constructor(props) {
    super(props);
    this.state = {phoneNum: ''};
  }


  login = () => {
    fetch('http://127.0.0.1:3000/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phoneNum: this.state.phoneNum
      })
    })
    .catch((error) => {
      console.log(error.message);
    })
    // .then((response) => response.json())
    // .then((res) => {
    //   if (res.success === true) {
    //     var phoneNum = res.message;
    //     AsyncStorage.setItem('phoneNum', phoneNum);
    //     alert('welcome ' );
    //     Actions.Authentication();
    //   } else {
    //     alert(res.message);
    //   }
    // })
    // .catch((error) => {
    //   console.log(error);
    // })
    // .done();


  //   fetch('http://localhost:3000/users', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       phoneNum: this.state.phoneNum,
  //     })
  //   })
  //   .then((response) => response.json())
  //   .then((responseJson) => {
  //     if (responseJson.success === true) {
  //       var phoneNum = responseJson.message;
  //       //AsyncStorage.setItem('phoneNum', phoneNum);
  //       alert(phoneNum);
  //       //Actions.Authentication();
  //     } else {
  //       alert(responseJson.message);
  //     }
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })
  }
  

  render() {
		return(
			<View style = {styles.container}>
        <TextInput 
          style={styles.textInput}
          placeholder="شماره تلفن"
          keyboardType='numeric'
          underlineColorAndroid={'transparent'}
          onChangeText = {(phoneNum) => this.setState({phoneNum})}
          value={this.state.phoneNum}
        />
        <TouchableOpacity  
          onPress={ this.login } 
          style={styles.button}>
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


    // fetch('http://localhost:3000/users', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //     body: JSON.stringify({
    //       phoneNum: this.state.phoneNum,
    //     })
    //   })
    // .then((response) => response.json())
    // .then((res) => {
    //   if (res.success === true) {
    //     var phoneNum = res.message;
    //     AsyncStorage.setItem('phoneNum', phoneNum);
    //     alert('welcome ' );
    //     Actions.Authentication();
    //   } else {
    //     //alert(res.message);
    //   }
    // })
    // .done()