import config from './config'

const request = (url: string, method: 'POST' | 'GET', data?: Object) => {
    return new Promise<any>((resolve, reject) => {
        wx.request({
            url: `${config.URL}${url}`,
            method,
            data,
            success: res => {
                return resolve(res)
            },
            fail: error => {
                return reject(error)
            }
        })
    })
}
const uploadFile = (url: string, key: string, filePath: string, data?: Object) => {
    return new Promise<any>((resolve, reject) => {
        wx.uploadFile({
            url: `${config.URL}${url}`,
            filePath,
            name: key,
            formData: {
                ...data
            },
            success: res => {
                return resolve(res)
            },
            fail: error => {
                return reject(error)
            }
        })
    })
}
export { request, uploadFile }