export const parseUrl = (location) => {
  const { pathname } = location
  const [leading, ...paths] = pathname.split('/')
  return paths
}
