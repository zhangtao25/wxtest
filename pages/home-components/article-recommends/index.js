Component({
  data: {
    msg:[{
      "img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534496496721&di=83d1931f92411c350c450fbf6e61748c&imgtype=0&src=http%3A%2F%2Fimg05.tooopen.com%2Fimages%2F20150520%2Ftooopen_sy_125299632475.jpg",
      "wenzi":"无惧改变/坚持自我 瑜伽教练情迷1系三厢运动轿车"
    },{
      "img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534496496721&di=83d1931f92411c350c450fbf6e61748c&imgtype=0&src=http%3A%2F%2Fimg05.tooopen.com%2Fimages%2F20150520%2Ftooopen_sy_125299632475.jpg",
      "wenzi":"无惧改变/坚持自我 瑜伽教练情迷1系三厢运动轿车"
    },{
      "img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534496496721&di=83d1931f92411c350c450fbf6e61748c&imgtype=0&src=http%3A%2F%2Fimg05.tooopen.com%2Fimages%2F20150520%2Ftooopen_sy_125299632475.jpg",
      "wenzi":"无惧改变/坚持自我 瑜伽教练情迷1系三厢运动轿车"
    },{
      "img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534496496721&di=83d1931f92411c350c450fbf6e61748c&imgtype=0&src=http%3A%2F%2Fimg05.tooopen.com%2Fimages%2F20150520%2Ftooopen_sy_125299632475.jpg",
      "wenzi":"无惧改变/坚持自我 瑜伽教练情迷1系三厢运动轿车"
    },{
      "img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534496496721&di=83d1931f92411c350c450fbf6e61748c&imgtype=0&src=http%3A%2F%2Fimg05.tooopen.com%2Fimages%2F20150520%2Ftooopen_sy_125299632475.jpg",
      "wenzi":"无惧改变/坚持自我 瑜伽教练情迷1系三厢运动轿车"
    },{
      "img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534496496721&di=83d1931f92411c350c450fbf6e61748c&imgtype=0&src=http%3A%2F%2Fimg05.tooopen.com%2Fimages%2F20150520%2Ftooopen_sy_125299632475.jpg",
      "wenzi":"无惧改变/坚持自我 瑜伽教练情迷1系三厢运动轿车"
    },{
      "img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534496496721&di=83d1931f92411c350c450fbf6e61748c&imgtype=0&src=http%3A%2F%2Fimg05.tooopen.com%2Fimages%2F20150520%2Ftooopen_sy_125299632475.jpg",
      "wenzi":"无惧改变/坚持自我 瑜伽教练情迷1系三厢运动轿车"
    },{
      "img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534496496721&di=83d1931f92411c350c450fbf6e61748c&imgtype=0&src=http%3A%2F%2Fimg05.tooopen.com%2Fimages%2F20150520%2Ftooopen_sy_125299632475.jpg",
      "wenzi":"无惧改变/坚持自我 瑜伽教练情迷1系三厢运动轿车"
    },{
      "img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534496496721&di=83d1931f92411c350c450fbf6e61748c&imgtype=0&src=http%3A%2F%2Fimg05.tooopen.com%2Fimages%2F20150520%2Ftooopen_sy_125299632475.jpg",
      "wenzi":"无惧改变/坚持自我 瑜伽教练情迷1系三厢运动轿车"
    }],
    date:""
  },
  methods: {
    getDate(){
      this.setData({ date:new Date().toLocaleString()});
    },
    goArticleDetails(){
      wx.navigateTo({
        url: '/pages/article-details/index'
      })
    }
  }
})