import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default class SignIn extends React.Component {
	render() {
		return(
			<View style = {styles.container}>
				<Text> welcome </Text>
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
});


