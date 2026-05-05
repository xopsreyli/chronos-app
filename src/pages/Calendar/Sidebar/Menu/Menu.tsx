import { List } from '@mui/material'
import EventsFilter from './EventsFilter/EventsFilter.tsx'

const Menu = () => {
    return (
        <List disablePadding>
            <EventsFilter />
        </List>
    )
}

export default Menu
