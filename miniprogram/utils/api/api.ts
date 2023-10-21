import { request, uploadFile } from './request'

/**
 * 获取openid
 * 获取用户信息
 * 授权登录
*/
const getUserInfo = (data: Object) => request('/user/getUserInfo', 'POST', data)

/**
 * 根据openid查询用户信息
 */
const getUserByOpenId = (data: Object) => request('/user/Obscure', 'POST', data)

/**
 * 根据openid获取对应的维修单
 */
const getRepairFormByOpenId = (openid: string) => request(`/repairtable/Page?openid=${openid}&page=1&size=1000`, 'POST')

/**
 * 更新用户信息
 */
const updateUserInfo = (data: Object) => request('/user/AddOrUpdate', 'POST', data)

/**
 * 用户头像上传
 */
const uploadAvatar = (fileUrl: string, key: string) => uploadFile('/user/Image', key, fileUrl)
/**
 * 根据用户openid查询用户信息
 */
const selectUserByOpenId = (data: Object) => request('/user/Obscure', 'POST', data)

/**
 * 提交维修单
 */
const sumbitRepair = (fileUrl: string, key: string, data: Object) => uploadFile('/repairtable/uploadFile', key, fileUrl, data)
/**
 * 管理员获取维修表
 */
const adminGetRepair = (currentPage: number, PageSize: number) => request(`/repairtable/${currentPage}/${PageSize}`, 'GET')

/**
 * 维修单信息更新
 */
const updateRepair = (data: Object) => request('/repairtable/update', 'POST', data)

export {
    getUserInfo,
    getUserByOpenId,
    getRepairFormByOpenId,
    updateUserInfo,
    uploadAvatar,
    selectUserByOpenId,
    sumbitRepair,
    adminGetRepair,
    updateRepair
}
