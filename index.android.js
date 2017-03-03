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
  View,
  Image,
    ScrollView,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
/*

 TabNavigator props
 prop	default	type	description

 sceneStyle	inherited	object (style)	define for rendered scene
 tabBarStyle	inherited	object (style)	define style for TabBar
 tabBarShadowStyle	inherited	object (style)	define shadow style for tabBar
 hidesTabTouch	false	boolean	disable onPress opacity for Tab


 TabNavigator.Item props
 prop	default	type	description

 renderIcon	none	function	returns Item icon
 renderSelectedIcon	none	function	returns selected Item icon
 badgeText	none	string or number	text for Item badge   提示的角标数字
 renderBadge	none	function	returns Item badge
 title	none	string	Item title   标题
 titleStyle	inherited	style	styling for Item title
 selectedTitleStyle	none	style	styling for selected Item title
 tabStyle	inherited	style	styling for tab
 selected	none	boolean	return whether the item is selected  当前选项卡是否被选中
 onPress	none	function	onPress method for Item
 allowFontScaling	false	boolean	allow font scaling for title

 */



export default class imoocApp extends Component {
  constructor(props){
      super(props);
      this.state = {
          selectedTab:'home'
      }

  }

  render() {
    return (
        <TabNavigator
            sceneStyle={[styles.sceneStyle]}
            tabBarStyle={[styles.tabBarStyle]}
            tabBarShadowStyle={[styles.tabBarShadowStyle]}
            hidesTabTouch={false} >
          <TabNavigator.Item
              selected={this.state.selectedTab === 'home'}
              allowFontScaling={false}
              title="首页"
              tabStyle={[styles.tabStyle]}
              titleStyle={styles.titleStyle}
              selectedTitleStyle={styles.selectedTitleStyle}
              renderBadge={()=>{ return(<View></View>)}}
              renderIcon={() => <Image source={require('./img/tab/tab_messagecenter_n.png')} style={styles.icon} />}
              renderSelectedIcon={() => <Image source={require('./img/tab/tab_messagecenter_p.png')} style={styles.icon} />}
              badgeText="1"
              onPress={() => this.setState({ selectedTab: 'home' })}>
              <ScrollView style={{height:1700}}>
                  <Image source={require('./img/demo/me.png')} />
                  <Image source={require('./img/demo/newsImg1.png')} />
                  <Image source={require('./img/demo/newsImg2.png')} />
                  <Image source={require('./img/demo/slideshow1.jpg')} />
                  <Image source={require('./img/demo/slideshow2.jpg')} />
                  <Image source={require('./img/demo/slideshow3.jpg')} />
                  <Image source={require('./img/demo/slideshow4.jpg')} />
                  <Image source={require('./img/demo/slideshow5.jpg')} />
              </ScrollView>
          </TabNavigator.Item>
          <TabNavigator.Item
              tabStyle={[styles.tabStyle]}
              titleStyle={styles.titleStyle}
              selectedTitleStyle={styles.selectedTitleStyle}
              selected={this.state.selectedTab === 'profile'}
              title="推荐"
              renderIcon={() => <Image source={require('./img/tab/tab_contact_n.png')} style={styles.icon} />}
              renderSelectedIcon={() => <Image source={require('./img/tab/tab_contact_p.png')} style={styles.icon} />}
              onPress={() => this.setState({ selectedTab: 'profile' })}>
              <View>
                  <Image source={require('./img/demo/me.png')} />
                  <Text>profileView</Text>
              </View>

          </TabNavigator.Item>
          <TabNavigator.Item
              tabStyle={[styles.tabStyle]}
              titleStyle={styles.titleStyle}
              selectedTitleStyle={styles.selectedTitleStyle}
              selected={this.state.selectedTab === 'profile1'}
              title="发现"
              renderIcon={() => <Image source={require('./img/tab/tab_discovery_n.png')} style={styles.icon} />}
              renderSelectedIcon={() => <Image source={require('./img/tab/tab_discovery_p.png')} style={styles.icon} />}
              onPress={() => this.setState({ selectedTab: 'profile1' })}>
              <View>
                  <Image source={require('./img/demo/newsImg1.png')} />
                  <Text>1231234</Text>
              </View>
          </TabNavigator.Item>
          <TabNavigator.Item
              tabStyle={[styles.tabStyle]}
              titleStyle={styles.titleStyle}
              selectedTitleStyle={styles.selectedTitleStyle}
              selected={this.state.selectedTab === 'profile2'}
              title="我的"
              renderIcon={() => <Image source={require('./img/tab/tab_myself_n.png')} style={styles.icon} />}
              renderSelectedIcon={() => <Image source={require('./img/tab/tab_myself_p.png')} style={styles.icon} />}
              onPress={() => this.setState({ selectedTab: 'profile2' })}>
              <View>
                  <Image source={require('./img/demo/newsImg2.png')} />
                  <Text>sadgasfsad</Text>
              </View>
          </TabNavigator.Item>
        </TabNavigator>
    );
  }
}
var tabIcon = {
    height:55,
    widht:55,
}
const styles = StyleSheet.create({
    sceneStyle:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    border:{
        borderWidth:1,
        borderColor:'red',
        borderStyle:'dashed'
    },
    tabBarStyle:{
        height:tabIcon.height,
    },
    icon:{
        width:30,
        height:30
    },
    tabBarShadowStyle:{
    },
    tabStyle:{
        height:tabIcon.height,
        width:tabIcon.width,
    },
    titleStyle:{

    },
    selectedTitleStyle:{

    },
});

AppRegistry.registerComponent('imoocApp', () => imoocApp);
