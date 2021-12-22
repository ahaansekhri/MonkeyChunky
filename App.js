import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import { Header } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import database from "./config"
import phonicSoundButton from "./phonicSoundButton.js"


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      chunks: [],
      phones: [],
    };
  }
  render() {
    return (
      <SafeAreaProvider>
        <View >
          <Header
            leftComponent={{ icon: "menu", color: "white" }}
            centerComponent={{
              text: "Monkey Chunky",
              style: { color: "white" },
            }}
            rightComponent={{ icon: "home", color: "white" }}
          />

          <Image source = {{uri : "https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png"}} style = {styles.image}/>
          
          <TextInput
            style={styles.input}
            placeholder="type word here"
            onChangeText={(text) => {
              this.setState({ text: text }); 
            }}
          />

          <Text>{this.state.text}</Text>

          <TouchableOpacity style={styles.button} onPress={()=>{
            console.log("pressed")
            this.setState({chunks:database[this.state.text].chunks, phones:database[this.state.text].phones})
          }}> 
            <Text style={styles.text}>
              Go 
            </Text>
          </TouchableOpacity>



          <View>{
            this.state.chunks.map((item,index)=>{
              return(<phonicSoundButton wordChunk = {this.state.chunks[index]} soundChunk = {this.state.phones[index]}/>)
            })
            }</View>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    borderWidth: 2,
    width: 200,
  },

  image:{
    width:50,
    height:50,
  },

  button:{
    width:50,
    height:30,
    padding: 10,
    margin: 10,
    backgroundColor:"blue",
    borderRadius:10,

  },

  chunkButton:{
    width:50,
    height:30,
    padding: 10,
    margin: 10,
    backgroundColor:"pink",
    borderRadius:10,

  },

  text:{
    textAlign: "center",
    color: "white",
  }
});
