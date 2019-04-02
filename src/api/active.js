import request from '@/utils/request'

export function getActives (params) {
  return request({
    url: 'web/getActivityId',
    method: 'post',
    data: params
  })
}
