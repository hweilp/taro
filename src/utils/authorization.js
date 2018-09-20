import Taro from '@tarojs/taro'

/*
* 获取用户授权对象 回调函数返回值
* */
const GetAuthList = (fun) => {
  fun = fun ? fun : () => {}
  Taro.getSetting({
    success: (res) => {
      fun(res.authSetting)
    }
  })
}

/*
* 检测用户是否授权
* */
const IsHaveAuth = (key, fun) => {
  fun = fun ? fun : () => {}

  Taro.getSetting({
    success: res => {
      if (res.authSetting[key]) {
        fun (true)
      } else {
        fun (false)
      }
    }
  })

}

/*
* 获取用户授权对象 回调函数返回值
* */
const SetAuth = (key, fun) => {
  fun = fun ? fun : () => {}

  Taro.authorize({
    scope: key,
    success: (res) => { fun(res) },
    fail: (res) => { fun(res) }
  })

}

export {
  GetAuthList,
  IsHaveAuth,
  SetAuth
}
