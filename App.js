import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image } from 'react-native';
import {Header} from 'react-native-elements'
import db from './localdb'

//console.log(db["the"].chunks)

export default class App extends React.Component{
  constructor(){
    super();
    this.state={text:'', chunks: []}
  }
 
  render(){
  return (
    <SafeAreaProvider>
      <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
    <View style={styles.container}>
      
      <Image  style={{width:200,height:200,margin:50}} source={require("./assets/phonetics.jpg")}/>

      <TextInput style={{padding:7,borderWidth:2,color:'white'}}
      placeholder='Enter Text'
      onChangeText={text => {this.setState({text:text})}}
      value={this.state.text}
      />

      <View>
        <TouchableOpacity style={{margin:20,borderRadius:10,padding:7,backgroundColor:'dodgerblue'}} 
          onPress={() => {
            this.setState({ chunks: db[this.state.text].chunks });
          }}>
          <Text>GO</Text>
        </TouchableOpacity>
      </View>

      {this.state.chunks.map(item=>{
        return(
          <TouchableOpacity style={{margin:20,borderRadius:10,padding:7,backgroundColor:'dodgerblue'}} 
          onPress={{}}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )  
      })}
       
    </View>
    </SafeAreaProvider>
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    
    color:"white"
  },
});
