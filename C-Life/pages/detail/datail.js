// pages/detail/datail.js
const fetch = require('../../utils/fetch')

Page({

    /**
     * 页面的初始数据
     */
    data: {
        shop: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        fetch(`shops/${options.item}`)
            .then(res => {
                this.setData({
                        shop: res.data
                    })
                    // console.log("标题前")
                    // console.log("shop:"+this.shop)
                    // console.log(res)
                wx.setNavigationBarTitle({ title: res.data.name })
                    // console.log("标题后")
            })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
        if (this.data.shop.name) {
            console.log("1111")
            wx.setNavigationBarTitle({
                title: res.data.name
            })
        }
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

    },

    previewbind: function(e) {
        // console.log(e)
        wx.previewImage({
            current: e.target.dataset.src,
            urls: this.data.shop.images
        });
    }
})