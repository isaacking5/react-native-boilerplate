import React, {Component} from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
class RadioButtons extends Component {
  state = {
    data: [
      {label: 'param1', value: 0},
      {label: 'param2', value: 1},
    ],
  };
  onPress = (data: any) => this.setState({data});

  render() {
    return (
      <RadioGroup
        radioButtons={this.state.data}
        onPress={this.onPress}
        flexDirection="row"
      />
    );
  }
}

export default RadioButtons;
