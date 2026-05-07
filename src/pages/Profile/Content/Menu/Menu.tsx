import { Divider, List, Paper } from '@mui/material'
import Settings from './Settings/Settings.tsx'
import Account from './Account/Account.tsx'

const Menu = () => {
    return (
        <Paper
            sx={{
                width: 240,
            }}
        >
            <List>
                <Account />
                <Divider />
                <Settings />
            </List>
        </Paper>
    )
}

export default Menu
