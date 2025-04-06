import React from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import styles from "./Login.styles";

const Login = () => {
  return (
    <View style={styles.container}>
      {/* Company Logo */}
      <Image
        source={require('../assets/wbsedcl_logo.png')} // Place logo image in /assets folder
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Software Title */}
      <Text style={styles.title}>Mobile Cash Collection Software</Text>

      {/* Login Card */}
      <View style={styles.card}>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Username:</Text>
          <TextInput style={styles.input} placeholder="Enter username" />
        </View>

        <View style={styles.inputRow}>
          <Text style={styles.label}>Password:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter password"
            secureTextEntry
          />
        </View>

        <View style={styles.buttonWrapper}>
          <Button title="SUBMIT" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

export default Login;


