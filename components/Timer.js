import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  counter: {
        marginTop: 20,
        fontSize: 60,
        alignItems: 'center'
    }
})

export default class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      min: props.duration.min,
      sec: props.duration.sec
    }
  }

  formatDuration = () => {
    const min = this.formatText(this.props.duration.min)
    const sec = this.formatText(this.props.duration.sec)
    return `${min}:${sec}`
  }

  formatText(value) {
    return value < 10 ? '0' + value : value
  }

  render() {
    return (
      <Text style={styles.counter}>
         {this.formatDuration()}
      </Text>
    )
  }
}