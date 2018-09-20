import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image} from '@tarojs/components'
import './swiper.scss'

export default class SwiperView extends Component {
  constructor (props) {
    super (props)
    this.state = {}
  }

  render () {
    const SwiperList = this.props.SwiperList || []
    return (
      <View>
        <Swiper
          className={this.props.className || 'swiper-view'}
          indicatorColor={this.props.indicatorColor || '#999'}
          indicatorActiveColor={this.props.indicatorActiveColor || '#333'}
          vertical={this.props.vertical}
          circular={this.props.circular}
          indicatorDots={this.props.indicatorDots}
          autoplay={this.props.autoplay || 3000}
          duration={this.props.duration || 500}
          onChange={this.props.onChange}
        >
          {
            SwiperList.map((items, key) => {
              return <SwiperItem key={key}>
                <Image src={items} />
              </SwiperItem>
            })
          }
        </Swiper>
      </View>
    )
  }
}
