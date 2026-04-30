import { List, Paper } from '@mui/material'
import type { ProfileSection } from '../../../../types/profileSections/types.ts'
import type { SvgIconComponent } from '@mui/icons-material'
import { SETTINGS } from '../../../../enums/profileSections/profileSections.ts'
import SettingsIcon from '@mui/icons-material/Settings'
import Item from './Item/Item.tsx'

const ITEMS: { section: ProfileSection; Icon: SvgIconComponent }[] = [
    {
        section: SETTINGS,
        Icon: SettingsIcon,
    },
]

const Menu = () => {
    return (
        <Paper
            sx={{
                width: 240,
            }}
        >
            <List>
                {ITEMS.map((item) => (
                    <Item profileSection={item.section} Icon={item.Icon} />
                ))}
            </List>
        </Paper>
    )
}

export default Menu
