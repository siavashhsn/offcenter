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
    
  };
  render() {
    return(
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Home page!</Text>
    <Button
      onPress={() => this.props.navigation.navigate('DrawerOpen')}
      title="DrawerOpen"
    />
    </View>
    )

  }
}
 

class MyNotificationScreen extends Component{
  static navigationOption={
    drawerlable: 'Notification',
  };
  render() {
    return(
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
    );

}}

const styles = StyleSheet.create({

});

export default DrawerNavigator({
  Home:{
    screen: HomePage,
  },
  Notification: {
    screen: MyNotificationScreen,
  },

},{
  DrawerPosition: 'Right',
  initialRouteName: 'Home',
  drawerBackGroundColor: 'gray',
  drawerWidth: 200,
});





// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';
 
// import Tabs from 'react-native-tabs';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// const myIcon = (<FontAwesome name="rocket" size={30} color="#900" />)
 
// class Example extends Component {
//   constructor(props){
//     super(props);
//     this.state = {page:'second'};
//   }
//   render() {
//     var self = this;
//     return (
//       <View>
        
//       </View>
//       <View style={styles.container}>
//         <Tabs selected={this.state.page} style={{backgroundColor:'white'}}
//               selectedStyle={{color:'red'}} onSelect={el=>this.setState({page:el.props.name})}>
//             <FontAwesome name="rocket" color="red"/>
//             <Ionicons name="ios-compass"/>
//             <MaterialCommunityIcons name="message"/>
//             <FontAwesome name="user"/>
//         </Tabs>
//           <Text style={styles.welcome}>
//               Welcome to React Native
//           </Text>
//           <Text style={styles.instructions}>
//               Selected page: {this.state.page}
//           </Text>
//       </View>
//     );
//   }
// }
 

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// export default Example;
// // AppRegistry.registerComponent('Example', () => Example);

