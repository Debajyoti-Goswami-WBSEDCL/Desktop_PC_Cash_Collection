import React from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import styles from "./Login.styles";
import api from '../utils/api'

const encrypt = (message, separator) => {
    return message+ separator;
};

const handleButtonClick = async () => {
    console.log('inside handleButtonClick()');
    alert('handleButtonClick started');
  
    try {
      const response = await api.post('', {
        userAgent: 'android',
        pageNm: 'LOGIN',
        app_type: 'web',
        app_ver: '',
        User: encrypt('90012775', '@'),
        Pwd: encrypt('Bongaon1$', '?'),
      });
  
      console.log('✅ Response Data:', JSON.stringify(response));
    } catch (error) {
      console.log('❌ Login Error:', error);
  
      if (error) {
        console.log('❌ Status:', error);
        console.log('❌ Data:', error);
      } else {
        console.log('❌ Network/Other Error:', error);
      }
    }
  
    alert('handleButtonClick ended');
  };

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
      <Text style={styles.title}>Mobile Cash Collection</Text>

      {/* Login Card */}
      <View style={styles.card}>
        {/* User ID section */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>Username:</Text>
          <TextInput style={styles.input} placeholder="ERP ID" />
        </View>

        {/* Password section */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>Password:</Text>
          <TextInput
            style={styles.input}
            placeholder="ERP Portal Password"
            secureTextEntry
          />
        </View>

        {/* Submit button */}
        <View style={styles.buttonWrapper}>
          <Button title="Request OTP" onPress= { handleButtonClick } />
        </View>
      </View>
    </View>
  );
};

export default Login;


