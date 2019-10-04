import fetch from '@/utils/fetch'

export function createOrder(jsonData) {
  return fetch({
    url: '/order/loginUser/prepaidCard/placeOrder',
    method: 'post',
    data: jsonData
  })
}

//订单搜索功能
export function findOrderPage(pageNo,pageSize,lcid,jsonData) {
  return fetch({
    url: 'order/loginUser/findOrderPage?pageNo=' + pageNo + '&pageSize=' + pageSize + '&cid=' + lcid,
    data:jsonData,
    method: 'post'
  })
}

// 获取订单留言
export function getCommentOrderList(orderUuid) {
  return fetch({
    url: '/order/loginUser/comment/getList/' + orderUuid,
    method: 'get'
  })
}

// 删除订单
export function deleteCommentOrder(orderUuid) {
  return fetch({
    url: '/order/loginUser/delete/' + orderUuid,
    method: 'get'
  })
}

// 获取单个order
export function getOrderList(orderUuid) {
  return fetch({
    url: '/order/loginUser/getOrder/' + orderUuid,
    method: 'get'
  })
}
