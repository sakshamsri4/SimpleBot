//import SignIn from './app/components/SignIn';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import React, { Component } from "react";
import {
  AppRegistry,
  Switch,
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';


const Stack = createStackNavigator();
export default class SignUp extends React.Component{
    constructor(props)
    {
    super(props);
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.state={
    email:'',
    password: '',
    confirm_password:'',
    correct:true,
    showPassword:true
    }
    }

    toggleSwitch() {
        this.setState({ showPassword: !this.state.showPassword });
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
    validate = (text) => {
    // console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
        //console.log("Email is Not Correct");
        this.setState({ email: text,correct:false})

    }
    else {
        this.setState({ email: text,correct:true})
        //  console.log("Email is Correct");
        }
    }




    Logout=()=>{
        if(this.state.password==this.state.confirm_password )
            {
                alert('Submit');
            }
        else
        {
            alert('Sign Up');
        }
    }


    ToSignIn=()=>{
        this.props.navigation.navigate('signin');
    }


    render()
        {
            const isCorrect =this.state.correct;
        return (
          //  <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
            <View style={styles.container}>
            <Text style={styles.header}>SignUp</Text>

            <TextInput
                        style={styles.textInput}placeholder='Email'
                        onChangeText={(text) => this.validate(text)}
                          value={this.state.email}
                          style={{alignSelf:'stretch',
                                  padding:16,
                                  marginBottom:20,
                                  backgroundColor: 'white',borderWidth: 1,borderColor: isCorrect?'green':'red'}}
                        //onchangeText={(email)=>this.setState({email})}
                        underlineColorAndroid='transparent'
            />


            <TextInput
                        style={styles.textInput}placeholder='Password'
                        onchangeText={(password)=>this.setState({password})}
                        secureTextEntry={this.state.showPassword}
                        underlineColorAndroid='transparent'
            />
            <TextInput
                        style={styles.textInput}placeholder='Confirm Password'
                        secureTextEntry={this.state.showPassword}
                        onchangeText={(confirm_password)=>this.setState({confirm_password})}
                        underlineColorAndroid='transparent'
            />
            <View >
                <Switch
                          onValueChange={this.toggleSwitch}
                          value={!this.state.showPassword}
                />
            <Text>Show Password</Text>

        </View>
            <TouchableOpacity
                disabled ={!this.state.correct}
                style={styles.btn}
                onPress={this.Logout}>
                <Text> SignUp </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{padding:20,
                       alignItems:'center'}}
                onPress={this.ToSignIn}>
                <Text> Already a User? </Text>
                </TouchableOpacity>

        </View>

      //  </KeyboardAvoidingView>
    );
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


