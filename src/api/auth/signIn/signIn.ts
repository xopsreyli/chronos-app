type SignInData = {
    email: string
    password: string
}

const signIn = async (data: SignInData) => {
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
