import request from '@/utils/request'

export function getActives (params) {
  return request({
    url: 'web/getActivityId',
    method: 'get',
    params: params
  })
}

// post
export function aaa (data) {
  return request({
    url: 'web/postDemo',
    method: 'post',
    data: data
  })
}
