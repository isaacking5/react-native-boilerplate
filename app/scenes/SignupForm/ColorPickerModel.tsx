import React, {Component} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {TriangleColorPicker, toHsv, fromHsv} from 'react-native-color-picker';

interface ColorPickerModelType {
  setColor: Function;
  color: string;
}
class ColorPickerModel extends Component<ColorPickerModelType> {
  state = {
    modalVisible: false,
    color: toHsv(this.props.color),
  };

  setModalVisible = (visible: any) => {
    this.setState({modalVisible: visible});
  };

  onColorChange = (color: any) => {
    const {setColor} = this.props;
    setColor(fromHsv(color));
    this.setState({color});
  };

  render() {
    const {modalVisible} = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={{flex: 1, padding: 40, backgroundColor: '#212021'}}>
                <Text style={{color: 'white'}}>Pick your own taste</Text>
                <TriangleColorPicker
                  oldColor="purple"
                  color={this.state.color}
                  onColorChange={this.onColorChange}
                  onColorSelected={color =>
                    Alert.alert(`Old color selected: ${color}`)
                  }
                  onOldColorSelected={color =>
                    Alert.alert(`Old color selected: ${color}`)
                  }
                  style={{flex: 1, width: 200, height: 200}}
                />
              </View>
              <TouchableHighlight
                style={{...styles.openButton}}
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>Set Color</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <TouchableHighlight
          style={{
            ...styles.openButton,
            backgroundColor: fromHsv(this.state.color),
          }}
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text style={styles.textStyle}>Pick Color</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 70,
  },
  openButton: {
    backgroundColor: '#4299e1',
    borderRadius: 5,
    padding: 5,
    marginTop: 5,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ColorPickerModel;
