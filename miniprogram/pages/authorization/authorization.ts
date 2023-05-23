// pages/authorization/authorization.ts
import Dialog from '@vant/weapp/dialog/dialog';
import Toast from '@vant/weapp/toast/toast';
import { getUserInfo } from "../../utils/api/api"

// 类型定义
type Action = 'confirm' | 'cancel' | 'overlay';
// 登录处理函数
const login = async () => {
    // 获取code,用code来换取用户的openid
    let { code } = await wx.login()
    // 发起请求获取用户的openid
    let res: any = await getUserInfo({ code })
    let openid: string = res.data.data.openid
    if (openid) {
        Toast.success('授权登录成功');
        // 缓存用户openid
        wx.setStorageSync('openid', openid)
        wx.switchTab({
            url: '../index/index'
        })

    } else {
        // 轻提示
        Toast.fail('授权登录失败');
    }
}
// 对话框关闭前的回调函数,返回true关闭对话框,false阻止对话框关闭
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
    // 类型断言,意思就是,告诉编译器,我这个函数返回的是什么
}) as Promise<void | boolean> | void


Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    // 点击授权登录的处理函数
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
            // beforeClose:this.data.beforeClose
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