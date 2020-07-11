import React, {Component} from 'react';
import DatePicker from 'react-native-datepicker';
import {View, Text, StyleSheet} from 'react-native';

class DatePickerComponent extends Component {
  state = {date: '2016-05-15'};

  render() {
    return (
      <View style={styles.DateConstrainer}>
        <Text style={styles.DOB}>Date of Birth :</Text>
        <DatePicker
          style={{width: 200}}
          mode="date"
          date={this.state.date}
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2018-05-01"
          maxDate="2025-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{...dateTag}}
          onDateChange={date => {
            this.setState({date: date});
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  DateConstrainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  DOB: {
    color: 'gray',
    fontWeight: 'bold',
    marginTop: 10,
  },
});

const dateTag = StyleSheet.create({
  dateIcon: {
    position: 'absolute',
    left: 0,
    top: 4,
    marginLeft: 0,
  },
  dateInput: {
    marginLeft: 36,
  },
});

export default DatePickerComponent;
