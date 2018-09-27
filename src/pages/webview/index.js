import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

export default class WebViewPage extends Component {
  constructor (props) {
    super (props)
    this.state = {

    }
  }
  config = {
    navigationBarTitleText: 'h5'
  }
  render () {
    return (
      <View>
        <Text>webview页面</Text>
      </View>
    )
  }
}
