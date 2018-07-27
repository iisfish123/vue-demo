export default (timestamp) => {
    var date = new Date(timestamp);//timestamp为13位的时间戳
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    var D = date.getDate()<10?'0'+date.getDate():date.getDate();
    var h = date.getHours() + ':';
    var m = date.getMinutes() + ':';
    var s = date.getSeconds();
    // return Y+M+D+h+m+s;
    return Y+M+D;
}