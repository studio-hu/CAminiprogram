// pages/authorization/authorization.ts
import Dialog from '@vant/weapp/dialog/dialog';
import Toast from '@vant/weapp/toast/toast';
import { getUserInfo } from "../../utils/api/api"

type Action = 'confirm' | 'cancel' | 'overlay';
const login = async () => {
    let { code } = await wx.login()
    console.log(code)
    let res: any = await getUserInfo({ code })
    let openid: string = res.data.data.openid
    if (openid) {
        Toast.success('授权登录成功');
        wx.setStorageSync('openid', openid)
        wx.switchTab({
            url: '../index/index'
        })

    } else {
        Toast.fail('授权登录失败');
    }
}
const beforeClose = (action: Action) => new Promise(async (resolve) => {
    // 返回true可关闭对话框
    if (action === 'confirm') {
        // 点击确认
        await login()
        resolve(true);
    } else {
        // 点击取消
        resolve(true)
    }
}) as Promise<void | boolean> | void


Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    handleConfirm() {
        /**
         * 此处需要接.then({ }).catch({ }),否则会报错
         * Error: MiniProgramError
         *  {"__wxExparserNodeId__":"0f7c27e9"}
         */
        Dialog.confirm({
            title: '微信授权',
            message: '计协报修小程序申请获取账号信息',
            beforeClose
        }).then(() => {
            // 确定
        }).catch(() => {
            // 取消
        })
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