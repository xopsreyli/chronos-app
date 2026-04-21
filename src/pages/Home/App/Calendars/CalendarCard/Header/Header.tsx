import { CardHeader, IconButton, Menu, MenuItem } from '@mui/material'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { type MouseEvent, useState } from 'react'
import RoundIcon from '../../../../../../components/ui/common/RoundIcon/RoundIcon.tsx'
import useDeleteCalendar from '../../../../../../hooks/calendars/useDeleteCalendar/useDeleteCalendar.ts'
import useDialogStore from '../../../../../../stores/useDialogStore/useDIalogStore.ts'
import CalendarForm from '../../../../../../components/ui/app/CalendarForm/CalendarForm.tsx'
import type { Calendar } from '../../../../../../types/calendar/types.ts'

type Props = {
    calendar: Calendar
}

const Header = ({ calendar }: Props) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const { mutate } = useDeleteCalendar()
    const openDialog = useDialogStore((state) => state.open)

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setAnchorEl(event.currentTarget)
    }
    const handleClose = (event: MouseEvent<HTMLLIElement>) => {
        event.stopPropagation()
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)

    const handleEdit = (event: MouseEvent<HTMLLIElement>) => {
        handleClose(event)
        openDialog(<CalendarForm calendar={calendar} />)
    }

    const handleDelete = (event: MouseEvent<HTMLLIElement>) => {
        handleClose(event)
        mutate(calendar.id)
    }

    return (
        <>
            <CardHeader
                avatar={
                    <RoundIcon
                        Icon={CalendarTodayIcon}
                        color={calendar.color}
                        iconSize={24}
                    />
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
                <MenuItem onClick={handleEdit}>Edit</MenuItem>
                <MenuItem
                    onClick={handleDelete}
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
