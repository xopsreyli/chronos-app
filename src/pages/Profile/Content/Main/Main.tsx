import { Paper } from '@mui/material'
import useProfileSection from '../../../../stores/useProfileSection/useProfileSection.ts'
import {
    ACCOUNT_NICKNAME,
    ACCOUNT_PASSWORD,
    SETTINGS,
} from '../../../../enums/profileSections/profileSections.ts'
import Settings from './Settings/Settings.tsx'
import type { ReactNode } from 'react'
import Nickname from './Account/Nickname/Nickname.tsx'
import Password from './Account/Password/Password.tsx'

const SECTIONS: Record<string, ReactNode> = {
    [ACCOUNT_NICKNAME]: <Nickname />,
    [ACCOUNT_PASSWORD]: <Password />,
    [SETTINGS]: <Settings />,
}

const Main = () => {
    const section = useProfileSection((state) => state.section)

    return (
        <Paper
            component={'main'}
            sx={{
                flex: 1,
                p: 3,
            }}
        >
            {SECTIONS[section]}
        </Paper>
    )
}

export default Main
