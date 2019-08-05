import handlePublic from handlePublic.js

const handleObject = {
  /**
   * @description 判断对象是否为空
   * @param {Object} obj 待判断对象
   * @returns {Boolean} true && false
   */
  isEmptyObj: obj => {
    let t;
    for (t in obj) {
      return false;
    }
    return true;
  },
  
  /**
   * @description 判断对象的所有属性是否为空（空数组 | 空字符串 | 空对象 | null | undefined | 对象的所有属性都是空值）
   * @param {Object}  
   * @returns {Boolean} true && false 
   */
  isEmptyProperties: obj => {
    let k;
    for( k in obj ){
      if (!handlePublic.isEmpty(o[t])) { //🔗handlePublic.isEmpty()
        return false;
      }
    }
    return true;
  },
  
  /**
   * @description 返回克隆后的新对象（深拷贝）
   * @param {Object} obj
   * @returns {Object} * 新对象 
   */
}
