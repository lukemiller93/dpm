
/**
 * @method normalizePath
 * Takes in a string and returns a normalized relative url path
 * @param  {string} path
 */
export const normalizePath = (path: string): string => {
  if (!path?.endsWith("/")) {
    path = `${path}/`;
  }
  if (!path?.startsWith("/")) {
    path = `/${path}`;
  }

  return path;
};
