import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabs } from 'taro-ui'
import './index.scss'

import ProductClass from './productClass'
import ProductList from './productList'

class Index extends Component {
  constructor (props) {
    super (props)
    this.state = {
      current: 0,
      tabList: [
        { title: '产品' },
        { title: '分类' }
      ]
    }
  }

  config = {
    navigationBarTitleText: '产品展示'
  }

  componentDidShow () { }

  componentDidHide () { }

  handleClick = (e) => {
    this.setState({
      current: e
    })
  }

  render () {
    const current = this.state.current
    const tabList = this.state.tabList
    return (
      <View className='container'>
        <AtTabs
          current={current}
          tabList={tabList}
          onClick={this.handleClick}>
        </AtTabs>
        { current === 0 ? <ProductList /> : null }
        { current === 1 ? <ProductClass /> : null }
      </View>
    )
  }
}

export default Index
