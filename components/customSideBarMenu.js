import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import {DrawerItems} from "react-navigation-drawer"
import firebase from "firebase"
//import { TouchableOpacity } from 'react-native-gesture-handler';

export default class CustomSideBarMenu extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <Text>Menu</Text>
                <View style={styles.draw}>
                <DrawerItems {...this.props}></DrawerItems>
            </View>
            <TouchableOpacity>
                <Text>Log Out</Text>
            </TouchableOpacity>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container : {
      flex:1
    },
    drawerItemsContainer:{
      flex:0.8
    },
    logOutContainer : {
      flex:0.2,
      justifyContent:'flex-end',
      paddingBottom:30
    },
    logOutButton : {
      height:30,
      width:'100%',
      justifyContent:'center',
      padding:10
    },
    logOutText:{
      fontSize: 30,
      fontWeight:'bold'
    }
  })