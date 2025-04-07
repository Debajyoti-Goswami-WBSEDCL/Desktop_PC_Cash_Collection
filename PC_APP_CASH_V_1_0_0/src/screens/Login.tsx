import React from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import styles from "./Login.styles";
import api from '../utils/api'

const encrypt = (message, separator) => {
    return message + separator;
};

const handleButtonClick = async () => {
    console.log('inside handleButtonClick()');
    alert('handleButtonClick started');

    try {
        const response = await api.post('', { 
            "User": "9f046b071a9c024bb7406d9@3e634c6e82bb771dd4ad3b38@3e634c6e82bb771dd4ad3b38@450fbe5d298146ad7cb93371@72623f5c2ca51ee68278ef72@262a8c5b99bb0ed042c7f125@262a8c5b99bb0ed042c7f125@3522e7544078ce2dc2e6b12c", 
            "Pwd": "e2505160dd246432bb85604?49cfb84c783293aac0513cc?33204b39c3e924ab7af69c95?6e56e9f6616638adec7ea147?1f07371a94c0a81bfcdf1c2?49cfb84c783293aac0513cc?33204b39c3e924ab7af69c95?450fbe5d298146ad7cb93371?5374ea0f03e84a60ef2d486f", 
            "userAgent": "Mozilla 5.0  Macintosh  Intel Mac OS X 10_15_7  AppleWebKit 537.36  KHTML  like Gecko  Chrome 134.0.0.0 Safari 537.36", 
            "pageNm": "LOGIN", 
            "app_type": "web", 
            "app_ver": "" 
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
                    <Button title="Request OTP" onPress={handleButtonClick} />
                </View>
            </View>
        </View>
    );
};

export default Login;


