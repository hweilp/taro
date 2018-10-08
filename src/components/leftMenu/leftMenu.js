import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text} from '@tarojs/components'
import './leftMenu.scss'

export default class LeftMenu extends Component {
  constructor (props) {
    super (props)
    this.state = {
    }
  }

  btnClick = (id, e) => {
    e.stopPropagation()
    const { onBtnClick } = this.props
    onBtnClick(id)
  }

  render () {
    const menus = this.props.menus
    console.log(menus)
    return (
      <View className={'menu-wrapper'}>
        {
          menus.map(item => {
            return <View className={'menu-wrapper-item'} key={item.id}>
              <Image className={'menu-wrapper-item-image'} src={item.icon}/>
              <Text className={'menu-wrapper-item-text'}>{item.name}</Text>
            </View>
          })
        }
      </View>
    )
  }
}
