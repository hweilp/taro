import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text} from '@tarojs/components'
import './leftMenu.scss'

export default class LeftMenu extends Component {
  constructor (props) {
    super (props)
    this.state = {
      menus: [],
      activeId: 1000
    }
  }

  btnClick = (item, e) => {
    e.stopPropagation()
    this.setState({
      activeId: item.id
    })
    this.props.onBtnClick(item)
  }
  componentWillMount () {
    const menus = this.props.menus
    this.setState({
      menus: menus,
      activeId: menus[0].id
    })
  }

  render () {
    const menus = this.state.menus
    const activeId = this.state.activeId
    return (
      <View className={'menu-wrapper'}>
        {
          menus.map(item => {
            return <View className={['menu-wrapper-item', {'menu-active-class': activeId === item.id}]} hoverClass={'menu-hover-class'} key={item.id} onClick={this.btnClick.bind(this, item)}>
              <Image className={'menu-wrapper-item-image'} src={item.icon}/>
              <Text className={'menu-wrapper-item-text'}>{item.name}</Text>
            </View>
          })
        }
      </View>
    )
  }
}
