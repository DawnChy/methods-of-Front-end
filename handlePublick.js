const handlePublic = {
  /**
   * 测试指定参数是否非空数组
   * @param {any} a 
   * @return {Boolean} a instanceof Array && a.length > 0
   */
  isArray: a => {
    return a instanceof Array && a.length > 0;
  },

  /**
   * 测试参数是否object。数组返回false
   * @param {*} obj 要测试的参数
   * @return obj !== null && typeof obj === 'object' && (obj instanceof Array === false);
   */
  isObject: obj => {
    return obj !== null && typeof obj === 'object' && (obj instanceof Array === false);
  },

  /**
   * 如果是参数值是null、undefined、空数组则返回空字符串，否则返回其本身
   * @param {*} s 
   * @returns {boolean} (s == null || s == undefined || s.length == 0) ? '' : s
   */
  isNull: s => {
    return (s == null || s == undefined || s.length == 0) ? '' : s;
  },
  /**
   * 测试参数是否undefined或null
   * @param {*} v 待测试参数
   */
  isUndef: v => {
    return v === undefined || v === null
  },

  /**
   * 测试值是否有效
   * @param {*} s 要测试的值
   * @returns {boolean} (s == null || s == undefined || s.length == 0)
   */
  isNone: s => {
    return (s == null || s == undefined || s.length == 0);
  },

  /**
   * 测试参数是否空值。空数组 | 空字符串 | 空对象 | null | undefined | 对象的所有属性都是空值
   * @param {*} v 待测试参数
   */
  isEmpty: v => {
    if (isUndef(v)) {
      return true;
    }
    if (v instanceof Array || typeof v === 'string') {
      return v.length == 0;
    }
    if (v instanceof Object) {
      return fzObject.empty(v) || fzObject.emptyProperties(v);
    }
    return false;
  }
}
