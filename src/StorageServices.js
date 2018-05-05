export const getAuth = () => {
    return !!localStorage.getItem('token');
};

export const setToken = (token) => {
    return localStorage.setItem('token', token);
};

export const getToken = (token) => {
    return localStorage.getItem('token');
};