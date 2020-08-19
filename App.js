//import { createStackNavigator, createAppContainer } from 'react-navigation';
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from './app/components/SignUp';
import SignIn from './app/components/SignIn';
import Profile from './app/components/Profile';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="signin" screenOptions={{
            headerStyle: {
                backgroundColor: 'rgba(39,59,82,1)',

            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#ffffff",

                opacity: 0.8,
            },
     }}>
     <Stack.Screen name="SignUp" component={SignUp}  options={{ title: 'SignUp' }}/>
        <Stack.Screen name="signin" component={SignIn} options={{ title: 'SignIn' }} />
        <Stack.Screen name="audio_profile" component={Profile} options={{ title: 'Audio Profile' }} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }



/*
const Application = createStackNavigator({
            Home : { screen: SignIn },
            },{
                    navigationOptions:{
                header: false,
            }
 });
export default class App extends React.Component{
render()
{
  return (
  <NavigationContainer

  <Text>i bklnlnlam great</Text>
 //<Application />



    );
}
}

const styles=StyleSheet.create({
wrapper:{
flex:1,}
},
container:{
flex:1,
alignItems:'center',
},
header:{
fontSize:24,
},
textInput:{
alignSelf:'stretch',
},
btn:{

alignSelf:'stretch',},

}

);*/
