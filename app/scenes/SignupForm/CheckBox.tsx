import React, {Component} from 'react';
import {View, Text, StyleSheet, Linking, CheckBox} from 'react-native';

class CheckBoxComponent extends Component {
  state = {
    isCheckboxValue: false,
  };
  render() {
    const {isCheckboxValue} = this.state;
    return (
      <>
        <View style={styles.checkboxContainer}>
          <CheckBox
            style={styles.checkbox}
            value={isCheckboxValue}
            onValueChange={() =>
              this.setState({isCheckboxValue: !isCheckboxValue})
            }
          />
          <Text style={styles.checkboxLabel}>
            I accept the{' '}
            <Text
              style={styles.termsPolicy}
              onPress={() => Linking.openURL('https://google.com')}>
              Term of Use
            </Text>{' '}
            &{' '}
            <Text
              style={styles.termsPolicy}
              onPress={() => Linking.openURL('https://google.com')}>
              Privacy Policy
            </Text>
            .{isCheckboxValue ? ' 👍' : ' 👎'}
          </Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  checkboxLabel: {
    margin: 5,
    color: 'gray',
    fontWeight: 'bold',
  },
  termsPolicy: {
    color: '#2b6cb0',
    borderWidth: 2,
    borderColor: '#2b6cb0',
  },
});

export default CheckBoxComponent;
