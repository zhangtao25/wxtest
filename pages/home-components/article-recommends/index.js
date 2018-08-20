Component({
  data: {
    msg:[{
      "title-illustration":"/images/static/img1.jpg",
      "title":"汽车玻璃碎了的安全隐患"
    },{
      "title-illustration":"/images/static/img2.jpg",
      "title":"汽车玻璃的分类（一）夹层玻璃"
    },{
      "title-illustration":"/images/static/img3.jpg",
      "title":"汽车玻璃的分类（二）钢化玻璃"
    },{
      "title-illustration":"/images/static/img4.jpg",
      "title":"汽车玻璃的分类（三）镀膜玻璃"
    },{
      "title-illustration":"/images/static/img5.jpg",
      "title":"我买了车险，还有必要另外购买汽车玻璃险吗？"
    },{
      "title-illustration":"/images/static/img6.jpg",
      "title":"汽车玻璃更换流程"
    },{
      "title-illustration":"/images/static/img7.jpg",
      "title":"镀膜玻璃、贴膜玻璃区别"
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