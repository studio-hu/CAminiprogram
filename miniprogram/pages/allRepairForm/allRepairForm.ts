// pages/allRepairForm/allRepairForm.ts
import { adminGetRepair } from "../../utils/api/api"
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
interface Idata {
    repairListAll: IrepairList[],
    repairListPend: IrepairList[],
    repairListGet: IrepairList[],
    repairListDone: IrepairList[],
    currentPageAll: number,
    currentPagePend: number,
    currentPageGet: number,
    currentPageDone: number,
    PageSize: number,
    pages: number,
    windowHeight: number,
    height: number
}
Page({

    /**
     * 页面的初始数据
     */
    data: {
        repairListAll: [],
        repairListPend: [],
        repairListGet: [],
        repairListDone: [],
        currentPageAll: 1,
        currentPagePend: 1,
        currentPageGet: 1,
        currentPageDone: 1,
        PageSize: 10,
        pages: NaN,
        windowHeight: NaN,
        height: NaN
    } as Idata,
    // 路由后退
    onClickLeft(): void {
        wx.navigateBack()
    },
    // 维修单详情页
    showRepair(event: any): void {
        console.log('event', event);
        let currentValue: IrepairList = event.currentTarget.dataset.value
        let { state } = event.currentTarget.dataset.value
        wx.navigateTo({
            url: `../showRepair/showRepair?admin=1&state=${state}`,
            events: {
                refreshPage: () => {
                    this.setData({
                        repairListAll: [],
                        repairListPend: [],
                        repairListGet: [],
                        repairListDone: [],
                        currentPageAll: 1,
                        currentPagePend: 1,
                        currentPageGet: 1,
                        currentPageDone: 1,
                    })
                    this.onLoad()
                }
            },
            success: res => {
                res.eventChannel.emit('currentValue', {
                    data: currentValue
                })
            }
        })
    },
    async getAllRepairs() {
        const { currentPageAll, PageSize, pages, repairListAll } = this.data
        if (currentPageAll > pages) return;
        let res = await adminGetRepair(currentPageAll, PageSize)
        let pagesAll = res.data.data.pages
        let current = res.data.data.current
        let repairList = res.data.data.records
        this.setData({
            currentPageAll: current + 1,
            pages: pagesAll,
            repairListAll: [...repairListAll, ...repairList]
        })
        if (this.data.repairListAll.length < 10) {
            this.getAllRepairs()
        }

    },
    async getPendRepair() {
        const { currentPagePend, PageSize, pages, repairListPend } = this.data
        if (currentPagePend > pages) return;
        let res = await adminGetRepair(currentPagePend, PageSize)
        let pagesAll = res.data.data.pages
        let current = res.data.data.current
        let repairList = res.data.data.records
        let repairFilterList = repairList.filter((item: { state: number; }) => item.state === 0)
        this.setData({
            currentPagePend: current + 1,
            pages: pagesAll,
            repairListPend: [...repairListPend, ...repairFilterList]
        })
        if (this.data.repairListPend.length < 10) {
            this.getPendRepair()
        }

    },
    async getGetRepair() {
        const { currentPageGet, PageSize, pages, repairListGet } = this.data
        if (currentPageGet > pages) return;
        let res = await adminGetRepair(currentPageGet, PageSize)
        let pagesAll = res.data.data.pages
        let current = res.data.data.current
        let repairList = res.data.data.records
        let repairFilterList = repairList.filter((item: { state: number; }) => item.state === 1)
        this.setData({
            currentPageGet: current + 1,
            pages: pagesAll,
            repairListGet: [...repairListGet, ...repairFilterList]
        })
        if (this.data.repairListGet.length < 10) {
            this.getGetRepair()
        }

    },
    async getDoneRepair() {
        const { currentPageDone, PageSize, pages, repairListDone } = this.data
        if (currentPageDone > pages) return;
        let res = await adminGetRepair(currentPageDone, PageSize)
        console.log(res);
        let pagesAll = res.data.data.pages
        let current = res.data.data.current
        let repairList = res.data.data.records
        let repairFilterList = repairList.filter((item: { state: number; }) => item.state === 2)
        this.setData({
            currentPageDone: current + 1,
            pages: pagesAll,
            repairListDone: [...repairListDone, ...repairFilterList]
        })
        if (this.data.repairListDone.length < 10) {
            this.getDoneRepair()
        }

    },
    touchBottom(event: any) {
        // console.log("我到底了", event);
        let type: string = event.currentTarget.dataset.type
        switch (type) {
            case 'all':
                this.getAllRepairs()
                break;
            case 'pend':
                this.getPendRepair()
                break;
            case 'get':
                this.getGetRepair()
                break;
            case 'done':
                this.getDoneRepair()
                break;
            default:
                break;
        }

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
        this.getAllRepairs()
        this.getPendRepair()
        this.getGetRepair()
        this.getDoneRepair()
        wx.getSystemInfo({
            success: res => {
                this.setData({
                    windowHeight: res.windowHeight
                });
            }
        });
        const query = wx.createSelectorQuery()
        query.select('#tabs').boundingClientRect()
        query.selectViewport().scrollOffset()
        query.exec(res => {
            // console.log(res);
            let navHeight = res[0].top
            let height = this.data.windowHeight - navHeight
            this.setData({
                height
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