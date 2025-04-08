import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import styles from "./Login.styles";
import api from '../utils/api'

const encrypt = (message, separator) => {
    return message + separator;
};

const jsonObjInput = {
    "enAuthCon": "e2505160dd246432bb85604?49cfb84c783293aac0513cc?33204b39c3e924ab7af69c95?6e56e9f6616638adec7ea147?1f07371a94c0a81bfcdf1c2?49cfb84c783293aac0513cc?33204b39c3e924ab7af69c95?450fbe5d298146ad7cb93371?5374ea0f03e84a60ef2d486f",
    "enIdCon": "9f046b071a9c024bb7406d9@3e634c6e82bb771dd4ad3b38@3e634c6e82bb771dd4ad3b38@450fbe5d298146ad7cb93371@72623f5c2ca51ee68278ef72@262a8c5b99bb0ed042c7f125@262a8c5b99bb0ed042c7f125@3522e7544078ce2dc2e6b12c",
    "DI": "PCIIDE IDECHANNEL 4 43C5AE 0 0 P",
    "MS": "INA028074F",
    "appVer": "2021.3.1",
    "pageNm": "INLog",
    "HS": "9VY81SVW",
    "appNm": "pcoffline",
    "UD": "3703EF80-FDB0-1015-8E7A-EC71D32B",
    "appPkNm": "A",
    "OA": 64,
    "MA": "40-61-86-F4-D5-DD",
    "appVcode": "18",
    "IA": "10.250.34.170",
    "PI": "v1.0_BFEBFBFF0001067A",
    "fhash": "11e79648623e614268dca9f259ad14ce",
    "ID": 1,
    "TP": "07.04.2025 17:23:24.318",
    "UR": "DESKTOP-UIQ7BC3",
    "OL": "00330-50000-00000-AAOEM",
    "ON": "Microsoft Windows 10 Pro"
};
let ddata = jsonObjInput; //JSON.stringify(jsonObjInput);
const formData = new URLSearchParams();
formData.append('devinfo', JSON.stringify(ddata));//JSON.stringify(ddata));

const handleButtonClick = async () => {
    console.log('inside handleButtonClick()');
    alert('handleButtonClick started');
    console.log('[MY APP] ✅ Request Data: ', formData);
    console.log('[MY APP] Full Response: ', JSON.stringify(formData));
    try {
        const response = await api.post('/offlinenewpccashcomp/offlinenewpccashcomp', formData);
        console.log('[MY APP] ✅ Status Code: ', response.status);
        console.log('[MY APP] ✅ Response Data: ', response.data);
        console.log('[MY APP] Full Response: ', JSON.stringify(response));
    }
    catch (error) {
        console.log('❌ Login Error:', error);

        if (error) {
            console.log('❌ Status:', error);
            console.log('❌ Error Data:', error);
        } else if (error) {
            console.log('❌ No response received:', error);
        } else {
            console.log('❌ Unexpected Error:', error);
        }
    }

    alert('handleButtonClick ended');
};

const Login = () => {
    const [userId, setUserId] = useState('');
    const [isBttnDisabled, setIsBttnDisabled] = useState(true);

    const isUserValid = () => {
        return userId.length === 8 && userId[0] === '9';
    }

    const correctUserIdPwd = () => {
        return isUserValid();
    }

    useEffect(
		() => {
		setIsBttnDisabled(!correctUserIdPwd());
		}, [userId]
	);

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
                    <TextInput style={styles.input} placeholder="ERP ID" onChangeText={(text)=> setUserId(text)} value= {userId}/>
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
                    <Button title="Request OTP" onPress={handleButtonClick} disabled = {isBttnDisabled} />
                </View>
            </View>
        </View>
    );
};

export default Login;


