import * as types from './mutationTypes.js';

export const getSystemIdListSave = function({commit}, query){
    commit(types.GET_SYSTEM_ID_LIST_SAVE, query);
}