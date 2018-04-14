/**
 * localStorage的写入
 */
function setItem(key,value){
    if(!window.localStorage){
        console.log("浏览器不支持localstorage");
        return false;
    }else{
        var storage=window.localStorage;
        storage.setItem(key,JSON.stringify(value));
    }
}
/**
 * localStorage的读取
 */
function getItem(key){
    var storage=window.localStorage;
    if(!storage){
        return false;
    }else{
        storage = JSON.parse(storage.getItem(key));
    }
    return storage;
}
/**
 * localStorage删除指定键对应的值
 */
function deleteItem(key){
    localStorage.removeItem(key);
}


export default {
    setItem,getItem,deleteItem
}