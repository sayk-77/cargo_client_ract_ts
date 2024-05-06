import { jwtDecode } from 'jwt-decode'

export const checkRole = (): string | undefined => {
  const token = localStorage.getItem('adminToken')

  if (token) {
    const decodedToken: { [key: string]: any } = jwtDecode(token)

    if (decodedToken) {
      const role = decodedToken.role
      return role
    }
    return undefined
  }
}
