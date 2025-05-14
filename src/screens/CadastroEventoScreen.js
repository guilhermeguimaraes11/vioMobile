import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import api from "../axios/axios";
import DateTimePicker from "../components/DateTimePicker";

export default function CadastroEventoScreen({ navigation }) {
  const [evento, setEvento] = useState({
    nome: "",
    descricao: "",
    data_hora: "",
    local: "",
    fk_id_organizador: "",
  });

  async function CadastroEventoScreen() {
    await api.postCadastroEvento(evento).then(
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
      <Text style={styles.title}>Faça o Cadastro do Evento</Text>
      <TextInput
        placeholder="Nome"
        value={evento.nome}
        onChangeText={(value) => {
          setEvento({ ...evento, nome: value });
        }}
        style={styles.input}
      />
      <TextInput
        placeholder="Descrição"
        value={evento.descricao}
        onChangeText={(value) => {
          setEvento({ ...evento, descricao: value });
        }}
        style={styles.input}
      />
      <DateTimePicker 
      type={"datetime"}
      buttonTitle={
        evento.data_hora === "" ? "Selecione a data do evento" : evento.data_hora.toLocaleString()
      }
      setValue={setEvento}
      dateKey={"data_hora"}
      
      />
      <TextInput
        placeholder="Local"
        value={evento.local}
        onChangeText={(value) => {
          setEvento({ ...evento, local: value });
        }}
        style={styles.input}
      />
      <TextInput
        placeholder="ID do Organizador"
        value={evento.fk_id_organizador}
        onChangeText={(value) => {
          setEvento({ ...evento, fk_id_organizador: value });
        }}
        style={styles.input}
      />
      <TouchableOpacity onPress={CadastroEventoScreen} style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Home</Text>
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
    width: 250,
    height: 45,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 16,
    borderColor: "#ccc",
  },
  button: {
    backgroundColor: "#3498db", // Cor do botão principal
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    width: 200,
    marginBottom: 15,
  },
  secondaryButton: {
    backgroundColor: "#95a5a6", // Cor do botão secundário
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
