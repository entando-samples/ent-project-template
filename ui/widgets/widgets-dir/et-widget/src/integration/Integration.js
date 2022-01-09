import axios from "axios";

const endpoint = `${process.env.REACT_APP_PUBLIC_API_URL}/example/`

const addAuthorizationRequestConfig = (config = {}) => {
    let defaultOptions = getDefaultOptions();
    return {
        ...config,
        ...defaultOptions
    }
}

const getKeycloakToken = () => {
    if (window && window.entando && window.entando.keycloak && window.entando.keycloak.authenticated) {
        return window.entando.keycloak.token
    }
    return ''
}


const getDefaultOptions = () => {
    const token = getKeycloakToken()
    if (!token) return {}
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
}


export const getData = async () => {
    const responseObj = {}
    try {
        responseObj["response"] = await axios.get(endpoint, addAuthorizationRequestConfig())
    } catch (error) {
        console.error(error)
        responseObj["error"] = error
    }
    return responseObj
}




