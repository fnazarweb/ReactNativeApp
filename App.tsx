import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faCalendar } from '@fortawesome/free-solid-svg-icons';

import HomePage from './src/pages/HomePage/index';
import Calendar from './src/pages/Calendar/index';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { StatusBar } from 'react-native';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <StatusBar barStyle="light-content" />
          <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
              tabBarStyle: {
                backgroundColor: '#F6D96B',
              },
              tabBarActiveTintColor: '#4A90D9',
            }}
          >
            <Tab.Screen
              name="Home"
              component={HomePage}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <FontAwesomeIcon icon={faHome} color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Calendar"
              component={Calendar}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <FontAwesomeIcon
                    icon={faCalendar}
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
