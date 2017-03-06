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
} from 'react-native';
var Mock = require('mockjs');
var request = require('../common/request');
var config = require('../common/config');

var width = Dimensions.get('window').width;
class Icon extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={this.props.style}>
                <Image source={require('../../img/tab/tab_discovery_p.png')} style={{width:30,height:30}} />
            </View>
        );
    }
}
class List extends Component {
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 != r2});
        this.state = {
            dataSource:ds.cloneWithRows([])
        }
    }



    renderRow(row){
        return(
            <TouchableHighlight>
                <View style={styles.item}>
                    <Text style={styles.title}>{row.title}</Text>
                    <Image source={{uri:row.thumb}} style={styles.thumb}>
                        <Icon style={styles.play} />
                    </Image>
                    <View style={styles.itemFooter}>
                        <View style={styles.handleBox}><Text style={styles.handleText}>喜欢</Text></View>
                        <View style={styles.handleBox}><Text style={styles.handleText}>评论</Text></View>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }


    componentDidMount(){
        this._fetchData()
    }

    _fetchData(){
        request.get(config.api.base + config.api.creations,{accessToken:'abacadedsa'})
            .then((data)=>{
                //console.log(data);
                //alert(JSON.stringify(data));
                //console.log(response);
                //if(data.success){
                    this.setState({
                        dataSource:this.state.dataSource.cloneWithRows(data.data)
                    });
                //}


            })
            .catch((error)=>{
                console.warn(error);
            })
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>列表页面</Text>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                    enableEmptySections={true} />
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
        paddingTop:9,
        paddingLeft:18,
        backgroundColor:'transparent',
        borderColor:'#fff',
        borderWidth:1,
        borderRadius:23,
        //color:'#ed7b66',
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
    }
})
module.exports = List;