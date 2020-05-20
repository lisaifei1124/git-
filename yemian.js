/**
 * Created by wangdi on 27/11/16.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text, PanResponder} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BackPageComponent from '../BackPageComponent';
import NavigationBar from '../../components/NavigationBar';
import px2dp from '../../utils/px2dp';
import theme from '../../constants/theme';

export default class OrderContentPage extends BackPageComponent{
    constructor(props){
        super(props);
        this.names = [
        [
  {
    "id": 1,
    "name": "勇气",
    "singer": [
      "梁静茹"
    ],
    "img": "https://y.gtimg.cn/music/photo_new/T002R300x300M000001DEgPu1004bl_1.jpg?max_age=2592000"
  },
  {
    "id": 2,
    "name": "年少有为",
    "singer": [
      "李荣浩"
    ],
    "img": "https://y.gtimg.cn/music/photo_new/T002R300x300M000004QnEHc3zjC7J_1.jpg?max_age=2592000"
  },
  {
    "id": 3,
    "name": "当真",
    "singer": [
      "蒋蒋",
      "曲肖冰"
    ],
    "img": "https://y.gtimg.cn/music/photo_new/T002R300x300M000000RgBrK06p5mH_1.jpg?max_age=2592000"
  },
  {
    "id": 4,
    "name": "Sugar",
    "singer": [
      "Maroon 5"
    ],
    "img": "https://y.gtimg.cn/music/photo_new/T002R300x300M000001QUxsr2KyrU0_1.jpg?max_age=2592000"
  },
  {
    "id": 5,
    "name": "浅橘色孤岛 (Live)",
    "singer": [
      "戴燕妮",
      "段艺璇",
      "宋昕冉",
      "许馨文",
      "徐紫茵",
      "张钰",
      "左卓"
    ],
    "img": "https://y.gtimg.cn/music/photo_new/T002R300x300M000001AqDHy2gFHum_1.jpg?max_age=2592000"
  },
  {
    "id": 6,
    "name": "Stuck with U",
    "singer": [
      "Ariana Grande",
      "Justin Bieber"
    ],
    "img": "https://y.gtimg.cn/music/photo_new/T002R300x300M000004SFY3Y3Cr3q4_1.jpg?max_age=2592000"
  },
  {
    "id": 7,
    "name": "点歌的人",
    "singer": [
      "海来阿木"
    ],
    "img": "https://y.gtimg.cn/music/photo_new/T002R300x300M000001NvtHt3hFmxE_1.jpg?max_age=2592000"
  },
  {
    "id": 8,
    "name": "句号",
    "singer": [
      "G.E.M. 邓紫棋"
    ],
    "img": "https://y.gtimg.cn/music/photo_new/T002R300x300M0000049MVh824D7bM_1.jpg?max_age=2592000"
  },
  {
    "id": 9,
    "name": "后来",
    "singer": [
      "刘若英"
    ],
    "img": "https://y.gtimg.cn/music/photo_new/T002R300x300M000003RFvvb1K3vxF_1.jpg?max_age=2592000"
  },
  {
    "id": 10,
    "name": "飘洋过海来看你",
    "singer": [
      "梁静茹",
      "艾怡良"
    ],
    "img": "https://y.gtimg.cn/music/photo_new/T002R300x300M000004CsWWe0Z6gFR_1.jpg?max_age=2592000"
  },
  {
    "id": 11,
    "name": "平凡之路 (《后会无期》电影主题曲)",
    "singer": [
      "朴树"
    ],
    "img": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002aRnZM0garaC_1.jpg?max_age=2592000"
  },
  {
    "id": 12,
    "name": "告白气球",
    "singer": [
      "周杰伦"
    ],
    "img": "https://y.gtimg.cn/music/photo_new/T002R300x300M000003RMaRI1iFoYd_1.jpg?max_age=2592000"
  },
  {
    "id": 13,
    "name": "春娇与志明",
    "singer": [
      "街道办GDC",
      "欧阳耀莹"
    ],
    "img": "https://y.gtimg.cn/music/photo_new/T002R300x300M000000lrXyA0MlEEo_1.jpg?max_age=2592000"
  },
  {
    "id": 14,
    "name": "稻香",
    "singer": [
      "周杰伦"
    ],
    "img": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002Neh8l0uciQZ_1.jpg?max_age=2592000"
  }
]
        
        
        ];
        this.items = [];
        this.order = [];
    }

    render(){
        return(
            <View style={styles.container}>
                <NavigationBar
                    title="首页内容展示顺序"
                    isBackBtnOnLeft={true}
                    leftBtnIcon="arrow-back"
                    leftBtnPress={this._handleBack.bind(this)}
                />
                {this.names.map((item, i)=>{
                    this.order.push(item);
                    return (
                        <View
                            {...this._panResponder.panHandlers}
                            ref={(ref) => this.items[i] = ref}
                            key={i}
                            style={[styles.item, {top: (i+1)*49}]}>
                            <Icon name="ios-menu" size={px2dp(25)} color="#ccc"/>
                            <Text style={styles.itemTitle}>{item}</Text>
                        </View>
                    );
                })}
            </View>
        );
    }

    componentWillMount(){
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderGrant: (evt, gestureState) => {
                const {pageY, locationY} = evt.nativeEvent;
                this.index = this._getIdByPosition(pageY);
                this.preY = pageY - locationY;
                //get the taped item and highlight it
                let item = this.items[this.index];
                item.setNativeProps({
                    style: {
                        shadowColor: "#000",
                        shadowOpacity: 0.3,
                        shadowRadius: 5,
                        shadowOffset: {height: 0, width: 2},
                        elevation: 5
                    }
                });
            },
            onPanResponderMove: (evt, gestureState) => {
                let top = this.preY + gestureState.dy;
                let item = this.items[this.index];
                item.setNativeProps({
                    style: {top: top}
                });

                let collideIndex = this._getIdByPosition(evt.nativeEvent.pageY);
                if(collideIndex !== this.index && collideIndex !== -1) {
                    let collideItem = this.items[collideIndex];
                    collideItem.setNativeProps({
                        style: {top: this._getTopValueYById(this.index)}
                    });
                    //swap two values
                    [this.items[this.index], this.items[collideIndex]] = [this.items[collideIndex], this.items[this.index]];
                    [this.order[this.index], this.order[collideIndex]] = [this.order[collideIndex], this.order[this.index]];
                    this.index = collideIndex;
                }
            },
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderRelease: (evt, gestureState) => {
                const shadowStyle = {
                    shadowColor: "#000",
                    shadowOpacity: 0,
                    shadowRadius: 0,
                    shadowOffset: {height: 0, width: 0,},
                    elevation: 0
                };
                let item = this.items[this.index];
                //go back the correct position
                item.setNativeProps({
                    style: {...shadowStyle, top: this._getTopValueYById(this.index)}
                });
                console.log(this.order);
            },
            onPanResponderTerminate: (evt, gestureState) => {
                // Another component has become the responder, so this gesture
                // should be cancelled
            }
        });
    }

    _getIdByPosition(pageY){
        var id = -1;
        const height = px2dp(49);

        if(pageY >= height && pageY < height*2)
            id = 0;
        else if(pageY >= height*2 && pageY < height*3)
            id = 1;
        else if(pageY >= height*3 && pageY < height*4)
            id = 2;
        else if(pageY >= height*4 && pageY < height*5)
            id = 3;
        else if(pageY >= height*5 && pageY < height*6)
            id = 4;

        return id;
    }

    _getTopValueYById(id){
        const height = px2dp(49);
        return (id + 1) * height;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.pageBackgroundColor
    },
    item: {
        flexDirection: 'row',
        height: px2dp(49),
        width: theme.screenWidth,
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingLeft: px2dp(20),
        borderBottomColor: theme.segment.color,
        borderBottomWidth: theme.segment.width,
        position: 'absolute',
    },
    itemTitle: {
        fontSize: px2dp(15),
        color: '#000',
        marginLeft: px2dp(20)
    }
});