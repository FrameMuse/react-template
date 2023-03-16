export interface User {
  id: number

  signed: boolean
  type: UserType

  avatar: string
  userName: string
  // firstName: string
  // lastName: string

  createdAt: Date
}

/**
 * To help comparing user types, `Admin` is highest in rank for this enum.
 */
export enum UserType {
  Default, Admin
}
