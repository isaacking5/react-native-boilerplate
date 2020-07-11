import React, {Component} from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {View, Text, StyleSheet} from 'react-native';

class MultiSliderComponent extends Component {
  state = {
    values: [0],
  };
  multiSliderValuesChange = (values: Array<number>) => {
    this.setState({
      values,
    });
  };
  render() {
    return (
      <View style={styles.SliderConstrainer}>
        <Text style={styles.typingSpeed}>Typing Speed :</Text>
        <MultiSlider
          sliderLength={200}
          min={0}
          max={100}
          step={1}
          values={this.state.values}
          onValuesChange={this.multiSliderValuesChange}
          enableLabel
          customLabel={() => (
            <Text style={styles.labelStyle}>{`${this.state.values}%`}</Text>
          )}
          selectedStyle={styles.selectedStyle}
          unselectedStyle={styles.unselectedStyle}
          markerStyle={styles.markerStyle}
          trackStyle={styles.trackStyle}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  SliderConstrainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  labelStyle: {
    marginBottom: -15,
  },
  selectedStyle: {
    backgroundColor: '#48bb78',
    height: 10,
  },
  unselectedStyle: {
    backgroundColor: '#e2e8f0',
    height: 10,
  },
  markerStyle: {
    height: 20,
    width: 20,
    marginTop: 8,
  },
  trackStyle: {
    borderRadius: 5,
  },
  typingSpeed: {
    color: 'gray',
    fontWeight: 'bold',
    marginTop: 18,
  },
});

export default MultiSliderComponent;
