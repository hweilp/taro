import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import SwiperView  from '../../components/swiper/swiper'
import { AtGrid, AtNoticebar } from 'taro-ui'
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
    this.state = {
      counter: 1,
      tips: '通知 平台旨在建立全国最快速、实惠、公正的货运服务平台',
      idea: {
        column: 3,
        textStyle: 'font-size:24rpx;',
        imgStyle: 'width:80rpx;height:80rpx;',
        list: [
          {
            id: '001',
            image: 'https://www.maibei168.com/web/index/static/images/icon01.png',
            value: '专业系统集成'
          },
          {
            id: '002',
            image: 'https://www.maibei168.com/web/index/static/images/icon02.png',
            value: '多元技术架构'
          },
          {
            id: '003',
            image: 'https://www.maibei168.com/web/index/static/images/icon03.png',
            value: '全国交付模式'
          }
        ]
      },
      introduceImgs: {
        list: [
          'https://user-assets.sxlcdn.com/images/140559/FiR8Kk6RyUChq_km5MWVJ3IjQLIr.png?imageMogr2/strip/thumbnail/1200x9000%3E/format/png'
        ]
      }
    }
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

  menuButtons (e) {
    console.log(e)
  }
  add = () => {
  }

  componentDidHide () { }

  render () {
    const SwiperList = this.props.banner.list
    const Idea = this.state.idea
    const introduceImgsList = this.state.introduceImgs.list
    const tips = this.state.tips
    return (
      <View className='index'>
        <SwiperView
          SwiperList={SwiperList}
          indicatorDots={true}
        />
        <AtNoticebar icon='volume-plus' marquee>
          {tips}
        </AtNoticebar>
        <AtGrid data={Idea.list} columnNum={Idea.column} hasBorder={false} onClick={this.menuButtons.bind(this)}/>
        <View className='introduce-img'>
          {
            introduceImgsList.map((item, index) => {
              return <Image
                className='introduce-image'
                key={index}
                src={item}
              />
            })
          }
        </View>

      </View>
    )
  }
}

export default Index
