import { List } from '@mui/material'
import EventsFilter from './EventsFilter/EventsFilter.tsx'
import InviteButton from './InviteButton/InviteButton.tsx'

const Menu = () => {
    return (
        <List disablePadding>
            <EventsFilter />
            <InviteButton />
        </List>
    )
}

export default Menu
