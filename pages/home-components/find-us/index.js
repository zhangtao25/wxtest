Component({
  data: {
    markers: [{
      iconPath: "/images/static/map-icon.png",
      id: 0,
      latitude: 31.693920,
      longitude: 118.524110,
      height: 50
    }],
    markers1: [{
      iconPath: "/images/static/map-icon.png",
      id: 1,
      latitude: 31.639443,
      longitude: 118.497606,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color:"#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    navbar: ['北店', '南店'],                              //记录不同状态记录的数量
    currentTab: 0,
  },
  methods: {
    getDate(){
      this.setData({ date:new Date().toLocaleString()});
    },
    goArticleDetails(){
      wx.navigateTo({
        url: '/pages/article-details/index'
      })
    },
    openMap(){
      wx.getLocation({//获取当前经纬度
        type: 'wgs84', //返回可以用于wx.openLocation的经纬度，官方提示bug: iOS 6.3.30 type 参数不生效，只会返回 wgs84 类型的坐标信息  
        success: function (res) {
          wx.openLocation({//​使用微信内置地图查看位置。
            latitude: 31.693920,//要去的纬度-地址
            longitude: 118.524110,//要去的经度-地址
            name: "马鞍山耀华汽车配件有限公司",
            address:'马鞍山耀华汽车配件有限公司'
          })
        }
      })
    },
    openMap1(){
      wx.getLocation({//获取当前经纬度
        type: 'wgs84', //返回可以用于wx.openLocation的经纬度，官方提示bug: iOS 6.3.30 type 参数不生效，只会返回 wgs84 类型的坐标信息  
        success: function (res) {
          wx.openLocation({//​使用微信内置地图查看位置。
            latitude: 31.639443,//要去的纬度-地址
            longitude: 118.497606,//要去的经度-地址
            name: "福耀汽车玻璃(马鞍山耀华店)",
            address:'福耀汽车玻璃(马鞍山耀华店)'
          })
        }
      })
    },
    //响应点击导航栏
    navbarTap: function (e) {
      var that = this;
      that.setData({
        currentTab: e.currentTarget.dataset.idx
      })
    }
  }
})