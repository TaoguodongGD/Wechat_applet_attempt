module.exports = (url, data) => {
    //GET
    return new Promise((resolve, reject) => {
        wx.request({
            url: `https://locally.uieee.com/${url}`,
            //箭头函数的特性：更简短的函数并且不绑定this。所以我们可以在这里使用this
            data: data,
            success: resolve,
            fail: reject
        })
    })
}