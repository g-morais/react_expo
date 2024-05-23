import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const userData = {
  nome: "Guilherme Willam Morais dos Santos",
  idade: 21,
  ocupacao: "Analista de suporte e desenvolvedor",
  experiencia: "8 meses de experiência",
  foto: require('./assets/minha_foto.jpg')
};

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={userData.foto} style={styles.foto} />
      <Text style={styles.nome}>{userData.nome}</Text>
      <Text style={styles.info}>{userData.idade} anos</Text>
      <Text style={styles.info}>{userData.ocupacao}</Text>
      <Text style={styles.info}>{userData.experiencia}</Text>
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
  foto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  info: {
    fontSize: 18,
    marginBottom: 5,
  },
});
