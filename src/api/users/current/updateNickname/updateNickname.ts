import type {
    NicknameUpdationData,
    User,
} from '../../../../types/user/types.ts'

const updateNickname = async (data: NicknameUpdationData): Promise<User> => {
    const response = await fetch(
        import.meta.env.VITE_APP_API + '/user/nickname',
        {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json',
            },
            credentials: 'include',
        },
    )

    const json = await response.json()

    if (!response.ok) {
        throw json
    }

    return json
}

export default updateNickname
