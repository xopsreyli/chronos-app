import type { SignInData } from '../../../types/auth/types.ts'

const signIn = async (data: SignInData): Promise<void> => {
    const response = await fetch(
        import.meta.env.VITE_APP_API + '/auth/signin',
        {
            method: 'POST',
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

export default signIn
