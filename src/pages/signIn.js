import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import Logo from '../components/logo';
import SignInForm from '../components/signInForm';

import { Actions } from 'react-native-router-flux';

export default class SignIn extends React.Component {
	render() {
		return(
			<View style = {styles.container}>
				<Logo />
				<SignInForm />
				<View style={styles.signUpTextContainer}>
					<TouchableOpacity onPress={ Actions.SignUp }><Text style={styles.singUpText}>ثبت نام</Text></TouchableOpacity>
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
  signUpTextContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: 20,
  },
  singUpText: {
    fontSize: 18,
    fontWeight: '500',
  }
});


