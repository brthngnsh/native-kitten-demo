import React, { Component } from 'react';
import {  Button, Icon, Layout, Avatar, Text } from '@ui-kitten/components';
import { StyleSheet,View,ScrollView } from 'react-native';

class profile extends Component {
    state={
        name:'name',
        address:'address',
        Country:'India',
        State:'Tamil Nadu',
        phoneno:'+1 9012356723',
        email:'JohnNameDoe@gmail.com',
        wallet:[],
    }
    render() {
        return(
            <Layout style={styles.container}>
                <Layout >
                    <Avatar  style={styles.avatar}size='giant' source={require('../assets/avatar.png')}/>
                </Layout>
                <Layout style={styles.head} ></Layout>
                <Layout style={styles.inputText}>
                    <Text style={styles.textName}>{this.state.name.toLocaleUpperCase()}</Text>
                </Layout>
                <Layout style={styles.address}>
                    <Icon style={styles.icon} fill='#FFFFFF' name='compass'/>
                    <Layout style={{backgroundColor:'#42b0f5'}}>
                        <Text>{this.state.State.toLocaleUpperCase()},</Text>
                        <Text style>{this.state.Country.toLocaleUpperCase()}.</Text>
                    </Layout>
                </Layout>
                <Layout style={styles.registry}>
                <Icon style={styles.phoneicon} fill='#fbca03' name='phone'/>
                <Layout style={{backgroundColor:'#42b0f5'}}>
                    <Text style={styles.phoneno}>{this.state.phoneno}</Text>
                </Layout>
                </Layout>
                <Layout style={styles.registry}>
                <Icon style={styles.mailicon} fill='#fbca03' name='email'/>
                <Layout style={{backgroundColor:'#42b0f5'}}>
                    <Text style={styles.mail}>{this.state.email}</Text>
                </Layout>
                </Layout>
            </Layout>

        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#42b0f5',
      alignItems: 'center',
    },
    address:{
        flex:1,
        flexDirection: 'row',
        backgroundColor: '#42b0f5',
        height:150,
        marginTop:-30,
    },
    registry:{
        flex:1,
        flexDirection: 'row',
        backgroundColor: '#42b0f5',
        marginTop:-220,
        marginRight:-50,
        
    },
    phoneno:{
        fontSize:20,
        alignSelf:'center'
    },
    mail:{
        fontSize:20,
        alignSelf:'center'
    },
    head:{
        backgroundColor: '#42b0f5',
        height:210,
    },

    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:2,
        marginTop:80,
        alignSelf:'center',
        position: 'absolute',
      },
      inputText:{
        height:60,
        color:"white",
        backgroundColor: 'transparent',
      },
      icon: {
        width: 32,
        height: 32,
        marginLeft: -40,
        fontSize: 12
      },
      phoneicon: {
        width: 32,
        height: 32,
        marginLeft: -115,
      },
      mailicon: {
        width: 32,
        height: 32,
        marginLeft: -65,
      },
  });
  
export default profile