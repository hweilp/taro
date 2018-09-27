import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
export default class ProductList extends Component {
  constructor (props) {
    super (props)
    this.state = {
      current: 0
    }
  }

  componentDidShow () { }

  componentDidHide () { }

  handleClick = (e) => {
    this.setState({
      current: e
    })
  }

  render () {
    const current = this.state.current
    return (
      <View className='index'>
        产品列表
      </View>
    )
  }
}

