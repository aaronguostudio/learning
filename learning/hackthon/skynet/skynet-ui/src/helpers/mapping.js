import { roleOptions } from '../config/common'

let roleValToLabel = (roleVal) => {
  let role = roleOptions.find(item => item.value === roleVal)
  if (!role) return ''
  return role.label
}

export {
  roleValToLabel
}
