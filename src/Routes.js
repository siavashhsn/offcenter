import React from 'react';
import { Text } from 'react-native';
import {
	Router, 
	Stack, 
	Scene,
} from 'react-native-router-flux';


import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import Home from './pages/home';
import Authentication from './pages/authentication';

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
			/>
			<Scene 
				key="Home" 
				component={Home}
				title="Home"
			/>
			<Scene 
				key="Authentication" 
				component={Authentication}
				title="Authentication"
			/>
		</Scene>
	</Router>
)