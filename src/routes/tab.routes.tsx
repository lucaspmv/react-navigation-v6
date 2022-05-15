import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';

import { MaterialIcons } from '@expo/vector-icons'

const { Screen, Navigator } = createBottomTabNavigator();

export function TabRoutes(){
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: 'navy',
        tabBarInactiveTintColor: 'gray'
      }}
    >
      <Screen 
        name="screenA"
        component={ScreenA}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons 
              name="home"
              color={color}
              size={size}
            />
          )
        }}
      />
      <Screen 
        name="screenB"
        component={ScreenB}
        options={{
          tabBarLabel: 'Novo',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons 
              name="add"
              color={color}
              size={size}
            />
          )
        }}
      />
    </Navigator>
  )
}