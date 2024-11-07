/* eslint-disable no-multi-assign */

export function deepFreeze(obj) {
  if (obj instanceof Map) {
    obj.clear =
      obj.delete =
      obj.set =
        function () {
          throw new Error("map is read-only");
        };
    for (const [key, value] of obj.entries()) {
      deepFreeze(key);
      deepFreeze(value);
    }
  } else if (obj instanceof Set) {
    obj.add =
      obj.clear =
      obj.delete =
        function () {
          throw new Error("set is read-only");
        };
    for (const value of obj.values()) {
      deepFreeze(value);
    }
  } else if (obj instanceof WeakSet) {
    obj.add = obj.delete = function () {
      throw new Error("WeakSet is read-only");
    };
  } else if (obj instanceof WeakMap) {
    obj.set = obj.delete = function () {
      throw new Error("WeakMap is read-only");
    };
  }

  // Freeze self
  Object.freeze(obj);

  Object.getOwnPropertyNames(obj).forEach((name) => {
    const prop = obj[name];
    const type = typeof prop;

    // Freeze prop if it is an object or function and also not already frozen
    if ((type === "object" || type === "function") && !Object.isFrozen(prop)) {
      deepFreeze(prop);
    }
  });

  return obj;
}

export default deepFreeze;
