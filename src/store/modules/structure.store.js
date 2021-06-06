import { getStructures, getSingleStructure, deleteStructure, createStructure, updateSingleStructure } from '../../api/structures';

const state = {
    structures: [],
    selectedStructure: null
}

const getters = {
    getStructuresList( state ) {
       return state.companies;
    },

    getSelectedStructure( state ) {
        return state.selectedStructure;
    }
}

const actions = {
    getStructuresList({ commit }) {
        return new Promise( (resolve, reject) => {
            getStructures().then(res => {
                if(res.data){
                    commit('SET_STRUCTURES_LIST', res.data);
                    resolve();
                }

            }).catch(error => {
                console.log(error);
                reject(error);
            });
        })
    },

    getStructure({ commit }, id) {
        return new Promise( (resolve, reject) => {
            getSingleStructure(id).then(res => {
                if(res.data){
                    commit('SET_SELECTED_STRUCTURE', res.data);
                    resolve();
                }

            }).catch(error => {
                console.log(error);
                reject(error);
            });
        })
    },

    removeStructure({ commit }, id) {
        return new Promise( (resolve, reject) => {
            deleteStructure(id).then(res => {
                if(res.data){
                    commit('SET_STRUCTURES_LIST', res.data);
                    resolve();
                }

            }).catch(error => {
                console.log(error);
                reject(error);
            });
        })
    },

    newStructure({ commit }, data) {
        return new Promise( (resolve, reject) => {
            createStructure(data.companyID, data.userData).then(res => {
                if(res.data){
                    commit('SET_STRUCTURES_LIST', res.data);
                    resolve();
                }

            }).catch(error => {
                console.log(error);
                reject(error);
            });
        })
    },

    updateStructure({ commit }, data) {
        return new Promise( (resolve, reject) => {
            updateSingleStructure(data.companyID, data.userID, data.userData).then(res => {
                if(res.data){
                    commit('SET_SELECTED_STRUCTURE', res.data);
                    resolve();
                }

            }).catch(error => {
                console.log(error);
                reject(error);
            });
        })
    }
}

const mutations = {
    SET_STRUCTURES_LIST(state, data) {
       state.structures = data;
    },

    SET_SELECTED_STRUCTURE(state, data) {
        state.selectedStructure = data;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}