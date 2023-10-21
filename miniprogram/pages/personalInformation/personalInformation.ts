// pages/personalInformation/personalInformation.ts
import Toast from '@vant/weapp/toast/toast';
import { updateUserInfo, uploadAvatar, selectUserByOpenId } from "../../utils/api/api"

Page({

    /**
     * 页面的初始数据
     */
    data: {
        id: '',
        realname: '',
        stunum: '',
        phone: '',
        errorPhone: false,
        errorUserName: false,
        fileList: [],
        headshot: 'http://www.seig.castudio.work/image/Grua.jpg',
        dormnum: ''

    },
    onClickLeft(): void {
        wx.navigateBack()
    },
    async modifyInformation(): Promise<void> {
        Toast.loading({
            message: '保存中...',
            forbidClick: true,
            duration: 0
        });
        let { realname, stunum, phone, dormnum } = this.data
        let id = this.data.id
        let res = await updateUserInfo({
            id,
            realname,
            stunum,
            phone,
            dormnum
        })
        if (res.data.code === 200) {
            Toast.success('保存成功')
            const eventChannel = this.getOpenerEventChannel()
            eventChannel.emit('refresh')
        }

    },
    // async uploadImg() {

    //     let res = await wx.chooseMedia({
    //         count: 1,
    //         mediaType: ['image', 'video'],
    //         sourceType: ['album', 'camera'],
    //         maxDuration: 30,
    //         camera: 'back'
    //     })
    //     Toast.loading({
    //         message: '保存中...',
    //         forbidClick: true,
    //         duration: 0
    //     });
    //     let fileUrl = res.tempFiles[0].tempFilePath
    //     let result = await uploadAvatar(fileUrl,'Image')
    //     console.log(result);
    //     // 服务器返回的图片地址
    //     const imgUrl = JSON.parse(result.data).image
    //     let id = this.data.id
    //     let resAvatar = await updateUserInfo({
    //         id,
    //         headshot: imgUrl
    //     })
    //     if (resAvatar.data.code === 200) {
    //         Toast.success('头像保存成功')
    //         this.onLoad()
    //         const eventChannel = this.getOpenerEventChannel()
    //         eventChannel.emit('refresh')
    //     }
    // },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
        let openid: string = wx.getStorageSync('openid')
        selectUserByOpenId({ openid }).then(res => {
            if (res.data.code === 200) {
                // @ts-ignore
                let { id, headshot, phone, stunum, realname, dormnum } = res.data.data[0]
                this.setData({
                    id,
                    headshot,
                    phone,
                    stunum,
                    realname,
                    dormnum
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