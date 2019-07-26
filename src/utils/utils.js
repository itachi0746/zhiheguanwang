/* eslint-disable */
export default {
  /**
   * 导航到指定页面
   * @param pageName
   * @param defaultUrl
   * @param paramter
   */
  goToPage: function (pageName, defaultUrl, paramter) {
    let theParamterArray = []
    for (let key in paramter) {
      theParamterArray.push(key + '=' + paramter[key])
    }
    location.href = defaultUrl + '?' + theParamterArray.join('&')
  },
  // 获得url中的参数,放在对象中,然后返回这个对象
  getUrlParams: function () {
    let args = {}
    let query = location.search.substring(1) // 获取查询串
    let pairs = query.split('&')// 在逗号处断开
    for (let i = 0; i < pairs.length; i++) {
      let pos = pairs[i].indexOf('=')// 查找name=value
      if (pos === -1) continue// 如果没有找到就跳过
      let argname = pairs[i].substring(0, pos).toLowerCase()// 提取name
      let value = pairs[i].substring(pos + 1)// 提取value
      args[argname] = decodeURIComponent(value)// 存为属性
    }
    return args
  },
  IOSConfig: function () {
    let userAgent = navigator.userAgent
    if (userAgent.indexOf('iPhone') > -1 || userAgent.indexOf('Mac') > -1) {
      console.log('on iphone/mac')
      window.addEventListener('popstate', function (e) {
        // alert("后退");
        console.log('后退')
        self.location.reload()
      }, false)
      let state = {
        title: '',
        url: '#'
      }
      window.history.replaceState(state, '', '#')
    }
  },
  /**
   * 节流函数。
   */
  throttle: function (action, delay) {
    let timeout = null
    let lastRun = 0
    return function () {
      if (timeout) return
      let elapsed = Date.now() - lastRun
      let context = this
      let args = arguments
      let runCallback = function () {
        lastRun = Date.now()
        timeout = false
        action.apply(context, args)
      }
      if (elapsed >= delay) {
        runCallback()
      } else {
        timeout = setTimeout(runCallback, delay)
      }
    }
  },
  /**
   * 判断是否已经过指定的分钟
   * @param timeStamp 上一个时间戳(毫秒)
   * @param interval 时间间隔(分钟)
   */
  canRefresh: function (timeStamp, interval) {
    // debugger
    var curTime = new Date().valueOf()
    interval = interval * 60000
    timeStamp = timeStamp.valueOf()
    var result = curTime - timeStamp
    return result > interval
  },
  getClientHeight: function () {
    let clientHeight = 0
    // if (document.body.clientHeight && document.documentElement.clientHeight) {
    //   clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
    // } else {
    //   clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
    // }
    if (document.documentElement.clientHeight) {
      clientHeight = document.documentElement.clientHeight
    }
    console.log('可视区域高度:', clientHeight)
    return clientHeight
  },
  add0 (m) {
    return m < 10 ? '0' + m : m
  },
  /**
   * 时间戳转为为普通日期格式
   * @param shijianchuo 时间戳
   * @param hm 是否返回小时 分钟
   * @returns {string}
   */
  formatTime: function (shijianchuo, hm) {
    //shijianchuo是整数，否则要parseInt转换
    // var time = new Date(shijianchuo)

    let time = shijianchuo, result
    let y = time.getFullYear()
    let m = time.getMonth() + 1
    let d = time.getDate()
    let h = time.getHours()
    let mm = time.getMinutes()
    if (hm) {
      result = y + '-' + this.add0(m) + '-' + this.add0(d) + ' ' + this.add0(h) + ':' + this.add0(mm)
    } else {
      result = y + '-' + this.add0(m) + '-' + this.add0(d)
    }
    // var s = time.getSeconds()
    // return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s)
    // return y + '-' + this.add0(m) + '-' + this.add0(d)
    return result
  },
  /**
   * json转formdata
   * @param jsonData
   * @returns {*}
   */
  JsonToFormData: function (jsonData) {
    let form = new FormData()
    form.append('param', JSON.stringify(jsonData))
    return form
  },
  /**
   * 把数组里的对象转为formdata
   * @param dataArr
   */
  createFormData: function (dataArr) {
    let form = new FormData()
    for (let obj of dataArr) {
      if (!obj.value) {
        console.log(`${obj.name} 的值为 ${obj.value}`)
        obj.value = ''
        // return false
      }
      try {
        obj.value = obj.value.trim() // 去除空格
      } catch (err) {
        console.log(err)
      }
      form.append(obj.fieldName, obj.value)
    }
    return form
  },
  /**
   * 把对象转为formdata
   * @param dataObj
   */
  obj2FormData: function (dataObj) {
    let form = new FormData()
    for (let key in dataObj) {
      if (!dataObj[key]) {
        console.log(`${key} 为空: ${dataObj[key]}`)
        dataObj[key] = ''
        // return false
      }
      form.append(key, dataObj[key])
    }
    return form
  },
  /**
   * 格式化后台返回的日期字符串, 返回时间戳
   * @param dateStr 例如 '/Date(157737600000)/'
   */
  formatDate: function (dateStr) {
    if (!dateStr || typeof dateStr !== 'string') {
      console.log('参数错误:', dateStr)
      return ''
    }
    // debugger
    let theResult = dateStr
    let theReg = /\/Date\(\d*\)\//g
    let theReg2 = /\/Date\(-{1}\d*\)\//g
    if (theReg2.test(theResult)) { // 带负号的时间, 返回为空值
      console.log(`时间格式不正确: ${theResult}`)
      return ''
    }
    if (!theReg.test(theResult)) {
      console.log(`时间格式不正确: ${theResult}`)
      return ''
    }
    theResult = 'new ' + theResult.substr(1, theResult.length - 2)
    // console.log(theResult)

    theResult = eval(theResult)
    // console.log(theResult)

    return theResult
  },
  /**
   * 统一处理时间
   * @param dateStr /Date(157737600000)/
   * @param hm 是否需要小时分钟
   */
  // handleTime: function (dateStr, hm = false) {
  //   // console.log(dateStr)
  //   let theResult = this.formatDate(dateStr)
  //   if (!theResult) {
  //     return theResult
  //   }
  //   theResult = this.formatTime(theResult, hm)
  //   return theResult
  // },
  /**
   * 判断是空对象
   * @param obj 对象
   * @returns {boolean}
   */
  isEmptyObject: function (obj) {
    for (var key in obj) {
      return false
    }
    return true
  },
  /**
   * 判断是不是空的
   * @param param
   * @returns {boolean}
   */
  isEmpty: function (param) {
    var me = this
    var theType = typeof param
    var empty = false
    switch (theType)
    {
      case 'string':
        if (param === '') {
          console.log('参数为空字符串')
          empty = true
        }
        break
      case 'array':
        if (param.length === 0) {
          console.log('参数为空数组')
          empty = true
        }
        break
      case 'object':
        empty = me.isEmptyObject(param)
        break
    }
    return empty
  },
  /**
   * 检查密码是否相同
   */
  checkPSW (theFieldArr) {
    // debugger
    let psw1, psw2
    for (let obj of theFieldArr) {
      if (obj.name === '密码1') {
        psw1 = obj.value
      } else if (obj.name === '密码2') {
        psw2 = obj.value
      }
    }
    return psw1 === psw2
  },
  /**
   * 检查密码长度 长度在6~20之间，只能包含字母、数字和下划线
   */
  checkPSW2 (theFieldArr) {
    // debugger
    let reg = /^(\w){6,20}$/, psw1
    for (let obj of theFieldArr) {
      if (obj.name === '密码1') {
        psw1 = obj.value
        return reg.test(psw1)
      }
    }
  },
  /**
   * 检查必填项
   */
  checkRequired (theFieldArr) {
    for (let obj of theFieldArr) {
      if (!obj.required) {
        continue
      }
      if (!obj.value) {
        console.log('必填值不能为空', obj.fieldName)
        return false
      }
    }
    return true
  },
  /**
   * 登录后清除历史记录
   */
  clearHistory () {
    try {
      if (jsBridge) {
        jsBridge.clearHistory()
        console.log('清除历史记录')
      } else {
        console.log('没有jsBridge')
      }
    } catch (e) {
      console.log(e)
      console.log('没有jsBridge')
    }
  },
  /**
   * 清除缓存
   */
  clearCache () {
    try {
      if (jsBridge) {
        jsBridge.clearCache()
        console.log('清除缓存')
      } else {
        console.log('没有jsBridge')
      }
    } catch (e) {
      console.log(e)
      console.log('没有jsBridge')
    }
  },
  /**
   * 格式化数据对象的时间戳字符串, null字符串
   */
  formatObj (obj, hm) {
    for (let key in obj) { // 格式化时间
      if (typeof obj[key] !== 'string') {
        if (obj[key] === null || obj[key] === undefined) { // 格式化null
          obj[key] = ''
        }
        continue
      }
      // obj[key] = obj[key].trim()
      if (obj[key].indexOf('/Date') !== -1) {
        obj[key] = this.handleTime(obj[key], hm)
      }
      if (obj[key] === 'null') { // 格式化'null'
        obj[key] = ''
      }
    }
    return obj
  },
  /**
   * 处理要显示的数据
   * @param mapObj 字段映射
   * @param dataObj 数据对象
   */
  handleMapData (mapObj, dataObj) {
    let resultArr = []
    for (let key in mapObj) {
      if (!dataObj[key]) { // 空则跳过
        console.log(`字段 ${key} 没有值: ${dataObj[key]}`)
        // continue
      }
      const obj = {
        key: mapObj[key],
        value: dataObj[key]
      }
      resultArr.push(obj)
    }
    return resultArr
  },
  /**
   * 计算字段数组中, 必填项是否已有值
   * @param arr
   */
  computeRequired (arr) {
    for (let obj of arr) {
      if (!obj.required) {
        continue
      }
      if (!obj.value) {
        return true
      }
    }
    return false
  },
  /**
   * 检查字段 手机的值
   * @param theValue
   */
  checkPhoneNum (theValue) {
    let reg = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\d{8}$/
    return reg.test(theValue)
  },
  /**
   * 检查字段 网址的值
   * @param theValue
   */
  checkURL (theValue) {
    // let reg = /^((https?|ftp|news):\/\/)?([a-z]([a-z0-9\-]*[\.。])+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel)|(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&]*)?)?(#[a-z][a-z0-9_]*)?$/
    let reg = /^((https|http|ftp|rtsp|mms){1}(:\/\/){0,1})www\.(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/
    return reg.test(theValue)
  },
  /**
   * 检查年龄
   * @param theValue 字符串
   */
  checkAge (theValue) {
    if (!theValue) {
      return false
    }
    let Value = eval(theValue), min = 10, max = 70
    return Value<=min || Value>=max
  },
  /**
   * 格式化 数字 0 和负数
   * @param num 数字
   */
  formatZero (num) {
    if (typeof num !== 'number') {
      return num
    }
    return num <= 0 ? '' : num
  },
  /**
   * 格式化地区名 去掉 省 市 两字
   * @param provinceName
   * @param cityName
   */
  formatArea (provinceName, cityName) {
    if (typeof provinceName !== 'string' || typeof cityName !== 'string') {
      return
    }
    let sheng = '省', shi = '市'
    provinceName = this.delStr(provinceName, sheng)
    cityName = this.delStr(cityName, shi)
    return provinceName + cityName
  },
  /**
   * 删除字符串中的特定字符
   * @param str 原来的字符串
   * @param target 要删除的目标字符串
   */
  delStr (str, target) {
    if (typeof str !== 'string' || typeof target !== 'string') {
      return str
    }
    let i = str.indexOf(target)
    if (i === -1) {
      console.log(`目标字符不存在: ${str},${target}`)
      return str
    }
    return str.substr(0, i)
  },
  /**
   * 检查统一社会信用代码
   * 市面上现在有2中企业营业执照注册号(统一社会信用代码)，一种是15位(从2007年开始)，一种是18位(从2015年开始)
   * @param val
   */
  checkCreditCode (val) {
    if (typeof val !== 'string') {
      console.log(`参数类型错误: ${val}`)
      return
    }
    let reg = /(^(?:(?![IOZSV])[\dA-Z]){2}\d{6}(?:(?![IOZSV])[\dA-Z]){10}$)|(^\d{15}$)/
    return reg.test(val)
  },
  /**
   * vant的toast
   * @param me vue实例对象
   * @param msg 要显示的文字
   * @param type toast类型 默认是success
   * @param time 显示时间 默认为2000毫秒
   */
  toast (me, msg, type = 'success', time = 2000) {
    let opt = {
      duration: time,
      message: msg
    }
    let loadingOpt = {
      duration: 0,
      message: '加载中...',
      mask: true,
      forbidClick: true, // 禁用背景点击
    }
    if (type === 'success') {
      me.$toast.success(opt)
    } else if (type === 'fail') {
      me.$toast.fail(opt)
    } else if (type ==='loading') {
      me.$toast.loading(loadingOpt)
    } else if (type === 'clear') {
      me.$toast.clear()
    }
  },
  /**
   * 获取经纬度
   */
  getLocation () {
    let lng, // 经度
      lat // 纬度
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          console.log('经度:', position.coords.longitude)
          console.log('纬度:', position.coords.latitude)
          lng = position.coords.longitude
          lat = position.coords.latitude
        },
        function (e) {
          console.log('获取经纬度失败')
          throw(e.message)
        }
      )
    } else {
      console.log('该浏览器不支持获取地理位置。')
    }
    return {'lng': lng, 'lat': lat}
  },
  /**
   * 检测html的fontsize是否已设置, 如果已设置则进行下一步 ,否则递归
   * @param cb 回调函数
   * @returns {boolean}
   */
  hasSetRem (cb) {
    let theHTML = document.getElementsByTagName('html')[0]
    let theFS = theHTML.style.fontSize
    let time1 // 定时器
    if (theFS) {
      clearTimeout(time1) // 清除定时器
      cb()
      return false
    } else {
      time1 = setTimeout(() => {
        this.hasSetRem(cb) // 递归扫描
      }, 300)
    }
  },
  /**
   * 用微信对象获取经纬度
   */
  getLocation2 () {
    try {
      wx.getLocation({
        type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
        success: function (res) {
          let latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
          let longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
          // var speed = res.speed; // 速度，以米/每秒计
          // var accuracy = res.accuracy; // 位置精度
          return ({'lng': longitude, 'lat': latitude})
        }

      })
    } catch (err) {
      console.log('没有找到wx对象:', err)
      return ({'lng': 0, 'lat': 0})
    }
  },
  /**
   * 用微信对象获取经纬度
   */
  //微信JS-SDK获取经纬度方法
  weichatLatAndLon (callback, error) {
    var that = this;
    var data = null
    var timestamp = new Date().getTime() + "";
    timestamp = timestamp.substring(0, 10);
    // var ranStr = randomString();

    //微信接口配置
    // wx.config({
    // debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    // appId: 'XXXXXXXXXXXXXXXXX', // 必填，公众号的唯一标识
    // timestamp: timestamp, // 必填，生成签名的时间戳
    // nonceStr: ranStr, // 必填，生成签名的随机串
    // signature: 'XXXXXXXXXXXXXXXXX',// 必填，签名，见附录1
    // jsApiList: ['checkJsApi',
    //   'getLocation'
    // ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    // });

    //参见微信JS SDK文档：http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
    return new Promise(function (resolve, reject) {
      try {
        // wx.ready(function () {
        wx.getLocation({
          success: function (res) {
            var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
            var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
            var speed = res.speed; // 速度，以米/每秒计
            var accuracy = res.accuracy; // 位置精度
            localStorage.setItem("latitude", latitude);
            localStorage.setItem("longitude", longitude);
            data = {
              lat: latitude,
              lng: longitude
            };
            console.log('获取位置成功: ', JSON.stringify(data))
            resolve(data)
          },
          cancel: function () {
            //这个地方是用户拒绝获取地理位置
            console.log('获取位置失败: 用户拒绝')
            data = {
              lat: 0,
              lng: 0
            };
            resolve(data)
          },
          fail: function (res) {
            console.log('获取位置失败: ', JSON.stringify(res))
            data = {
              lat: 0,
              lng: 0
            };
            resolve(data)
          }
        });
        wx.error(function (res) {
          console.log('获取位置失败: ', JSON.stringify(res))
          data = {
            lat: 0,
            lng: 0
          };
          resolve(data)
        });
        // });
      } catch (err) {
        console.log('没有err对象: ', JSON.stringify(err))
        data = {
          lat: 0,
          lng: 0
        };
        resolve(data)
      }
    })
  },
  /**
   * 回到顶部
   */
  scrollToTop () {
    let el = document.documentElement;
    let step = 0;
    let interval = setInterval(function () {
      if (el.scrollTop <= 0) {
        clearInterval(interval);
        return;
      }
      step += 10;
      el.scrollTop -= step;
    }, 20);
  },
  /**
   * 处理时间
   * @param timeStr 时间字符串
   */
  handleTime (timeStr) {
    return timeStr.split('T')[0]
  }
}
