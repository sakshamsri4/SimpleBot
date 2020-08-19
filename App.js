//import { createStackNavigator, createAppContainer } from 'react-navigation';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
/*import { StackNavigator } from 'react-navigation-stack';
import SignUp from './app/components/SignUp';

const Application = createStackNavigator({
            Home : { screen: SignIn },
            },{
                    navigationOptions:{
                header: false,
            }
 });*/
export default class App extends React.Component{
render()
{
  return (

  //<Text>i bklnlnlam great</Text>
 //<Application />
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

);
