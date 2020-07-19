import React, { Component } from 'react';
import {  Button, Input, Layout } from '@ui-kitten/components';
import { StyleSheet,View,Alert } from 'react-native';

class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
        }
    }

    incorrectLogin = () =>
    Alert.alert(
      "Incorrect Credentials",
      "Your username or password doesn't seem to match",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

    correctLogin = () => {
        if(this.state.username==='admin' && this.state.password==='password'){
            this.props.navigation.navigate('Home');
        }
        else{
            this.incorrectLogin();
        }
    }

    render() {
        return(
            <Layout style={styles.container}>
                <View style={styles.inputView}>
                    <Input placeholder="username" placeholderTextColor="#465881" onChangeText={text => {this.setState({username:text})}} />
                </View>
                <View style={styles.inputView}>
                    <Input placeholder="password" placeholderTextColor="#465881" secureTextEntry={true} onChangeText={text => {this.setState({password:text})}} />
                </View>
                <Button style={styles.loginbtn} onPress={this.correctLogin}>LOGIN</Button>
            </Layout>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#003f5c',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputView:{
        width:"80%",
        marginBottom:20,
        backgroundColor: '#003f5c',
        justifyContent:"center",
      },
      inputText:{
        height:50,
        color:"white"
      },
      loginBtn:{
        width:"80%",
        backgroundColor:"#000000",
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10,
      },
  });
  
export default login