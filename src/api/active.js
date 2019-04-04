import request from '@/utils/request'
import qs from 'qs'

export function getActives (params) {
  return request({
    url: 'web/getActivityId',
    method: 'get',
    params: params
  })
}

export function getActiveCon (data) {
  return request({
    url: 'web/getNewActivityById',
    method: 'post',
    data: qs.stringify(data)
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
