import fetch from '@/utils/fetch'

export function getPageProductList(pageNo, pageSize, jsonData) {
  return fetch({
    url: '/prepaidCard/getPage?pageNo=' + pageNo + '&pageSize=' + pageSize,
    method: 'post',
    data: jsonData
  })
}

export function getProductList(jsonData) {
  return fetch({
    url: '/prepaidCard/getList',
    method: 'post',
    data: jsonData
  })
}

