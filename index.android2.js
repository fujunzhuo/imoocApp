/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class imoocApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.item,styles.item1]}>
          <Text>老大开心么</Text>
        </Text>
        <View style={[styles.item,styles.item2]}>
          <Text>老二您不爽么</Text>
        </View>
       <View style={[styles.item,styles.item3]}>
          <Text>老三，老大老二欺负你么阿道夫欺负你么阿道夫欺负你么阿道夫欺负你么阿道夫欺负你么阿道夫</Text>
        </View>
        <Text style={[styles.item,styles.item1]}>
          <Text>老大开心么</Text>
        </Text>
        <View style={[styles.item,styles.item2]}>
          <Text>老二您不爽么</Text>
        </View>
       <View style={[styles.item,styles.item3]}>
          <Text>老三，老大老二欺负你么阿道夫欺负你么阿道夫欺负你么阿道夫欺负你么阿道夫欺负你么阿道夫</Text>
        </View>
        <Text style={[styles.item,styles.item1]}>
          <Text>老大开心么</Text>
        </Text>
        <View style={[styles.item,styles.item2]}>
          <Text>老二您不爽么</Text>
        </View>
       <View style={[styles.item,styles.item3]}>
          <Text>老三，老大老二欺负你么阿道夫欺负你么阿道夫欺负你么阿道夫欺负你么阿道夫欺负你么阿道夫</Text>
        </View>
        <Text style={[styles.item,styles.item1]}>
          <Text>老大开心么</Text>
        </Text>
        <View style={[styles.item,styles.item2]}>
          <Text>老二您不爽么</Text>
        </View>
       <View style={[styles.item,styles.item3]}>
          <Text>老三，老大老二欺负你么阿道夫欺负你么阿道夫欺负你么阿道夫欺负你么阿道夫欺负你么阿道夫</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ff6600',
    flexDirection:'row',
    flexWrap:'nowrap',
    paddingBottom:70,
    justifyContent:'space-between',
    alignItems:'center'
  },
  item:{},
  item1:{
    backgroundColor:'#ccc',
    flex:1
  },
  item2:{
    backgroundColor:'#999',
    flex:1
  },
  item3:{
    backgroundColor:'#666',
    flex:1
  },
});

AppRegistry.registerComponent('imoocApp', () => imoocApp);
