import {
    alpha,
    Box,
    CardHeader,
    IconButton,
    Menu,
    MenuItem,
} from '@mui/material'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { type MouseEvent, useState } from 'react'

const Header = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setAnchorEl(event.currentTarget)
    }
    const handleClose = (event: MouseEvent<HTMLLIElement>) => {
        event.stopPropagation()
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)

    return (
        <>
            <CardHeader
                avatar={
                    <Box
                        sx={{
                            width: 48,
                            aspectRatio: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '50%',
                            backgroundColor: `${alpha('#7FFFD4', 0.1)}`,
                        }}
                    >
                        <CalendarTodayIcon color="primary" />
                    </Box>
                }
                action={
                    <IconButton
                        size="small"
                        onClick={handleClick}
                        sx={{
                            color: 'text.secondary',
                        }}
                    >
                        <MoreVertIcon fontSize="small" />
                    </IconButton>
                }
                sx={{
                    p: 0,
                    mb: 2,
                }}
            />
            <Menu
                id="calendar-card-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Edit</MenuItem>
                <MenuItem
                    onClick={handleClose}
                    sx={{
                        color: 'error.main',
                    }}
                >
                    Delete
                </MenuItem>
            </Menu>
        </>
    )
}

export default Header
