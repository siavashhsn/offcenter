import React from 'react';
import { Text } from 'react-native';
import {
	Router, 
	Stack, 
	Scene,
} from 'react-native-router-flux';


import SignIn from './pages/signIn';
import SignUp from './pages/signUp';

export default () => (
  <Router>
		<Scene key="root" hideNavBar={true}>
			<Scene 
				key="SignIn" 
				component={SignIn}
				title="SignIn" 
				initial={true}
			/>
			<Scene 
				key="SignUp" 
				component={SignUp}
				title="SignUp"
				initial={false}
			/>
		</Scene>
	</Router>
)