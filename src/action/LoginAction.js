export const login = ( _this, params = {} ) =>{
    return _this.$http.post(`${process.env.API_HOST}/login`, params).then(res=>{
        return res;
    }).catch(error=>{
        console.log('catched:', error);
        _this.$message.error('获取失败，详情：'+error.body.message);
        return 0;
    })
};