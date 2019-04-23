export function login(credentials) {
    return new Promise((resolve, reject) => {
        axios.post('/api/auth/login', credentials)
            .then((response) => {
                resolve(response.data);
            })
            .catch((err) => {
                reject('wrong email or password');
            })
    })
}

export function getLocalUser() {
    const userStr = localStorage.getItem('user');

    if (!userStr) {
        return null;
    }

    return JSON.parse(userStr);
}
