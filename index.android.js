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
  Image
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
            tabBarStyle={[styles.tabBarStyle,styles.border]}
            tabBarShadowStyle={[styles.tabBarShadowStyle,styles.border]}
            hidesTabTouch={false} >
          <TabNavigator.Item
              selected={this.state.selectedTab === 'home'}
              allowFontScaling={false}
              title="Home"
              tabStyle={styles.tabStyle}
              titleStyle={styles.titleStyle}
              selectedTitleStyle={styles.selectedTitleStyle}
              renderBadge={()=>{ return(<View></View>)}}
              renderIcon={() => <Image source={require('./img/tab/tab_contact_n.png')} />}
              renderSelectedIcon={() => <Image source={require('./img/tab/tab_contact_p.png')} />}
              badgeText="1"
              onPress={() => this.setState({ selectedTab: 'home' })}>
              <Text>homeView</Text>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'profile'}
              title="Profile"
              renderIcon={() => <Image source={require('./img/tab/tab_discovery_n.png')} />}
              renderSelectedIcon={() => <Image source={require('./img/tab/tab_discovery_p.png')} />}
              onPress={() => this.setState({ selectedTab: 'profile' })}>
              <Text>profileView</Text>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'profile1'}
              title="Profile"
              renderIcon={() => <Image source={require('./img/tab/tab_messagecenter_n.png')} />}
              renderSelectedIcon={() => <Image source={require('./img/tab/tab_messagecenter_p.png')} />}
              onPress={() => this.setState({ selectedTab: 'profile1' })}>
              <Text>1231234</Text>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'profile2'}
              title="Profile"
              renderIcon={() => <Image source={require('./img/tab/tab_myself_n.png')} />}
              renderSelectedIcon={() => <Image source={require('./img/tab/tab_myself_p.png')} />}
              onPress={() => this.setState({ selectedTab: 'profile2' })}>
              <Text>sadgasfsad</Text>
          </TabNavigator.Item>
        </TabNavigator>
    );
  }
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

    },
    tabBarShadowStyle:{

    },
    tabStyle:{

    },
    titleStyle:{

    },
    selectedTitleStyle:{

    },
});

AppRegistry.registerComponent('imoocApp', () => imoocApp);
