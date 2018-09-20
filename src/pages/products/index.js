import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss'

class Index extends Component {

  config = {
    navigationBarTitleText: '产品展示'
  }

  componentWillReceiveProps () {
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <view>
          <Text>产品展示</Text>
        </view>
      </View>
    )
  }
}

export default Index
