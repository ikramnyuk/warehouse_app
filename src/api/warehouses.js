import { service } from '../utils/request';

export function getWarehouses() {
    return service({
        url: '/users',
        method: 'get',
    });
}

export function getSingleWarehouse(userID) {
    return service({
        url: '/users/' + userID,
        method: 'get'
    });
}

export function deleteWarehouse(userID) {
    return service({
        url: '/users/' + userID,
        method: 'delete'
    });
}

export function createWarehouse(companyID, data) {
    return service({
        url: '/users?company_id=' + companyID,
        method: 'post',
        data
    });
}

export function updateSingleWarehouse(companyID, userID, data) {
    return service({
        url: 'users/' + userID + '?company_id=' + companyID,
        method: 'patch',
        data
    });
}