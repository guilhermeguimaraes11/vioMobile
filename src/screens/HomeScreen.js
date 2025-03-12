import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.button}
          onPress={() => navigation.navigate("CadastroEvento")}
        >
          Cadastro de Eventos
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.button}
          onPress={() => navigation.navigate("CadastroIngresso")}
        >
          Cadastro de Ingresso
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.button}
          onPress={() => navigation.navigate("CadastroOrganizador")}
        >
          Cadastro de Organizadores
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      padding: 20,
    },
    input: {
      width: 200,
      height: 40,
      borderWidth: 1,
      marginBottom: 20,
      paddingHorizontal: 10,
    },
    button: {
      backgroundColor: "gray",
      padding: 10,
      borderRadius: 5,
      alignItems: "center",
      width: "100%",
      width: 100,
    },
    title: {
      fontSize: 25,
      fontWeight: "bold",
      marginBottom: 20,
    },
  });