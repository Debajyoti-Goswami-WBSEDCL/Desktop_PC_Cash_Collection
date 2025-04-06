import React from 'react';
import {View, Text, Button} from 'react-native';

const Login = () => {
    return (
        <View>
            <Text>Login Screen</Text>
            <Button
                title = "SUBMIT"
                onPress = {() => alert('button clicked')}
            />
        </View>
    );
};

export default Login;