import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout'
import SettingsIcon from '@mui/icons-material/Settings'
import {
    Avatar,
    IconButton,
    ListItemIcon,
    Menu,
    MenuItem,
    Typography,
} from '@mui/material'
import { useState, type MouseEvent } from 'react'
import useUser from '../../../../hooks/api/users/current/useUser/useUser.ts'
import useLogout from '../../../../hooks/api/auth/useLogout/useLogout.ts'

const UserMenu = () => {
    const { data: user } = useUser()
    const { mutate } = useLogout()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)

    const handleLogout = () => {
        handleClose()
        mutate()
    }

    if (!user) return null

    return (
        <>
            <IconButton
                onClick={handleClick}
                sx={{
                    p: 0.5,
                }}
            >
                <Avatar
                    sx={{
                        width: 36,
                        height: 36,
                        backgroundColor: 'primary.main',
                        textTransform: 'uppercase',
                        fontSize: '1rem',
                        fontWeight: 700,
                    }}
                >
                    {user.nickname[0]}
                </Avatar>
            </IconButton>
            <Menu
                id="user-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <Typography
                    variant="body2"
                    align="center"
                    color="text.secondary"
                    sx={{
                        py: 0.75,
                        px: 2,
                    }}
                >
                    {user.nickname}
                </Typography>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <AccountCircleIcon
                            fontSize="small"
                            sx={{ color: 'text.primary' }}
                        />
                    </ListItemIcon>
                    Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <SettingsIcon
                            fontSize="small"
                            sx={{ color: 'text.primary' }}
                        />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem
                    onClick={handleLogout}
                    sx={{
                        color: 'error.main',
                    }}
                >
                    <ListItemIcon>
                        <LogoutIcon fontSize="small" color="error" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </>
    )
}

export default UserMenu
