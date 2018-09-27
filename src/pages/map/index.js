import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

export default class MapPage extends Component {
  constructor (props) {
    super (props)
    this.state = {

    }
  }
  config = {
    navigationBarTitleText: '地图'
  }

  render () {
    return (
      <View>
        <Text>地图页面</Text>
      </View>
    )
  }
}
