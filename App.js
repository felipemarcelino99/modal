import { useState } from 'react';
import { StyleSheet, Text, View, Modal, Button } from 'react-native';
import Detalhes from './src/Detalhes';

export default function App() {

  const [isModalVisible, setIsModalVisible] = useState(false);

  function abrirModal() {
    setIsModalVisible(true);
  }

  function fecharModal() {
    setIsModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <Button title={'Abrir Modal'} onPress={abrirModal}/>

      <Modal animationType='fade' visible={isModalVisible}>
        <Detalhes fechar={fecharModal} />
      </Modal>
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
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.25)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_modal: {
    width: 250,
    height: 250,
    borderRadius: 15,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
