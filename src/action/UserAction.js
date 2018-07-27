export const findAllUser = ( _this, params = {} ) =>{
    return _this.$http.get(`${process.env.API_HOST}/admins`).then(res=>{
        return res;
    }).catch(error=>{
        console.log('catched:', error);
        _this.$message.error('获取失败，详情：'+error.body.message);
        return 0;
    })
};