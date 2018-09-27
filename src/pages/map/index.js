import Taro, { Component } from '@tarojs/taro'
import { View, Text, Map } from '@tarojs/components'

export default class MapPage extends Component {
  constructor (props) {
    super (props)
    this.state = {
      longitude: '',
      latitude: '',
      scale: 14,
      markers: [],
      screenHeight: 500,
      address: '地址'
    }
  }
  config = {
    navigationBarTitleText: '地图'
  }
  componentWillMount () {
    const Address = this.$router.params.address
    const Longitude = this.$router.params.longitude
    const Latitude = this.$router.params.latitude
    const markersList = [{
      iconPath: 'https://raw.githubusercontent.com/hwhtml/taro/master/src/static/icon/mark.png',
      id: 0,
      width: 40,
      height: 40,
      longitude: Longitude,
      latitude: Latitude
    }]
    this.setState({
      address: Address,
      longitude: Longitude,
      latitude: Latitude,
      markers: markersList
    })

  }

  componentDidShow () {
    Taro.getSystemInfo({
      success: (res) => {
        const windowHeight = Taro.getEnv() === 'WEB' ? res.windowHeight : res.windowHeight * .5
        this.setState({
          screenHeight: windowHeight
        })
      }
    })
  }

  render () {
    return (
      <View style={{'height': this.state.screenHeight + 'px', 'width': '100%'}}>
        <Map
          style={{'height': this.state.screenHeight + 'px', 'width': '100%'}}
          longitude={this.state.longitude}
          latitude={this.state.latitude}
          markers={this.state.markers}
          scale={this.state.scale}
        />
        <View style={{'textAlign': 'center', 'fontSize': '14px', 'marginTop': '20px', 'padding': '0 10%'}}>
          <Text>{this.state.address}</Text>
        </View>

      </View>
    )
  }
}
