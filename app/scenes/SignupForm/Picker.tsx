import React, {Component} from 'react';
import {Picker, Text, View, StyleSheet} from 'react-native';

class PickerDropdown extends Component {
  state = {
    selectedValue: 'CSE',
  };
  handlePicker = (itemValue: string): void => {
    this.setState({selectedValue: itemValue});
  };

  render() {
    return (
      <View style={styles.branchSelection}>
        <Text style={styles.textStyle}>Select your branch :</Text>
        <Picker
          selectedValue={this.state.selectedValue}
          style={styles.pickerStyle}
          onValueChange={this.handlePicker}>
          <Picker.Item label="CSE" value="CSE" />
          <Picker.Item label="CIVIL" value="CIVIL" />
          <Picker.Item label="MECH" value="MECH" />
          <Picker.Item label="ECE" value="ECE" />
          <Picker.Item label="EEE" value="EEE" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pickerStyle: {
    height: 30,
    backgroundColor: '#e2e8f0',
    width: 145,
    marginLeft: 40,
  },
  branchSelection: {
    flexDirection: 'row',
    marginTop: 20,
  },
  textStyle: {
    color: 'gray',
    fontWeight: 'bold',
  },
});

export default PickerDropdown;
