// pages/showRepair/showRepair.ts
import Toast from '@vant/weapp/toast/toast';
import { updateRepair, selectUserByOpenId } from "../../utils/api/api"
interface IcurrentValue {
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
interface Iimg {
    url: string,
    deletable: boolean
}
interface Ishowrepair {
    img: Iimg[],
    currentValue: IcurrentValue,
    showDialog: boolean,
    beforeClose: Function,
    state: string,
    remarkshow: boolean,
    remark: string,
    repairName:string
}
Page({

    /**
     * 页面的初始数据
     */
    data: {
        img: [],
        currentValue: {
            computername: '',
            computertype: '',
            createtime: '',
            dormnum: '',
            id: NaN,
            image: '',
            name: '',
            openid: '',
            phone: '',
            realname: '',
            reason: '',
            remark: '',
            repairid: '',
            state: NaN,
            stunum: '',
            updatetime: ''
        },
        showDialog: false,
        beforeClose: function (action: any) {
            return new Promise<boolean>(async (resolve) => {
                // @ts-ignore
                let state: number = this.data.state
                if (action === 'confirm') {
                    // @ts-ignore
                    await this.getRepair(state * 1)
                    resolve(true)
                } else {
                    resolve(true)
                }
            })
        },
        state: '',
        remarkshow: false,
        size: { minHeight: 100 },
        remark: '',
        repairName:''
    } as Ishowrepair,
    // 路由后退
    onClickLeft(): void {
        wx.navigateBack()
    },
    // 维修人员接单
    handleRepair(event: any): void {
        console.log(event);
        let state: string = this.data.state
        if (state === '0') {
            this.showDialog()
        } else {
            this.showRemark()
        }

    },
    showDialog() {
        this.setData({
            showDialog: !this.data.showDialog
        })
    },
    showRemark() {
        this.setData({
            remarkshow: !this.data.remarkshow
        })
    },
    async getRepair(state: number): Promise<void> {
        let repairid: string = wx.getStorageSync('openid')
        let id: number = this.data.currentValue.id
        let res = await updateRepair({
            state: state + 1,
            repairid,
            name: this.data.repairName,
            id,
            updatetime: this.formatDate()
        })
        if (res.data) {
            if (state === 0) {
                Toast.success('接单成功');
            }
            setTimeout(() => wx.navigateBack({
                success: () => {
                    let eventChannel = this.getOpenerEventChannel()
                    eventChannel.emit("refreshPage")
                }
            }), 500)
        }

    },
    // 日期格式化
    formatDate(): string {
        let date = new Date();
        return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日 ${date.getHours()}:${date.getMinutes()}`;
    },
    async handleDone(): Promise<void> {
        let remark: string = this.data.remark
        if (remark === '') {
            Toast.fail('请输入备注'); return;
        }
        Toast.loading({
            message: '提交中...',
            forbidClick: true,
        });
        let id: number = this.data.currentValue.id
        let state: number = this.data.currentValue.state
        let res = await updateRepair({
            id,
            remark,
            state: state + 1
        })
        if (res.data) {
            Toast.success('此单完成');
            setTimeout(() => wx.navigateBack({
                success: () => {
                    let eventChannel = this.getOpenerEventChannel()
                    eventChannel.emit("refreshPage")
                }
            }), 500)
        }


    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        let openid:string=wx.getStorageSync('openid')
        selectUserByOpenId({openid}).then(res=>{
            if (res.data.code === 200) {
                // @ts-ignore
                let { realname } = res.data.data[0]
                this.setData({
                    repairName:realname
                })
            }
        })
        const eventChannel = this.getOpenerEventChannel()
        eventChannel.on('currentValue', res => {
            let img = [{
                url: res.data.image,
                deletable: false
            }]
            this.setData({
                currentValue: res.data,
                img,
                admin: options.admin,
                state: options.state,
                beforeClose: this.data.beforeClose.bind(this),
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