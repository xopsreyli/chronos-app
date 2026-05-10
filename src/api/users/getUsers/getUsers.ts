import type { User } from '../../../types/user/types.ts'

type Params = {
    nickname?: string
    page?: number
}

const getUsers = async (params: Params): Promise<User[]> => {
    const { nickname = '', page = 1 } = params

    const response = await fetch(
        import.meta.env.VITE_APP_API +
            `/users?page=${page}&nickname=${nickname}`,
        {
            method: 'GET',
            credentials: 'include',
        },
    )

    const json = await response.json()

    if (!response.ok) {
        throw json
    }

    return json
}

export default getUsers
