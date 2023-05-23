// pages/allRepairForm/allRepairForm.ts
import { adminGetRepair } from "../../utils/api/api"
// 维修单数据类型定义
interface IrepairList {
    //电脑型号（类型为字符串）
    computername: string,
    //电脑类型（类型为字符串）
    computertype: string,
    // 预约时间（类型为字符串）
    createtime: string,
    // 宿舍号（类型为字符串）
    dormnum: string,
    // id（类型为数值）
    id: number,
    // 图片（类型为字符串）
    image: string,
    // 维修人员（类型为字符串）
    name: string,
    // 用户唯一标识（类型为字符串）
    openid: string,
    // 手机号（类型为字符串）
    phone: string,
    // 报修人（类型为字符串）
    realname: string,
    // 问题描述（类型为字符串）
    reason: string,
    // 备注（类型为字符串）
    remark: string,
    // 维修人员openid（类型为字符串）
    repairid: string,
    // 维修单状态（0：待处理，1：已接单，2：已完成）（类型为数值）
    state: number,
    // 报修人学号（类型为字符串）
    stunum: string,
    // 更新时间（类型为字符串）
    updatetime: string
}
// 对data的数据进行类型定义
interface Idata {
    // 维修单数据类型为IrepairList对象数组
    repairListAll: IrepairList[],
    repairListPend: IrepairList[],
    repairListGet: IrepairList[],
    repairListDone: IrepairList[],
    /**
     * 分页
     */
    // 全部维修单当前页（类型为数值）
    currentPageAll: number,
    // 状态为待处理的维修单当前页（类型为数值）
    currentPagePend: number,
    // 状态为已接单的维修单当前页（类型为数值）
    currentPageGet: number,
    // 状态为已完成的维修单当前页（类型为数值）
    currentPageDone: number,
    // 每次发送请求返回的数据条数（类型为数值）
    PageSize: number,
    // 总页数（类型为数值）
    pages: number,
    // 屏幕高度（类型为数值）
    windowHeight: number,
    // 显示区域高度（类型为数值）
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
        // 获取当前点击的维修单信息
        let currentValue: IrepairList = event.currentTarget.dataset.value
        // 获取当前点击的维修单状态
        let { state } = event.currentTarget.dataset.value
        wx.navigateTo({
            /**
             * 页面跳转跳转到维修单详情页，路径后可以带参数。
             * 参数与路径之间使用 ? 分隔，参数键与参数值用 = 相连，
             * 不同参数用 & 分隔；如 'path?key=value&key2=value2'
             */
            url: `../showRepair/showRepair?admin=1&state=${state}`,
            events: {
                // 为指定事件添加一个监听器
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
                // 通过eventChannel向被打开页面传送数据
                res.eventChannel.emit('currentValue', {
                    data: currentValue
                })
            }
        })
    },
    // 获取全部维修单
    async getAllRepairs() {
        /**
         * 解构赋值
         * 获取其对应的值
         * currentPageAll：维修单当前页 
         * PageSize 每次发送请求返回的数据条数
         * pages：总页数
         * repairListAll：用来存放全部维修单的数组
         */
        const { currentPageAll, PageSize, pages, repairListAll } = this.data
        // 当前页如果大于总页数，说明全部数据已经加载完
        if (currentPageAll > pages) return;
        /**
         * 调用adminGetRepair()接口获取维修单数据，
         * 因为返回的是一个Promise对象，所以要用await修饰，
         * 用了await修饰，getAllRepairs()也要添加上async
         */
        let res = await adminGetRepair(currentPageAll, PageSize)
        // 总页数
        let pagesAll = res.data.data.pages
        // 当前页
        let current = res.data.data.current
        // 返回的维修单数据
        let repairList = res.data.data.records
        this.setData({
            currentPageAll: current + 1,
            pages: pagesAll,
            /**
             * 使用展开运算符对维修单数据进行合并
             * ...repairListAll:原数据
             * ...repairList：新数据
             */

            repairListAll: [...repairListAll, ...repairList]
        })
        // 确保数据加载够十条
        if (this.data.repairListAll.length < 10) {
            this.getAllRepairs()
        }

    },
    // 获取待处理的维修单
    // 逻辑和getAllRepairs()的一样
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
    // 获取已接单的维修单
    // 逻辑和getAllRepairs()的一样
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
    // 获取已完成的维修单
    // 逻辑和getAllRepairs()的一样
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
    // 页面触底，发起请求加载下一页的数据
    touchBottom(event: any) {
        // console.log("我到底了", event);
        // 判断，到底的是哪个tab
        let type: string = event.currentTarget.dataset.type
        // 根据获取到的tab类型，调用对应获取维修单数据的函数
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
        // 页面初始化，加载数据
        this.getAllRepairs()
        this.getPendRepair()
        this.getGetRepair()
        this.getDoneRepair()
        // 获取屏幕高度
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
            // 获取导航栏高度
            let navHeight = res[0].top
            // 计算出展示页面的高度固定
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