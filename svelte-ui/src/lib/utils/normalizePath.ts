export const normalizePath = (path: string): string => {
  if(!path?.endsWith('/')) {
    path = `${path}/`
  }
  if(!path?.startsWith('/')) {
    path = `/${path}`
  }

  return path
}
