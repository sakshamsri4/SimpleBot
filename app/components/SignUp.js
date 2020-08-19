
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
export default class SignUp extends React.Component{
constructor(props)
{
super(props);
this.state={
email:'',
password: '',
confirm_password:'',
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
this.props.navigation.navigate('Profile');
}
}*/

render()
{
  return (
        <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
        <View style={styles.container}>
        <Text style={styles.header}>SignUp</Text>


        <TextInput
                        style={styles.textInput}placeholder='Email'
                        onchangeText={(email)=>this.setState({email})}
                        underlineColorAndroid='transparent'
                />
            

        <TextInput
                style={styles.textInput}placeholder='Password'
                onchangeText={(password)=>this.setState({password})}
                underlineColorAndroid='transparent'
        />
                <TextInput
                        style={styles.textInput}placeholder='Confirm Password'
                        onchangeText={(confirm_password)=>this.setState({confirm_password})}
                        underlineColorAndroid='transparent'
                />
        <TouchableOpacity
        style={styles.btn}
        onPress={this.Logout}>
        <Text> SignUp </Text>
        </TouchableOpacity>



        </View>

        </KeyboardAvoidingView>
    );
}
Logout=()=>{
alert('Sign Up');
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


