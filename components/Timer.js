import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import TimerButton from './TimerButton';
import { millisecondsToHuman } from '../utils/TimerUtils';

export default class Timer extends React.Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    elapsed: PropTypes.number.isRequired,
    isRunning: PropTypes.bool.isRequired,
    onRemovePress: PropTypes.func.isRequired,
    onStartPress: PropTypes.func.isRequired,
    onStopPress: PropTypes.func.isRequired,
    onEditPress: PropTypes.func.isRequired,
  };

  handleRemovePress = () => {
    const { id, onRemovePress } = this.props;

    onRemovePress(id);
  }

  handleStopPress = () => {
    const {onStopPress, id} = this.props;

    onStopPress(id);
  }

  handleStartPress = () => {
    const {onStartPress, id} = this.props;

    onStartPress(id)
  }

  renderStartButton = () => {
    const { isRunning } = this.props;
    if (isRunning) {
      return (
        <TimerButton
          color='orange'
          title='Stop'
          onPress={this.handleStopPress}
        />
      )
    }
    return (
      <TimerButton
        color = 'green'
        title = 'Start'
        onPress = {this.handleStartPress}
      />
    )
  }

  render() {
    const { elapsed, title, onEditPress } = this.props
    const elapsedString = millisecondsToHuman(elapsed)
    return (
      <View style={styles.timerContainer}>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.elapsedTime}>{elapsedString}</Text>
        <View style={styles.buttonGroup}>
          <TimerButton title='Edit' color='blue' small onPress={onEditPress} />
          <TimerButton title='Remove' color='red' small onPress={this.handleRemovePress} />
        </View>
        {this.renderStartButton()}
      </View>
    )
  }
}



const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  timerContainer: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 2,
    padding: 15,
    margin: 15,
    borderRadius: 15,
  },
  textTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  elapsedTime: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});