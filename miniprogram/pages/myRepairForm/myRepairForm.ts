// pages/myRepairForm/myRepairForm.ts
import { getRepairFormByOpenId } from "../../utils/api/api"
interface IrepairList {
    computername: string,
    computertype: string,
    createtime: string,
    dormnum: string,
    id: number,
    image: string,
    name: string,
    openid: string,
    phone: string,
    realname: string,
    reason: string,
    remark: string,
    repairid: string,
    state: number,
    stunum: string,
    updatetime: string
}
interface ImyRepair {
    // 全部维修单
    repairListAll: IrepairList[],
    // 待处理
    repairListPend: IrepairList[],
    // 已接单
    repairListGet: IrepairList[],
    // 已完成
    repairListDone: IrepairList[]
}

Page({

    /**
     * 页面的初始数据
     */
    data: {
        repairListAll: [],
        repairListPend: [],
        repairListGet: [],
        repairListDone: []

    } as ImyRepair,
    // 路由后退
    onClickLeft(): void {
        wx.navigateBack()
    },
    // 维修单详情页
    showRepair(event: any): void {
        console.log('event', event);
        let currentValue: IrepairList = event.currentTarget.dataset.value
        wx.navigateTo({
            url: '../showRepair/showRepair',
            success: res => {
                res.eventChannel.emit('currentValue', {
                    data: currentValue
                })
            }
        })
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // console.log('options', options);
        this.setData({
            tab: options.tab
        })
        let openid: string = wx.getStorageSync('openid')
        getRepairFormByOpenId(openid).then(res => {
            console.log(res);
            let list: IrepairList[] = res.data.data.reverse()
            let repairListPend: IrepairList[] = list.filter(item => item.state === 0)
            let repairListGet: IrepairList[] = list.filter(item => item.state === 1)
            let repairListDone: IrepairList[] = list.filter(item => item.state === 2)
            this.setData({
                repairListAll: list,
                repairListPend,
                repairListGet,
                repairListDone
            })
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