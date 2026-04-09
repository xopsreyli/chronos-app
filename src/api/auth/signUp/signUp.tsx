type SignUpData = {
    nickname: string
    email: string
    password: string
}

const signUp = async (data: SignUpData) => {
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
