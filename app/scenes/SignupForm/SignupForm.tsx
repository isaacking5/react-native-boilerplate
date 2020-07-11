import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  Button,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SignUpFormContainer} from './styledComponents';
import ColorPickerModel from './ColorPickerModel';
import InputTag from './InputTag';
import MultiSliderComponent from './MultiSlider';
import PickerDropdown from './Picker';
import DatePickerComponent from './DatePicker';
import CheckBoxComponent from './CheckBox';
class SignUpForm extends Component<any, any> {
  state = {
    leftColor: '#4299e1',
    rightColor: '#9f7aea',
  };

  setLeftColor = (color: string) => {
    this.setState({leftColor: color});
  };
  setRightColor = (color: string) => {
    this.setState({rightColor: color});
  };
  render() {
    const {leftColor, rightColor} = this.state;
    return (
      <>
        <LinearGradient
          colors={[`${leftColor}`, `${rightColor}`]}
          style={styles.gradient}
          start={{x: 0.3, y: 0}}
          end={{x: 1, y: 0.1}}>
          <ScrollView>
            <SignUpFormContainer>
              <View style={styles.colorContainer}>
                <Text style={styles.colorSelector}>
                  Select your favourites colors
                </Text>
                <ColorPickerModel
                  setColor={this.setLeftColor}
                  color={leftColor}
                />
                <ColorPickerModel
                  setColor={this.setRightColor}
                  color={rightColor}
                />
              </View>
              <View style={styles.signUpWrapper}>
                <Text style={styles.signUpText}>Sign Up</Text>
                <Text style={styles.lowOpacity}>
                  Please fill in this form to create an account
                </Text>
                <Text style={styles.lineStyle} />
                <View>
                  <View style={styles.inputTagStyle}>
                    <InputTag placeholder="First Name" />
                    <InputTag placeholder="Last Name" />
                  </View>
                  <InputTag placeholder="Mobile Number" />
                  <InputTag placeholder="Email" />
                  <InputTag placeholder="Password" />
                  <InputTag placeholder="Confirm Password" />
                  <PickerDropdown />
                  <DatePickerComponent />
                  <View style={styles.textAreaContainer}>
                    <Text style={styles.enterAddress}>Enter Address:</Text>
                    <TextInput
                      style={styles.textArea}
                      underlineColorAndroid="transparent"
                      placeholder="Type your address here!"
                      placeholderTextColor="grey"
                      numberOfLines={5}
                      multiline={true}
                    />
                  </View>
                  <CheckBoxComponent />
                  <MultiSliderComponent />
                  <Button
                    onPress={() => {}}
                    title="SIGN UP"
                    color="#3182ce"
                    touchSoundDisabled={true}
                  />
                </View>
              </View>
            </SignUpFormContainer>
            <Text style={styles.accountHolder}>
              Already have an account?{' '}
              <Text style={styles.loginHere}>LOGIN HERE</Text>
            </Text>
          </ScrollView>
        </LinearGradient>
      </>
    );
  }
}

export default SignUpForm;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  colorContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  colorSelector: {
    color: 'whitesmoke',
    fontWeight: 'bold',
  },
  signUpWrapper: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    alignSelf: 'stretch',
    margin: 5,
    marginHorizontal: 30,
    padding: 20,
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.28,
    shadowRadius: 4.84,
    elevation: 7,
  },
  signUpText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  lowOpacity: {
    color: 'gray',
    fontWeight: 'bold',
  },
  lineStyle: {
    borderBottomWidth: 0.5,
    borderColor: 'black',
    marginTop: -10,
    marginHorizontal: -20,
  },

  inputTagStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textAreaContainer: {
    flexDirection: 'row',
  },
  textArea: {
    borderWidth: 1,
    backgroundColor: '#e2e8f0',
    padding: 5,
    height: 80,
    textAlignVertical: 'top',
    marginTop: 20,
    flex: 1,
  },
  enterAddress: {
    color: 'gray',
    fontWeight: 'bold',
    marginRight: 20,
    marginTop: 50,
  },
  accountHolder: {
    flex: 1,
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 40,
  },
  loginHere: {
    color: '#434190',
  },
});
