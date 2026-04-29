import { Box, IconButton, Stack, Typography } from '@mui/material'
import type { Event } from '../../../../types/events/types.ts'
import { ARRANGEMENT, REMINDER, TASK } from '../../../../enums/events/enums.ts'
import dayjs from 'dayjs'
import getEventIcon from '../../../../utils/getEventIcon/getEventIcon.ts'
import EditNoteIcon from '@mui/icons-material/EditNote'
import DeleteIcon from '@mui/icons-material/Delete'
import useDeleteEvent from '../../../../hooks/api/events/useDeleteEvent/useDeleteEvent.ts'
import useDrawerStore from '../../../../stores/useDrawerStore/useDrawerStore.ts'
import EventForm from '../EventForm/EventForm.tsx'
import useEventColor from '../../../../hooks/ui/useEventColor/useEventColor.ts'

type Props = {
    event: Event
}

const EventDetails = ({ event }: Props) => {
    const color = useEventColor(event.type)
    const { mutate } = useDeleteEvent(event)
    const setContent = useDrawerStore((state) => state.setContent)
    const close = useDrawerStore((state) => state.close)

    const handleUpdateClick = () => {
        setContent(<EventForm event={event} />)
    }

    const handleDeleteClick = () => {
        mutate(undefined, {
            onSuccess: () => {
                close()
            },
        })
    }

    const Icon = getEventIcon(event.type)

    let dateTime: string = ''
    if (event.type === ARRANGEMENT) {
        const from = dayjs(event.from)
        const to = dayjs(event.to)
        if (from.isSame(to, 'day')) {
            dateTime = `${from.format('DD MMMM YYYY | hh:mm A')} - ${to.format('hh:mm A')}`
        } else {
            dateTime = `${from.format('DD MMMM YYYY, hh:mm A')} - ${to.format('DD MMMM YYYY, hh:mm A')}`
        }
    } else if (event.type === REMINDER)
        dateTime = dayjs(event.dateTime).format('DD MMMM YYYY | hh:mm A')
    else if (event.type === TASK)
        dateTime = dayjs(event.dateTime).format('DD MMMM YYYY')

    return (
        <Box>
            <Stack
                spacing={1}
                useFlexGap
                direction={'row'}
                sx={{
                    alignItems: 'center',
                    mb: 1,
                }}
            >
                <Icon sx={{ color: color }} />
                <Typography variant={'h5'}>{event.title}</Typography>
            </Stack>
            <Typography
                variant={'body2'}
                color={'text.secondary'}
                sx={{
                    mb: 2,
                }}
            >
                {dateTime}
            </Typography>
            <Typography
                variant={'body1'}
                sx={{
                    borderTop: '4px solid',
                    borderTopColor: color,
                    pt: 2,
                    mb: 2,
                }}
            >
                {event.description}
            </Typography>
            <Stack
                spacing={1}
                useFlexGap
                direction={'row'}
                sx={{
                    justifyContent: 'flex-end',
                }}
            >
                <IconButton
                    onClick={handleUpdateClick}
                    color={'inherit'}
                    size={'large'}
                >
                    <EditNoteIcon />
                </IconButton>
                <IconButton
                    onClick={handleDeleteClick}
                    color={'error'}
                    size={'large'}
                >
                    <DeleteIcon />
                </IconButton>
            </Stack>
        </Box>
    )
}

export default EventDetails
