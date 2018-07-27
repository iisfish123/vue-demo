import * as types from './mutationTypes.js';

const mutations = {
    getIsLogin(state, bool){
        state.islogin = bool;
    },
    [types.GET_SYSTEM_ID_LIST_SAVE](state , list=[]){
        state.systemIdList = list;
    },


};
export default mutations;