// App.jsx
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/login';
import TabNavigator from './components/nav';
import TherapistTabNavigator from './components/therapistNav';

const Stack = createStackNavigator();

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false); // State to track if user is logged in
  const [userData, setUserData] = useState(null); // State to store user data

  // Function to handle login
  const handleLogin = (user) => {
    setLoggedIn(true); // Set loggedIn to true
    setUserData(user); // Set user data
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {loggedIn ? (
          // If logged in, render the appropriate navigator based on user type
          userData && userData.role === 'therapist' ? (
            <Stack.Screen name="Therapist" component={TherapistTabNavigator} options={{ headerShown: false }} />
          ) : (
            <TabNavigator />
          )
        ) : (
          // If not logged in, show the login screen
          <Stack.Screen name="Login">
            {props => <Login {...props} onLogin={handleLogin} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
