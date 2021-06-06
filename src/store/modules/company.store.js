import { getCompanies, getSingleCompany, deleteCompany, createCompany, updateSingleCompany } from '../../api/companies';

const state = {
    companies: [],
    selectedCompany: null
}

const getters = {
    getCompaniesList( state ) {
       return state.companies;
    },

    getSelectedCompany( state ) {
        return state.selectedCompany;
    }
}

const actions = {
    getCompaniesList({ commit }) {
        return new Promise( (resolve, reject) => {
            getCompanies().then(res => {
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

    getCompany({ commit }, id) {
        return new Promise( (resolve, reject) => {
            getSingleCompany(id).then(res => {
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

    removeCompany({ commit }, id) {
        return new Promise( (resolve, reject) => {
            deleteCompany(id).then(res => {
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

    newCompany({ commit }, data) {
        return new Promise( (resolve, reject) => {
            createCompany(data.companyID, data.userData).then(res => {
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

    updateCompany({ commit }, data) {
        return new Promise( (resolve, reject) => {
            updateSingleCompany(data.companyID, data.userID, data.userData).then(res => {
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
    SET_COMPANIES_LIST(state, data) {
       state.companies = data;
    },

    SET_SELECTED_COMPANY(state, data) {
        state.selectedCompany = data;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}