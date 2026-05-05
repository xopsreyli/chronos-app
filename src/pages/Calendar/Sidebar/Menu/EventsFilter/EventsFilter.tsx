import MenuButton from '../MenuButton/MenuButton.tsx'
import FilterListIcon from '@mui/icons-material/FilterList'
import { Collapse, Stack } from '@mui/material'
import { useState } from 'react'
import EventSwitch from './EventSwitch/EventSwitch.tsx'
import {
    ARRANGEMENT,
    REMINDER,
    TASK,
} from '../../../../../enums/events/enums.ts'
import type { EventType } from '../../../../../types/events/types.ts'

const EVENT_TYPES: EventType[] = [ARRANGEMENT, REMINDER, TASK]

const EventsFilter = () => {
    const [isFiltersOpen, setIsFiltersOpen] = useState<boolean>(false)

    const handleFilterClick = () => {
        setIsFiltersOpen((v) => !v)
    }

    return (
        <>
            <MenuButton
                Icon={FilterListIcon}
                text={'filter events'}
                onClick={handleFilterClick}
            />
            <Collapse in={isFiltersOpen} timeout={'auto'} unmountOnExit>
                <Stack
                    sx={{
                        pl: 4,
                    }}
                >
                    {EVENT_TYPES.map((type) => (
                        <EventSwitch key={type} eventType={type} />
                    ))}
                </Stack>
            </Collapse>
        </>
    )
}

export default EventsFilter
