import { service } from '../utils/request';

export function getCompanies() {
    return service({
        url: '/users',
        method: 'get',
    });
}

export function getSingleCompany(userID) {
    return service({
        url: '/users/' + userID,
        method: 'get'
    });
}

export function deleteCompany(userID) {
    return service({
        url: '/users/' + userID,
        method: 'delete'
    });
}

export function createCompany(companyID, data) {
    return service({
        url: '/users?company_id=' + companyID,
        method: 'post',
        data
    });
}

export function updateSingleCompany(companyID, userID, data) {
    return service({
        url: 'users/' + userID + '?company_id=' + companyID,
        method: 'patch',
        data
    });
}