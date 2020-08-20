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

export default class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.toggleSwitch = this.toggleSwitch.bind(this);
        this.state={
        email:'',
        password:'',
        passw:'',
        correct:true,
        showPassword:true
        }

    }

    toggleSwitch() {
        this.setState({ showPassword: !this.state.showPassword });
    }

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

    MoveSignup=()=>{
        this.props.navigation.navigate('SignUp');
    }
    handlePassword = (text)=> {
         this.setState({password:text})
    }
    HomeScreen=()=>{
       // const {password}  = this.state.passw;
        //console.log(password);
        console.log(this.state.email);
        console.log(this.state.passw);
      // TODO:  if(correct is true and email is not null and pass is not null and email is sakshamsri4@gmail.com and pass is "12345")
       if(this.state.correct==true &&this.state.email!=null&&this.state.passw!=null&&this.state.email=='sakshamsri4@gmail.com'
            && this.state.passw=="12345")
       {
        this.props.navigation.navigate('audio_profile');
      }  else
      {
      console.log(this.state.passw);
      alert("Invalid Credentials!!!");
      //alert('Enter a valid Email and Username');
      }

      //TODO:  alert(Please enter valid email)

    }

    render()
    {
        const isCorrect =this.state.correct;
        const showPassword = this.state.showPassword;
        return (
            //<KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
            <View style={styles.container}>
                <Text style={styles.header}>SignIn</Text>
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

                <TextInput secureTextEntry={showPassword} style={styles.textInput}
                 onChangeText={passw => this.setState({passw})}/>

                <View style={{alignSelf:'flex-end',alignItems:'center', marginBottom:30, flexDirection:'row'}}>
                                    <Text style={{marginRight:10}}>Show Password</Text>
                                    <Switch
                                        onValueChange={this.toggleSwitch}
                                        value={!this.state.showPassword}
                                    />
                                </View>
                <TouchableOpacity
                    disabled ={!this.state.correct}
                    style={styles.btn}
                    onPress={this.HomeScreen}>
                    <Text> SignIn </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{padding:20,
                       alignItems:'center'}}
                    onPress={this.MoveSignup}>
                    <Text>Not a member? SignUp Now </Text>
                </TouchableOpacity>
            </View>
         //   </KeyboardAvoidingView>
        );
    }
}


const styles=StyleSheet.create({

    wrapper:{flex:1,},

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
});
