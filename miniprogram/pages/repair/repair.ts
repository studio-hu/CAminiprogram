// pages/repair/repair.ts
import Toast from '@vant/weapp/toast/toast';
import { getUserByOpenId, sumbitRepair } from '../../utils/api/api';
interface IfileList {
    // 图片url
    url: string,
    // 预览图url
    thumb: string,
    // 文件类型
    type: string
}
interface Irepair {
    // 姓名
    userName: string,
    // 错误信息（姓名）
    errorUserName: boolean,
    // 学号
    stuNum: string,
    // 手机号
    phone: string,
    // 错误信息（手机号）
    errorPhone: boolean,
    // 电脑类型
    computerType: string,
    // 电脑型号
    computerModels: string,
    // 问题描述
    problemDescription: string,
    // 预约时间
    timeOfAppointment: string,
    // 宿舍号
    dormitoryNumber: string,
    // 日期选择器
    show: boolean,
    // 图片
    fileList: IfileList[],
}
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userName: '',
        errorUserName: false,
        stuNum: '',
        phone: '',
        errorPhone: false,
        computerType: '',
        computerModels: '',
        problemDescription: '',
        timeOfAppointment: '',
        dormitoryNumber: '',
        show: false,
        fileList: []
    } as Irepair,
    // 路由后退
    onClickLeft(): void {
        wx.navigateBack()
    },
    // 日期选择页面控制
    onDisplay(): void {
        this.setData({ show: true });
    },
    // 日期选择页面控制
    onClose(): void {
        this.setData({ show: false });
    },
    // 日期格式化
    formatDate(date: Date): string {
        date = new Date(date);
        return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
    },
    // 预约日期选择
    onConfirm(event: any): void {
        this.setData({
            show: false,
            timeOfAppointment: this.formatDate(event.detail),
        });
    },
    // 表单输入
    onChange(event: any): void {
        const { type } = event.currentTarget.dataset
        let value: string = event.detail.trim()
        switch (type) {
            case "userName":
                let reg_username: RegExp = /^(?:[\u4e00-\u9fa5·]{2,4})$/
                let errorUserName: boolean = reg_username.test(event.detail)
                this.setData({
                    userName: value,
                    errorUserName: !errorUserName
                })
                break;
            case "phone":
                let reg_phone: RegExp = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/
                let errorPhone: boolean = reg_phone.test(event.detail)
                this.setData({
                    phone: value,
                    errorPhone: !errorPhone
                })
                break;
            default:
                break;
        }
    },
    // 提交维修单
    async handleSubmit(): Promise<void> {

        Toast.loading({
            message: '提交中...',
            forbidClick: true,
            duration: 0
        });
        let { userName, errorUserName, stuNum, phone, errorPhone, computerType, computerModels, problemDescription, timeOfAppointment, dormitoryNumber, fileList } = this.data
        let openid: string = wx.getStorageSync('openid')
        if (userName === '') {
            Toast.fail('请输入姓名'); return;
        }
        if (errorUserName) {
            Toast.fail('姓名格式不正确'); return;
        }
        if (errorPhone) {
            Toast.fail('手机号格式不正确'); return;
        }
        if (phone === '') {
            Toast.fail('请输入手机号'); return;
        }
        if (computerType === '') {
            Toast.fail('请选择电脑类型'); return;
        }
        if (computerModels === '') {
            Toast.fail('请输入电脑型号'); return;
        }
        if (problemDescription === '') {
            Toast.fail('请简单描述问题'); return;
        }
        if (fileList.length === 0) {
            Toast.fail('请选择一张图片'); return;
        }
        if (timeOfAppointment === '') {
            Toast.fail('请选择预约时间'); return;
        }
        if (dormitoryNumber === '') {
            Toast.fail('请输入宿舍号'); return;
        }
        let fileUrl = this.data.fileList[0].url
        let res = await sumbitRepair(fileUrl, 'image', {
            openid,
            phone,
            time: timeOfAppointment,
            realname: userName,
            stunum: stuNum,
            dormnum: dormitoryNumber,
            computertype: computerType,
            computername: computerModels,
            reason: problemDescription
        })
        let data = JSON.parse(res.data)
        // console.log(data);
        if (data.code === 200) {
            Toast.success('提交成功')
            wx.redirectTo({
                url: '../myRepairForm/myRepairForm'
            })
        }
    },
    // 图片暂存
    afterRead(event: any): void {
        const { file } = event.detail;
        let fileList: IfileList[] = []
        fileList.push(...this.data.fileList, {
            url: file.url,
            thumb: file.thumb,
            type: file.type
        })
        this.setData({
            fileList
        })
    },
    // 上传前校验大小限制，最大的上传图片为2m
    beforeRead(event: any): void {
        console.log("e", event);
        // 2M大小

        const SIZE: number = 2097152
        const { file, callback } = event.detail;
        let res: boolean = file.size < SIZE
        if (!res) {
            Toast.fail("图片大小超出限制")
        }
        callback(res);


    },
    // 删除图片
    delete(event: any): void {
        // console.log('e',event);
        const { file } = event.detail;
        // console.log('e', file);
        const fileList = this.data.fileList.filter(item => item.url != file.url)
        this.setData({
            fileList
        })
    },
    

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
        let openid: string = wx.getStorageSync('openid')
        getUserByOpenId({ openid }).then(res => {
            // console.log(res);
            if (res.data.code === 200) {
                // @ts-ignore
                let { stunum, realname, phone, dormnum } = res.data.data[0]
                this.setData({
                    stuNum: stunum,
                    userName: realname,
                    phone,
                    dormitoryNumber: dormnum
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