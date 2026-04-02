import { Box, Stack, Typography } from '@mui/material'

type Props = {
    date: number
}

const DayCell = ({ date }: Props) => {
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
                <Box
                    component={'span'}
                    sx={{
                        width: 6,
                        aspectRatio: 1,
                        borderRadius: '50%',
                        backgroundColor: '#7FFFD4',
                    }}
                ></Box>
                <Box
                    component={'span'}
                    sx={{
                        width: 6,
                        aspectRatio: 1,
                        borderRadius: '50%',
                        backgroundColor: '#7FFFD4',
                    }}
                ></Box>
                <Box
                    component={'span'}
                    sx={{
                        width: 6,
                        aspectRatio: 1,
                        borderRadius: '50%',
                        backgroundColor: '#7FFFD4',
                    }}
                ></Box>
            </Stack>
        </Box>
    )
}

export default DayCell
