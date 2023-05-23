import config from './config'
/**
 * request网络请求封装
 * @param url 请求路径（必须）
 * @param method 请求方法（必须）
 * @param data  数据
 */
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
/**
 * 文件上传封装
 * @param url 请求路径（必须）
 * @param key 参数的键（必须）
 * @param filePath 图片路径（必须）
 * @param data 数据
 */
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