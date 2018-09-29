import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
export default class ProductDetail extends Component {
  constructor (props) {
    super (props)
    this.state = {
      productId: '',
      screenWidth: 300,
      productList: [
        {
          id: 100001,
          name: '京东购物',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538220291027&di=b24d90ee5752846849c7ae5e157935c8&imgtype=0&src=http%3A%2F%2Fimage.winmobi.cn%2Fkindeditor%2Fattached%2Fimage%2F20170915%2F20170915104653_9056.jpg'
        },
        {
          id: 100002,
          name: '淘宝购物',
          img: 'http://img2.imgtn.bdimg.com/it/u=4198271869,167288903&fm=26&gp=0.jpg'
        }
      ],
      productInfo: {}
    }
  }
  config = {
    navigationBarTitleText: '产品详情'
  }
  componentWillMount () {
    const productList = this.state.productList
    const productId = this.$router.params.id
    let productInfo = {}
    for (let i = 0; i < productList.length; i++) {
      if (productList[i].id === parseFloat(productId)) {
        productInfo = productList[i]
      }
    }
    this.setState({
      productId: this.$router.params.id,
      productInfo: productInfo
    })
    Taro.getSystemInfo({
      success: (res) => {
        const windowWidth = res.windowWidth - 20
        this.setState({
          screenWidth: windowWidth
        })
      }
    })
  }

  onHandleBtn = (name) => {
    Taro.showToast({title: '预定了 ' + name})
  }

  render () {
    const productInfo = this.state.productInfo
    productInfo.id = this.state.productId
    return (
      <View className={'product'}>
        <View className={'product-info'}>
          <Image src={productInfo.img} className={'product-img'}/>
          <Text>{productInfo.name}</Text>
        </View>
        <View className={'bottom-fixed'}>
          <View className={'bottom-fixed-btn'} hoverClass={'bottom-fixed-btn-hover'} onClick={this.onHandleBtn.bind(this, productInfo.name)}>预 定</View>
        </View>
      </View>
    )
  }
}

