const logout = async (): Promise<void> => {
    const response = await fetch(
        import.meta.env.VITE_APP_API + '/auth/logout',
        {
            method: 'POST',
            credentials: 'include',
        },
    )

    if (!response.ok) {
        throw await response.json()
    }
}

export default logout
