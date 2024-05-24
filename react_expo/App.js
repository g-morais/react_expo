import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

// Dados do usuário
const userData = {
  nome: "Guilherme Willam Morais dos Santos",
  idade: 21,
  ocupacao: "Analista de suporte",
  experiencia: "8 meses de experiência",
  foto: require('./assets/minha_foto.jpg')
};

// Componente de página inicial
const PaginaInicial = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={userData.foto} style={styles.foto} />
      <Text style={styles.nome}>{userData.nome}</Text>
      <Text style={styles.info}>{userData.idade} anos</Text>
      <Text style={styles.info}>{userData.ocupacao}</Text>
      <Text style={styles.info}>{userData.experiencia}</Text>
    </ScrollView>
  );
};

// Outros componentes de página
const Pagina1 = () => {
  return (
    <View style={styles.pagina}>
      <Text style={styles.textoPagina}>Conteúdo da Página 1</Text>
    </View>
  );
};

const Pagina2 = () => {
  return (
    <View style={styles.pagina}>
      <Text style={styles.textoPagina}>Conteúdo da Página 2</Text>
    </View>
  );
};

const Pagina3 = () => {
  return (
    <View style={styles.pagina}>
      <Text style={styles.textoPagina}>Conteúdo da Página 3</Text>
    </View>
  );
};

// Componente principal
const App = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState('Página Inicial');

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const navegarPara = (pagina) => {
    setPaginaAtual(pagina);
    setMenuAberto(false);
  };

  // Renderização condicional da página atual
  const renderizarPagina = () => {
    switch (paginaAtual) {
      case 'Página Inicial':
        return <PaginaInicial />;
      case 'Página 1':
        return <Pagina1 />;
      case 'Página 2':
        return <Pagina2 />;
      case 'Página 3':
        return <Pagina3 />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.titulo}>Guilherme Morais</Text>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
          <Text>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Menu */}
      {menuAberto && (
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página Inicial')}>
            <Text style={styles.menuItemText}>Página Inicial</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 1')}>
            <Text style={styles.menuItemText}>Página 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 2')}>
            <Text style={styles.menuItemText}>Página 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 3')}>
            <Text style={styles.menuItemText}>Página 3</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Conteúdo */}
      <View style={styles.content}>{renderizarPagina()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
  menuIcon: {
    padding: 10,
  },
  menu: {
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuItemText: {
    fontSize: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagina: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoPagina: {
    fontSize: 18,
  },
  foto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    alignSelf: 'center',
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
    textAlign: 'center',
  },
});

export default App;
