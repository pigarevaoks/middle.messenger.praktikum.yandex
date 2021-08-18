export enum METHOD {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE'
}

export enum CREDENTIALS {
    omit = 'omit',
    sameOrigin = 'same-origin',
    include = 'include'
}

export enum MODE {
    sameOrigin = 'same-origin',
    noCors = 'no-cors',
    cors = 'cors',
    navigate = 'navigate'
}
