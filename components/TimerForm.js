import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

import TimerButton from './TimerButton';
import PropTypes from 'prop-types';

export default class TimerForm extends React.Component {

  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    onFormSubmit: PropTypes.func.isRequired,
    onFormClose: PropTypes.func.isRequired,
  };

  static defaultProps = {
    id: null,
    title: '',
    project: '',
  };

  constructor(props) {
    super(props);

    const { id, title } = props;
    this.state = {
      title: id ? title : ''
    };
  }

  handleTitleChange = title => {
    this.setState({ title });
  };

  handleSubmit = () => {
    const { onFormSubmit, id } = this.props;
    const { title } = this.state;

    onFormSubmit({ id, title })
  }

  render() {
    const { onCancelPress } = this.props;
    const { title } = this.state;
    return (
      <View style={styles.timerFormContainer}>
        <Text>Title</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={this.handleTitleChange}
            value={title}
          />
        </View>
        <View style={styles.buttonGroup}>
          <TimerButton title='Submit' color='green' small onPress={this.handleSubmit} />
          <TimerButton title='Cancel' color='red' small onPress={onCancelPress} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  timerFormContainer: {
    backgroundColor: 'white',
    borderColor: 'gray',
    padding: 15,
    margin: 15,
    borderWidth: 2,
    borderRadius: 15
  },
  textInputContainer: {
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 5,
  },
  textInput: {
    height: 35,
    padding: 5,
    fontSize: 12,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
})
