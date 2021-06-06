import { getWarehouses, getSingleWarehouse, deleteWarehouse, createWarehouse, updateSingleWarehouse } from '../../api/warehouses';

const state = {
    warehouse: [],
    selectedWarehouse: null
}

const getters = {
    getWarehousesList( state ) {
       return state.warehouse;
    },

    getSelectedWarehouse( state ) {
        return state.selectedWarehouse;
    }
}

const actions = {
    getWarehousesList({ commit }) {
        return new Promise( (resolve, reject) => {
            getWarehouses().then(res => {
                if(res.data){
                    commit('SET_WAREHOUSES_LIST', res.data);
                    resolve();
                }

            }).catch(error => {
                console.log(error);
                reject(error);
            });
        })
    },

    getWarehouse({ commit }, id) {
        return new Promise( (resolve, reject) => {
            getSingleWarehouse(id).then(res => {
                if(res.data){
                    commit('SET_SELECTED_WAREHOUSE', res.data);
                    resolve();
                }

            }).catch(error => {
                console.log(error);
                reject(error);
            });
        })
    },

    removeWarehouse({ commit }, id) {
        return new Promise( (resolve, reject) => {
            deleteWarehouse(id).then(res => {
                if(res.data){
                    commit('SET_WAREHOUSES_LIST', res.data);
                    resolve();
                }

            }).catch(error => {
                console.log(error);
                reject(error);
            });
        })
    },

    newWarehouse({ commit }, data) {
        return new Promise( (resolve, reject) => {
            createWarehouse(data.companyID, data.userData).then(res => {
                if(res.data){
                    commit('SET_WAREHOUSES_LIST', res.data);
                    resolve();
                }

            }).catch(error => {
                console.log(error);
                reject(error);
            });
        })
    },

    updateWarehouse({ commit }, data) {
        return new Promise( (resolve, reject) => {
            updateSingleWarehouse(data.companyID, data.userID, data.userData).then(res => {
                if(res.data){
                    commit('SET_SELECTED_WAREHOUSE', res.data);
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
    SET_WAREHOUSES_LIST(state, data) {
       state.warehouse = data;
    },

    SET_SELECTED_WAREHOUSE(state, data) {
        state.selectedWarehouse = data;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}