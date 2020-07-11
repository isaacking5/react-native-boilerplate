import React, {Component} from 'react';
import {TextInput, StyleSheet} from 'react-native';

interface InputTagProps {
  placeholder: string;
}
class InputTag extends Component<InputTagProps> {
  state = {
    value: '',
  };
  render() {
    const {placeholder} = this.props;
    return (
      <>
        <TextInput style={styles.inputStyles} placeholder={placeholder} />
      </>
    );
  }
}

const width50 = '48%';
const styles = StyleSheet.create({
  inputStyles: {
    minWidth: width50,
    borderRadius: 5,
    padding: 0,
    paddingLeft: 10,
    backgroundColor: '#e2e8f0',
    marginTop: 10,
  },
});

export default InputTag;
