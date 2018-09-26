import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtList, AtListItem } from "taro-ui"
import './index.scss'

class Index extends Component {
  constructor (props) {
    super (props)
    this.state = {
      topImg: {
        src: 'https://www.maibei168.com/web/index/static/images/logo.png',
        background: '#4B4B4B'
      },
      contactList: [
        {
          title: '联系电话',
          key: 'mobile',
          val: '400-9262299',
          icon: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
          isOpr: true,
          opr_type: 1
        },
        {
          title: '地址',
          key: 'address',
          val: '温州瑞安市经济开发区开发六路飞度国际货运有限公司5楼',
          icon: 'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
          isOpr: true,
          opr_type: 2
        },
        {
          title: '网址',
          key: 'website',
          val: 'https://www.baidu.com',
          icon: 'http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
          isOpr: true,
          opr_type: 3
        },
        {
          title: '微信公众号',
          key: 'weipublic',
          val: '帮帮运',
          src: 'https://www.maibei168.com/web/index/static/images/qrcode.jpeg',
          icon: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
          isOpr: true,
          opr_type: 4
        }
      ],
      keepOnRecord: 'Copyright © 2018 浙ICP备18006058号-2',
      screenHeight: 500
    }
  }

  config = {
    navigationBarTitleText: '联系我们'
  }

  componentDidShow () {
    Taro.getSystemInfo({
      success: (res) => {
        const windowHeight = Taro.getEnv() === 'WEB' ? res.windowHeight - 50 : res.windowHeight
        this.setState({
          screenHeight: windowHeight
        })
      }
    })
  }
  AtListonClick (e) {
    switch (e.opr_type) {
      case 1:
        if (Taro.getEnv() === 'WEB') return
        Taro.showActionSheet({itemList: ['拨打电话']}).then(res => {
          Taro.makePhoneCall({
            phoneNumber: e.val
          })
        }).catch(err => {})
        break
      case 2:
        break
      case 3:
        break
      case 4:
        if (Taro.getEnv() === 'WEB') return
        let imgs = []
        imgs.push(e.src)
        Taro.previewImage({
          urls:imgs
        }).then()
        break
      default:
    }
  }

  render () {
    const contactList = this.state.contactList
    return (
      <View className='contact' style={{'height' : this.state.screenHeight + 'px'}}>
        <View className={'top-view'}>
          <Image className={'top-img'} src={this.state.topImg.src}/>
        </View>
        <View>
          <AtList>
            {contactList.map((item, index) => {
              return <AtListItem
                key={index}
                title={item.title}
                note={item.val}
                arrow='right'
                onClick={this.AtListonClick.bind(this, item)}
                thumb={item.icon}
              />
            })}
          </AtList>

          <View className={'keep-on-record'}>
            <Text className={'record-text'}>{this.state.keepOnRecord}</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default Index
