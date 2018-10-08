import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import LeftMenu from '../../components/leftMenu/leftMenu'

import './index.scss'
export default class ProductClass extends Component {
  constructor (props) {
    super (props)
    this.state = {
      current: 0,
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
      ]
    }
  }

  componentWillReceiveProps () {
  }

  componentDidShow () { }

  componentDidHide () { }

  handleClick = () => {
  }

  render () {
    const menus = this.state.classList
    return (
      <View className={'product-class'}>
        <View className={'product-left-menu'}>
          <LeftMenu menus={menus}></LeftMenu>
        </View>
      </View>
    )
  }
}
