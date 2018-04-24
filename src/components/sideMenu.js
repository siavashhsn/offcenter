import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
 
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerNavigator } from 'react-navigation';

class HomePage extends Component {
  static navigationOption={
    drawerlable: 'Home',
    drawerIcon: ({tintColor} => (
     <FontAwesome size="24" name="roc"/>
    ),
  };
  render() {
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Home page!</Text>
    <Button
      onPress={() => this.props.navigation.navigate('DrawerOpen')}
      title="DrawerOpen"
    />
    </View>

  }
}
 

class MyNotificationScreen extends Component{
  static navigationOption={
    drawerlable: 'Notification',
    drawerIcon: ({tintColor} => (
     <FontAwesome size="24" name="user"/>
    ),
  };
  render() {
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>notification!</Text>
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="go back to home page"
      />
      <Button
        onPress={() => this.props.navigation.navigate('DrawerOpen')}
        title="DrawerOpen"
      />
    </View>

}}

const styles = StyleSheet.create({

});

export default DrawerNavigator({
  Home:{
    screen: MyHomeScreen,
  },
  Notification: {
    screen: MyNotificationScreen,
  },

},{
  DrawerPosition: 'right',
  initialRouteName: 'Home',
  drawerBackGroundColor: 'gray',
  drawerWidth: 70%,
});
