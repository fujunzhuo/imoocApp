import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    ListView,
    TouchableHighlight
} from 'react-native';

class Icon extends Component {
    render(){
        return(
            <View>
                <Image source={require('../../img/tab/tab_discovery_n.png')} style={{width:30,height:30}} />
            </View>
        );
    }
}
class List extends Component {
    constructor(props){
        super(props);

        var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 != r2});
        this.state = {
            dataSource:ds.cloneWithRows([
                {"_id":"52000020090521327X","thumb":"http://dummyimage.com/1200x600/04d6a5)","video":"http://maker.siat.ac.cn/images/150129.mp4"},
                {"_id":"650000197305123427","thumb":"http://dummyimage.com/1200x600/955e88)","video":"http://maker.siat.ac.cn/images/150129.mp4"}
            ])
        }
    }

    renderRow(row){
        return(
            <TouchableHighlight>
                <View style={styles.item}>
                    <Text style={styles.title}>{row._id}</Text>
                    <Image source={{uri:row.thumb}} style={styles.thumb}>
                        <Icon />
                    </Image>

                </View>
            </TouchableHighlight>
        );
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

    }
})
module.exports = List;