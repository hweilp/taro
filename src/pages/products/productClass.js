import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import LeftMenu from '../../components/leftMenu/leftMenu'

import './index.scss'
export default class ProductClass extends Component {
  constructor (props) {
    super (props)
    this.state = {
      current: 0,
      screenHeight: 400,
      classList: [
        {
          id: 10000,
          type: 1,
          name: '电器',
          icon: 'https://github.com/hwhtml/taro/blob/master/src/static/productClass/ele.png?raw=true'
        },
        {
          id: 20000,
          type: 2,
          name: '服装',
          icon: 'https://github.com/hwhtml/taro/blob/master/src/static/productClass/clothing.png?raw=true'
        },
        {
          id: 30000,
          type: 3,
          name: '食品',
          icon: 'https://github.com/hwhtml/taro/blob/master/src/static/productClass/food.png?raw=true'
        },
        {
          id: 40000,
          type: 4,
          name: '汽车',
          icon: 'https://github.com/hwhtml/taro/blob/master/src/static/productClass/car.png?raw=true'
        }
      ],
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
        },
        {
          id: 100001,
          name: '京东购物',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538220291027&di=b24d90ee5752846849c7ae5e157935c8&imgtype=0&src=http%3A%2F%2Fimage.winmobi.cn%2Fkindeditor%2Fattached%2Fimage%2F20170915%2F20170915104653_9056.jpg'
        },
        {
          id: 100002,
          name: '淘宝购物',
          img: 'http://img2.imgtn.bdimg.com/it/u=4198271869,167288903&fm=26&gp=0.jpg'
        },
        {
          id: 100001,
          name: '京东购物',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538220291027&di=b24d90ee5752846849c7ae5e157935c8&imgtype=0&src=http%3A%2F%2Fimage.winmobi.cn%2Fkindeditor%2Fattached%2Fimage%2F20170915%2F20170915104653_9056.jpg'
        },
        {
          id: 100002,
          name: '淘宝购物',
          img: 'http://img2.imgtn.bdimg.com/it/u=4198271869,167288903&fm=26&gp=0.jpg'
        },
        {
          id: 100001,
          name: '京东购物',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538220291027&di=b24d90ee5752846849c7ae5e157935c8&imgtype=0&src=http%3A%2F%2Fimage.winmobi.cn%2Fkindeditor%2Fattached%2Fimage%2F20170915%2F20170915104653_9056.jpg'
        },
        {
          id: 100002,
          name: '淘宝购物',
          img: 'http://img2.imgtn.bdimg.com/it/u=4198271869,167288903&fm=26&gp=0.jpg'
        },
        {
          id: 100001,
          name: '京东购物',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538220291027&di=b24d90ee5752846849c7ae5e157935c8&imgtype=0&src=http%3A%2F%2Fimage.winmobi.cn%2Fkindeditor%2Fattached%2Fimage%2F20170915%2F20170915104653_9056.jpg'
        },
        {
          id: 100002,
          name: '淘宝购物',
          img: 'http://img2.imgtn.bdimg.com/it/u=4198271869,167288903&fm=26&gp=0.jpg'
        },
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
    Taro.getSystemInfo({
      success: (res) => {
        const windowHeight = Taro.getEnv() === 'WEB' ? res.windowHeight - 120 : res.windowHeight - 60
        this.setState({
          screenHeight: windowHeight
        })
      }
    })
  }

  componentWillReceiveProps () {
  }

  componentDidShow () { }

  componentDidHide () { }

  handleClick = (item) => {
    console.log(item)
  }

  onHandleClick = (id) => {
    Taro.navigateTo({
      url: '/pages/products/detail/index?id=' + id
    })
  }

  render () {
    const menus = this.state.classList
    const productList = this.state.productList
    return (
      <View className={'product-class'}>
        <View className={'product-left-menu'} style={{'height': this.state.screenHeight + 'px'}}>
          <LeftMenu menus={menus} onBtnClick={this.handleClick.bind(this)}></LeftMenu>
        </View>
        <View className={'product-class-item'}>
          {
            productList.map(item => {
              return <View
                onClick={this.onHandleClick.bind(this, item.id)}
                hoverClass={'hover-class'}
                key={item.id}
                className={'product-view'}
              >
                <Image src={item.img} className={'product-image'}/>
                <View className={'product-title'}>
                  <Text>{item.name}</Text>
                </View>
              </View>
            })
          }
        </View>
      </View>
    )
  }
}
