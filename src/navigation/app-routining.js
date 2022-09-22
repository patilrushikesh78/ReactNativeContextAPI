import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './../screen/HomeScreen';
import {ThemeContext} from '../context/ThemeContext';
import {StatusBar} from 'react-native';
const Stack = createNativeStackNavigator();

export const Navigator = () => {
  const {dynamicColors} = React.useContext(ThemeContext);

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={dynamicColors.DARK_PRIMARY_COLOR}
      />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
          }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Home',
              headerStyle: {
                backgroundColor: dynamicColors.PRIMARY_COLOR,
              },
              headerTitleStyle: {
                color: dynamicColors.TEXT_ICON_COLOR,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
