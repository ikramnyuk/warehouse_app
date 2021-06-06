import { service } from '../utils/request';

export function getUsers() {
    return service({
        url: '/users',
        method: 'get',
    });
}

export function getSingleUser(userID) {
    return service({
        url: '/users/' + userID,
        method: 'get'
    });
}

export function deleteUser(userID) {
    return service({
        url: '/users/' + userID,
        method: 'delete'
    });
}

export function createUser(companyID, data) {
    return service({
        url: '/users?company_id=' + companyID,
        method: 'post',
        data
    });
}

export function updateSingleUser(companyID, userID, data) {
    return service({
        url: 'users/' + userID + '?company_id=' + companyID,
        method: 'patch',
        data
    });
}