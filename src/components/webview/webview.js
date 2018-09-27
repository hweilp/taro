import Taro, { Component } from '@tarojs/taro'
import { WebView } from '@tarojs/components'

export default class App extends Components {
  render () {
    const Src = this.props.src
    return (
      <WebView src={Src} />
    )
  }
}
