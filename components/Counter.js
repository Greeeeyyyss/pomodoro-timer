import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import { vibrate } from '../utils';
import Timer from './Timer';
import Form from './Form';

const styles = StyleSheet.create({
  controls: {
      flexDirection: 'row'
  }
})

export default class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            duration: {
              min: 25,
              sec: 0
            },
            isTiming: false,
            workTime: 25,
            breakTime: 5,
            isBreakTime: false
        }
    }

    decrement = () => {
        if (this.state.duration.min === 0 && this.state.duration.sec === 0) {
          this.setState(prevState => ({
            duration: {
              min: prevState.isBreakTime ? prevState.workTime : prevState.breakTime,
              sec: 0
            },
            isBreakTime: !prevState.isBreakTime
          }))
        } else {
          this.updateTimer()
        }
    }

    updateTimer() {
      const isZeroSecond = this.state.duration.sec === 0
      this.setState(prevState => ({
          duration: {
              min: isZeroSecond ? prevState.duration.min - 1 : prevState.duration.min,
              sec: isZeroSecond ? 59 : prevState.duration.sec - 1
          }
      }))
      if (this.state.duration.min === 0 && this.state.duration.sec === 0) {
        vibrate()
      }
    }

    startTimer = () => {
      this.setState({
        isTiming: true
      })
      this.interval = setInterval((this.decrement), 1000)
    }

    stopTimer = () => {
      this.setState({
        isTiming: false
      })
      clearInterval(this.interval)
    }

    resetTimer = () => {
      this.stopTimer()
      this.setState(prevState => ({
          duration: {
              min: prevState.workTime,
              sec: 0
          },
          isBreakTime: false
        }))
    }

    onUpdateWorkTime = (workTime) => {
      this.setState({
        workTime: workTime,
        duration: {
          min: workTime,
          sec: 0
        }
      })
    }

    onUpdateBreakTime = (breakTime) => {
      this.setState({
        breakTime: breakTime
      })
    }

    render() {
        return (
            <View>
                <View style={styles.controls}>
                    <Button title="Start" disabled={this.state.isTiming} onPress={this.startTimer} />
                    <Button color="skyblue" title="Reset" onPress={this.resetTimer} />
                    <Button title="Stop" disabled={!this.state.isTiming} onPress={this.stopTimer} />
                </View>
                <Timer duration={this.state.duration} />
                <Form 
                  onUpdateWorkTime={this.onUpdateWorkTime}
                  onUpdateBreakTime={this.onUpdateBreakTime} />
            </View>
        )
    }
}
