import fetch from "@/utils/fetch";

export function register(jsonData, type) {
  return fetch({
    url: '/register?type=' + type,
    method: 'post',
    data: jsonData
  })
}

export function activeUser(activeMailUuid, userUuid) {
  return fetch({
    url: '/activeClient/' + activeMailUuid +'/' + userUuid,
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

export function userRegister(jsonData) {
  return fetch({
    url: '/users/client/register',
    method: 'post',
    data: jsonData
  })
}
