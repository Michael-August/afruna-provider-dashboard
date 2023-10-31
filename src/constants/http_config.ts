export const BASE_URL = 'https://afruna-backend-cmsxg.ondigitalocean.app/api/v1'

export const headers = {
    headers: {
        Authorization: `Bearer ${sessionStorage.getItem('Token')}`
    }
}


