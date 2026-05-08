import type { PasswordUpdationData } from '../../../../types/user/types.ts'

const updatePassword = async (data: PasswordUpdationData): Promise<void> => {
    const response = await fetch(
        import.meta.env.VITE_APP_API + '/user/password',
        {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        },
    )

    if (!response.ok) {
        throw await response.json()
    }
}

export default updatePassword
