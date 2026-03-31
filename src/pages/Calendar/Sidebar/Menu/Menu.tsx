import FilterListIcon from '@mui/icons-material/FilterList'
import { List } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import MenuButton from './MenuButton/MenuButton.tsx'

const Menu = () => {
    return (
        <List>
            <MenuButton Icon={FilterListIcon} text={'filter events'} />
            <MenuButton Icon={SettingsIcon} text={'settings'} />
        </List>
    )
}

export default Menu
