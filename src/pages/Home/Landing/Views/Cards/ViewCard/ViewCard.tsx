import { alpha, Box, Card, Typography } from '@mui/material'
import type { ComponentType } from 'react'

export type ViewCardProps = {
    icon: ComponentType<{ sx?: object }>
    title: string
}

const ViewCard = ({ icon, title }: ViewCardProps) => {
    const Icon = icon

    return (
        <Card
            elevation={0}
            sx={{
                minWidth: 180,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                border: '1px solid',
                borderColor: 'grey.200',
                p: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                    borderColor: 'primary.main',
                    transform: 'scale(1.02)',
                },
            }}
        >
            <Box
                sx={(theme) => ({
                    width: 64,
                    aspectRatio: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: `${alpha(theme.palette.secondary.main, 0.1)}`,
                    borderRadius: '50%',
                })}
            >
                <Icon
                    sx={{
                        color: 'primary.main',
                        fontSize: 32,
                    }}
                />
            </Box>
            <Typography
                sx={{
                    fontWeight: 600,
                }}
            >
                {title}
            </Typography>
        </Card>
    )
}

export default ViewCard
