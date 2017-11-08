# Echarts-based-on-React
## 项目运行 ##

1.git clone Project Code:

    $ git clone https://github.com/ZhiRongYuan/Echarts-based-on-React.git

2.Entry Project Path

    cd Echarts-based-on-React

3.Installation dependent packet

   npm install

4.run project and view

   npm run start


访问 http://localhost:8080(start后 会自动打开浏览器访问)

通过 npm run build  编译生成的dist文件夹放在服务器即可正常访问



## 项目介绍 ##

* 本项目主要是向大家分享echarts 基于React 如何开发，提供完整的柱状图、折线图、散点图、漏斗图、仪表盘、地图下钻等案例分享

* 项目运行在PC端， 移动端适配方案（Echarts会自动适配，https://mp.weixin.qq.com/s?__biz=MzAwNDcyNjI3OA==&mid=2650840260&idx=1&sn=d737ff54a094f22fb4074968e2c462c9&chksm=80d3b7adb7a43ebb60c7227de906f3cc007fe217e926a5d77dfd31eeb3d98952df94ade576d6&mpshare=1&scene=23&srcid=0918PX9uXhJ95TQklRI8Zly0#rd）

* 项目搭建请大家熟悉下webpack配置，本项目使用https://github.com/ZhiRongYuan/webpack-stage.git 快速搭建

* React推出后，出于不同的原因先后出现三种定义react组件的方式，殊途同归；具体的三种方式：

  * 函数式定义的无状态组件（一般用于展示型组件，无state,无生命周期）
  * es5原生方式React.createClass定义的组件（提供state、生命周期方法）
  * es6形式的extends React.Component定义的组件（提供state、生命周期方法）

  本项目采用函数式编程和ES6定义组件  可供大家学习使用


* 地图下钻采用按需加载，即用户点击查询某省/某市 则用Ajax(项目采用axios)请求相应的省市地图数据

* ECharts 结合百度地图API可以展示非常炫丽的地图动画（本项目实现了县级地图某个地址标注）

##### 常见问题1 #####
首先，我们需要引入echarts, 以及 echarts的地图扩展 bmap (地图扩展，这个很关键，如果不引入，程序运行后会出现“unknown coordinateSystem bmap”的错误)。
import echarts from 'echarts';
import bmap from 'echarts/extension/bmap/bmap';


##### 常见问题2 #####
地图组件构建完毕，然而，并不能显示地图，提示“BMap api is not loaded”。 什么原因呢？
这是因为 调用百度地图API，需要申请密钥（ak）才能使用，当申请完后，需要添加一个JavaScript到index.html文件中。
可在html文件中引入<script src="http://api.map.baidu.com/api?v=2.0&ak=ZUONbpqGBsYGXNIYHicvbAbM"></script>