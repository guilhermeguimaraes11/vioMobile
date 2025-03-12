import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Button,
} from "react-native";
import api from "../axios/axios";

export default function CadastroOrganizadorScreen({navigation}) {
  const [org, setOrganizador] = useState({
    nome:"",
    email:"",
     senha:"",
     telefone:"",
    
  });

  async function CadastroOrganizadorScreen() {
    await api.postCadastroOrganizador(org).then(
      (response) => {
        console.log(response.data.message);
        Alert.alert("OK", response.data.message);
      },
      (error) => {
        Alert.alert("Erro", error.response.data.error);
        console.log(error);
      }
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça o Cadastro do organizador</Text>
      <TextInput
        placeholder="Nome"
        value={org.nome}
        onChangeText={(value) => {
        setOrganizador({ ...org, nome: value });
        }}
        style={styles.input}
      />
      <TextInput
        placeholder="email"
        value={org.email}
        onChangeText={(value) => {
          setOrganizador({ ...org, email: value });
        }}
        style={styles.input}
      />
       <TextInput
        placeholder="Senha"
        value={org.password}
        onChangeText={(value) => {
          setOrganizador({  ...org, senha: value });
        }}
        style={styles.input}
      />
      <TextInput
        placeholder="telefone"
        value={org.telefone}
        onChangeText={(value) => {
          setOrganizador({  ...org, telefone: value });
        }}
        style={styles.input}
      />
     <TouchableOpacity onPress={CadastroOrganizadorScreen} style={styles.button}>
             <Text style={styles.button}>Cadastrar</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.button}>
             <Text style={styles.button} onPress={() => navigation.navigate("Home")}>
               Home
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