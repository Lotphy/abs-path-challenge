/**
 * Create a list of all paths and their minimum access level
 * @param {Array<Object>} Registry array of routes
 * @returns {Array<Object>} modified registry
 */
export const getAllPaths = (registry) => {
  const allPaths = [];
  registry.forEach(location => {
    const parent = allPaths.find(loc => loc.absolutePath.endsWith(location.parent)) ?? null;
    location.absolutePath = location.parent !== null && location.parent !== '/' ? parent.absolutePath + location.path : location.path;
    allPaths.push(location);
  });
  // Refactor using a reducer
  console.log(allPaths);
  return allPaths
}

/**
 * Check accessibilty for a user
 * @param {Object} User { name: string, level: number }
 * @param {String} Path path to check
 * @param {Array<Object>} ModifiedRegistry getAllPaths() result
 * @returns {Boolean} if the user has acces
 */
export const hasAccess = (user, path, paths): boolean => {
  return false
}

/**
 * Get all paths a user has access too
 * @param {Object} User { name: string, level: number }
 * @param {Array<Object>} ModifiedRegistry getAllPaths() result
 * @returns {Array<Object>} filtered array of routes
 */
export const getUserPaths = (user, paths) => {
  return []
}
