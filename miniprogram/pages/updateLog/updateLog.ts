// pages/updateLog/updateLog.ts
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [{
            version: 'v3.0.0',
            date: '2023/5/17',
            detail: [
                '全新设计全新UI，友好的交互'
            ]
        }, {
            version: 'v2.0.1',
            date: '2021/10/04',
            detail: [
                '新增活动板块'
            ]
        }, {
            version: 'v1.1.3',
            date: '2021/09/04',
            detail: [
                '新增客服消息与转发功能'
            ]
        },
        {
            version: 'v1.1.2',
            date: '2021/07/01',
            detail: [
                '修复了一些已知问题'
            ]
        },{
            version: 'v1.1.1',
            date: '2021/06/18',
            detail: [
                '1.0版本上线'
            ]
        }]
    },
    onClickLeft() {
        wx.navigateBack()
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})