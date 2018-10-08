import Taro, { Component } from '@tarojs/taro'
import '@tarojs/async-await'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.scss'

const store = configStore ()

// console.log(Taro.getEnv())

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/products/index',
      'pages/products/detail/index',
      'pages/contact/index',
      'pages/webview/index',
      'pages/map/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#333',
      selectedColor: '#f12c20',
      borderStyle: 'light',
      backgroundColor: '#fff',
      list: [
        {
          key: 'index',
          pagePath: 'pages/index/index',
          iconPath: 'static/tabbaricon/home.png',
          selectedIconPath: 'static/tabbaricon/home-active.png',
          text: '首页'
        },
        {
          key: 'products',
          pagePath: 'pages/products/index',
          iconPath: 'static/tabbaricon/products.png',
          selectedIconPath: 'static/tabbaricon/products-active.png',
          text: '产品展示'
        },
        {
          key: 'contact',
          pagePath: 'pages/contact/index',
          iconPath: 'static/tabbaricon/contact.png',
          selectedIconPath: 'static/tabbaricon/contact-active.png',
          text: '联系我们'
        }
      ]
    }
  }

  componentDidMount () {
  }

  componentDidShow () {
  }

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
