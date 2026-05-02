import { Paper } from '@mui/material'
import useProfileSection from '../../../../stores/useProfileSection/useProfileSection.ts'
import { SETTINGS } from '../../../../enums/profileSections/profileSections.ts'
import Settings from './Settings/Settings.tsx'
import type { ReactNode } from 'react'

const SECTIONS: Record<string, ReactNode> = {
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
