import employeesApi from '@/api/companyApi'

export const loginAuth = async ({commit}, user) => {
  const { data } = await employeesApi.post(`/auth/login`, user)
  commit('setUserAuth', data)
  localStorage.setItem('token', data.token)
}
