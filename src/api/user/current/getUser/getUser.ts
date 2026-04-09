const getUser = async () => {
    const response = await fetch(import.meta.env.VITE_APP_API + '/user', {
        method: 'GET',
        credentials: 'include',
    })

    const data = await response.json()

    if (!response.ok) {
        if (response.status === 401) {
            return null
        }

        throw data
    }

    return data
}

export default getUser
