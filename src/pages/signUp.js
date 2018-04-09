import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import Logo from '../components/logo';
import SignUpForm from '../components/signUpForm';

import { Actions } from 'react-native-router-flux';

export default class SignUp extends React.Component {
	
  goBackToSignIn(){
    Actions.pop();
  }

  render() {
		return(
			<View style = {styles.container}>
				<Logo />
				<SignUpForm />
				<View style={styles.signInTextContainer}>
          <TouchableOpacity onPress={ this.goBackToSignIn }><Text style={styles.singInText}>ورود</Text></TouchableOpacity>
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
  signInTextContainer: {
  	flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: 20,
  },
  singInText: {
  	fontSize: 18,
  	fontWeight: '500',
  }

});