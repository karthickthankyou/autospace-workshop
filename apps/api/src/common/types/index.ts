export type Role = 'admin' | 'manager'

export type GetUserType = {
  uid: string
  roles: Role[]
}
