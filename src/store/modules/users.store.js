import { getUsers, getSingleUser, deleteUser, createUser, updateSingleUser } from '../../api/users';

const state = {
    users: [],
    selectedUser: null
}

const getters = {
    getUsersList( state ) {
       return state.users;
    },

    getSelectedUser( state ) {
        return state.selectedUser;
    }
}

const actions = {
    getUsersList({ commit }) {
        return new Promise( (resolve, reject) => {
            getUsers().then(res => {
                if(res.data){
                    commit('SET_USERS_LIST', res.data);
                    resolve();
                }

            }).catch(error => {
                console.log(error);
                reject(error);
            });
        })
    },

    getUser({ commit }, id) {
        return new Promise( (resolve, reject) => {
            getSingleUser(id).then(res => {
                if(res.data){
                    commit('SET_SELECTED_USER', res.data);
                    resolve();
                }

            }).catch(error => {
                console.log(error);
                reject(error);
            });
        })
    },

    removeUser({ commit }, id) {
        return new Promise( (resolve, reject) => {
            deleteUser(id).then(res => {
                if(res.data){
                    commit('SET_USERS_LIST', res.data);
                    resolve();
                }

            }).catch(error => {
                console.log(error);
                reject(error);
            });
        })
    },

    newUser({ commit }, data) {
        return new Promise( (resolve, reject) => {
            createUser(data.companyID, data.userData).then(res => {
                if(res.data){
                    commit('SET_USERS_LIST', res.data);
                    resolve();
                }

            }).catch(error => {
                console.log(error);
                reject(error);
            });
        })
    },

    updateUser({ commit }, data) {
        return new Promise( (resolve, reject) => {
            updateSingleUser(data.companyID, data.userID, data.userData).then(res => {
                if(res.data){
                    commit('SET_SELECTED_USER', res.data);
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
    SET_USERS_LIST(state, data) {
       state.users = data;
    },

    SET_SELECTED_USER(state, data) {
        state.selectedUser = data;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}