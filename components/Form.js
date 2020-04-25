import React from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  fieldContainer: {
    height: 40,
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'gray',
    paddingStart: 10
  }
})

export default class Form extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{marginTop: 40}}>
        <View style={styles.container}>
          <Text>Enter work duration:</Text>
          <TextInput
            style={styles.fieldContainer}
            placeholder="ie. 25 mins"
            keyboardType="numeric"
            onChangeText={text => this.props.onUpdateWorkTime(text)} 
          />
        </View>
        <View style={styles.container}>
          <Text>Enter break duration:</Text>
          <TextInput
            style={styles.fieldContainer}
            placeholder="ie. 5 mins"
            keyboardType="numeric"
            onChangeText={text => this.props.onUpdateBreakTime(text)}
          />
        </View>
      </View>
    )
  }
}