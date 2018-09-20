import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import SwiperView  from '../../components/swiper/swiper'

import { getBannerList } from '../../store/actions/actions'

import './index.scss'

import Utils from '../../utils'

@connect(({ banner }) => ({
  banner
}), (dispatch) => ({
  getBannerList (val) {
    dispatch (getBannerList(val))
  }
}))
class Index extends Component {
  constructor (props) {
    super (props)
    this.state = {}
  }

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps () {
  }

  componentWillUnmount () {

  }

  componentDidShow () {
    const list = [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537248414704&di=ab41644a6acf7a613037edf56ae5acd9&imgtype=0&src=http%3A%2F%2Fpic-cdn.35pic.com%2F58pic%2F19%2F71%2F58%2F570ccefbcff2c_1024.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537248060085&di=19b0414e849e6bf90cb63195258229eb&imgtype=0&src=http%3A%2F%2Fbbs.tianya.cn%2Fpost-hqxx%2Fuploads%2Fimage%2Fcustomer%2F61698%2Fqyxxq%2F2e02db4a9d6b.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537248060019&di=82e1f277fe1d7c7cf515516c5a05e72e&imgtype=0&src=http%3A%2F%2Fbpic.ooopic.com%2F16%2F30%2F21%2F16302108-ed7f2f05eb9518ff50fd64f4202a17c7-1.jpg'
    ]

    this.props.getBannerList(list)

  }
  onGetUserInfo (e) {
    console.log(e)
  }

  componentDidHide () { }

  render () {
    const SwiperList = this.props.banner.list
    return (
      <View className='index'>
        <SwiperView
          SwiperList={SwiperList}
          indicatorDots={false}
        />
        <view>
          <Text>首页</Text>
        </view>
        <Button openType='getUserInfo' onGetUserInfo={this.onGetUserInfo}> 登录 </Button>
      </View>
    )
  }
}

export default Index
