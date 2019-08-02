const fetch = require('../../utils/fetch')

// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //当前加载的分类
    category: {},
    //此分类下的全部店铺
    shops: [],
    pageIndex: 0,
    pageSize: 20,
    totalCount: 0,
    hasMore: true
  },


  //加载下一页数据
  loadMore: function() {
    if (!this.data.hasMore) return
    let {
      pageIndex,
      pageSize,
      searchText
    } = this.data
    const params = {
      _page: ++pageIndex,
      _limit: pageSize
    }
    if (searchText) params.q = searchText

    return fetch(`categories/${this.data.category.id}/shops`, params)
      .then(res => {
        const totalCount = parseInt(res.header['X-Total-Count'])
        const hasMore = pageIndex * pageSize < totalCount
        //把新加载的数据加到数组后面
        const shops = this.data.shops.concat(res.data);
        this.setData({
          shops,
          totalCount,
          pageIndex,
          hasMore
        })
      })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    fetch(`categories/${options.cat}`).then(res => {
      this.setData({
        category: res.data
      })
      wx.setNavigationBarTitle({
        title: res.data.name
      })

      //加载完分类信息之后再去加载商铺信息
      this.loadMore();
      //进一步封装
      // return fetch(`categories/${this.data.category.id}/shops`, { _page: 1, _limit: 10 })
    })
    //进一步封装
    // .then(res => {
    //     this.setData({ shops: res.data })
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    if (this.data.category.name) {
      wx.setNavigationBarTitle({
        title: res.data.name
      });
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
    //重新加载数据
    this.setData({
      shops: [],
      pageIndex: 0,
      hasMore: true,
      searchText: ''
    })
    this.loadMore().then(() => wx.stopPullDownRefresh())

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log("到底了，别拉了");
    //需要判断是否正在加载，否则会有多次触发问题
    this.loadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  searchHandle() {
    this.setData({
      shops: [],
      pageIndex: 0,
      hasMore: true
    })
    this.loadMore()
  },

  showSearchHandle() {
    this.setData({
      searchShowed: true
    })
  },
  hideSearchHandle() {
    this.setData({
      searchText: '',
      searchShowed: false
    })
  },
  clearSearchHandle() {
    this.setData({
      searchText: ''
    })
  },
  searchChangeHandle(e) {
    this.setData({
      searchText: e.detail.value
    })
  }
})