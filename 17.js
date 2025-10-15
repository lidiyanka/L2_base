function cache(func) {
  const cacheStorage = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (key in cacheStorage) {
      return cacheStorage[key];
    }
    const result = func.apply(this, args);
    cacheStorage[key] = result;
    return result;
  };
}
