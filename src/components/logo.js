import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={require('../images/logo35p.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
