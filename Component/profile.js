import React, { Component } from 'react';
import {  Button, Icon, Layout, Avatar, Text } from '@ui-kitten/components';
import { StyleSheet,View,ScrollView,Dimensions } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);

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
                {/*<View style={styles.registry}>
                <Icon style={styles.phoneicon} fill='#fbca03' name='phone'/>
                <Layout style={{backgroundColor:'#ffffff'}}>
                    <Text style={styles.phoneno}>{this.state.phoneno}</Text>
                </Layout>
                </View>
                <View style={styles.registry}>
                <Icon style={styles.mailicon} fill='#fbca03' name='email'/>
                <View style={{backgroundColor:'#ffffff'}}>
                    <Text style={styles.mail}>{this.state.email}</Text>
                </View>
                </View>*/}
                <Layout style={styles.body}>
                    <Layout style={styles.phone}>
                        <Icon style={styles.phoneicon} fill='#006666' name='phone'/>
                        <Layout style={{backgroundColor:'#ffffff'}}>
                            <Text style={styles.phoneno}>{this.state.phoneno}</Text>
                        </Layout>
                    </Layout>
                    <Layout style={styles.mail}>
                        <Icon style={styles.mailicon} fill='#006666' name='email'/>
                        <Layout style={{backgroundColor:'#ffffff'}}>
                            <Text style={styles.maild}>{this.state.email}</Text>
                        </Layout>
                    </Layout>
                    <Layout style={styles.deat}>
                        <Icon style={styles.addricon} fill='#006666' name='home'/>
                        <Layout style={{backgroundColor:'#ffffff'}}>
                            <Text style={styles.addr}>{this.state.address}</Text>
                        </Layout>
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
        backgroundColor: '#ffffff',
        marginTop:-220,
        marginRight:-50,
        
    },
    phoneno:{
        fontSize:20,
        alignSelf:'center',
        color:'grey',
        marginHorizontal:30
    },
    phone:{
        backgroundColor:'#ffffff',
        flex:1,
        flexDirection:'row',
        marginVertical:50,
        marginHorizontal:20,
        marginBottom:20
    },
    mail : {
        flex:1,
        backgroundColor:'#ffffff',
        flexDirection:'row',
        marginHorizontal:20,
        marginVertical:20,
        marginBottom:20
    },
    deat : {
        flex:1,
        backgroundColor:'#ffffff',
        flexDirection:'row',
        marginHorizontal:20,
        marginVertical:20,
        marginBottom:50
    },
    maild:{
        fontSize:20,
        alignSelf:'center',
        color:'grey',
        marginHorizontal:30
    },
    addr:{
        fontSize:20,
        alignSelf:'center',
        color:'grey',
        marginHorizontal:30
    },
    head:{
        backgroundColor: '#ffffff',
        height:210,
    },
    body:{
        backgroundColor:'#ffffff',
        alignSelf:'center',
        height:330,
        width:screenWidth
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
      },
    mailicon: {
        width: 32,
        height: 32,
      },
    addricon: {
        width: 32,
        height: 32,
      },
  });
  
export default profile