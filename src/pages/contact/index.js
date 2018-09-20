import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

class Index extends Component {

  config = {
    navigationBarTitleText: '联系我们'
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
          <Text>联系我们</Text>
        </view>
      </View>
    )
  }
}

export default Index
