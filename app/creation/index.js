import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    ListView,
    TouchableHighlight,
    Dimensions,
    ActivityIndicator,
    RefreshControl
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
var Detail = require('./Detail')

var Mock = require('mockjs');
var request = require('../common/request');
var config = require('../common/config');

var width = Dimensions.get('window').width;




var cachedResults = {
    nextPage:1,
    items:[],
    total:0
}

class Item extends Component {
    constructor(props){
        super(props)
      var row = this.props.row;
        this.state = {
            up:row.voted,
            row:row
        }
    }

    _up() {
        var that = this;
        var up = !this.state.up;
        var row = this.state.row;
        var url = config.api.base + config.api.up
        var body = {
            id:row._id,
            up: up ?'yes':'no',
            accessToken :'abcee'
        }

        request.post(url,body)
          .then((data)=>{
            if(data && data.success){
              that.setState({
                    up:up
              })
            }
            else{
                alert('点赞失败，稍后重试1');
            }
          })
          .catch((e)=>{
                alert('点赞失败，稍后重试2');
          })
    }
    render(){
        var row = this.state.row;
        return(
          <TouchableHighlight onPress={this.props.onSelect}>
              <View style={styles.item}>
                  <Text style={styles.title}>{row.title}</Text>
                  <Image source={{uri:row.thumb}} style={styles.thumb}>
                      <View style={[styles.play,styles.playBtn]}>
                          <FontAwesome name="play" size={30} color="#ee735c"/>
                      </View>
                  </Image>
                  <View style={styles.itemFooter}>
                      <View style={styles.handleBox}><Text onPress={this._up.bind(this)} style={[styles.handleText,!this.state.up ? null : styles.down]}> {!this.state.up?'喜欢':'取消喜欢'}</Text></View>
                      <View style={styles.handleBox}><Text style={styles.handleText}>评论</Text></View>
                  </View>
              </View>
          </TouchableHighlight>
        )
    }
}
class List extends Component {
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 != r2});
        this.state = {
            dataSource:ds.cloneWithRows([]),
            isLoadingTail:false,
            isRefreshing:false,
        }
    }


    _renderRow(row){
        return(
          <Item
            row={row}
            key={row._id}
            onSelect={() => this._loadPage(row)}
          />
        );
    }

    componentDidMount(){
        this._fetchData(1)
    }

    _fetchData(page){

        var that = this;

        if(page !== 0){
            this.setState({
                isLoadingTail:true
            });
        }
        else {
            this.setState({
                isRefreshing:true
            });
        }

        request.get(config.api.base + config.api.creations,{
            accessToken:'abacadedsa',
            page:page
        }).then((data)=>{
                //console.log(data);
                //alert(JSON.stringify(data));
                if(data.success){
                    var items = cachedResults.items.slice();
                    if(page !== 0){
                        items = items.concat(data.data);
                        cachedResults.nextPage += 1;
                    }
                    else{
                        items = data.data.concat(items);
                    }
                    cachedResults.items = items;
                    cachedResults.total = data.total;
                    setTimeout(()=>{
                        if(page !== 0){
                            that.setState({
                                isLoadingTail:false,
                                dataSource:that.state.dataSource.cloneWithRows(cachedResults.items)
                            });
                        }
                        else{
                            that.setState({
                                isRefreshing:false,
                                dataSource:that.state.dataSource.cloneWithRows(cachedResults.items)
                            });
                        }
                    },2000);
                }


            })
            .catch((error)=>{
                if(page !== 0){
                    this.setState({
                        isLoadingTail:false
                    })
                }
                else{
                    this.setState({
                        isRefreshing:false
                    })
                }
                console.warn(error);
            })
    }

    _hasMore(){
        return cachedResults.items.length !== cachedResults.total
    }

    _fetchMoreData(){
        if(!this._hasMore() || this.state.isLoadingTail){
            return
        }

        var page = cachedResults.nextPage;
        this._fetchData(page);
    }
    _onRefresh(){
        if(!this._hasMore() || this.state.isRefreshing){
            return
        }
        this._fetchData(0);
    }
    _renderFooter(){
        if(!this._hasMore() && cachedResults.total !== 0){
            return(
                <View style={styles.loadingMore}>
                    <Text style={styles.loadingText}>没有更多了</Text>
                </View>
            );
        }

        if(!this.state.isLoadingTail){
            return (
                <View style={styles.loadingMore}>

                </View>
            );
        }

        return(
                <ActivityIndicator
                    animating={true}
                    style={[styles.centering]}
                    size={300}
                />
        );

    }

  _loadPage(){
    this.props.navigator.push({
      name:'detail',
      component:Detail
    });
  }

  render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>列表页面</Text>
                </View>
                <ListView
                    showsVerticalScrollIndicator={false}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                    onEndReached={this._fetchMoreData.bind(this)}
                    onEndReachedThreshold={20}
                    renderFooter={this._renderFooter.bind(this)}
                    enableEmptySections={true}
                    refreshControl={
                      <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._onRefresh.bind(this)}
                        titleColor="black"
                        colors={['#4285f4', '#f7f7f7', '#f7f7f7']}
                        progressBackgroundColor="#f7f7f7"
                      />
                    }
                />
            </View>
        );
    }
}
var styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F5FCFF'
    },
    header:{
         paddingTop:25,
         paddingBottom:12,
         backgroundColor:'#ee735c',
         justifyContent:'center',
         alignItems:'center',
    },
    headerTitle:{
        color:'#fff',
        fontSize:16,
        textAlign:'center',
        fontWeight:'600',
        alignItems:'center',
        justifyContent:'center'
    },
    item:{
        width:width,
        marginBottom:10,
        backgroundColor:'#fff'
    },
    thumb:{
        height:width*0.56,
        width:width,
        resizeMode:'cover'
    },
    play:{
        position:'absolute',
        bottom:14,
        right:14,
        width:46,
        height:46,
        paddingTop:0,
        paddingLeft:8,
        backgroundColor:'transparent',
        justifyContent:'center',
        alignItems:'center'
    },
    playBtn:{
      borderColor:'#fff',
      borderWidth:1,
      borderRadius:23,
    },
    title:{
        padding:10,
        fontSize:18,
        color:'#333'
    },
    itemFooter:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#eee'
    },
    handleBox:{
        padding:10,
        flexDirection:'row',
        width:width / 2- 0.5,
        justifyContent:'center',
        backgroundColor:'#fff'
    },
    handleText:{
        paddingLeft:12,
        fontSize:18,
        color:'#333',
    },
    up:{},
    commentIcon:{
        fontSize:22,
        color:'#333'
    },
    loadingMore:{
        marginVertical:20
    },
    loadingText:{
        //color:'#777',
        color:'blue',
        textAlign:'center'
    },

    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    gray: {
        backgroundColor: '#cccccc',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 8,
    },
    down:{
        color:'red',
        fontWeight:'bold'
    },

    ler:{
      flex:1,
      paddingTop:70,
      paddingBottom:70,
      flexWrap:'nowrap',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'flex-end',
      backgroundColor:'#ff6600',
    }

})
module.exports = List;