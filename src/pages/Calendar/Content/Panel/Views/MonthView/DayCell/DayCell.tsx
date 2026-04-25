import { Box, Stack, Typography } from '@mui/material'
import EventIndicator from './EventIndicator/EventIndicator.tsx'

type Props = {
    date: number
    isArrangement: boolean
    isReminder: boolean
    isTask: boolean
}

const DayCell = ({ date, isArrangement, isReminder, isTask }: Props) => {
    return (
        <Box
            sx={{
                cursor: 'pointer',
                position: 'relative',
                aspectRatio: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'grey.50',
                borderRadius: 2,
                transition: 'all 0.2s ease',
                '&:hover': {
                    backgroundColor: 'grey.100',
                },
            }}
        >
            <Typography component={'span'} variant={'body2'}>
                {date}
            </Typography>
            <Stack
                direction={'row'}
                spacing={1}
                useFlexGap
                sx={{
                    position: 'absolute',
                    bottom: 8,
                }}
            >
                {isArrangement && <EventIndicator color={'#7FFFD4'} />}
                {isReminder && <EventIndicator color={'#7FFFD4'} />}
                {isTask && <EventIndicator color={'#7FFFD4'} />}
            </Stack>
        </Box>
    )
}

export default DayCell
