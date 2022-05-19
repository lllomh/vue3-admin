/**
 * 使用方法：
 *    1. import request from '@request/index'
 *    2. request({
          url: '/auth/oauth/token'
        }).then(({data}: any) => {
          return data.data;
        }).then(d => {
          console.log(d)
        })
 */

export default [
  // getToken
  {
    url: '/auth/oauth/token',
    method: 'get',
    response() {
      return {
        code: 200,
        msg: '成功',
        data: {
          name: 'test get token'
        }
      }
    }
  }
]