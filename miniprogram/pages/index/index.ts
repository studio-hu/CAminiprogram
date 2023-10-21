// pages/index/index.ts
import Toast from '@vant/weapp/toast/toast';
import { getUserByOpenId } from "../../utils/api/api"
interface Idata {
    /**
     * 首页轮播图图片，显示效果最好为(390宽/150高)
     */
    imgList: string[]
}
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imgList: [
            'http://www.seig.castudio.work/image/ca1.jpg',
            'http://www.seig.castudio.work/image/ca2.jpg',
            'http://www.seig.castudio.work/image/ca3.jpg',
            'http://www.seig.castudio.work/image/ca4.jpg'
        ]

    } as Idata,
    toast():void{
        Toast('此模块开发中')
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
        let openid: string = wx.getStorageSync('openid')
        if (openid === '') {
            wx.reLaunch({
                url: '../authorization/authorization'
            })
            return;
        }
        getUserByOpenId({openid}).then(res => {
            if (res.data.code === 200) {
                let { repair } = res.data.data[0]
                this.setData({
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