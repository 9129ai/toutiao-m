// 用户相关接口模块
// 导入全局axios配置中导出的请求方式
import { request } from '../utils/request.js'
// 创建接口方法
// @params 表示的请求参数（必须要说明的项目）
// @return 表示后端响应接口返回回来的值
/**
 * 说明：用户登录
 * @params userName 用户名 String
 * @params password 密码 String
 * @return userInfo 用户登录信息 Object
 */
export const login = data => {
  return request({
    method: 'POST',
    url: '/v1_0/authorizations',
    data
  })
}
