import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.text}>Hello World!</Text>
      <TextInput defaultValue='Exemplo de input' style={styles.input} />
      <Image style={styles.image} source={require('./src/assets/img/pngegg.png')}></Image>
      <Button title='pressione' style={styles.btn} onPress={() => Alert.alert('Voce pressionou o botao!!')}/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },
  text: {
    color: '#fff',
    fontSize: 35
  },
  input: {
    paddingLeft: 15,
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    backgroundColor: 'white'
  },
  image: {
    width: '60%',
    height: '40%'
  },
  btn: {
    width: '40%',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#fff',
    color: 'black'
  }
});
