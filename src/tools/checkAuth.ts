export const checkAuth = (): boolean => {
  const token = localStorage.getItem('userToken')
  if (!token) {
    return false
  }
  return true
}
