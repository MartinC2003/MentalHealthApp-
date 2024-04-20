// Login.jsx
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const Login = ({ onLogin, navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('./accounts.json');
      const data = await response.json();
      
      // Find the user in the data array based on username and password
      const user = data.find(user => user.username === username && user.password === password);
      
      if (user) {
        // Set the user's role based on the role retrieved from the JSON data
        const role = user.role === 'therapist' ? 'therapist' : 'user';
        // Call onLogin function with user object and role
        onLogin({ ...user, role });
      } else {
        // Handle invalid credentials
        console.log('Invalid username or password');
      }
    } catch (error) {
      console.error('Error reading JSON:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button
        title="Login"
        onPress={handleLogin}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
});

export default Login;
