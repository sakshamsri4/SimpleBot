
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
export default class SignUp extends React.Component{
constructor(props)
{
super(props);
this.state={
username: '',
email:'',
password: '',
confirm_password:'',
}
}

componentDidMount()
{
this._loadInitialState().done();
}
_loadInitialState=async()=>{

var value=await AsyncStorage.getItem('user');
if(value!==null)
{
this.props.navigation.navigate('Profile');
}
}

render()
{
  return (
        <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
        <View style={styles.container}>
        <Text style={styles.header}>LOG-IN</Text>

        <TextInput
        style={styles.textInput}placeholder='Username'
        onchangeText={(username)=>this.setState({username})}
        underlineColorAndroid='transparent'
        />
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
        /*<TouchableOpacity
        style={styles.btn}
        //onPress={this.Logout}
      //  <Text>SignIn</Text>
        </TouchableOpacity>
*/


        </View>

        </KeyboardAvoidingView>
    );
}
Logout=()=>{
alert('test');
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

);


