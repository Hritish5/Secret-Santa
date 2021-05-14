import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, Modal, KeyboardAvoidingView, ScrollView} from 'react-native';
import firebase from "firebase"
import db from "../config" 

export default class WelcomeScreen extends React.Component{
  constructor(){
    super()
    this.state={
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        address: "",
        contact: "",
        confirmPassword: "",
        isModalVisible: false
    }
}
    loginInfo(name1, secretCode){
        firebase.auth().signInWithEmailAndPassword(name1, secretCode)
        .then(()=>{ 
            this.props.navigation.navigate("DonateBooks")}) 
            .catch((error)=> {
                 var errorCode = error.code; 
                 var errorMessage = error.message; 
                 return alert(errorMessage) })
    }

    signUpInfo(name1, secretCode){
      firebase.auth().createUserWithEmailAndPassword(name1, secretCode)
      .then(()=>{ 
          return alert("User Added Succesfully") }) 
          .catch((error)=> {
               var errorCode = error.code; 
               var errorMessage = error.message; 
               return alert(errorMessage) })
  }

  registerInfo = (emailId, password,confirmPassword) =>{
    if(password !== confirmPassword){
        return alert("password doesn't match\nCheck your password.")
    }else{
      firebase.auth().createUserWithEmailAndPassword(emailId, password)
      .then(()=>{
        db.collection('users').add({
          first_name:this.state.firstName,
          last_name:this.state.lastName,
          contact:this.state.contact,
          email_id:this.state.email,
          address:this.state.address
        })
        return  alert(
             'User Added Successfully',
             '',
             [
               {text: 'OK', onPress: () => this.setState({"isModalVisible" : false})},
             ]
         );
      })
      .catch((error)=> {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        return alert(errorMessage)
      });
    }
  }

  
    

    showModel=()=>{
      return(
        <Modal 
        animationType="fade"
         transparent={true} 
         visible={this.state.isModalVisible}>
           <View
           style={styles.modalContainer}>
             <ScrollView style={{width:'100%'}}> 
             {/* <KeyboardAvoidingView style={styles.KeyboardAvoidingView}> */}
              <Text style={styles.modalTitle}>
                Registration
              </Text>
              <TextInput
            style={styles.formTextInput}
            placeholder="Username"
            onChangeText={(abc)=>{
                this.setState({
                    firstName: abc
                })
            }}>
            </TextInput>
            <TextInput
            style={styles.formTextInput}
            placeholder="Write your email address"
            keyboardType="email-address"
            onChangeText={(storage)=>{
                this.setState({
                    email: storage
                })
            }}>
              </TextInput>
              <TextInput
            style={styles.formTextInput}
            placeholder="Write your Password"
            secureTextEntry={true}
            onChangeText={(storage)=>{
                this.setState({
                    password: storage
                })
            }}>
            </TextInput>
            <TextInput
            style={styles.formTextInput}
            placeholder="Confrim Your Password"
            secureTextEntry={true}
            onChangeText={(storage)=>{
                this.setState({
                    confirmPassword: storage
                })
            }}>
            </TextInput>
            <TouchableOpacity style={styles.registerButton}
            onPress={()=>{this.registerInfo(this.state.email, this.state.password, this.state.confirmPassword)}}>
              
                <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>

             {/* </KeyboardAvoidingView> */}
             <TouchableOpacity style={styles.registerButton} 
             onPress={()=>this.setState({"isModalVisible":false})}>
               <Text style={styles.registerButtonText}>Cancel</Text>
             </TouchableOpacity>
             </ScrollView>
           </View>
           
        </Modal>
      )
    }

    render(){
        return(
          <View style={styles.container}>
          {
            this.showModel()
          }
            <View style={styles.container}>
              <View style={styles.buttonContainer}>
            <TextInput
            style={styles.loginBox}
            placeholder="Write your email address"
            keyboardType="email-address"
            onChangeText={(storage)=>{
                this.setState({
                    email: storage
                })
            }}>
            </TextInput>
            <TextInput
            style={styles.loginBox}
            placeholder="Write your Password"
            secureTextEntry={true}
            onChangeText={(storage)=>{
                this.setState({
                    password: storage
                })
            }}>
            </TextInput>
            <TouchableOpacity style={[styles.button,{marginBottom:20, marginTop:20}]}
            onPress={()=>{this.loginInfo(this.state.email,this.state.password)}}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
            onPress={()=>{this.signUpInfo(this.state.email, this.state.password)}}>
              
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            </View>
            </View>
            </View>
        )
        
    }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F8BE85'
  },
  profileContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  title :{
    fontSize:65,
    fontWeight:'300',
    paddingBottom:30,
    color : '#ff3d00'
  },
  loginBox:{
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor : '#ff8a65',
    fontSize: 20,
    margin:10,
    paddingLeft:10
  },
  button:{
    width:300,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"#ff9800",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.30,
    shadowRadius: 10.32,
    elevation: 16,
  },
  formTextInput:{
     width:"75%", 
     height:35, 
     alignSelf:'center',
      borderColor:'#ffab91',
       borderRadius:10, borderWidth:1, 
       marginTop:20, 
       padding:10 },
  buttonText:{
    color:'#ffff',
    fontWeight:'200',
    fontSize:20
  },
  buttonContainer:{
    flex:1,
    alignItems:'center'
  },
  modalContainer:{
     flex:1, 
    borderRadius:20,
    justifyContent:'center', 
    alignItems:'center',
    backgroundColor:"#ffff", marginRight:30,
    marginLeft : 30,
    marginTop:80,
    marginBottom:80, },
    modalTitle :{ 
    justifyContent:'center',
    alignSelf:'center', 
    fontSize:30, 
    color:'#ff5722',
     margin:50 },
       registerButtonText:{
          color:'#ff5722', 
          fontSize:15, 
          fontWeight:'bold'},
          registerButton:{ 
            width:200,
             height:40, 
             alignItems:'center',
              justifyContent:'center',
               borderWidth:1, 
               borderRadius:10, 
               marginTop:30 },
               registerButton:{ 
                 width:200,
                  height:40, 
                  alignItems:'center',
                   justifyContent:'center',
                    borderWidth:1, 
                    borderRadius:10, 
                    marginTop:30 }
})