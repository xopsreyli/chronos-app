import { Card, Typography } from '@mui/material'
import RoundIcon from '../../../../../../components/ui/common/RoundIcon/RoundIcon.tsx'
import type { SvgIconComponent } from '@mui/icons-material'

export type ViewCardProps = {
    Icon: SvgIconComponent
    title: string
}

const ViewCard = ({ Icon, title }: ViewCardProps) => {
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
            <RoundIcon Icon={Icon} color="#7FFFD4" iconSize={32} />
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
