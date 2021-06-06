import { service } from '../utils/request';

export function getStructures() {
    return service({
        url: '/users',
        method: 'get',
    });
}

export function getSingleStructure(userID) {
    return service({
        url: '/users/' + userID,
        method: 'get'
    });
}

export function deleteStructure(userID) {
    return service({
        url: '/users/' + userID,
        method: 'delete'
    });
}

export function createStructure(companyID, data) {
    return service({
        url: '/users?company_id=' + companyID,
        method: 'post',
        data
    });
}

export function updateSingleStructure(companyID, userID, data) {
    return service({
        url: 'users/' + userID + '?company_id=' + companyID,
        method: 'patch',
        data
    });
}