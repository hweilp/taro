import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
export default class ProductClass extends Component {
  constructor (props) {
    super (props)
    this.state = {
      current: 0
    }
  }

  componentWillReceiveProps () {
  }

  componentDidShow () { }

  componentDidHide () { }

  handleClick = (e) => {
    this.setState({
      current: e
    })
  }

  render () {
    return (
      <View className='index'>
        产品分类
      </View>
    )
  }
}
