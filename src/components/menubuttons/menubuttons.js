import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text} from '@tarojs/components'
import './menubuttons.scss'

export default class MenuButtons extends Component {
  constructor (props) {
    super (props)
    this.state = {}
  }

  btnClick (e) {
    if (Taro.getEnv() === 'WEB') {
      console.log(e.currentTarget.attributes.dataUrl.value)
    } else {
      console.log(e.currentTarget.dataset.dataset)
    }
  }

  render () {
    const menus = this.props.menus
    return (
      <View className='menu-wrapper'>
        {
          menus.map((item, index) => {
            return <View className='menu-item' dataUrl={item.id} data-dataset={item} key={index} onClick={this.btnClick.bind(item)}>
              <View className='menu-img-view'>
                <Image className='menu-image' src={item.image} />
              </View>
             <View className='menu-text-view'>
               <Text className='menu-text'>{item.value}</Text>
             </View>
            </View>
          })
        }
      </View>
    )
  }
}
