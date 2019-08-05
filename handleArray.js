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
  },
  
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
  },
  
  /**
   * @description 将arguments中的非空值追加到源数组。如果argument是数组，则将它拆分后追加到源数组
   * @param {Array} list 原数组
   * @param {Array} arguments 追加数组
   * @returns {Array} *
   */
  append: (list, arguments) => {
    let arr = list.concat();
    let IsArr = (A) => {
      for (let i = 0,l = A.length; i < l; i++){
        if(isArray(A[i])){
          IsArr(A[i]);
        } else {
          arr.push(A[i]);
        }
      }
    };
    IsArr(arguments);

    return arr;
  },
  
  /**
   * @description 将arguments中的非空值推入一个新数组中，返回这个数组。
   * @param {Array} arguments
   * @returns {Array} *
   */
  push: (arguments) => {
    let arr = [];
    for (let i = 0, l = arguments.length; i < l; i++) {
        if (!isEmpty(arguments[i])) {
            arr.push(arguments[i]);
        }
    }
    return arr;
  },
  
  /**
   * @description 合并对象数组，将objArray1与objArray2合并，返回新的对象数组。
   * @param {Array} objArray1 objArray2 对象数组
   * @returns {Array} * 对象数组
   */
  mergeObjArray: (objArray1, objArray2) => {
    let OA = objArray1.concat();
    for (let i = 0, l = objArray2.length; i < l; i++){
      if (!handleObject.isEmpty(objArray2[i])) {  //🔗handleObject.isEmpty()
        OA.push(objArray2[i]);
      }
    }
    return OA;
  },
  
  /**
   * @description 删除对象数组中所有对象的指定属性（修改源数组）
   * @param {Array} objArray 对象数组
   * @param {string} property 属性名
   * @returns {Array} * 对象数组
   */
  deleteObjArrayProperty: (objArray, property) => {
    for (let i = 0, l = objArray.length; i < l; i++){
      handleObject.deleteProperty(objArray[i], property);  //🔗handleObject.deleteProperty()
    }
  },
    
  /**
   * @description 检测对象数组中某一属性的值是否等于一特定值
   * @param {*} value 特定值
   * @param {Array} objArray 对象数组
   * @returns {Boolen} true & false
   */
  isValInObjArray: (value, objArray, key) => {
    for (var i = 0, l = objArray.length; i < l; i++) {
      var obj = objArray[i];
      if (obj.hasOwnProperty(key)) {
        if (obj[key] === value) {
          return true;
        }
      }
    }
    return false;
  },
    
  /**
   * @description 数组排重
   * @param {Array} repeatArray 对象数组
   * @returns {Array} *
   */
  removeRepeatItem: (repeatArray) => {
    let arr = repeatArray.filter(function (item, index, array){
      return array.indexOf(item) === index;
    });
    return arr;
  },
  
 /**
   * @description 两个数组的交集
   * @param {Array} arr1 arr2 
   * @returns {Array} *
   */
  intersect: (arr1, arr2) => {
    return a1.filter(function (v){
      return a2.indexOf(v) > -1;
    })
  },
    
  /**
   * @description 求arguments中的多个数组的交集(求一个二维数组中子数组的交集)
   * @param {Array} arguments：[{a1:[1,2,3,4]},{a2:[3,4,5,6]},{a3:[2,4,6,8]}]
   * @returns {Array} *
   */
  intersectAll: (arguments) => {
    var _self = this;
    var arr = Array.prototype.slice.apply(arguments);
    return arr.reduce(function (prev, cur, index, arr) {
        return _self.intersect(prev, cur);
    });
  },
    
  /**
   * @description 两个数组的并集(union)
   * @param {Array} arr1 arr2
   * @returns {Array} *
   */
  union: (arr1, arr2) => {
    return arr1.concat(arr2.filter(function (v) {
        return arr1.indexOf(v) === -1;
    }))
  },
    
  /**
   * @description 求arguments中的多个数组的并集(求一个二维数组中子数组的并集)
   * @param {Array} arguments：[{a1:[1,2,3,4]},{a2:[3,4,5,6]},{a3:[2,4,6,8]},......]
   * @returns {Array} *
   */
  unionAll: (arguments) => {
    let _self = this;
    let arr = Array.prototype.slice.apply(arguments);
    return arr.reduce(function (prev, cur, index, arr) {
      return _self.union(prev, cur);
    });
  },
  
  /**
   * @description 求对象数组中指定键对应的数组的并集
   * @param {Array} objArray 对象数组 [{a1:[1,2,3,4],a2:[3,4,5,6],a3:[2,4,6,8]},{a1:[2,3,4],a2:[3,4,6],a3:[2,6,8]},......]
   * @param {String} key 指定将要返回的数组来自对象的哪个键，该键的值为数组 'a1'
   * @returns {Array} *
   */
  unionObjectArray: (objArray, key) => {
    let arr = [];
    for (let i = 0, l = objArray.length; i < l; i++) {
        arr.push(objArray[i][key]);
    }
    return this.unionAll(arr);
  },
  
  /**
   * @description 求两数组的差值
   * @param {Array} arr1、arr2
   * @returns {Array} *
   */
  difference: (arr1, arr2) => {
    return arr1.filter(function (v) {
      return arr2.indexOf(v) === -1;
    });
  },
  
  /**
   * 获得对象数组中指定key的值的集合
   * @param {array} arr 由对象组成的数组
   * @param {string} key 要返回值的键
   * @returns {array} 包含不重复的值的数组
   */
  getObjArrayUniqueValue: (objArray, key) => {
    if (!objArray) {
      return null;
    }
    if (!objArray.length) {
      return null;
    }

    let arr = [];
    for (var i = 0, l = objArray.length; i < l; i++) {
      if (!isNone(objArray[i][key])) {
          arr = arr.concat(objArray[i][key]);
      }
    }
    return this.unique(arr); //unique 数组排重
  },
  
  /**
   * 当对象数组的元素的某个键的值为指定值时，返回该对象
   * @param {Array} objArray 对象数组
   * @param {String} itemKey 对象的键
   * @param {*} itemValue 对象的键值
   * @return {Object && null} 返回符合条件的第一个对象。无结果返回null
   */
  getObjFromObjArrayByKV: (objArray, itemKey, itemValue) => {
    if (!objArray || !itemKey || itemValue == undefined) {
      throw TypeError('getObjectByKeyValue:' + objArray + itemKey + itemValue);
    }
    for (var i = 0, l = objArray.length; i < l; i++) {
      let obj = objArray[i];
      if (obj[itemKey] == itemValue) {
        return obj;
      }
    }
    return null;
  },
  
  /**
   * @description
   * @param {}
   * @returns {}
   */
}
