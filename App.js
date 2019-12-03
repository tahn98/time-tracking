import React from 'react';
import uuidv4 from 'uuid/v4';
import EditableTimer from './components/EditableTimer'
import { newTimer } from './utils/TimerUtils'
import {
  ScrollView,
} from 'react-native'
import ToggleableTimerForm from './components/ToggleableTimerForm';


export default class App extends React.Component {
  state = {
    timers: [
      {
        title: 'Project 1',
        id: uuidv4(),
        elapsed: 5460494,
        isRunning: true,
      },
      {
        title: 'Project 2',
        id: uuidv4(),
        elapsed: 5460494,
        isRunning: false,
      },
    ],
  };

  handleFormSubmit = att => {
    const { timers } = this.state;

    this.setState({
      timers: timers.map(timer => {
        if (timer.id === att.id) {
          const { title } = att;

          return {
            ...timer,
            title,
          };
        }

        return timer;
      }),
    });
  };

  handleRemovePress = timerId => {
    this.setState({
      timers: this.state.timers.filter(t => t.id !== timerId),
    });
  };

  toogleTimer = timerId => {
    this.setState(prevState => {
      const {timers} = prevState;

      return{
        timers : timers.map(timer => {
          const {id, isRunning} = timer;

          if(id == timerId){
            return {
              ...timer,
              isRunning : !isRunning,
            };
          }

          return timer;
        }),
      };
    });
  };

  handleCreateNewForm = timer => {
    const { timers } = this.state;

    this.setState({
      timers: [newTimer(timer), ...timers],
    });
  };

  componentDidMount(){
    const TIME_INTERVAL = 1000;

    this.intervalId = setInterval(() => {
      const {timers} = this.state;

      this.setState({
        timers : timers.map(timer => {
          const {elapsed, isRunning} = timer;

          return{
            ...timer,
            elapsed : isRunning ? elapsed + TIME_INTERVAL : elapsed,
          };
        }),
      });
    }, TIME_INTERVAL)
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  render() {
    const { timers } = this.state

    return (
      <ScrollView>
        <ToggleableTimerForm onFormSubmit = {this.handleCreateNewForm}/>
        {timers.map(({ title, id, elapsed, isRunning }) => (
          <EditableTimer
            id={id}
            title={title}
            elapsed = {elapsed}
            isRunning = {isRunning}
            onFormSubmit={this.handleFormSubmit}
            onRemovePress={this.handleRemovePress}
            onStartPress={this.toogleTimer}
            onStopPress={this.toogleTimer}
          />
        ))}
      </ScrollView>
    )
  }
}