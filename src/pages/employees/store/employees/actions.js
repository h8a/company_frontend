import employeesApi from '@/api/companyApi'

export const getEmployees = async ({commit}) => {
  const { data } = await employeesApi.get(`/employees`)
  commit('setEmployees', data)
}

export const sendEmployee = async (_, employee) => {
  const { data } = await employeesApi.post(`/employees`, employee)
  console.log(data)
}

export const getEmployeeByID = async ({commit}, employeeID) => {
  const { data } = await employeesApi.get(`/employees/${ employeeID }`)
  return data
}

export const updateEmployee = async (_, employee) => {
  const employeeID = employee.id
  delete employee.id
  delete employee.create_at
  delete employee.status
  const { data } = await employeesApi.put(`/employees/${ employeeID }`, employee)
}

export const getBeneficiaries = async ({commit}, employeeID) => {
  const { data } = await employeesApi.get(`/employees/${ employeeID }/beneficiaries`)
  commit('setBeneficiaries', data)
}

export const sendBeneficiaries = async (_, beneficiarie) => {
  const employeeID = beneficiarie.employee_id
  delete beneficiarie.employee_id
  const { data } = await employeesApi.post(`/employees/${ employeeID }/beneficiaries`, beneficiarie)
}
