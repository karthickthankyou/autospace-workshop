export type Role = 'admin' | 'manager' | 'valet'

export type GetUserType = {
  uid: string
  roles: Role[]
}
