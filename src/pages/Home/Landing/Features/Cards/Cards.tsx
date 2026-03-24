import EventIcon from '@mui/icons-material/Event'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import GroupIcon from '@mui/icons-material/Group'
import SyncIcon from '@mui/icons-material/Sync'
import SecurityIcon from '@mui/icons-material/Security'
import { Stack } from '@mui/material'
import FeatureCard, {
    type FeatureCardProps,
} from './FeatureCard/FeatureCard.tsx'

const CARDS_CONTENT: FeatureCardProps[] = [
    {
        color: '#7FFF94',
        Icon: EventIcon,
        label: 'Planning',
        title: 'Events & Arrangements',
        description:
            'Schedule meetings, appointments, and events with start and end times.',
    },
    {
        color: '#f59e0b',
        Icon: NotificationsActiveIcon,
        label: 'Alerts',
        title: 'Smart Reminders',
        description:
            'Set reminders for important deadlines and receive notifications.',
    },
    {
        color: '#7FFFD4',
        Icon: TaskAltIcon,
        label: 'Productivity',
        title: 'Task Management',
        description: 'Create and track daily tasks linked to your calendars.',
    },
    {
        color: '#8b5cf6',
        Icon: GroupIcon,
        label: 'Collaboration',
        title: 'Shared Calendars',
        description:
            'Collaborate with team members or family by sharing calendars.',
    },
    {
        color: '#3b82f6',
        Icon: SyncIcon,
        label: 'Sync',
        title: 'Real-time Sync',
        description:
            'Access your calendars from any device. Changes sync instantly.',
    },
    {
        color: '#ec4899',
        Icon: SecurityIcon,
        label: 'Security',
        title: 'Secure & Private',
        description: 'Your data is encrypted and protected with full control.',
    },
]

const Cards = () => {
    return (
        <Stack
            direction="row"
            sx={{
                justifyContent: 'center',
                flexWrap: 'wrap',
            }}
        >
            {CARDS_CONTENT.map((card) => (
                <FeatureCard
                    key={card.label}
                    color={card.color}
                    Icon={card.Icon}
                    label={card.label}
                    title={card.title}
                    description={card.description}
                />
            ))}
        </Stack>
    )
}

export default Cards
