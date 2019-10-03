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
