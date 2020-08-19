
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
export default class SignIn extends React.Component{
constructor(props)
{
super(props);
this.state={
username:'',
password: '',
}
}
/*
componentDidMount()
{
this._loadInitialState().done();
}

_loadInitialState=async()=>{
var value=null;
if(value!==null)
{
//this.props.navigation.navigate('Profile');
}
}
*/
render()
{
  return (
        <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
        <View style={styles.container}>
        <Text style={styles.header}>SignIn</Text>


        <TextInput
                        style={styles.textInput}placeholder='Username'
                        onchangeText={(username)=>this.setState({username})}
                        underlineColorAndroid='transparent'
                />
        <TextInput
                style={styles.textInput}placeholder='Password'
                onchangeText={(password)=>this.setState({password})}
                underlineColorAndroid='transparent'
        />

        <TouchableOpacity
        style={styles.btn}
        onPress={this.LogIn}>
        <Text> SignIn </Text>
        </TouchableOpacity>



        </View>

        </KeyboardAvoidingView>
    );
}
LogIn=()=>{
alert('Sign In');
}
}
const styles=StyleSheet.create({

wrapper:{
flex:1,},



container:{
flex:1,
alignItems:'center',
justifyContent:'center',
backgroundColor:'#2896d3',
paddingLeft:40,
paddingRight:40,
},


header:{
fontSize:24,
marginBottom:60,
color:'#fff',
fontWeight:'bold',
},



textInput:{
alignSelf:'stretch',
padding:16,
marginBottom:20,
backgroundColor:'#fff',
},


btn:{

alignSelf:'stretch',
backgroundColor:'#01c853',
padding:20,
alignItems:'center',
},
}
);


