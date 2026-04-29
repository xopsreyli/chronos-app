import type { Settings } from '../../../../types/settings/types.ts'

const getSettings = async (): Promise<Settings> => {
    const response = await fetch(
        import.meta.env.VITE_APP_API + '/user/settings',
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

export default getSettings
