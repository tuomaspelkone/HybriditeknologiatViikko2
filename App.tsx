import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Modal, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {

const [ModalVisible, setModalVisible] = useState(false)

  return (
    <View style={styles.container}>
      <Modal
          animationType="fade"
          transparent={true}
          visible={ModalVisible}
          onRequestClose={() => {
            setModalVisible(!ModalVisible);
          }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text>This is modal...</Text>
                <Pressable
                  onPress={() => setModalVisible(!ModalVisible)}>
                  <Text style={styles.closeModalText}>Close</Text>
                </Pressable>
              </View>
            </View>
        </Modal>
      <Pressable onPress={() => setModalVisible(true)}>
          <Text>Show Modal message</Text>
        </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 80,
    alignItems: 'center',
  },
  closeModalText: {
    marginTop: 20,
    fontWeight: 'bold',
  },
});
