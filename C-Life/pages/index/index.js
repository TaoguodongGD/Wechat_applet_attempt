const fetch = require('../../utils/fetch')


// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        slides: [],
        categories: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        //使用封装工具函数的写法
        fetch('slides').then(res => {
            this.setData({ slides: res.data })
        })

        fetch('categories').then(res => {
            this.setData({ categories: res.data })
        })


        //一般写法
        // wx.request({
        //   url: 'https://locally.uieee.com/slides',
        //   //箭头函数的特性：更简短的函数并且不绑定this。所以我们可以在这里使用this
        //   success: res => {
        //     this.setData({ slides: res.data })
        //   }
        // })

        // wx.request({
        //   url: 'https://locally.uieee.com/categories',
        //   //箭头函数的特性：更简短的函数并且不绑定this。所以我们可以在这里使用this
        //   success: res => {
        //     this.setData({ categories: res.data })
        //   }
        // })

        //测试http请求
        // wx.request({
        //   url:'https://api.douban.com/v2/movie/coming_soon',
        //   Headers:{
        //     'Content-Type':'json'
        //   },
        //   success:function(request) {
        //     console.log(request);
        //   }
        // })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})