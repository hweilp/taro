import Taro, { Component } from '@tarojs/taro'
import { View, Map } from '@tarojs/components'

export default class Map extends Component {
  constructor (props) {
    super (props)
    this.state = {}
  }

  render () {
    return (
      <View>
        <Map />
      </View>
    )
  }
}
