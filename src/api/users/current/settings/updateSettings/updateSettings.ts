import type {
    Settings,
    SettingsUpdationData,
} from '../../../../../types/settings/types.ts'

const updateSettings = async (
    data: SettingsUpdationData,
): Promise<Settings> => {
    const response = await fetch(
        import.meta.env.VITE_APP_API + '/user/settings',
        {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
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

export default updateSettings
