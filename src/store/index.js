import Vue from 'vue';
import Vuex from 'vuex';
import Users from './modules/users.store';
import Company from './modules/company.store';
import Structure from './modules/structure.store';
import Warehouse from './modules/warehouse.store';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		Users,
		Company,
		Structure,
		Warehouse
	}
})