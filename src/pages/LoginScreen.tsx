import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { auth } from '../../firebaseConfig'; // Certifique-se de que o caminho esteja correto
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { blue100, lightBlue100 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

type RootStackParamList = {
    Login: undefined;
    LoginPage: undefined;
};

type LoginScreenProp = StackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const navigation = useNavigation<LoginScreenProp>();

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigation.navigate('LoginPage');
        } catch (error) {
            setError('Erro ao fazer login. Verifique suas credenciais e tente novamente.');
        }
    };

    return (
        <View style={styles.container}>
            {error && <Text style={styles.error}>{error}</Text>}
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Senha"
                secureTextEntry
            />
            {/* <Button title="Login" onPress={handleLogin} color={"blue"}/> */}
            <button style={{backgroundColor: 'blue', color: 'white', borderRadius: 20, padding: 10, width: "30%", alignSelf: "center"}} onClick={handleLogin}>Login</button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
        
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    error: {
        color: 'red',
        marginBottom: 16,
        textAlign: 'center',
    },
});

export default LoginScreen;