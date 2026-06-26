const respondToInvite = async (
    id: number,
    isAccepted: boolean,
): Promise<void> => {
    const response = await fetch(
        import.meta.env.VITE_APP_API + `/api/calendars/invites/${id}`,
        {
            method: 'POST',
            body: JSON.stringify({
                isAccepted,
            }),
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

export default respondToInvite
