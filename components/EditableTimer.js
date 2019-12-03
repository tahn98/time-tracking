import React from 'react';

import PropTypes from 'prop-types';
import TimerForm from './TimerForm';
import Timer from './Timer';

export default class EditableTimer extends React.Component {
  
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    elapsed: PropTypes.number.isRequired,
    isRunning: PropTypes.bool.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
    onRemovePress: PropTypes.func.isRequired,
    onStartPress: PropTypes.func.isRequired,
    onStopPress: PropTypes.func.isRequired,
  };

  state = {
    editFormOpen: false,
  };

  handleEditPress = () => {
    this.openForm();
  }

  handleCancelPress = () => {
    this.closeForm();
  }

  handleSubmit = timer => {
    const {onFormSubmit} = this.props;
    
    onFormSubmit(timer);
    this.closeForm();
  }

  openForm = () => {
    this.setState({
      editFormOpen: true,
    });
  }

  closeForm = () => {
    this.setState({
      editFormOpen: false,
    });
  }

  render() {
    const { title, id, elapsed, onRemovePress, isRunning, onStartPress, onStopPress } = this.props
    const { editFormOpen } = this.state
    if (editFormOpen) {
      return (
        <TimerForm
          id={id}
          title={title}
          onCancelPress={this.handleCancelPress}
          onFormSubmit = {this.handleSubmit}
        />
      )
    }
    return (
      <Timer
        id={id}
        title={title}
        elapsed = {elapsed}
        onEditPress={this.handleEditPress}
        onRemovePress = {onRemovePress}
        isRunning = {isRunning}
        onStartPress = {onStartPress}
        onStopPress = {onStopPress}
      />
    )
  }
}