const handleArray = {
  /**
   * @description 测试数组中是否包含指定元素
   * @param {*} value 指定元素
   * @param {Array} arr 检测数组
   * @returns {Boolean} true & false
   */
  in: (value, arr) => {
    let index = arr.indexOf(val);
    return index !== -1;
  }
  
  /**
   * @description 将可迭代对象转换成数组
   * @param {list} list 可迭代的对象
   * @param {Number} start 开始的位置
   * @returns {Array} *
   */
  from: (list, start) => {
    start = start || 0;
    let i = list.length - start;
    let arr = new Array(i);
    while (i--){
      arr[i] = list[i + start];
    }
    return arr;
  }
  
  /**
   * @description 将arguments中的非空值追加到源数组。如果argument是数组，则将它拆分后追加到源数组，但只会拆分一层
   * @param {Array} list 原数组
   * @param {Array} arguments 追加数组
   * @returns {Array} *
   */
   
}
