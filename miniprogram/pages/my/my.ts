// pages/my/my.ts
import { getUserByOpenId, getRepairFormByOpenId } from "../../utils/api/api"

Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 姓名
        realname: '',
        // 头像地址
        headshot: '',
        repair: 0
    },
    // 退出登录
    logout(): void {
        // 清除所有缓存
        wx.clearStorage()
        wx.reLaunch({
            url: '../authorization/authorization'
        })
    },
    // 展示用户详细信息
    personalInformation(): void {
        let openid: string = wx.getStorageSync('openid')
        wx.navigateTo({
            url: '../personalInformation/personalInformation',
            events: {
                // 为指定事件添加一个监听器
                refresh: () => {
                    getUserByOpenId({ openid }).then(res => {
                        if (res.data.code === 200) {
                            // @ts-ignore
                            let { headshot, realname, repair } = res.data.data[0]
                            this.setData({
                                headshot,
                                realname,
                                repair
                            })
                        }
                    })
                }
            } 
        })
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
        let openid: string = wx.getStorageSync('openid')
        // 获取用户提交的维修单,状态为待处理的维修单
        getRepairFormByOpenId( openid ).then(res => {
            let list = res.data.data.reverse()
            // @ts-ignore
            let repairListPend = list.filter(item => item.state === 0)
            this.setData({
                repairListPend
            })
        })
        // 获取用户个人信息
        getUserByOpenId({ openid }).then(res => {
            if (res.data.code === 200) {
                // @ts-ignore
                let { headshot, realname, repair } = res.data.data[0]
                this.setData({
                    headshot,
                    realname,
                    repair
                })
            }
        })


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