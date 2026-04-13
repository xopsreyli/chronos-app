import type { User } from '../../../../types/user/types.ts'

const getUser = async (): Promise<User | null> => {
    const response = await fetch(import.meta.env.VITE_APP_API + '/user', {
        method: 'GET',
        credentials: 'include',
    })

    const json = await response.json()

    if (!response.ok) {
        if (response.status === 401) {
            return null
        }

        throw json
    }

    return json
}

export default getUser
