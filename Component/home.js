import React, { Component } from 'react';
import { StyleSheet,View,Text } from 'react-native';
import { Layout } from '@ui-kitten/components';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';


let customFonts = {
    'stencil': require('../assets/fonts/StardosStencil-Bold.ttf'),
  };
class home extends Component {

    state = {
        fontsLoaded: false,
      };
    
    async _loadFontsAsync() {
      await Font.loadAsync(customFonts);
      this.setState({ fontsLoaded: true });
    }
    


    componentDidMount() {
      this._loadFontsAsync();
    }

    render(){
        if (this.state.fontsLoaded){
        return(
            <Layout style={styles.container}>
                <View>
                    <Text style={styles.homeTxt}>Welcome to Home Screen</Text>
                </View>
            </Layout>
        )}
        else {
            return <AppLoading />;
          }
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    homeTxt: {
        fontFamily: 'stencil',
        fontStyle:'italic',
        margin:4,
        justifyContent: 'center',
        color:'#ffffff'
    }
})

export default home;