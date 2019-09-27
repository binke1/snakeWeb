const getters = {
  sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  loading: state => state.user.loading,
  name: state => state.user.username,
  roles: state => state.user.roles,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  clientUuid: state => state.client.uuid,
}
export default getters
