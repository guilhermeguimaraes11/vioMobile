import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import api from "../axios/axios";
import { Ionicons} from '@expo/vector-icons'
import { useNavigation} from '@react-navigation/native'
import * as SecureStore from 'expo-secure-store';


export default function Login({}) {

  const navigation = useNavigation();
  const [user, setUser] = useState({
    email: "",
    password: "",
    showPassword:false,
  });

  async function saveToken(token) {
  await SecureStore.setItemAsync("token", token);
  console.log("token:", token);
}

async function handleLogin() {
  await api.postLogin(user).then(
    (response) => {
      Alert.alert("OK", response.data.message);
      saveToken(response.data.token);
      navigation.navigate("EventosScreen");
    },
    (error) => {
      Alert.alert("Erro", error.response.data.error);
      console.log(error);
    }
  );
}
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça Login</Text>
      <TextInput
        
        placeholder="E-mail"
        value={user.email}
        onChangeText={(value) => {
          setUser({ ...user, email: value });
        }}
        style={styles.input}
      />
      <View style={styles.passwordContainer}>
      <TextInput
      style={styles.passwordInput}
        placeholder="Senha"
        value={user.password}
        secureTextEntry={user.showPassword}
        onChangeText={(value) => {
          setUser({ ...user, password: value });
        }}
        styles={styles.input}
      />
      <TouchableOpacity onPress={()=> setUser({...user,showPassword:!user.showPassword})}
      >
      <Ionicons name={user.showPassword?"eye-off":"eye"} size={24} color="gray" />
    </TouchableOpacity>
      </View>
      
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
      
        
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate("Cadastro")}>
        
        <Text style={styles.buttonText}>Cadastre-se</Text>
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
    borderColor:"gray",
    width: "100%",
    height: 40,
    borderBottomWidth: 1,
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
    margin:10
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
  passwordContainer:{
    flexDirection: "row",
    alignItems:"center",
    width:"100%",
    borderBottomWidth:1,
    paddingRight:10,
  },
  passwordInput:{
    flex:1,
    height:40,
  }
});