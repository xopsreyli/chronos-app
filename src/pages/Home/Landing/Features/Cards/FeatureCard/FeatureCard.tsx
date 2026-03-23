import { alpha, Box, Card, Chip, Stack, Typography } from '@mui/material'
import type { ComponentType } from 'react'

export type FeatureCardProps = {
    color: string
    Icon: ComponentType<{ sx?: object }>
    label: string
    title: string
    description: string
}

const FeatureCard = ({
    color,
    Icon,
    label,
    title,
    description,
}: FeatureCardProps) => {
    return (
        <Card
            sx={{
                border: '1px solid',
                borderColor: 'grey.100',
                p: 3,
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                    border: '1px solid',
                    borderColor: 'primary.main',
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 32px rgba(16, 185, 129, 0.1)',
                },
            }}
        >
            <Stack
                direction="row"
                sx={{
                    justifyContent: 'space-between',
                    mb: 2,
                }}
            >
                <Box
                    sx={{
                        width: 48,
                        aspectRatio: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        backgroundColor: `${alpha(color, 0.1)}`,
                    }}
                >
                    <Icon sx={{ color }} />
                </Box>
                <Chip
                    label={label}
                    size="small"
                    sx={{
                        color,
                        backgroundColor: `${alpha(color, 0.1)}`,
                    }}
                />
            </Stack>
            <Box>
                <Typography
                    variant="h5"
                    sx={{
                        mb: 1,
                    }}
                >
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </Box>
        </Card>
    )
}

export default FeatureCard
