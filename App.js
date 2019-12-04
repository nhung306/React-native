import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Student from './component/Student';


export default class HelloWordApp extends Component {
  hooray() {
    alert('Việt Nam vô địch !!!');
  }
  render() {
    return (
      
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Student name="Nguyen Van A" tuoi={20}></Student>
        <Student name="Nguyen Van Troi" tuoi={22}></Student>
      </View>


      // <View style={styles.container}>
      //   <Text>Việt Nam chiến thắng!</Text>
      //   <Image
      //     style={{ width: 100, height: 100 }}
      //     source={require('./component/images/vietnam-flag.png')}
      //   />
      //   <TouchableOpacity onPress={() => {
      //     this.hooray();
      //   }}>
      //     <Text style={styles.hoorayButton}>Hô Khẩu Hiệu Nào</Text>
      //   </TouchableOpacity>
      //   </View>
 
    );
  }
}
