// export default {
//     myItQuestion:(_this,params)=>{
//         // console.info(_this.$http)
//         return _this.$http.post(`${process.env.API_HOST}/login`,params).catch(function(error) {
//             console.log('catched:', error);
//             this.$message.error('获取失败，详情：'+error);
//         });
//     }
//
// }
/**
 * 如果this指向有问题，在外部调用的时候，传入this      xxx(this,{})
 */
// import { Http } from "vue-resource";

/**
 * 我的IT问题
  * @param _this
 * @param params
 * @returns {*}
 */
export const myItQuestion = ( _this, params = {} ) =>{
    return _this.$http.post(`${process.env.API_HOST}/works/my-work-orders`, params).then(res=>{
        return res;
    }).catch(error=>{
        console.log('catched:', error);
        _this.$message.error('获取失败，详情：'+error);
    })
};
/**
 * 我的任务
 * @param _this
 * @param params
 * @returns {*}
 */
export const myMissions = ( _this, params = {} ) =>{
    return _this.$http.get(`${process.env.API_HOST}/works/my-work-orders`, params).then(res=>{
        return res;
    }).catch(error=>{
        console.log('catched:', error);
        _this.$message.error('获取失败，详情：'+error);
    })
};

/**
 * 我的审核
 * @param _this
 * @param params
 * @returns {*}
 */
export const myAudit = ( _this, params = {} ) =>{
    return _this.$http.post(`${process.env.API_HOST}/works/my-work-orders`, params).then(res=>{
        return res;
    }).catch(error=>{
        console.log('catched:', error);
        _this.$message.error('获取失败，详情：'+error);
    })
};

/**
 * 已经完结、处理、审核的工单
 * @param _this
 * @param params
 * @returns {*}
 */
export const HandleWork = ( _this, params = {} ) =>{
    return _this.$http.post(`${process.env.API_HOST}/works/finished-work-orders`, params).then(res=>{
        return res;
    }).catch(error=>{
        console.log('catched:', error);
        _this.$message.error('获取失败，详情：'+error);
    })
};

/**
 * 工单详情
 * @param _this
 * @param params
 * @returns {*}
 */
export const checkDetail = ( _this, params = {} ) =>{
    return _this.$http.get(`${process.env.API_HOST}/works/check-detail/${params.id}`).then(res=>{
        return res;
    }).catch(error=>{
        console.log('catched:', error);
        _this.$message.error('获取失败，详情：'+error);
    })
};

/**
 * 提单页，获取所有工单类型的下拉选项
 * @param _this
 * @param params
 * @returns {*}
 */
export const getWorkTypes = ( _this, params = {} ) =>{
    return _this.$http.get(`${process.env.API_HOST}/work-types/all`,{params: params}).then(res=>{
        return res;
    }).catch(error=>{
        console.log('catched:', error);
        _this.$message.error('获取失败，详情：'+error);
    })
};

/**
 * 提交工单
 * @param _this
 * @param params
 * @returns {*}
 */
export const works = ( _this, params = {} ) =>{
    return _this.$http.post(`${process.env.API_HOST}/works`,params).then(res=>{
        return res;
    }).catch(error=>{
        console.log('catched:', error);
        _this.$message.error('获取失败，详情：'+error);
    })
};

/**
 * 所有操作
 * @param _this
 * @param params
 * @returns {*}
 */
export const worksOperation = ( _this, params = {} ) =>{
    return _this.$http.post(`${process.env.API_HOST}/works/operation`,params).then(res=>{
        return res;
    }).catch(error=>{
        console.log('catched:', error);
        _this.$message.error('获取失败，详情：'+error);
    })
};





