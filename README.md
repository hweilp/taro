# taro 
  简介 
  Taro 是一套遵循 React 语法规范的, 针对 Web-h5、React-Native、微信小程序等多端开发的解决方案. 
  [api 文档](https://nervjs.github.io/taro/docs/README.html)
  
> A taro project

# created project
  taro init myApp / npx @tarojs/cli init myApp (npx: npm v5.2.0引入的一条命令,目的是为了提升开发者使用包内提供的命令行工具的体验。)

# install project dependencies
  ``` npm install and yarn install ``` 
  
# run project
  
  > 微信小程序 weapp
  ``` npm run dev:weapp ```
  生成dist文件夹 将dist文件导入微信开发工具即可
  
  > h5
  ``` npm run dev:weapp ```
  Browser opens page automatically 
  serve with hot reload at http://127.0.0.1:10086
  
  > react-native
  ``` npm run dev:rn ```
  
# 项目目录结构

  ─ dist                   编译结果目录  
  ─ config                 配置目录   
     ── dev.js             开发时配置  
     ── index.js           默认配置  
     ── prod.js            打包时配置  
  ─ src                    源码目录  
     ── pages              页面文件目录  
        ──── index          index页面目录  
            ────── index.js   index页面逻辑  
            ────── index.css  index页面样式  
     ── app.css            项目总通用样式  
     ── app.js             项目入口文件  
  ─ package.json    

# 效果图

![image](https://github.com/hwhtml/taro/blob/master/screenShot/1538215097238.jpg?raw=true)


 ![image](https://github.com/hwhtml/taro/blob/master/screenShot/1538215124924.jpg?raw=true)


 ![image](https://github.com/hwhtml/taro/blob/master/screenShot/1538215211847.jpg?raw=true)
