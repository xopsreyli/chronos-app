import type { SignUpData } from '../../../types/auth/types.ts'

const signUp = async (data: SignUpData): Promise<void> => {
    const response = await fetch(
        import.meta.env.VITE_APP_API + '/auth/signup',
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

export default signUp
