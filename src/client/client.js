import {baseUrl} from './api-config';

export function getTimers(success) {
    return fetch(baseUrl, {
        headers: {
            Accept: 'application/json',
        },
    }).then(checkStatus)
        .then(parseJSON)
        .then(success);
}

export function getTimer(timerId) {
    return fetch(`${baseUrl}/${timerId}`, {
        headers: {
            Accept: 'application/json',
        },
    }).then(checkStatus)
        .then(parseJSON)
}

export function serverCreateTimer(data) {
    return fetch(baseUrl, {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then(checkStatus);
}

export function serverUpdateTimer(data) {
    return fetch(baseUrl, {
        method: 'put',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then(checkStatus);
}

export function serverDeleteTimer(data) {
    return fetch(baseUrl, {
        method: 'delete',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then(checkStatus);
}

export function serverStartTimer(data) {
    return fetch(`${baseUrl}/start`, {
        method: 'put',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then(checkStatus);
}

export async function serverStopTimer(data) {
    return fetch(`${baseUrl}/stop`, {
        method: 'put',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then(checkStatus);
}

export function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        const error = new Error(`HTTP Error ${response.statusText}`);
        error.status = response.statusText;
        error.response = response;
        console.log(error);
        throw error;
    }
}

export function parseJSON(response) {
    return response.json();
}

