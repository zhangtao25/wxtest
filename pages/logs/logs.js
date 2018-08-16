//logs.js
// const util = require('../../utils/util.js')
import util from '../../utils/util'

Page({
  data: {
    logs: [],
    msg:[
      {'name':'zt','age':'18'},
      {'name':'gyz','age':'18'},
      {'name':'haha','age':'18'}
    ]
  },
  onLoad (){
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
