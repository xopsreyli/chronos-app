import useSettings from '../../../../hooks/api/users/current/settings/useSettings/useSettings.ts'
import { type ReactNode, useEffect } from 'react'
import { useColorScheme } from '@mui/material'
import { SYSTEM } from '../../../../enums/theme/enums.ts'

type Props = {
    children: ReactNode
}

const ThemeHandler = ({ children }: Props) => {
    const { data: settings } = useSettings()
    const { setMode } = useColorScheme()

    useEffect(() => {
        setMode(settings?.theme ?? SYSTEM)
    }, [settings])

    return children
}

export default ThemeHandler
