import { Box, Stack } from '@mui/material'
import Title from '../../../../../../components/ui/app/Profile/Content/Main/Title/Title'
import Subtitle from '../../../../../../components/ui/app/Profile/Content/Main/Subtitle/Subtitle.tsx'
import {
    ARRANGEMENT,
    REMINDER,
    TASK,
} from '../../../../../../enums/events/enums.ts'
import type { EventType } from '../../../../../../types/events/types.ts'
import EventColorField from './EventColorField/EventColorField.tsx'

const EVENT_TYPES: EventType[] = [ARRANGEMENT, REMINDER, TASK]

const EventColors = () => {
    return (
        <Box>
            <Title title={'event colors'} />
            <Subtitle
                subtitle={
                    'Customize the default colors for your calendar items'
                }
            />
            <Stack spacing={3} useFlexGap>
                {EVENT_TYPES.map((type) => (
                    <EventColorField key={type} eventType={type} />
                ))}
            </Stack>
        </Box>
    )
}

export default EventColors
