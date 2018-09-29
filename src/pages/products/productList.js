import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import api from '../../service/configs'
import './index.scss'
export default class ProductList extends Component {
  constructor (props) {
    super (props)
    this.state = {
      current: 0,
      screenWidth: 300,
      productList: [
        {
          id: 100001,
          name: '京东购物',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538220291027&di=b24d90ee5752846849c7ae5e157935c8&imgtype=0&src=http%3A%2F%2Fimage.winmobi.cn%2Fkindeditor%2Fattached%2Fimage%2F20170915%2F20170915104653_9056.jpg'
        },
        {
          id: 100002,
          name: '淘宝购物',
          img: 'http://img2.imgtn.bdimg.com/it/u=4198271869,167288903&fm=26&gp=0.jpg'
        }
      ]
    }
  }
  componentWillMount () {
    // api.get('http://www.hw.com:8081/api/banner').then (res => {
    //   console.log(res)
    // })
    Taro.getSystemInfo({
      success: (res) => {
        const windowWidth = res.windowWidth - 20
        this.setState({
          screenWidth: windowWidth
        })
      }
    })
  }

  onHandleClick = (id) => {
    Taro.navigateTo({
      url: '/pages/products/detail/index?id=' + id
    })

  }

  render () {
    const productList = this.state.productList
    return (
      <View className={'product'}>
        {
          productList.map(item => {
            return <View
              onClick={this.onHandleClick.bind(this, item.id)}
              hoverClass={'hover-class'}
              key={item.id}
              className={'product-view'}
              style={{'width': this.state.screenWidth / 2 + 'px'}}
            >
              <Image src={item.img} className={'product-image'} style={{'height': this.state.screenWidth / 2 + 'px'}} />
              <View className={'product-title'}>
                <Text>{item.name}</Text>
              </View>
            </View>
          })
        }
      </View>
    )
  }
}

