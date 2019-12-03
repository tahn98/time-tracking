import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

export default function TimerButton({ color, title, small, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.button, { borderColor: color }]} onPress={onPress}>
      <Text style={[styles.buttonText, small ? styles.small : styles.large,
      { color },]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

TimerButton.propTypes = {
  title: PropTypes.string.isRequired,
  small: PropTypes.bool,
};

TimerButton.defaultProps = {
  small: false,
};

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    minWidth: 100,
    borderWidth: 2,
    borderRadius: 3,
  },
  small: {
    fontSize: 14,
    padding: 5,
  },
  large: {
    fontSize: 16,
    padding: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  }
});
