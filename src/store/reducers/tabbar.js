import { GETTABBARLIST } from '../types'

const INITIAL_STATE = {
  tabBar: {
    color: '#333',
    selectedColor: '#f12c20',
    borderStyle: 'black',
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

export default function counter (state = INITIAL_STATE, action, val) {
  switch (action.type) {
    case GETTABBARLIST:
      console.log(action)
      return {
        ...state,
        tabBar: val
      }
    default:
      return state
  }
}
