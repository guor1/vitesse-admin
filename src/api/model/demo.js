import config from '~/config'
import http from '~/utils/request'

export default {
  ver: {
    url: `${config.API_URL}/demo/ver`,
    name: '获取最新版本号',
    async get () {
      return await http.get(this.url)
    },
  },
  post: {
    url: `${config.API_URL}/demo/post`,
    name: '分页列表',
    async post (data) {
      return await http.post(this.url, data, {
        headers: {
          // 'response-status': 401
        },
      })
    },
  },
  page: {
    url: `${config.API_URL}/demo/page`,
    name: '分页列表',
    async get (params) {
      return await http.get(this.url, params)
    },
  },
  menu: {
    url: `${config.API_URL}/demo/menu`,
    name: '普通用户菜单',
    async get () {
      return await http.get(this.url)
    },
  },
}
