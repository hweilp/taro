import Taro, { Component } from '@tarojs/taro'
import { View, Text, WebView } from '@tarojs/components'

export default class WebViewPage extends Component {
  constructor (props) {
    super (props)
    this.state = {
      src: ''
    }
  }
  config = {
    navigationBarTitleText: 'h5'
  }
  componentWillMount () {
    this.setState({
      src: this.$router.params.src
    })
  }
  render () {
    return (
      <View>
        <WebView src={this.state.src} />
      </View>
    )
  }
}
