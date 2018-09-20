import Taro from '@tarojs/taro'

const ShowInfoToast = (title, icon, duration, fun) => {

  fun = fun ? fun : () => {}

  Taro.showToast({
    title: title || '',
    icon: icon || 'success',
    duration: duration || 2000
  })
    .then(res => fun(res))
}

const ShowLoading = (title, mask, fun) => {

  fun = fun ? fun : () => {}

  Taro.showLoading({
    title: title || '',
    mask: mask || false
  })
    .then(res => fun(res))
}

export {
  ShowInfoToast,
  ShowLoading
}
