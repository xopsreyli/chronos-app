const logout = () => {
    return fetch(import.meta.env.VITE_APP_API + '/auth/logout', {
        method: 'POST',
        credentials: 'include',
    })
}

export default logout
