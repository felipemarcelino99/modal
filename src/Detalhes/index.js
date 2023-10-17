import { StyleSheet, Text, View, Button } from 'react-native';

export default function Detalhes(props) {
  return (
    <View style={styles.overlay}>
        <View style={styles.container}> 
            <Text>Teste</Text>
            <Button title='Fechar' onPress={ props.fechar }/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.25)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: 250,
    height: 250,
    borderRadius: 15,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
