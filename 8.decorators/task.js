//Задача № 1
// function cachingDecoratorNew(func) {
//   let cache = [];
//   const maxCacheValuesCount = 5;
//   return (...args) => {

// 	const hash = args.join(',');
// 	if(hash in cache) {
// 		return cache[hash];
// 	}
// 	const result = func(...args);
// 	cache[hash] = result;
// 	return result;
//   }
// }

function cachingDecoratorNew(func) {
  let cache = [];
  const maxCacheValuesCount = 5;
  return (...args) => {
    const hash = md5(args);
    let objectInCache = cache.find((item) => item.hash === hash);
    if (objectInCache) {
      console.log("Из кеша: " + objectInCache.value);
      return "Из кеша: " + objectInCache.value;
    }

    const result = func(...args);
    cache.push({ hash: hash, value: result });
    if (cache.length > maxCacheValuesCount) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  };
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  wrapper.count = 0;
  wrapper.allCount = 0;

  function wrapper(...args) {
    wrapper.allCount++;
    if (timeoutId) {
      clearTimeout(timeoutId);
    } else {
      wrapper.count++;
      func(...args);
    }
    timeoutId = setTimeout(() => {
      wrapper.count++;
      return func(...args);
    }, delay);
  }

  return wrapper;
}
