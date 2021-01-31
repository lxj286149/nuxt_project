export function setUserStorages(key, value) {
  if (process.env.VUE_ENV === 'client') {
    let storage = window.localStorage
    storage.setItem(key, value);
  }
}
export function getUserStorage(key) {
  if (process.env.VUE_ENV === 'client') {
    let storage = window.localStorage;
    var v = storage.getItem(key);
    if (!v) {
      return;
    } else {
      return JSON.parse(v);
    }
  }
}
//////////////对用户的操作
export function setLocalStorages(key, value) {
  if (process.env.VUE_ENV === 'client') {
    let storage = window.localStorage
    let v = value;
    //是对象转成JSON，不是直接作为值存入内存
    if (typeof v == 'object') {
      v = JSON.stringify(v);
      v = 'obj-' + v;
    } else {
      v = 'str-' + v;
    }
    storage.setItem(key, v);
  }
}
export function getLocalStorage(key) {

  if (process.env.VUE_ENV === 'client') {
    let storage = window.localStorage;
    var v = storage.getItem(key);

    if (!v) {
      return;
    }
    if (v.indexOf('obj-') === 0) {
      v = v.slice(4);
      return JSON.parse(v);
    } else if (v.indexOf('str-') === 0) {
      return v.slice(4);
    }
  }
}
export function setSessionStorage(key, value) {
  if (process.env.VUE_ENV === 'client') {
    let storage = window.sessionStorage
    let v = value;
    if (typeof v == 'object') {
      v = JSON.stringify(v);
      v = 'obj-' + v;
    } else {
      v = 'str-' + v;
    }
    storage.setItem(key, v);
  }
}
export function getSessionStorage(key) {
  if (process.env.VUE_ENV === 'client') {
    let storage = window.sessionStorage

    var v = storage.getItem(key);
    if (!v) {
      return;
    }
    if (v.indexOf('obj-') === 0) {
      v = v.slice(4);
      return JSON.parse(v);
    } else if (v.indexOf('str-') === 0) {
      return v.slice(4);
    }
  }
}
export function filterFun(value, longs) {
  if (value && value.length > longs) {
    value = value.substring(0, longs) + '…';
  }
  return value;
}
